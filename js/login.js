$(function(){
var password = $("input").eq(1);

//添加密码框的点击事件
password.on("click",function(){
    if(password.val()=="Password"){
        password.val("");
        password.attr("type","Password");
    }
}).on("blur",function(){
    if(password.val()==""){
        password.val("Password");
        password.attr("type","text");
    }
})
//添加用户名框的点击事件
$("input").eq(0).on("click",function(){
    if($(this).val()=="Username")
        $(this).val("");
}).on("blur",function(){
    if($(this).val()==""){
        $(this).val("Username");
    }
})

//取消页面的触摸滑动事件
$("html").on("touchmove",function(event){
    event.preventDefault();
})


})