import { envWidget, initLineBase } from './composables/useWidget.js';
import { initMethods } from './composables/useInitFunctions.js'

var envValue = env.options[env.selectedIndex].value;
const buttonInit = document.getElementById('initBtn')
buttonInit.addEventListener("click", () => {
    const env = document.getElementById('env')
    const orgId = document.getElementById('orgid').value
    const wsId = document.getElementById('wsid').value

    initLineBase(envWidget[envValue], orgId, wsId)

    setTimeout(initMethods(envValue), 2000)
    
})

// initLineBase(envWidget[envValue])
// setTimeout(initMethods(envValue), 2000)