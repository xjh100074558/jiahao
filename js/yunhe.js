$('#list li').on('tap',function(){
    $(this).addClass('cur').find('.tips').show();
    $(this).siblings().removeClass('cur').find('.tips').hide();
})