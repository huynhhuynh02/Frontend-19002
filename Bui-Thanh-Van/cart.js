var sanpham=[{
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
var giohang=[];
function hienthitatca(){
    var hienthi = "";
    for(var i=0; i<sanpham.length; i++){
        hienthi += "<div class='col-md-2 p-1' style='height: 170px;'>"
        hienthi += "<div class='hinhanh w-100' id-sanpham='"+ sanpham[i].id +"' style='height: 100px'>"
        hienthi += sanpham[i].hinhanh
        hienthi += "<h5 class='card-title'>" + sanpham[i].tensanpham + "</h5>"
        hienthi += "<p class='card-text'>" + sanpham[i].giasanpham + "</p>"
        hienthi += "</div>"
        hienthi += "</div>"
    }
    $(".row").eq(2).html(hienthi)
}
function hienthispao(){
    var hienthi = "";
    for(var i=0; i<sanpham.length; i++){
        if(sanpham[i].danhmuc=="Áo") {
            hienthi += "<div class='col-md-2 p-1' style='height: 170px;'>"
            hienthi += "<div class='hinhanh w-100' id-sanpham='"+ sanpham[i].id +"' style='height: 100px'>"
            hienthi += sanpham[i].hinhanh
            hienthi += "</div>"
            hienthi += "<h5 class='card-title'>" + sanpham[i].tensanpham + "</h5>"
            hienthi += "<p class='card-text'>" + sanpham[i].giasanpham + "</p>"
            hienthi += "</div>"
        }
    }
    $(".row").eq(2).html(hienthi)
}
function hienthispquan(){
    var hienthi = "";
    for(var i=0; i<sanpham.length; i++){
        if(sanpham[i].danhmuc=="Quần") {
            hienthi += "<div class='col-md-2 p-1' style='height: 170px;'>"
            hienthi += "<div class='hinhanh w-100' id-sanpham='"+ sanpham[i].id +"' style='height: 100px'>"
            hienthi += sanpham[i].hinhanh
            hienthi += "</div>"
            hienthi += "<h5 class='card-title'>" + sanpham[i].tensanpham + "</h5>"
            hienthi += "<p class='card-text'>" + sanpham[i].giasanpham + "</p>"
            hienthi += "</div>"
        }
    }
    $(".row").eq(2).html(hienthi)
}
$(document).on('click','.hinhanh',function(){
    var check=true;
    for(var i=0;i<sanpham.length;i++){
        if($(this).attr("id-sanpham")==sanpham[i].id){
            var donhang = {
                hinhanh: sanpham[i].hinhanh,
                tensp: sanpham[i].tensanpham,
                id: sanpham[i].id,
                giasp:sanpham[i].giasanpham,
                soluong: 1,
            }
        }
    }
    for(var i=0;i<giohang.length;i++){
        if($(this).attr("id-sanpham")==giohang[i].id){
            giohang[i].soluong += 1;
            check = false;
        }
    }
    if (check==true){
        giohang.push(donhang)
    }    
    xuatdulieu()
})
function xuatdulieu(){
    var data="";
    for (var i=0; i< giohang.length ; i++){
        data += "<tr>"
        data += "<td style='width:50px; height:50px'>" + giohang[i].hinhanh + "</td>"
        data += "<td>" + giohang[i].tensp + "</td>"
        data += "<td>" + giohang[i].thanhtien + "</td>"
        data += "<td>" + giohang[i].soluong + "</td>"
        data += "</tr>"
    }
   console.log(giohang.length)
    $(".donhang-table").html(data);
}
