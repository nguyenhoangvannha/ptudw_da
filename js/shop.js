function createShopItem(hinhAnh, alt, giaBan, link, ten, mark) {
    var html = '<a href="' + link + 
    `"><div class="product_item">
    <div class="product_border"></div>
    <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="`
        + hinhAnh + '" alt="' + alt + ` width="100" height="100"></div>
        <div class="product_content">
            <div class="product_price">` + giaBan + `</div>
            <div class="product_name"><div><a href="`+ link+`" tabindex="0">` + ten + `</a></div></div>
            </div>
            <ul class="product_marks">
                <li class="product_mark product_discount">-25%</li>
                <li class="product_mark product_new">` + mark + `</li>
            </ul>
        </div></a>`;
        return html;
}
function createShopContent(jsonFile, mark, callback) {
    getTextFromFile(jsonFile, function (text) {
        var json = JSON.parse(text);
        var html = "";
        for (var i = 0; i < 20; i++) {
            var hinhAnh, ten, giaBan, urlXe;
            try {
                hinhAnh = json[i].hinhAnh;
                ten = json[i].ten;
                giaBan = json[i].giaBan;
                urlXe = json[i].urlXe;
                urlXe = "/product.html"
            }
            catch (err) {
            }
            var urlHinh;
            if(hinhAnh == undefined){
                urlHinh = '/images/noimage.png';
            } else {
                urlHinh = "carsdata" + hinhAnh;
            }
            var s = createShopItem(urlHinh, ten
                , "$" + giaBan, urlXe, ten, mark);
            html += s;
        }
        callback(html);
    });
}