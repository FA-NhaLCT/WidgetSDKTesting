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

const initGetMethods = async () => {
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
        const inputContactDataAttrCustom = document.getElementById('inputContactDataAttrCustom')
        document.getElementById(`btnGetSingleContactDataAttrCustomValue`).addEventListener("click", () => {
            console.log('đây nè',inputContactDataAttrCustom.value)
            $linebase.get("contact", inputContactDataAttrCustom.value, "custom").then(data => { console.log("Đây nè", data) })
        })
        document.getElementById(`btnGetAllContactDataAttrCustomValue`).addEventListener("click", () => {
            console.log('btnGetAllContactDataAttrCustomValue click')
            $linebase.get("contact", null, "custom").then(data => { console.log("Đây nè", data) })
            // alert(data)
            // setTimeout(() => { console.log({ data }) }, 1000)
        })
    }
}

const initSetMethods = async () => {
    if ($linebase) {
        const inputTagData = document.getElementById('inputTagData')
        document.getElementById(`btnSetTag`).addEventListener("click", () => {
            const dataTemp = inputTagData.value;
            console.log(dataTemp)
            console.log(dataTemp.split(","))
            $linebase.set("message", "tag", dataTemp.split(",")).then(data => { console.log('hello'); console.log({ data }) })
            // alert(data)
            // setTimeout(() => { console.log({ data }) }, 1000)
        })
        const inputSetContactDataAttrCustom = document.getElementById('inputSetContactDataAttrCustom')
        document.getElementById(`btnSetContactCustom`).addEventListener("click", async () => {
            const valueType = document.getElementById('valueTypeSet')
            const valueTypeSetData = valueType.options[valueType.selectedIndex].value;
            let dataTemp = inputSetContactDataAttrCustom.value;
            console.log(dataTemp)
            console.log(dataTemp.split("---"))
            // if (!dataTemp.split("-").length) {
            //     dataTemp = inputSetContactDataAttrCustom.value.split(',')
            //     $linebase.set("contact", [dataTemp], valueTypeSetData).then(data => {
            //         console.log('hello');
            //         console.log({ data })
            //     })
            // } else {
            let data = dataTemp.split("--")
            data = data.map(item => {
                console.log({ item })
                return item.split(",")
            })
            console.log({data,valueTypeSetData})
            console.log(`$linebase.set("contact", ${data}, ${valueTypeSetData})`)
            const data1 = await $linebase.set("contact", data, valueTypeSetData)
            console.log('nè',{data1})   
            // }
            // alert(data)
            // setTimeout(() => { console.log({ data }) }, 1000)
        })

    }
}

const initMethods = () => {
    initStateMethods()
    initActionMethods()
    initOnMethods()
    initGetMethods()
    initSetMethods()

    document.getElementsByClassName('action-container')[0].style.display = "block";
    alert('Methods đã init')
    console.clear()
}

export {
    initMethods
}