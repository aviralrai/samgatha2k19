$(document).ready(menu);

function menu(){
    $('#co1').on('click', function () {
        $('#overlay').toggleClass('active');
        $('#close').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=1;
        list4[0][1]=1;
    });
    $('#close').on('click', function () {
        $('#overlay').toggleClass('active');
        $('#close').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=0;
        list4[0][1]=0;
    });
    $('#co2').on('click', function () {
        $('#overlay1').toggleClass('active');
        $('#close1').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=1;
        list4[1][1]=1;
    });
    $('#close1').on('click', function () {
        $('#overlay1').toggleClass('active');
        $('#close1').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=0;
        list4[1][1]=0;
    });
    $('#co3').on('click', function () {
        $('#overlay2').toggleClass('active');
        $('#close2').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=1;
        list4[2][1]=1;
    });
    $('#close2').on('click', function () {
        $('#overlay2').toggleClass('active');
        $('#close2').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=0;
        list4[2][1]=0;
    });
    $('#eo1').on('click', function () {
        $('#overlay3').toggleClass('active');
        $('#close3').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=1;
        list4[3][1]=1;
    });
    $('#close3').on('click', function () {
        $('#overlay3').toggleClass('active');
        $('#close3').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=0;
        list4[3][1]=0;
    });
    $('#eo2').on('click', function () {
        $('#overlay4').toggleClass('active');
        $('#close4').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=1;
        list4[4][1]=1;
    });
    $('#close4').on('click', function () {
        $('#overlay4').toggleClass('active');
        $('#close4').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=0;
        list4[4][1]=0;
    });
    $('#ro1').on('click', function () {
        $('#overlay5').toggleClass('active');
        $('#close5').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=1;
        list4[5][1]=1;
    });
    $('#close5').on('click', function () {
        $('#overlay5').toggleClass('active');
        $('#close5').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=0;
        list4[5][1]=0;
    });
    $('#ro2').on('click', function () {
        $('#overlay6').toggleClass('active');
        $('#close6').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=1;
        list4[6][1]=1;
    });
    $('#close6').on('click', function () {
        $('#overlay6').toggleClass('active');
        $('#close6').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        // $('#sideNav').toggleClass('active');
        clickedModal=0;
        list4[6][1]=0;
    });

    $(document).keydown(function(keyPressed) {
        for(let i=0;i<list4.length;i++)
        {
            if (keyPressed.keyCode == 27 && clickedModal==1 && list4[i][1]==1) {
                $(list4[i][2]).toggleClass('active');
                $(list4[i][3]).toggleClass('active');
                $('.nav-item').toggleClass('active');
                $('#social').toggleClass('active');
                // $('#sideNav').toggleClass('active');
                clickedModal=0;
                list4[i][1]=0;
            }
        }
    });
}