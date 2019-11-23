var sanpham = [{
    danhmuc: "Áo",
    tensanpham: "Áo lông cừu 1",
    id: "a101",
    giasanpham: 200000,
    hinhanh: "<img class='w-100 h-100' src='img/aolongcuu.jpg' alt=''>",
},
{
    danhmuc: "Áo",
    tensanpham: "Áo lông cừu 2",
    id: "a102",
    giasanpham: 100000,
    hinhanh: "<img class='w-100 h-100' src='img/aolongcuu.jpg' alt=''>",
},
{
    danhmuc: "Áo",
    tensanpham: "Áo lông cừu 3",
    id: "a103",
    giasanpham: 220000,
    hinhanh: "<img class='w-100 h-100' src='img/aolongcuu.jpg' alt=''>",
},
{
    danhmuc: "Áo",
    tensanpham: "Áo lông cừu 4",
    id: "a104",
    giasanpham: 400000,
    hinhanh: "<img class='w-100 h-100' src='img/aolongcuu.jpg' alt=''>",
},
{
    danhmuc: "Áo",
    tensanpham: "Áo lông cừu 5",
    id: "a105",
    giasanpham: 110000,
    hinhanh: "<img class='w-100 h-100' src='img/aolongcuu.jpg' alt=''>",
},
{
    danhmuc: "Quần",
    tensanpham: "Quần lông cừu 1",
    id: "a111",
    giasanpham: 123000,
    hinhanh: "<img class='w-100 h-100' src='img/quan.jpeg' alt=''>",
},
{
    danhmuc: "Quần",
    tensanpham: "Quần lông cừu 2",
    id: "a112",
    giasanpham: 144000,
    hinhanh: "<img class='w-100 h-100' src='img/quan.jpeg' alt=''>",
},
{
    danhmuc: "Quần",
    tensanpham: "Quần lông cừu 3",
    id: "a113",
    giasanpham: 240000,
    hinhanh: "<img class='w-100 h-100' src='img/quan.jpeg' alt=''>",
},
{
    danhmuc: "Quần",
    tensanpham: "Quần lông cừu 4",
    id: "a114",
    giasanpham: 512000,
    hinhanh: "<img class='w-100 h-100' src='img/quan.jpeg' alt=''>",
},
{
    danhmuc: "Quần",
    tensanpham: "Quần lông cừu 5",
    id: "a115",
    giasanpham: 123000,
    hinhanh: "<img class='w-100 h-100' src='img/quan.jpeg' alt=''>",
}
]
var giohang = [];
var tongcong = 0;
var bill = [];
//  Xử lý xuất sản phẩm
function hienthitatca() {
    var hienthi = "";
    for (var i = 0; i < sanpham.length; i++) {
        hienthi += "<div class='col-md-2 p-1' style='height: 170px;'>"
        hienthi += "<div class='hinhanh w-100' id-sanpham='" + sanpham[i].id + "' style='height: 100px'>"
        hienthi += sanpham[i].hinhanh
        hienthi += "<h5 class='card-title'>" + sanpham[i].tensanpham + "</h5>"
        hienthi += "<p class='card-text'>" + sanpham[i].giasanpham + "</p>"
        hienthi += "</div>"
        hienthi += "</div>"
    }
    $(".row").eq(2).html(hienthi)
}
function hienthispao() {
    var hienthi = "";
    for (var i = 0; i < sanpham.length; i++) {
        if (sanpham[i].danhmuc == "Áo") {
            hienthi += "<div class='col-md-2 p-1' style='height: 170px;'>"
            hienthi += "<div class='hinhanh w-100' id-sanpham='" + sanpham[i].id + "' style='height: 100px'>"
            hienthi += sanpham[i].hinhanh
            hienthi += "</div>"
            hienthi += "<h5 class='card-title'>" + sanpham[i].tensanpham + "</h5>"
            hienthi += "<p class='card-text'>" + sanpham[i].giasanpham + "</p>"
            hienthi += "</div>"
        }
    }
    $(".row").eq(2).html(hienthi)
}
function hienthispquan() {
    var hienthi = "";
    for (var i = 0; i < sanpham.length; i++) {
        if (sanpham[i].danhmuc == "Quần") {
            hienthi += "<div class='col-md-2 p-1' style='height: 170px;'>"
            hienthi += "<div class='hinhanh w-100' id-sanpham='" + sanpham[i].id + "' style='height: 100px'>"
            hienthi += sanpham[i].hinhanh
            hienthi += "</div>"
            hienthi += "<h5 class='card-title'>" + sanpham[i].tensanpham + "</h5>"
            hienthi += "<p class='card-text'>" + sanpham[i].giasanpham + "</p>"
            hienthi += "</div>"
        }
    }
    $(".row").eq(2).html(hienthi)
}
//  Xử lý thêm đơn hàng 
$(document).on('click', '.hinhanh', function () {
    var check = true;
    for (var i = 0; i < sanpham.length; i++) {
        if ($(this).attr("id-sanpham") == sanpham[i].id) {
            var donhang = {
                hinhanh: sanpham[i].hinhanh,
                tensp: sanpham[i].tensanpham,
                id: sanpham[i].id,
                giasp: sanpham[i].giasanpham,
                soluong: 1,
                tongtien: function () {
                    var tong;
                    tong = (Number(this.soluong)) * (Number(this.giasp));
                    return tong;
                }
            }
        }

    }
    for (var i = 0; i < giohang.length; i++) {
        if ($(this).attr("id-sanpham") == giohang[i].id) {
            giohang[i].soluong += 1;
            check = false;
        }
    }
    if (check == true) {
        giohang.push(donhang);
        tonggiatrigiohang()
    }
    var tienphaitra;
    $(".thanhtien").attr("value", tonggiatrigiohang());
    tienphaitra = Number($(".thanhtien").attr("value")) + (Number($(".thanhtien").attr("value")) * 5) / 100;
    $(".tongtien").attr("value", tienphaitra);
    xuatdulieu()
})
// Xử lú show đơn hàng
function xuatdulieu() {
    var data = "";
    for (var i = 0; i < giohang.length; i++) {
        data += "<tr>"
        data += "<td style='width:50px; height:50px'>" + giohang[i].hinhanh + "</td>"
        data += "<td>" + giohang[i].tensp + "</td>"
        data += "<td>"
        data += "<button class='giamsoluong' id-sanpham='" + giohang[i].id + "'>" + "-" + "</button>"
        data += "<input type='number' value='" + giohang[i].soluong + "'>"
        data += "<button class='tangsoluong' id-sanpham='" + giohang[i].id + "'>" + "+" + "</button>"
        data += "</td>"
        data += "<td>" + giohang[i].tongtien() + "</td>"
        data += "<td> <button class='xoasp' id-sanpham='" + giohang[i].id + "'>" + "Xóa sp" + "</button> </td>";
        data += "</tr>"
    }
    $(".donhang-table").html(data);
}
// Xử lý xóa sp
$(document).on("click", ".xoasp", function () {
    var id = $(this).attr("id-sanpham");
    for (var i = 0; i < giohang.length; i++) {
        if (id == giohang[i].id) {
            giohang.splice(i, 1)
            $(".thanhtien").attr("value", tonggiatrigiohang());
            tienphaitra = Number($(".thanhtien").attr("value")) + (Number($(".thanhtien").attr("value")) * 5) / 100;
            $(".tongtien").attr("value", tienphaitra);
        }
    }
    xuatdulieu();
})
// XỬ lý tăng giảm số lượng
$(document).on("click", ".tangsoluong", function () {
    var id = $(this).attr("id-sanpham");
    for (var i = 0; i < giohang.length; i++) {
        if (id == giohang[i].id) {
            giohang[i].soluong += 1;
            $(".thanhtien").attr("value", tonggiatrigiohang());
            tienphaitra = Number($(".thanhtien").attr("value")) + (Number($(".thanhtien").attr("value")) * 5) / 100;
            $(".tongtien").attr("value", tienphaitra);
        }
    }
    xuatdulieu();
})
$(document).on("click", ".giamsoluong", function () {
    var id = $(this).attr("id-sanpham");
    for (var i = 0; i < giohang.length; i++) {
        if (id == giohang[i].id) {
            giohang[i].soluong -= 1;
            $(".thanhtien").attr("value", tonggiatrigiohang());
            tienphaitra = Number($(".thanhtien").attr("value")) + (Number($(".thanhtien").attr("value")) * 5) / 100;
            $(".tongtien").attr("value", tienphaitra);
        }
    }
    xuatdulieu();
})
//  xử lý thành tiền
function tonggiatrigiohang() {
    tongcong = 0;
    for (var i = 0; i < giohang.length; i++) {
        tongcong += Number(giohang[i].tongtien())
    }
    return tongcong
}
// Xử lý khách hàng trả tiền
$(document).ready(function () {
    $(".tienkhach").keyup(function () {
        $(this).val();
        console.log($(this).val())
        var tienthua;
        tienthua = $(".tienkhach").val() - $(".tongtien").attr("value");
        $(".tienthua").attr("value", tienthua)
    }).keyup()
})
// reset bill
function resetbill() {
    giohang = [];
    $(".thanhtien").attr("value", 0);
    $(".tongtien").attr("value", 0);
    xuatdulieu()
}
// Lưu bill in bill
function luubill() {
    var luubillidkhach=$(".id-khach").val();
    var luubillthanhtien=$(".thanhtien").attr("value");
    var luubilltongtien=$(".tongtien").attr("value");
    var luubilltienkhach=$(".tienkhach").attr("value");
    var luubilltienthua=$(".tienthua").attr("value");
    var luubillmasp=[]
    for(var i=0;i<giohang.length;i++){
        var maspoj={
            masp : giohang[i].id
        }
        luubillmasp.push(maspoj);
    }
    var inbill={
        idkhachhang: luubillidkhach,
        thanhtien: luubillthanhtien,
        tongtien: luubilltongtien,
        tienkhach: luubilltienkhach,
        tienthua: luubilltienthua,
        masp: luubillmasp,
    }
    bill.push(inbill);
}
// Xuất bill
function tonghopbill(){
    var data=""
    for(var i=0; i <bill.length; i++){
        var data1=""
        for(var j=0; j<bill[i].masp.length; j++){
            data1 +=  bill[i].masp[j].masp + ","
        }
        data += "<tr>"
        data += "<td class='w-25'>" + bill[i].idkhachhang + "</td>"
        data += "<td class='w-25'>" + data1 + "</td>"
        data += "<td class='w-25'>" + bill[i].tongtien + "</td>"
        data += "<td> <button class='chitietbill' id-bill='"+ i +"'> Chi tiết </button> </td>"
        data += "</tr>"
    }
    $(".show-bill").html(data)
}
// Chi tiết bill
$(document).on("click",".chitietbill",function(){
    var hienctbill=""
    for(var i=0;i<bill.length;i++){
        var data2=""
        for(var j=0; j<bill[i].masp.length; j++){
            data1 +=  bill[i].masp[j].masp + ","
        }
        hienctbill += "<h2 class='text-center text-dark'>"+ bill[i].idkhachhang +"</h2>"
        hienctbill += "<p>" + data2 + "</p>"
        hienctbill += "<p>" + bill[i].thanhtien + "</p>"
        hienctbill += "<p> Vat: 5% </p>"
        hienctbill += "<p>" + bill[i].tongtien + "</p>"
        hienctbill += "<p>" + bill[i].tienkhach + "</p>"
        hienctbill += "<p>" + bill[i].tienthua + "</p>"
    }
    $(".htchitietbill").html(hienctbill)
})
// Xử lý chuyển trang
$(document).ready(function(){
    $(".trangadmin").hide();
    $('.btn-banhang').click(function(){
        $(".trangbanhang").show();
        $(".trangadmin").hide();
    })
    $('.btn-trangadmin').click(function(){
        $(".trangbanhang").hide();
        $(".trangadmin").show();
        tonghopbill()
    })
})
