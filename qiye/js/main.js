$(function(){
    $('.footer').load('footer.html');
});

//通用js主函数
function main(){
    //购物车下拉菜单
    $(".s_cart").mouseover(function(){
        $(".cart_dropdown").stop().slideDown(100);
    });
    $(".s_cart").mouseout(function(){
        $(".cart_dropdown").stop().slideUp(100);
    });

    //判断用户是否登录
    if(sessionStorage.uid){//用户已登录
        var text='<li class="top_user"><a href="">'+sessionStorage.uname+'</a></li>'
                +'<li class="top_quit"><a href="">退出</a></li>';
        $('.h_con>ul').append(text);
        $('.top_quit').click(function(){
            sessionStorage.clear();
        });
    }else{//用户未登录
        var text='<li><a href="login.html" class="h_login">登录</a></li>'
                +'<li><em>|</em></li>'
                +'<li><a href="register.html" class="h_register">注册</a></li>';
        $('.h_con>ul').append(text);
    }

}
//导航项高亮显示
function navText(text){
    $('.nav>ul>li').each(function(){
        var thisText=$(this).children("a").text()
        if(thisText==text){
            $(this).addClass('cur');
        }
    });
}
//时间格式转换函数
function dateFormat(time,sign){
    var t=new Date(time);
    var tf=function(i){return i>9?i:'0'+i};
    var year= t.getFullYear();
    var month= tf(t.getMonth()+1);
    var day= tf(t.getDate());
    return year+sign+month+sign+day;
}



