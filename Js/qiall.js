﻿$(document).ready(function () {
    // quảng cáo mép trái phải
    $("#divAdLeft").sticky({ topSpacing: 40 });
    $("#divAdRight").sticky({ topSpacing: 40 });
});
$(document).scroll(function () {
    var n = $(window).scrollTop();
    if (n >= 210) {
        $(".pos-vi").css("display", "block");
    }
    else {
        $(".pos-vi").css("display", "none");
    }
})
$(document).ready(function () {
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


});
