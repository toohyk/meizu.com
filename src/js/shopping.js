// import './library/jquery.js';
$(function(){
    
    $('._table').on('change',function(ev){
        // console.log(ev.target);
        let x = ev.target;
        let z = $('.cart-product-price-1');
        let a = $(ev.target).attr("data-num");


        // let _input = $('.mz-checkbox');
        // console.log(_input[1]);


        // 单个商品总价
        let z1 = $('.cart-product-price');

        // 单价
        let aa = $(z[(a*1)]).text()*1;

        let cc = aa*($(x).val());

        $($(z1[a])).text(cc);
        
    });
    $('._table').on('click','.mz-checkbox',function(ev){
        let _input = $('.mz-checkbox');
        console.log(_input)
        let a1 = $(ev.target).attr("data-input");
        // console.log(a1)

        //获得当前点击元素的总价
        let z_1 = $('.cart-product-price');
        // console.log($(z_1[0]).text()*1);
        let zongjia = $(z_1[(a1)*1]).text()*1

        //获得当前点击元素单价
        let = _danjia = $('.cart-product-price-1');
        

        //判断是否选中
        let _panduan = $(this).prop('checked');
        // console.log(_panduan);
                
        if(_panduan){
            $('.cart-footer-total').text(zongjia);
        }else{
            $('.cart-footer-total').text(0)
        }
    })

    
});


$(function(){
    // console.log($('.mz-checkbox'));
    let other=$('.mz-checkbox').not($('.check-all'));
   
        $('.check-all').on('click',function(){

        $('.mz-checkbox').prop('checked', $(this).prop('checked'));
            
        console.log(1)
    })
    
    other.on('click',function(){   

        let isAllCheck = Array.from(other).every(el=> $(el).prop('checked'));

        isAllCheck?$('.check-all').prop('checked',true):$('.check-all').prop('checked',false);
    })

});
