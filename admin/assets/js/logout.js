/**
 * Created by pc on 2017/4/18.
 */
//退出逻辑
$(".logout").click(function () {
	console.log("退出登陆");
    $.ajax({
        type : "get",
        url : "/test/manage/loginOut",
        success : function(result) {
            if(result.status){
                delCookie("token");
                window.location.href = "login.html";
            }
        }
    });
});
