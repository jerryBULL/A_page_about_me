$(document).ready(function() {
    let page=0;
    let moveing=0;
    const src=["home","about","skill","personal_project","contact"];
    //偵測滑鼠滾輪
    $( window ).mousewheel(function(e) {
        $("html,body").stop();
        if(moveing===0)
        {   
            moveing=1; 
            if(e.deltaY>0)
            {   
                if(page<4)
                {
                    page++;
                }
            }
            else
            {
                if(page>0)
                {
                    page--;
                }
            }
        }
        $("html,body").animate({"scrollTop":$("#"+src[page]).offset().top},function(){moveing=0;});
    });
    //偵測使用手機手指滑動動作
    $("#home,#about,#skill,#personal_project,#contact").swipe({
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            if(moveing===0)
            {   
                moveing=1; 
                if(direction === "up")
                {   
                    if(page<4)
                    {
                        page++;
                    }
                }
                else if(direction === "down")
                {
                    if(page>0)
                    {
                        page--;
                    }
                }
            }
            $("html,body").animate({"scrollTop":$("#"+src[page]).offset().top},function(){moveing=0;});
        },
        threshold:100,
        fingers:'all'
      });

    //偵測網頁大小變化
    $(window).resize(function() {
        moveing=1;
        $("html,body").scrollTop($("#"+src[page]).offset().top,function(){moveing=0;});
    });
    //點擊導覽列
    $("#p0,#p1,#p2,#p3,#p4").click(function () {
        moveing=1; 
        let id=$(this).attr('id');
        $("html,body").animate({"scrollTop":$("#"+src[id[1]]).offset().top},function(){page=id[1];moveing=0;});
    });   
})
