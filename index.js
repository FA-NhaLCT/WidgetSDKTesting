import { envWidget, initLineBase } from './composables/useWidget.js';
import { initMethods } from './composables/useInitFunctions.js'

const buttonInit = document.getElementById('initBtn')

buttonInit.addEventListener("click", () => {
    const env = document.getElementById('env')
    const envValue = env.options[env.selectedIndex].value;
    const orgId = document.getElementById('orgid').value
    const wsId = document.getElementById('wsid').value

    initLineBase(envWidget[envValue], orgId, wsId)

    setTimeout(initMethods, 2000)

})
