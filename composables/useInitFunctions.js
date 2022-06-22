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

const initGetMethods = () => {
    if ($linebase) {
        const inputContactDataAttr = document.getElementById('inputContactDataAttr')
        document.getElementById(`btnGetSingleContactDataAttrValue`).addEventListener("click", () => {
            const data = $linebase.get("contact", inputContactDataAttr.value)
            alert(data)
            setTimeout(() => { console.log({ data }) }, 1000)
        })
        document.getElementById(`btnGetAllContactDataAttrValue`).addEventListener("click", () => {
            const data = $linebase.get("contact", null)
            alert(data)
            setTimeout(() => { console.log({ data }) }, 1000)
        })
    }
}

const initMethods = () => {
    initStateMethods()
    initActionMethods()
    initOnMethods()
    initGetMethods()

    document.getElementsByClassName('action-container')[0].style.display = "block";
    alert('Methods đã init')
    console.clear()
}

export {
    initMethods
}