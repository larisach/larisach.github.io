(function($) {
  $.fn.MyCarouselPlugin = function(options) {
    var defaults = {
      quantity: 3,
      animationTime: 500
    };

    var settings = $.extend(defaults, options);
    var $left = $('.jcarousel-prev');
    var $right = $('.jcarousel-next');
    var $elementsList = $('.carousel-list'); 
    var $pixelsOffset = 225;
    var $currentLeftValue = 0;
    var $elementsCount = $elementsList.find('li').length;
    var $minimumOffset = -(($elementsCount - settings.quantity) * $pixelsOffset);
    var $maximumOffset = 0;

    function ClickLeft() {
        if($currentLeftValue != $maximumOffset) {
            $currentLeftValue += 225;
            $elementsList.animate({ left : $currentLeftValue + "px"}, settings.animationTime);
        }
    } 

    function ClickRight() {
        if($currentLeftValue !=$minimumOffset) {
            $currentLeftValue -= 225;
            $elementsList.animate({ left : $currentLeftValue + "px"}, settings.animationTime);
        }
    }
    $left.on('click', ClickLeft);
    $right.on('click', ClickRight);
    return this;
}; 
})(jQuery);



// $(document).ready(function() {
//     var left = $('.jcarousel-prev');
//     var right = $('.jcarousel-next');
//     var elementsList = $('.carousel-list'); 
//     var pixelsOffset = 225;
//     var currentLeftValue = 0;
//     var elementsCount = elementsList.find('li').length;
//     var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
//     var maximumOffset = 0;

//     left.click(function() {
//       if(currentLeftValue != maximumOffset){       
//       currentLeftValue += 225;
//       elementsList.animate({ left : currentLeftValue + "px"}, 1000);
//       }     
//     });
 
//     right.click(function() {
//       if(currentLeftValue !=minimumOffset){
//       currentLeftValue -= 225;
//       elementsList.animate({ left : currentLeftValue + "px"}, 1000);
//     }
//     }); 
// });