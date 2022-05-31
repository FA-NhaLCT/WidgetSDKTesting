
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
    console.log({envValue,orgId,wsId})
    initLineBase(envWidget[envValue],orgId,wsId)
})