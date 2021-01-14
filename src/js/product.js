import './library/jquery.js';
import { cookie } from './library/cookie.js';

let id = location.search.split('=')[1];
// console.log(id);
$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id:id
    },
    dataType: "json",
    success: function (res) {
        let picture = JSON.parse(res.picture);
        let details = JSON.parse(res.details);
        // console.log(details);
        // console.log(picture)
        
    

        let lunbo = `
        <div class="item active">
            <img src="${picture[0].src}" alt="...">
            <div class="carousel-caption">

            </div>
        </div>
        <div class="item">
            <img src="${picture[2].src}" alt="...">
            <div class="carousel-caption">

            </div>
        </div>
        <div class="item">
            <img src="${picture[3].src}" alt="...">
            <div class="carousel-caption">

            </div>
        </div>
        <div class="item">
            <img src="${picture[4].src}" alt="...">
            <div class="carousel-caption">

            </div>
        </div>
        `;
        $('.carousel-inner').append(lunbo);
        
        let _name = `<span class="-name">${res.title}</span><ul class="-products -small">
                    <li><a href="#">Lipro LED 筒灯</a></li>
                    <li><a href="#">Lipro LED 灯泡</a></li>
                    <li><a href="#">Lipro LED 地脚灯</a></li>
                    <li><a href="#">Lipro LED 灯带</a></li>
                    <li class="-products-li"><a href="#">Lipro 驱动电源</a></li>
                </ul>`;

        $('._name').append(_name);

        let xq = `
            <img src="${details[0].src}" alt="">
            <img src="${details[1].src}" alt="">
            <img src="${details[2].src}" alt="">
            <img src="${details[3].src}" alt="">
            <img src="${details[4].src}" alt="">
            <img src="${details[5].src}" alt="">
            <img src="${details[6].src}" alt="">
            <img src="${details[7].src}" alt="">
            <img src="${details[8].src}" alt="">
            <img src="${details[9].src}" alt="">
            <img src="${details[10].src}" alt="">
        `;
           
        $('.xi').append(xq);
        let temp = `<div class="property-hd">
        <h1>${res.title}</h1>
        <p class="mod-info">
            <font color="#E03D3D">【购物赢免单资格】</font>博物馆级健康光 | 臻选自然光谱 | Ra97 高色彩还原 | RG0 舒适低蓝光 | 无可见频闪 | 无边流光设计 | 双感应检测 | 有线无线双版本 | 磁吸随贴安装
        </p>
    </div>
    <div class="property-sell">
        <div class="property-sell-price">
            <div class="mod-price">
                <small>￥</small>
                <span class="vm-money">${res.price}</span>
            </div>
            <div class="mod-huabei">
                或低至<em>￥</em>${(res.price/12).toFixed(2)} x 12 期
            </div>
        </div>
        <div class="property-sell-list"></div>
    </div>
    <div class="property-service">
        <dl class="property-service-suda">
            <dt class="vm-metatit">配送到</dt>
            <dd class="mod-site">
                <div class="site-selector">
                    <div class="text">浙江省<span></span>杭州市</div>
                </div>
            </dd>
        </dl>
        <div class="property-set">
            <dl class="property-set-sale">
                <dt class="vm-metatit">版本</dt>
                <dd>
                    <a href="" class="selected">有线版</a>
                    <a href="" class>无线版</a>
                </dd>
            </dl>
            <dl class="property-set-sale">
                <dt class="vm-metatit">颜色</dt>
                <dd>
                    
                    <a href="" class="selected"><img src="../img/银色.png" alt="">银色</a>
                </dd>
            </dl>
        </div>
        <div class="property-huabei">
            <div class="vm-metatit">花呗分期</div>
            <div class="property-huabei-bd">
                <a href="#" class="prop">
                    <span class="vm-periods">${(res.price/3).toFixed(2)} × 3 期</span>
                    <span class="vm-rate">含手续费<em>￥</em>2.06 / 期</span>
                </a>
                <a href="#" class="prop">
                    <span class="vm-periods">${(res.price/6).toFixed(2)} × 6 期</span>
                    <span class="vm-rate">含手续费<em>￥</em>2.01 / 期</span>
                </a>
                <a href="#" class="prop pop-1">
                    <span class="vm-periods">${(res.price/12).toFixed(2)} × 12 期</span>
                    <span class="vm-rate">含手续费<em>￥</em>1.68 / 期</span>
                </a>
            </div>
        </div>
        <div class="property-control">
            <div class="vm-metatit">选择数量</div>
            <input type="number" value="1" min="1" max="10" id="num">
        </div>
        <div class="property-buy">
            <dl class="property-buy-quantity">
                <dd class="vm-count">
                    <div class="vm-c-list">
                        <span>已选：魅族 Lipro LED 橱柜灯、无线版、银色、全款、1件</span>
                    </div>
                    <div class="vm-c-wp">
                        <strong><i>￥</i>${res.price}</strong>
                    </div>
                </dd>
            </dl>
            <div class="property-buy-action">
                <a href="" class="btn-l">立即购买</a>
                <input type="button" class="btn-add-cart" id="addItem" value="加入购物车">
            </div>
        </div>
    </div>`;
        // 加入购物车
    $('.property').append(temp).find('#addItem').on('click',function(){
        addItem(res.id,res.price,$('#num').val());
        alert('加入购车成功')
    });

    }
});

function addItem(id,price,num){
    // console.log(id,price,num);
    // console.log(cookie);
    let shop = cookie.get('shop');
    // console.log(shop);
    let product = {
        id,
        price,
        num
    };

    if(shop){
        shop = JSON.parse(shop);

        if(shop.some(elm => elm.id == id)){
            shop.forEach(el => {
                el.id == id?el.num=num:null;
            });
        }else{
            shop.push(product);
        }
    }else{
        shop = [];
        shop.push(product);
    }
    
    cookie.set('shop', JSON.stringify(shop), 1);
}