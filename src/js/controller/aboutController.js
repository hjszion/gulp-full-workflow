requirejs.config({
    paths: {
        jquery: '../../lib/jQuery-3.4-1',
        api: '../service/api',
        tpl: '../tmpl/tpl',
        easyui:'../../lib/jquery-easyui-1.8.5/jquery.easyui.min'
    },
    shim:{
        'backbone':{
            deps:['jquery'],
        }
    }
});

requirejs(['jquery', 'api', 'tpl', 'easyui'], function ($, api, tpl) {
    $(function () {
        $('.header').html(tpl('header', { title: 'google.com' }));
        $('.footer').html(tpl('stu/footer', {}));
        $('.ctn').html(tpl('about_ctn', {about:'hello google!'}));
        $('#btnOpenDialog').on('click', function(){
            $('.dialog-box').dialog({
                title:"hello!",
                width:400,
                height:400
            });      
        })
    });
});

