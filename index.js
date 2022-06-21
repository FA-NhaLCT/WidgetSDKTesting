function initLineBase(env, orgId, wsId) {
    window.$linebase = [];
    window.LINEBASE_ORG_ID = orgId;
    window.LINEBASE_WORKSPACE_ID = wsId;
    (function () {
        d = document; s = d.createElement('script');
        s.src = env;
        s.async = 1;
        d.getElementsByTagName('head')[0].appendChild(s);
    })();
    document.getElementsByClassName('initLineBase')[0].style.display = "none";
}

const buttonInit = document.getElementById('initBtn')

const envWidget = {
    dev: 'https://lb-cw-dev.fireapps.tech/main.js',
    testing: 'https://lb-cw-testing.fireapps.tech/main.js',
    staging: 'https://lb-cw-stag.fireapps.tech/main.js',
    prod: 'https://cw.linebase.io/main.js'

}

buttonInit.addEventListener("click", () => {
    const env = document.getElementById('env')
    const envValue = env.options[env.selectedIndex].value;
    const orgId = document.getElementById('orgid').value
    const wsId = document.getElementById('wsid').value

    initLineBase(envWidget[envValue], orgId, wsId)

    setTimeout(initMethods, 5000)

})

const isOpenedBtn = document.getElementById('isOpenedBtn')
const isClosedBtn = document.getElementById('isClosedBtn')
const isVisibleBtn = document.getElementById('isVisibleBtn')
const isHiddenBtn = document.getElementById('isHiddenBtn')


const initStateMethods = () => {
    const stateArray = ['Opened', 'Closed', 'Visible', 'Hidden']

    const linebase = $linebase;
    stateArray.forEach(item => {
        document.getElementById(`is${item}Btn`).addEventListener("click", () => {
            const data = linebase.is('widget', item.toLowerCase())
            alert(data)
        })
    })
}

const initActionMethods = () => {
    const actionArray = ['Open', 'Close', 'Show', 'Toggle', 'Hide', 'Send']

    const linebase = $linebase;
    actionArray.forEach(item => {
        document.getElementById(`do${item}Btn`).addEventListener("click", () => {
            if (item === 'Send') {
                const value = document.getElementById(`doSendValue`).value
                linebase.do("message", "send", ["text", value])
            }
            else {
                linebase.do('chat', item.toLowerCase())
            }
        })
    })
}

const initOnMethods = () => {
    if ($linebase) {
        const openedFunc = () => {
            console.log('$linebase.on("opened") opened')
        }
        const closedFunc = () => {
            console.log('$linebase.on("closed") closed')
        }
        document.getElementById(`isOnOpenedBtn`).addEventListener("click", () => {
            $linebase.on("opened", openedFunc)

        })
        document.getElementById(`isOffOpenedBtn`).addEventListener("click", () => {
            $linebase.off("opened", openedFunc)
        })
        document.getElementById(`isOnCloseddBtn`).addEventListener("click", () => {
            $linebase.on("closed", closedFunc)
        })
        document.getElementById(`isOffCloseddBtn`).addEventListener("click", () => {
            $linebase.off("closed", closedFunc)
        })
    }
}

const initMethods = () => {
    initStateMethods()
    initActionMethods()
    initOnMethods()

    document.getElementsByClassName('action-container')[0].style.display = "block";
    alert('Methods đã init')
    console.clear()
}

