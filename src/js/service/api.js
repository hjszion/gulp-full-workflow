requirejs.config({
    paths: {
        jquery: '../../lib/jQuery-3.4-1'
    }
});

//用requirejs定义了一个模块 这里依赖了jQuery
define(['jquery'], function($){
    return {
        getUserList:function(params, callback){
            $.ajax;({
                url:'api/userlist',
                type:'GET',
                data:params,
                success:callback
            });
        }
    };
});



