
$(document).ready(function(){
    var tab = $('.tab');
    $('.content > div', tab).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    tab.on('click', '.tabs a', function(e){        
        e.preventDefault();
        var $tabId = $(this).attr('href');       
        $('.tabs a',tab).removeClass();
        $(this).addClass('active');         
        $('.content > div', tab).hide(0);
        $($tabId).show();
    });
});