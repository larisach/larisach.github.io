// <!--  карусель -->
$(document).ready(function(){
  $('.jcarousel').jcarousel({ 
  });  
  $('.jcarousel').jcarousel({
    animation: {
      duration: 300,
      easing:   'linear',
      complete: function() {
      }
    }
  });
  $('.jcarousel-prev').jcarouselControl({ 
    target: '-=1'
  });
  $('.jcarousel-next').jcarouselControl({  
    target: '+=1'
  });
});

// 
// <!-- select -->
$(document).ready(function(){
   $('.lineForm>select.styled').customSelect();
});

// 
// <!-- чекбокс с помощью jquery -->
$(document).ready(function(){
  $(function() {
  $('span').bind('change', function (v) {
    changeCheck($(this));
  });
}); 
$(".niceCheck, .niceCheckDisabled").mousedown(function(){   
     changeCheck($(this));
});
$(".niceCheck, .niceCheckDisabled").each(function(){
    changeCheckStart($(this));
 });
function changeCheck(el){
    var el = el,
    input = el.find("input").eq(0);
    if(!input.attr("checked")) {
        el.css("background-position","0 -17px");       
        input.attr("checked", true)} else {
        el.css("background-position","0 0");   
        input.attr("checked", false)        
    }
     return true;
 }
function changeCheckStart(el){
    var el = el,
    input = el.find("input").eq(0);
    if(input.attr("checked")) {
        el.css("background-position","0 -17px");
    }
    return true;
}

//
// <!-- Анимированное меню -->
$(document).ready(function() {
    $('.triangleDown').hover(
        function(){
            $(this).children('.submenu1').slideDown(250);
             jQuery('.submenu1').animate({
              backgroundColor:"#03C",
            }, 200 );
        },
        function(){
            $(this).children('.submenu1').slideUp(250);
             jQuery('.submenu1').animate({
              backgroundColor:" #3b7bdb",
            }, 200 );
        }
    );
    $('.triangleRight').hover(
        function(){
            $(this).children('.submenu2').slideDown(250);
             jQuery('.submenu2').animate({
              backgroundColor:"#03C",
            }, 200 );
        },
        function(){
            $(this).children('.submenu2').slideUp(250);
            jQuery('.submenu2').animate({
              backgroundColor:" #3b7bdb",
            }, 200 );
        }
    );
});
}); 