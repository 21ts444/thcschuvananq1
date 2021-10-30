﻿
    function startTime() {
        var today = new Date();

        var day = today.getDay();
        var date = today.getDate();
        var month = today.getMonth();
        var year = today.getUTCFullYear();

        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
        var thu = "";
        if (day == 0) {
        thu = "Chủ nhật, ";
        }
        else if (day == 1) {
        thu = "Thứ hai, ";
        }
        else if (day == 2) {
        thu = "Thứ ba, ";
        }
        else if (day == 3) {
        thu = "Thứ tư, ";
        }
        else if (day == 4) {
        thu = "Thứ năm, ";
        }
        else if (day == 5) {
        thu = "Thứ sáu, ";
        }
        else if (day == 6) {
        thu = "Thứ bảy, ";
        }

        document.getElementById('txtTime').innerHTML =thu +  "Ngày " + date + "/" + (month +1) + "/" + year + " " +  h + ":" + m + ":" + s;
        t = setTimeout(function () {startTime()}, 500);
    }

    function checkTime(i) {
        if (i < 10) {
        i = "0" + i;
        }
        return i;
}
function movetop() {

    $("html, body").animate({ scrollTop: 0 }, "slow");
}



