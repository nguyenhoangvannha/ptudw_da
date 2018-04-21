function createShopItem(hinhAnh, alt, giaBan, link, ten, mark) {
    var html = 
    `<div class="product_item">
    <div class="product_border"></div>
    <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="`
        + hinhAnh + '" alt="' + alt + ` width="100" height="100"></div>
        <div class="product_content">
            <div class="product_price">` + giaBan + `</div>
            <div class="product_name"><div><a href="`+ link+`" tabindex="0">` + ten + `</a></div></div>
            </div>
            <div class="product_fav"><i class="fas fa-heart"></i></div>
            <ul class="product_marks">
                <li class="product_mark product_discount">-25%</li>
                <li class="product_mark product_new">` + mark + `</li>
            </ul>
        </div>`;
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
            }
            catch (err) {
            }
            var s = createShopItem("carsdata" + hinhAnh, ten
                , "$" + giaBan, urlXe, ten, mark);
            html += s;
        }
        callback(html);
    });
}