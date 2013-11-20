// BasicActions.js

$(document).ready(function () {
	$(".mypic").hover(
		function(){
			$(".mymsg").css("visibility","visible");
			},
		function(){
			$(".mymsg").css("visibility","hidden");
			})
		.mousemove(function(e){
			$(".mymsg").css("top",  (e.clientY + 14).toString() + "px");
			$(".mymsg").css("left", (e.clientX + 12).toString() + "px");
	});
	$("#esend").click(function () {
	    var mlink = "mailto:wgu-site-comment@baryballowbarns.com"
                    + "?subject=" + escape("Comment from " + $("#ename").val())
                    + "&body=" + escape($("#emsg").val())
	    ;
	    location.href = mlink;
	    $("#ename").val("");
	    $("#emsg").val("");
	    return false;
	});
	$("img[id^='navbtn']").click(function (e) {
	    switch ($(this).attr("id")) {
	        case "navbtn1":
	            window.location = "index.html";
	            break;
	        case "navbtn2":
	            window.location = "history.html";
	            break;
	        case "navbtn3":
	            window.location = "work.html";
	            break;
	        case "navbtn4":
	            window.location = "play.html";
	            break;
	        case "navbtn5":
	            window.location = "goals.html";
	            break;
	    }
	});
	$("img[id^='navbtn']").hover(
        function () {
            switch ($(this).attr("id")) {
                case "navbtn1":
                    $(this).attr("src", "button_home_hover.jpg");
                    break;
                case "navbtn2":
                    $(this).attr("src", "button_history_hover.jpg");
                    break;
                case "navbtn3":
                    $(this).attr("src", "button_work_hover.jpg");
                    break;
                case "navbtn4":
                    $(this).attr("src", "button_play_hover.jpg");
                    break;
                case "navbtn5":
                    $(this).attr("src", "button_goals_hover.jpg");
                    break;
            }
        },
        function () {
            switch ($(this).attr("id")) {
                case "navbtn1":
                    $(this).attr("src", "button_home.jpg");
                    break;
                case "navbtn2":
                    $(this).attr("src", "button_history.jpg");
                    break;
                case "navbtn3":
                    $(this).attr("src", "button_work.jpg");
                    break;
                case "navbtn4":
                    $(this).attr("src", "button_play.jpg");
                    break;
                case "navbtn5":
                    $(this).attr("src", "button_goals.jpg");
                    break;
            }
        }
    );
});