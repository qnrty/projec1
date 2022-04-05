$(function(){
    // menu
    $('.m_nav_btn').click(function () {
        $(this).toggleClass('on');
        $('.m_nav').toggleClass('on');
    })
    //mouse
    let mouseCursor = document.querySelector(".cursor_e");
    let imgLink = document.querySelectorAll(".cur_e")
    window.addEventListener("scroll", cursor);
    window.addEventListener("mousemove", cursor);
    function cursor(e) {
        mouseCursor.style.left = e.pageX + "px";
        mouseCursor.style.top = e.pageY + "px";
    }
    imgLink.forEach((link) => {
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("cur_event");
            mouseCursor.style.zIndex = "1000";
        });
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("cur_event");
            mouseCursor.style.zIndex = "1000";
        });
    });
    
    // mouse active
    const blend = $(".blend");
    blend.each(function(){
        $(this).hover(function(){
            mouseCursor.classList.add("cur_blend");
            mouseCursor.style.zIndex = "1000";
        },function(){
            mouseCursor.classList.remove("cur_blend");
        })
    })

    // section active
    const sec = $("section");
    $(window).scroll(function(){
        let sct = $(this).scrollTop();
        
        sec.each(function(index){
            if($(window).width()>1023){
                if(sct > $(this).offset().top - 350){
                    $(this).addClass("active");}
                }else if($(window).width()>= 280 ){
                if(sct > $(this).offset().top - 700){
                    $(this).addClass("active");}
                }
        })
        // section1 element active
        const trigger = $(".trigger");
        trigger.each(function(){
            let element = $(this).offset().top / sct;
            
            console.log(element);
            if($(window).width()>1023){
                if(element < 1.5) {
                    $(this).addClass("active");
                }
            }else if($(window).width()>=280){
                if(element < 2.5) {
                    $(this).addClass("active");
                }
            }
        });
    });
    
    // top Btn
    $('.top_btn').click(function(){
        $('html,body').animate({
            scrollTop:0
        },800)
    })
})