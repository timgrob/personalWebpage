$(function () {
    $("a").click(function() {
        
        console.log("helo world");   

        var sectionName = $(this).attr('name');
        var sectionID = ("#" + [$(this).attr('name')]);
        console.log(sectionID);
        var targetOffsetY = $(sectionID).offset().top - 75;

        console.log(targetOffsetY);            

        var speed = 400;
        $("html, body").animate({scrollTop: targetOffsetY},speed);
        return false;    
    });
});