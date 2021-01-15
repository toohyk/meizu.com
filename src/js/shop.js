import './library/jquery.js';
import { cookie } from './library/cookie.js';

let shop = cookie.get('shop');
if(shop){
    shop = JSON.parse(shop);

    let idList = shop.map(elm => elm.id).join();
    $.ajax({
        type: "get",
        url: "../../interface/getItems.php",
        data: {
            idList
        },
        dataType: "json",
        success: function (res) {
            let temp = '';
            let nnum = 0;
            res.forEach((elm,i) => {
                let picture = JSON.parse(elm.picture);
                let arr = shop.filter(val => val.id == elm.id);
                // console.log(arr)
                
                temp += `
                <table class="cart-merchant-body">
                <tr class="cart-product ">
                    <td class="cart-col-select">
                        <input type="checkbox" class="mz-checkbox">
                        <a href="#"><img src="${picture[0].src}" alt=""></a>
                        <a href="#" class="cart-product-info">
                            <p class="cart-product-item-name">${elm.title}</p>
                            <p class="cart-product-desc">十单元 8699起</p>
                        </a>
                    </td>
                    <td class="cart-col-price">
                        <span class="cart-product-price-1" data-num="${nnum}">${elm.price}</span>
                    </td>
                    <td class="cart-col-number">
                        <div class="mz-adder">
                            
                            <div class="mz-adder-num">
                                <input type="number" value="${arr[0].num}" id="_num" min="1" data-num="${nnum}">
                            </div>
                            
                        </div>
                    </td>
                    <td class="cart-col-total" style="color: red;text-align: center;">
                        <span class="cart-product-price" data-num1="${nnum}">${(elm.price*arr[0].num)}</span>
                    </td>
                    <td class="cart-col-ctrl"><a style="color: #8c8c8c;" href="#" class="del" data-id="${elm.id}">删除</a></td>
                </tr>
            </table>
                `
                nnum++
                ;
            });
            $('._table').append(temp).find('.del').on('click',function(){
                let shop2 = shop.filter(el=>el.id != $(this).attr('data-id'));
                cookie.set('shop',JSON.stringify(shop2),1);
                location.reload();
            });
            
        }
    });
}