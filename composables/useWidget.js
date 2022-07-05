function initLineBase(env, orgId, wsId) {
    window.$linebase = [];
    window.LINEBASE_ORG_ID = orgId;
    window.LINEBASE_WORKSPACE_ID = wsId;
    (function () {
        var d = document;
        var s = document.createElement('script');
        s.src = env;
        s.async = 1;
        d.getElementsByTagName('head')[0].appendChild(s);
    })();
    document.getElementsByClassName('initLineBase')[0].style.display = "none";
}


const envWidget = {
    dev: 'https://lb-cw-dev.fireapps.tech/main.js',
    testing: 'https://lb-cw-testing.fireapps.tech/main.js',
    staging: 'https://lb-cw-stag.fireapps.tech/main.js',
    prod: 'https://cw.linebase.io/main.js'

}



export {
    initLineBase,
    envWidget
}

