requirejs.config({
    baseUrl: 'lib',
    paths: {
        js: '../js',
        jquery: 'jquery/dist/jquery.min',
        bootstrap: 'bootstrap/dist/js/bootstrap.min',
        animatedHeader: '../js/animatedHeader'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
});