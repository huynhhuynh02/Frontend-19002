// Dữ liệu người dùng
var user = [
    {
        tencuahang: "admin",
        tennguoidung: "admin",
        phone: 123,
        matkhau: 123,
        email: "tdbbrowns@gmail.com"
    }
]
var useridlogin = "Bạn chưa đăng nhập";
// Xử lý chuyển trang
$(document).ready(function () {
    $(".btn-login-back").click(function () {
        $(".form-login").show()
        $(".form-register").hide()
    })
    $(".btn-resgister-back").click(function () {
        $(".form-login").hide()
        $(".form-register").show()
    })
})
// Xử lý trạng thái form
var check = true
$(document).on("click", "input", function () {
    $(this).keyup(function () {
        if ($(this).val().length == 0) {
            $(this).attr("placeholder", "Không được bỏ trống");
            check = false;
        } else {
            check = true;
        }
    })
})
// Xử lý form đăng ký khi push
$(function () {

    var checkres = true;
    $(".btn-resgister").click(function () {
        var tencuahang = $(".form-register-tch");
        var tennguoidung = $(".form-register-user");
        var phone = $(".form-register-phone");
        var matkhau = $(".form-register-pass");
        var email = $(".form-register-email");
        if (check == false) {
            alert("Vui lòng điền đầy đủ thông tin!");
        } else {
            var ipuser = {
                tencuahang: tencuahang.val(),
                tennguoidung: tennguoidung.val(),
                phone: phone.val(),
                matkhau: matkhau.val(),
                email: email.val(),
            }
            for (var i = 0; i < user.length; i++) {
                if (phone.val() == user[i].phone) {
                    checkres = false;
                }
            }
            if (checkres == true) {
                user.push(ipuser);
                alert("Đăng ký thành công");
            } else {
                alert("Số điện thoại đã được đăng ký");
                checkres = true;
            }
        }
    });
})
// Xử lý form đăng nhập
$(function () {
    var checklogin = false;
    var loginphone = $(".form-login-phone");
    var loginpass = $(".form-login-pass");
    var logincaptcha = $(".form-login-captcha");
    $(".btn-login").click(function () {
        for (var i = 0; i < user.length; i++) {
            if (loginphone.val() == user[i].phone & loginpass.val() == user[i].matkhau) {
                if (logincaptcha.val() == "4") {
                    checklogin = true
                    useridlogin = user[i].tennguoidung;
                }
            }
        }
        if (checklogin == true) {
            $(".userid").html(useridlogin)
            $(".index").show();
            $(".body-form").hide();
        } else {
            alert("Vui lòng kiểm tra lại")
        }
    })
})
// đăng Xuất
$(document).ready(function () {
    $(".userid").click(function () {
        $(".index").hide()
        $(".body-form").show()
    })
})





