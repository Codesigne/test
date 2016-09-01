 var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);
    var trm = 9;
    $("#accordion-1 li div a").each(function() {
        console.log("40");
        var href = $(this).attr('href');
        console.log(" href :" + href);
        console.log("   " + path.substring(trm, path.length));
        if (path.substring(trm, path.length) === href) {
            $(this).parentsUntil('#accordion-1').addClass('active');
            console.log("MATCH FOUND");
        }
        console.log("auto highlight active link  sucsses");
        /*=====  End of auto highlight active link  ======*/
        $('#accordion-1').children("li").on('click', function(event) {
            // event.preventDefault();
            $(this).children('div').addClass('show');
            console.log(this);
            // $(this).children('li').on('click', , function(event) {
            //     event.preventDefault();
            //     /* Act on the event */
            // });
            $(this).children('li').unbind('click');
        });
        $(".log").text("Triggered ajaxSuccess handler.");
       
    });
