// import './library/jquery.js';

$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function (res) {
        // console.log(res)
        let temp = '';
        res.forEach((elm,i)=>{
            let picture = JSON.parse(elm.picture);
            temp += `<li>
            <a href="./details.html?id=${elm.id}">
                <img class="lazy" data-original="${picture[0].src}" alt="">
                <span class="goods-name">${elm.title}</span>
                <span class="goods-desc">${elm.discount}</span>
                <span class="goods-price"><i>￥</i>${elm.price}</span>
                
            </a>
        </li>`;
        });
        $('.con-ul').append(temp);
    }
});

// 切换导航栏颜色
$(function(){
    let timer = setInterval(function(){
        let _js = $('.active').attr('data-slide-to');
        if(_js=='2' || _js == '0' || _js == '6'){
            $('.meizu-header-link>li>a').addClass("witchh");
        }else{
            $('.meizu-header-link>li>a').removeClass("witchh");
        }
    },100);
});