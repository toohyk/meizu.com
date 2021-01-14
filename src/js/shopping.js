// import './library/jquery.js';
$(function(){
    
    $('._table').on('change',function(ev){
        // console.log(ev.target);
        let x = ev.target;
        let z = $('.cart-product-price-1');
        let a = $(ev.target).attr("data-num");

        // console.log(x.val())
        // console.log(z)
        // console.log($(z[a]).text());
        // console.log($(x).val())
        // // console.log(a)

        // 单个商品总价
        let z1 = $('.cart-product-price');
        // console.log($(z[0]).text())
        // console.log($(z[1]).text())


        // 单价
        let aa = $(z[(a*1)]).text()*1;
        // console.log(aa);

        let cc = aa*($(x).val());
        // console.log(cc)
        // console.log($('#_num').val());
        // console.log($('.cart-product-price-1').text());

        $($(z1[a])).text(cc)
    });


    
});


(function(){
    // console.log($('.mz-checkbox'));
    let other=$('.mz-checkbox').not($('.check-all'));
   
        $('.check-all').on('click',function(){

        $('.mz-checkbox').prop('checked', $(this).prop('checked'));
            
    })
    
    other.on('click',function(){   

        let isAllCheck = Array.from(other).every(el=> $(el).prop('checked'));

        isAllCheck?$('.check-all').prop('checked',true):$('.check-all').prop('checked',false)
    })

})();
