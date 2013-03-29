(function() {
    function loadCSS(link) {
        var css = document.createElement('link');
        css.setAttribute('rel', 'stylesheet');
        css.setAttribute('type', 'text/css');
        css.setAttribute('href', link);
        document.getElementsByTagName('head')[0].appendChild(css);
    }

    function loadJS(link) {
        var js = document.createElement('script');
        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', link);
        document.getElementsByTagName('head')[0].appendChild(js);

        js.onload = function() {
            jsLoad();
        }

    }

    var scripts = document.getElementsByTagName("script");
    var scriptURI = scripts[scripts.length-1].src;
    var url = scriptURI.split('?');

    loadCSS('http://maps.api.dev.kiev.test:3000/style.css');
    loadJS('http://maps.api.dev.kiev.test:3000/js?' + url[1]);

    window.L = {} || window.L;
    window.L.onLoad = function(callback) {
        jsLoad = callback;
    }


})();