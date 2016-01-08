$(document).ready(function(){
    $('#myForm input').focus(function(){
        var name = $(this).attr('name');

        $('label.fieldHint[for="'+name+'"]').fadeIn('slow');
    }).blur(function(){
        var name = $(this).attr('name');
        $('label.fieldHint[for="'+name+'"]').fadeOut('slow');
    });

    $("#myForm input").mousemove(function (eventObject) {
        var nameField = $(this).attr('name');
       
         $('label.fieldHint[for="'+nameField+'"]').fadeIn('slow');
    }).mouseout(function(){
        var nameField = $(this).attr('name');
        $('label.fieldHint[for="'+nameField+'"]').fadeOut('slow');
    });

$("#result").on('click', function(){   
        if ($('#myForm #firstName').val() == '')        
            $("label.fieldHint[for='firstName']").toggle();
       
        if ($('#myForm #lastname').val() == '')
            $("label.fieldHint[for='lastname']").toggle();
     
        if ($('#myForm #address').val() == '')
            $("label.fieldHint[for='address']").toggle();  
    });
});