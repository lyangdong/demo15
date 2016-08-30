
$(function (){
    var loading = false;
    $(window).scroll(function(){

        var i = $('.like').find('li').length;
        if($('.like').offset().top <= $(window).scrollTop()+$(window).height() -i*$('.like').find('li').height()){
            if(!loading){
                loading = true;
                setTimeout(function(){
                    myFunc(i);
                    loading = false;
                },1000)
            }
         }
    });
    $('button').click(function(){
        var i = $('.like').find('li').length;
        myFunc(i)
    })
});


function myFunc(i){
    var imgJson ={
        "img":[
            {"src":"images/banner1.jpg","title":"这是图片1"},
            {"src":"images/banner2.jpg","title":"这是图片2"},
            {"src":"images/banner3.jpg","title":"这是图片3"},
            {"src":"images/banner4.jpg","title":"这是图片4"},
            {"src":"images/banner5.jpg","title":"这是图片5"},
        ]
    };
    var html = '';
    html = '<li><img src=" '+imgJson.img[i].src+ '" alt=""/></li>';
    $('.like').find('ul').append(html)
}