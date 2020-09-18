$(document).ready(function () {

    $(".tab-content div:first").show();

    // console.log("test");

    // first way - index

    //$(".tab li").click(function () {
    //
    //    let indis = $(this).index();

    //    $(".tab-content div").hide();
    //    $(".tab-content div:eq(" + indis +")").addClass("active");

    //    $(".tab li").removeClass("active");
    //    $(".tab li:eq(" + indis +")").addClass("active");
    //});


    $(".tab li").click(function () {

        // second way - attribute

        let tab_content = $(this).attr("rel");
        let indis = $(this).index();

        $(".tab-content div").hide();
        $(tab_content).fadeIn();

        $(".tab li").removeClass("active");
        $(".tab li:eq(" + indis + ")").addClass("active");
    });

});