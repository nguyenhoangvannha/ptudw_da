function createResultItem(name, image, price) {
    var html = `<!-- Product item -->
    <div class="item">
      <div class="image">
        <img src="` +image+ `" alt="`+name+`" width="100px" height="100px"/>
      </div>
      <div class="description">
        <span>`+name+`</span>
      </div>
      <div class="total-price">`+price+`</div>
    </div>`
    return html;
}
function createResultContent(jsonFile, callback) {
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
            var s = createResultItem(ten, urlHinh, giaBan);
            html += s;
        }
        callback(html);
    });
}