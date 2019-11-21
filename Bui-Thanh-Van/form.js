// Dữ liệu người dùng
var user = [
    {
        tencuahang: "admin",
        tennguoidung: "admin",
        sodienthoai: 0948481321,
        matkhau: "admin",
        email: "tdbbrowns@gmail.com"
    }
]
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
    var tencuahang = $(".form-register-tch");
    var tennguoidung = $(".form-register-user");
    var sodeinthoai = $(".form-register-phone");
    var matkhau = $(".form-register-pass");
    var email = $(".form-register-email");
    $(".btn-resgister").click(function () {
        if (check == false) {
            alert("Vui lòng điền đầy đủ thông tin!");
        } else {
            var ipuser = {
                tencuahang: tencuahang.val(),
                tennguoidung: tennguoidung.val(),
                sodienthoai: sodeinthoai.val(),
                matkhau: matkhau.val(),
                email: email.val(),
            }
            for (var i = 0; i < user.length; i++) {
                if (sodeinthoai.val() == user[i].sodienthoai) {
                    alert("Số điện thoại đã được đăng ký")
                } else {
                    user.push(ipuser);
                    
                }

            }
        }
    });
})
// Xử lý form đăng nhập
$(function () {
    var loginphone = $(".form-login-phone");
    var loginpass = $(".form-login-pass");
    var logincaptcha = $(".form-login-captcha");
    $(".btn-login").click(function () {
        for (var i = 0; i < user.length; i++) {
            if (loginphone.val() == user[i].sodienthoai & loginpass.val() == user[i].matkhau) {
                if (logincaptcha.val() == "4") {
                    window.location.href = 'https://www.facebook.com/';
                } else {
                    alert ("Vui lòng nhập mã xác thực");
                }
            }
            else {
                alert("Sai số điện thoại hoặc mật khẩu!")
            }
        }
    })
})