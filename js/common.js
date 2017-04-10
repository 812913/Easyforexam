/**
 * Created by person on 2017/4/5.
 */
    $(function(){
        //nav
        $('nav>ul:nth-child(4)').css('display','none');
        $('nav>ul:nth-child(3)>li:last-child').click(function(){
            $('nav>ul:nth-child(4)').slideToggle();
        });
    });