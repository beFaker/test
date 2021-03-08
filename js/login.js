$(function(){
var password = $("input").eq(1);
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
$("input").eq(0).on("click",function(){
    if($(this).val()=="Username")
        $(this).val("");
}).on("blur",function(){
    if($(this).val()==""){
        $(this).val("Username");
    }
})



})