// Phần 2 giao diện người dùng
var sanpham = [{
    danhmuc: "Áo",
    tensanpham: "Áo lông cừu 1",
    id: "a101",
    giasanpham: 200000,
    hinhanh: "<img class='w-100 h-100' src='img/aolongcuu.jpg' alt=''>",
    nhacungcap: "Công ty C",
},
{
    danhmuc: "Áo",
    tensanpham: "Áo lông cừu 2",
    id: "a102",
    giasanpham: 100000,
    hinhanh: "<img class='w-100 h-100' src='img/aolongcuu.jpg' alt=''>",
    nhacungcap: "Công ty A",
},
{
    danhmuc: "Áo",
    tensanpham: "Áo lông cừu 3",
    id: "a103",
    giasanpham: 220000,
    hinhanh: "<img class='w-100 h-100' src='img/aolongcuu.jpg' alt=''>",
    nhacungcap: "Công ty A",
},
{
    danhmuc: "Áo",
    tensanpham: "Áo lông cừu 4",
    id: "a104",
    giasanpham: 400000,
    hinhanh: "<img class='w-100 h-100' src='img/aolongcuu.jpg' alt=''>",
    nhacungcap: "Công ty A",
},
{
    danhmuc: "Áo",
    tensanpham: "Áo lông cừu 5",
    id: "a105",
    giasanpham: 110000,
    hinhanh: "<img class='w-100 h-100' src='img/aolongcuu.jpg' alt=''>",
    nhacungcap: "Công ty B",
},
{
    danhmuc: "Quần",
    tensanpham: "Quần lông cừu 1",
    id: "a111",
    giasanpham: 123000,
    hinhanh: "<img class='w-100 h-100' src='img/quan.jpeg' alt=''>",
    nhacungcap: "Công ty C",
},
{
    danhmuc: "Quần",
    tensanpham: "Quần lông cừu 2",
    id: "a112",
    giasanpham: 144000,
    hinhanh: "<img class='w-100 h-100' src='img/quan.jpeg' alt=''>",
    nhacungcap: "Công ty B",
},
{
    danhmuc: "Quần",
    tensanpham: "Quần lông cừu 3",
    id: "a113",
    giasanpham: 240000,
    hinhanh: "<img class='w-100 h-100' src='img/quan.jpeg' alt=''>",
    nhacungcap: "Công ty A",
},
{
    danhmuc: "Quần",
    tensanpham: "Quần lông cừu 4",
    id: "a114",
    giasanpham: 512000,
    hinhanh: "<img class='w-100 h-100' src='img/quan.jpeg' alt=''>",
    nhacungcap: "Công ty A",
},
{
    danhmuc: "Quần",
    tensanpham: "Quần lông cừu 5",
    id: "a115",
    giasanpham: 123000,
    hinhanh: "<img class='w-100 h-100' src='img/quan.jpeg' alt=''>",
    nhacungcap: "Công ty B",
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
    $(".quanlysp-tatcasp .row").html(hienthi);
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
        data += "<td> <button class='xoasp btn btn-danger' id-sanpham='" + giohang[i].id + "'>" + "X" + "</button> </td>";
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
    $(".userid").html(useridlogin)
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
    $(".tienthua").attr("value", 0);
    xuatdulieu()
}
// Lưu bill in bill
function luubill() {
    var luubillidkhach = $(".id-khach").val();
    var luubillthanhtien = $(".thanhtien").attr("value");
    var luubilltongtien = $(".tongtien").attr("value");
    var luubilltienkhach = $(".tienkhach").val();
    var luubilltienthua = $(".tienthua").attr("value");
    var luubillmasp = []
    for (var i = 0; i < giohang.length; i++) {
        var maspoj = {
            masp: giohang[i].id
        }
        luubillmasp.push(maspoj);
    }
    //  Khu vực test
    var data2 = ""
    for (var j = 0; j < giohang.length; j++) {
        data2 += "<table class='w-100'>"
        data2 += "<tr>"
        data2 += "<td class='w-25'>" + giohang[j].id + "</td>"
        data2 += "<td class='w-25'>" + giohang[j].soluong + "</td>"
        data2 += "<td class='w-25'>" + giohang[j].tongtien() + "</td>"
        data2 += "</tr>"
        data2 += "</table>"
    }
    // %%%%%%
    var inbill = {
        idkhachhang: luubillidkhach,
        thanhtien: luubillthanhtien,
        tongtien: luubilltongtien,
        tienkhach: luubilltienkhach,
        tienthua: luubilltienthua,
        masp: luubillmasp,
        testdata2: data2,
    }
    bill.push(inbill);
    // HIển thị bill khi thanh toán
    console.log(inbill.testdata2)
    // Khu mực trả về
    var htbilltt = "";
    htbilltt += "<h2 class='text-center text-dark'>" + inbill.idkhachhang + "</h2>"
    htbilltt += "<h6> Thông tin đơn hàng: </h6>"
    htbilltt += "<table class='w-100'>"
    htbilltt += "<tr>"
    htbilltt += "<th class='w-25'>Mã sp</th>"
    htbilltt += "<th class='w-25'>Số lượng</th>"
    htbilltt += "<th class='w-25'> Thành tiền </th>"
    htbilltt += "</tr>"
    htbilltt += "</table>"
    htbilltt += data2
    htbilltt += "<h6> Thành tiền sản phẩm: </h6>"
    htbilltt += "<p>" + inbill.thanhtien + "</p> </br>"
    htbilltt += "<h6> Vat: </h6>"
    htbilltt += "<p> 5% </p> </br>"
    htbilltt += "<h6> Tiền khách hàng phải trả: </h6>"
    htbilltt += "<p>" + inbill.tongtien + "</p>  </br>"
    htbilltt += "<h6> Khách thanh toán: </h6>"
    htbilltt += "<p>" + inbill.tienkhach + "</p>  </br>"
    htbilltt += "<h6> Tiền thừa: </h6>"
    htbilltt += "<p>" + inbill.tienthua + "</p>  </br>"
    htbilltt += "<button class='close-bill btn btn-danger'> Xong </button>"
    $(".htchitietbill").show();
    $(".htchitietbill").html(htbilltt);
}
// Xuất bill
function tonghopbill() {
    var data = ""
    for (var i = 0; i < bill.length; i++) {
        var data1 = ""
        for (var j = 0; j < bill[i].masp.length; j++) {
            data1 += bill[i].masp[j].masp + ","
        }
        data += "<tr>"
        data += "<td class='showspkh w-25' idbill-kh='"+ bill[i].idkhachhang +"'>" + bill[i].idkhachhang + "</td>"
        data += "<td class='w-25'>" + data1 + "</td>"
        data += "<td class='w-25'>" + bill[i].tongtien + "</td>"
        data += "<td > <button class='chitietbill btn btn-danger' id-bill='" + i + "'> Chi tiết </button> </td>"
        data += "</tr>"
    }
    $(".show-bill").html(data)
}
$(document).on("click",".showspkh",function(){
    var id = $(this).attr("idbill-kh")
    var data = ""
    data += "<h4>" + id + "</h4>"
    data += "<h5>Sản phẩm khách hàng này đã mua:</h5>"
    for(var i=0;i<bill.length;i++){
        if (id == bill[i].idkhachhang){
            var data1 = ""
            for (var j = 0; j < bill[i].masp.length; j++) {
                data1 += bill[i].masp[j].masp + ","
            }
            data += "<td>" + data1 + "</td>" 
        }
    }
    data += "</br>"
    data += "<button class='close-bill btn btn-danger'> Đóng </button>"
    $(".htchitietbill").html(data)
    $(".htchitietbill").show()
})
// Chi tiết bill
$(document).on("click", ".chitietbill", function () {
    var hienctbill = ""
    var id = $(this).attr("id-bill")
    hienctbill += "<h2 class='text-center text-dark'>" + bill[id].idkhachhang + "</h2>"
    hienctbill += "<h6> Thông tin đơn hàng: </h6>"
    hienctbill += "<table class='w-100'>"
    hienctbill += "<tr>"
    hienctbill += "<th class='w-25'>Mã sp</th>"
    hienctbill += "<th class='w-25'>Số lượng</th>"
    hienctbill += "<th class='w-25'> Thành tiền </th>"
    hienctbill += "</tr>"
    hienctbill += bill[id].testdata2
    hienctbill += "<p> Thành tiền sản phẩm: </p>"
    hienctbill += "<p>" + bill[id].thanhtien + "</p> </br>"
    hienctbill += "<p> Vat: </p>"
    hienctbill += "<p> 5% </p> </br>"
    hienctbill += "<p> Tiền khách hàng phải trả: </p>"
    hienctbill += "<p>" + bill[id].tongtien + "</p>  </br>"
    hienctbill += "<p> Khách thanh toán: </p>"
    hienctbill += "<p>" + bill[id].tienkhach + "</p>  </br>"
    hienctbill += "<p> Tiền thừa: </p>"
    hienctbill += "<p>" + bill[id].tienthua + "</p>  </br>"
    hienctbill += "<button class='close-bill btn btn-danger'> Đóng </button>"
    hienctbill += "<button class='xoa-bill btn btn-danger' id-bill='" + id + "'> Xóa </button>"
    $(".htchitietbill").show();
    $(".htchitietbill").html(hienctbill)
})
$(document).on("click", ".xoa-bill", function () {
    var id = $(this).attr("id-bill")
    bill.splice(id, 1);
    tonghopbill();
    $(".htchitietbill").hide();
})
// Xử lý chuyển trang
$(document).ready(function () {
    $(".trangadmin").hide();
    hienthitatca();
    $('.btn-banhang').click(function () {
        $(".trangbanhang").show();
        $(".trangadmin").hide();
    })
    $('.btn-trangadmin').click(function () {
        $(".trangbanhang").hide();
        $(".trangadmin").show();
        $(".quanlykhachhang").hide();
        $(".quanlynhacungcap").hide()
        tonghopbill()
        tongtienbill()
    })
})
$(document).on("click", ".close-bill", function () {
    $(".htchitietbill").hide();
    resetbill()
})
// Tổng cộng bill
function tongtienbill() {
    var tongtienbill = 0
    var tongdonhang = 0
    for (var i = 0; i < bill.length; i++) {
        tongtienbill += Number(bill[i].tongtien)
        tongdonhang += 1
    }
    $(".httongbill-input").val(tongtienbill)
    $(".httongdonhang-input").html(tongdonhang)
}

// Điều hướng admin
$(document).ready(function () {
    $(".btn-thongkedonhang").click(function () {
        $(".thongkedonhang").show();
        $(".quanlysp").hide();
        $(".quanlykhachhang").hide();
        $(".quanlynhacungcap").hide();
    })
    $(".btn-quanlysp").click(function () {
        $(".thongkedonhang").hide();
        $(".quanlysp").show();
        $(".quanlykhachhang").hide();
        $(".quanlynhacungcap").hide();
        hienthitatca();
    })
    $(".btn-quanlykhachhang").click(function () {
        $(".thongkedonhang").hide();
        $(".quanlysp").hide();
        $(".quanlykhachhang").show();
        $(".quanlynhacungcap").hide();
        showkhachhang()
    })
    $(".btn-quanlyncc").click(function () {
        $(".thongkedonhang").hide();
        $(".quanlysp").hide();
        $(".quanlykhachhang").hide();
        $(".quanlynhacungcap").show();
        shownhacc();
    })
})
// Thêm mặt hàng vào hệ thống
function themsanphamvaokho() {
    var tensp = $(".quanlysp-themsp-ten").val();
    var idsp = $(".quanlysp-themsp-id").val();
    var giasp = $(".quanlysp-themsp-gia").val();
    var imgsp = $(".quanlysp-themsp-img").val();
    var danhmucsp = $(".danhmuc option:selected").val();
    var nhacc = $(".quanlysp-themsp-nhacungcap").val();
    var themsp = {
        danhmuc: danhmucsp,
        tensanpham: tensp,
        id: idsp,
        giasanpham: giasp,
        hinhanh: "<img class='w-100 h-100' src='" + imgsp + "' alt=''>",
        nhacungcap: nhacc
    }
    $(".quanlysp-themsp").hide()
    sanpham.push(themsp);
    hienthitatca();
}
//  click thong tin sp
$(document).on("click", ".quanlysp-tatcasp .row .hinhanh", function () {
    var data = "";
    var id = $(this).attr("id-sanpham")
    for (var i = 0; i < sanpham.length; i++) {
        if (id == sanpham[i].id) {
            data += "<div class='rounded-sm' style='width: 80%; height:200px ; margin: auto'>"
            data += sanpham[i].hinhanh
            data += "</div>"
            data += "<p> Tên sản phẩm: </p>"
            data += sanpham[i].tensanpham
            data += "<p> Id sản phẩm: </p>"
            data += sanpham[i].id
            data += "<p> Danh mục sản phẩm: </p>"
            data += sanpham[i].danhmuc
            data += "<p> Giá sản phẩm: </p>"
            data += sanpham[i].giasanpham
            data += "<p> Đơn vị cung cấp: </p>"
            data += sanpham[i].nhacungcap
            data += "<div>"
            data += "<button class='close-bill btn btn-secondary'> Đóng </button>"
            data += "<button class='suasptrongkho btn btn-success' id-sptrongkho='" + sanpham[i].id + "'> Sửa </button>"
            data += "<button class='xoasptrongkho btn btn-danger' id-sptrongkho='" + sanpham[i].id + "'> Xóa </button>"
            data += "</div>"
        }
    }
    $(".htchitietbill").show();
    $(".htchitietbill").html(data);
})
$(document).on("click", ".xoasptrongkho", function () {
    var id = $(this).attr("id-sptrongkho")
    for (var i = 0; i < sanpham.length; i++) {
        if (id == sanpham[i].id) {
            sanpham.splice(i, 1);
        }
    }
    $(".htchitietbill").hide();
    hienthitatca();
})
$(document).on("click", ".suasptrongkho", function () {
    $(".chinhsualaisanpham").show()
    var id = $(this).attr("id-sptrongkho");
    $(".btn-update").click(function () {
        for (var i = 0; i < sanpham.length; i++) {
            if (id == sanpham[i].id) {
                sanpham[i].tensanpham = $(".chinhsualaisanpham-ten").val();
                sanpham[i].id = $(".chinhsualaisanpham-id").val();
                sanpham[i].danhmuc = $(".danhmuc").val();
                sanpham[i].giasanpham = $(".chinhsualaisanpham-gia").val();
                sanpham[i].hinhanh = "<img class='w-100 h-100' src='" + $(".chinhsualaisanpham-img").val() + "' alt=''>";
            }
            $(".htchitietbill").hide();
            $(".chinhsualaisanpham").hide();
            hienthitatca();
            resetbill()
        }
    })
    $(".cancel").click(function () {
        $(".chinhsualaisanpham").hide()
    })
})
//  Hiển thị các form
$(document).ready(function () {
    $(".btnht-themsp").click(function () {
        $(".quanlysp-themsp").show()
    })
    $(".btnht-themkh").click(function () {
        $(".quanlykhachhang-themkh").show()
    })
    $(".btnht-themncc").click(function () {
        $(".quanlynhacungcap-themncc").show()
    })
})
// Thêm khách hàng
var khachhang = [
    {
        tenkh: "Nguyễn Văn A",
        idkh: "kh001",
        diachikh: "Số 12 đường 21 thành phố 123",
        sdtkh: 0987123432
    },
    {
        tenkh: "Nguyễn Văn B",
        idkh: "kh002",
        diachikh: "Số 12 đường 21 thành phố 789",
        sdtkh: 0987654321
    },
    {
        tenkh: "Nguyễn Văn C",
        idkh: "kh003",
        diachikh: "Số 12 đường 21 thành phố 456",
        sdtkh: 0987123456
    },
]
function themkhachhangmoi() {
    var ten = $(".quanlykhachhang-themkh-ten").val();
    var id = $(".quanlykhachhang-themkh-id").val();
    var diachi = $(".quanlykhachhang-themkh-dc").val();
    var sdt = $(".quanlykhachhang-themkh-sdt").val();
    var khmoi = {
        tenkh: ten,
        idkh: id,
        diachikh: diachi,
        sdtkh: sdt,
    }
    $(".quanlykhachhang-themkh").hide()
    khachhang.push(khmoi);
    showkhachhang()
}
function showkhachhang() {
    data = "";
    for (var i = 0; i < khachhang.length; i++) {
        data += "<tr class='w-100'>"
        data += "<td class='w-25'>" + khachhang[i].tenkh + "</td>"
        data += "<td class='w-25'>" + khachhang[i].idkh + "</td>"
        data += "<td class='w-25'>" + khachhang[i].diachikh + "</td>"
        data += "<td class='w-25'>" + khachhang[i].sdtkh
        data += "<button class='xuakh btn btn-success' idkh='" + i + "'>"
        data += "Edit"
        data += "</button>"
        data += "<button class='xoakh btn btn-danger' idkh='" + i + "'>"
        data += "X"
        data += "</button>"
        data += "</td>"
        data += "</tr>"
    }
    $(".showkhachhang").html(data);
}
//  Xử lý tìm kiếm
$(document).ready(function () {
    $(".timsanpham").keyup(function () {
        var hienthi = "";
        for (var i = 0; i < sanpham.length; i++) {
            if ($(".timsanpham").val() == sanpham[i].id) {
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
    })
})
$(document).ready(function () {
    $(".id-khach").keyup(function () {
        for (var i = 0; i < khachhang.length; i++) {
            if ($(".id-khach").val() == khachhang[i].idkh) {
                $(".id-khach").val(khachhang[i].tenkh)
            }
        }
    })
})
$(document).ready(function () {
    $(".quanlysp-themsp-nhacungcap").keyup(function () {
        for (var i = 0; i < nhacungcap.length; i++) {
            if ($(".quanlysp-themsp-nhacungcap").val() == nhacungcap[i].idnhacungcap) {
                $(".quanlysp-themsp-nhacungcap").val(nhacungcap[i].tennhacungcap)
            }
        }
    })
})
// xử lý xóa khách hàng
$(document).on("click", ".xoakh", function () {
    var id = $(this).attr("idkh");
    khachhang.splice(id, 1);
    showkhachhang()
})
//  Thêm/xóa danh mục
$(document).on("click", ".themdanhmuc", function () {
    var danhmucmoi = $(".form-danhmuc").val();
    $(".danhmuc").prepend(" <option value='" + danhmucmoi + "'>" + danhmucmoi + "</option>")
    $(".btn-danhmucsp").prepend("<button type='button' class='btn-danhmucmoi btn btn-primary' id-btn='" + danhmucmoi + "'>" + danhmucmoi + "</button>")
})
$(document).on("click", ".xoadanhmuc", function () {
    var danhmucmoi = $(".form-danhmuc").val();
    $(".danhmuc option[value='" + danhmucmoi + "']").remove();
    $(".btn-danhmucmoi[id-btn='" + danhmucmoi + "']").remove();
})
$(document).on("click", ".btn-danhmucmoi", function () {
    var id = $(this).attr("id-btn")
    var hienthi = "";
    for (var i = 0; i < sanpham.length; i++) {
        if (sanpham[i].danhmuc == id) {
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
})
// sửa kh
$(document).on("click", ".xuakh", function () {
    var id = $(this).attr("idkh")
    $(".chinhsuathongtinkhachhang").show();
    $(".chinhsuathongtinkhachhang-ten").val(khachhang[id].tenkh)
    $(".chinhsuathongtinkhachhang-id").val(khachhang[id].idkh)
    $(".chinhsuathongtinkhachhang-diachi").val(khachhang[id].diachikh)
    $(".chinhsuathongtinkhachhang-sdt").val(khachhang[id].sdtkh)
    $(".cancel").click(function () {
        $(".chinhsuathongtinkhachhang").hide()
    })
    $(".btn-updatekh").click(function () {
        khachhang[id].tenkh = $(".chinhsuathongtinkhachhang-ten").val()
        khachhang[id].idkh = $(".chinhsuathongtinkhachhang-id").val()
        khachhang[id].diachikh = $(".chinhsuathongtinkhachhang-diachi").val()
        khachhang[id].sdtkh = $(".chinhsuathongtinkhachhang-sdt").val()
        $(".chinhsuathongtinkhachhang").hide()
        showkhachhang()
    })
})
$(document).on("click", ".tat", function () {
    $(".quanlysp-themsp").hide();
    $(".htchitietbill").hide()
})
// Nhà cung cấp
var nhacungcap = [
    {
        tennhacungcap: "Công ty A",
        idnhacungcap: "ncc001",
        diachinhacungcap: "Đường BCD",
        sdtncc: 5123512461,
    },
    {
        tennhacungcap: "Công ty B",
        idnhacungcap: "ncc002",
        diachinhacungcap: "Đường BCD",
        sdtncc: 6134542616,
    },
    {
        tennhacungcap: "Công ty C",
        idnhacungcap: "ncc003",
        diachinhacungcap: "Đường BCD",
        sdtncc: 2347347347,
    },
]
function themnccgmoi() {
    var ten = $(".quanlynhacungcap-themncc-ten").val();
    var id = $(".quanlynhacungcap-themncc-id").val();
    var diachi = $(".quanlynhacungcap-themncc-dc").val();
    var sdt = $(".quanlynhacungcap-themncc-sdt").val();
    var nccmoi = {
        tennhacungcap: ten,
        idnhacungcap: id,
        diachinhacungcap: diachi,
        sdtncc: sdt,
    }
    $(".quanlynhacungcap-themncc").hide()
    nhacungcap.push(nccmoi);
    shownhacc()
}
function shownhacc() {
    data = "";
    for (var i = 0; i < nhacungcap.length; i++) {
        data += "<tr class='w-100'>"
        data += "<td class='showdonhangcungcap w-25'>" + nhacungcap[i].tennhacungcap + "</td>"
        data += "<td class='w-25'>" + nhacungcap[i].idnhacungcap + "</td>"
        data += "<td class='w-25'>" + nhacungcap[i].diachinhacungcap + "</td>"
        data += "<td class='w-25'>" + nhacungcap[i].sdtncc
        data += "<button class='xuancc btn btn-success' idncc='" + i + "'>"
        data += "Edit"
        data += "</button>"
        data += "<button class='xoancc btn btn-danger' idncc='" + i + "'>"
        data += "X"
        data += "</button>"
        data += "</td>"
        data += "</tr>"
    }
    $(".shownhacc").html(data);
}
$(document).on("click", ".xoancc", function () {
    var id = $(this).attr("idncc");
    nhacungcap.splice(id, 1);
    shownhacc()
})


$(document).on("click", ".xuancc", function () {
    var id = $(this).attr("idncc")
    $(".chinhsuathongtinncc").show();
    $(".chinhsuathongtinncc-ten").val(nhacungcap[id].tennhacungcap)
    $(".chinhsuathongtinncc-id").val(nhacungcap[id].idnhacungcap)
    $(".chinhsuathongtinncc-diachi").val(nhacungcap[id].diachinhacungcap)
    $(".chinhsuathongtinncc-sdt").val(nhacungcap[id].sdtncc)
    $(".cancel").click(function () {
        $(".chinhsuathongtinncc").hide()
    })
    $(".btn-updatencc").click(function () {
        nhacungcap[id].tennhacungcap = $(".chinhsuathongtinncc-ten").val()
        nhacungcap[id].idnhacungcap = $(".chinhsuathongtinncc-id").val()
        nhacungcap[id].diachinhacungcap = $(".chinhsuathongtinncc-diachi").val()
        nhacungcap[id].sdtncc = $(".chinhsuathongtinncc-sdt").val()
        $(".chinhsuathongtinncc").hide()
        shownhacc()
    })
})
$(document).on("click", ".showdonhangcungcap", function () {
    var id = $(this).html()
    var data = "";
    data += "<h5> Sản phẩm đơn vị này cung cấp</h5>"
    data += "<table>"
    data += "<tr>"
    data += "<th style='width: 60%'> Tên sản phẩm </th>"
    data += "<th > Giá sản phẩm </th>"
    data += "</tr>"
    data += "</table>"
    for (var i = 0; i < sanpham.length; i++) {
        if (id == sanpham[i].nhacungcap) {
            data += "<table>"
            data += "<tr>"
            data += "<td class='w-75'>" + sanpham[i].tensanpham + "</td>"
            data += "<td >" + sanpham[i].giasanpham + "</td>"
            data += "</tr>"
            data += "</table>"
        }
    }
    data += "<button class='tat btn btn-danger'> Đóng</button>"
    $(".htchitietbill").html(data)
    $(".htchitietbill").show()
})