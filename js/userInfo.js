$(function(){
/*审核页面跳转*/ 
 $("#tab1").click(function(){
 	
 	$(this).parent().parent().find("#tab-item1").show();
 	$(this).parent().parent().find("#tab-item2").hide();
 	$(this).parent().parent().find("#tab-item3").hide();
 });
  $("#tab2").click(function(){
 	
 	$(this).parent().parent().find("#tab-item1").hide();
 	$(this).parent().parent().find("#tab-item2").show();
 	$(this).parent().parent().find("#tab-item3").hide();
 });
  $("#tab3").click(function(){
 	
 	$(this).parent().parent().find("#tab-item1").hide();
 	$(this).parent().parent().find("#tab-item2").hide();
 	$(this).parent().parent().find("#tab-item3").show();
 });

  /*上传游戏*/
    $("#uploadbtn").click(function () {
    	$("#item-1").removeClass('hide').addClass('display');
        $("#item-2,#item-3,#item-4").addClass('hide');


    });
    $("#downloadbtn").click(function () {

        $("#item-2").removeClass('hide');
        $("#item-1,#item-3,#item-4").addClass('hide');

    });
    /*评论*/

    $("#retingbtn").click(function () {

        $("#item-3").removeClass('hide');
       $("#item-2,#item-1,#item-4").addClass('hide');
    });
    /*审核*/
    $("#shenhebtn").click(function () {

        $("#item-4").removeClass('hide');
       $("#item-2,#item-3,#item-1").addClass('hide');
    });


/*弹出上传游戏**/
$("#upbtn").click(function () {
	$("#dialog").fadeIn();
});





 
 
 
});