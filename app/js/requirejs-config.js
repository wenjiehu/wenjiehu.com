requirejs.config({
    baseUrl: 'lib',
    paths: {
        js: '../js',
        jquery: 'jquery/dist/jquery.min',
        bootstrap: 'bootstrap/dist/js/bootstrap.min',
        classie: '../js/classie',
        animatedHeader: '../js/cbpAnimatedHeader'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
});