function createResultItem(name, image, price) {
    var html = `<!-- Product item -->
    <div class="card flex-md-row mb-4 box-shadow h-md-250">
    <div class="card-body d-flex flex-column align-items-start">
      <strong class="d-inline-block mb-2 text-primary">`+name+`</strong>
      <h3 class="mb-0">
        <a class="text-dark" href="#">$`+price+`</a>
      </h3>
      <a href="product.html">read more</a>
    </div>
    <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="`+name+`" style="width: 250px; height: 200px;" src="`+image+`" data-holder-rendered="true">
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