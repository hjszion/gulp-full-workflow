requirejs.config({
    paths: {
        jquery: '../../lib/jQuery-3.4-1',
        api:'../service/api',
        tpl:'../tmpl/tpl'
    }
});

requirejs(['jquery', 'api', 'tpl'], function($, api, tpl) {
    $(function(){
        $('.box').click(function(){
            alert(2333);
        });
    }); 

    $('.header').html(tpl('header', {title:'google.com'}));
    $('.footer').html(tpl('stu/footer',{}));

    // 控制器层调用服务器层获取数据
    api.getUserList(null, function(data){
        // console.log(data);   //配合模版引擎(art-template) + data => html标签
        let html = tpl('userlist', {userlist:data});
        $('.userlist').html(html);
    });

    // console.log(tpl('header', {title:'google.com'}));
    // console.log(tpl('stu/footer'));
});



