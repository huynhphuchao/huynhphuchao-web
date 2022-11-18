function kttendangnhap(){
  var mautendangnhap = /^[A-Za-z0-9]{6,20}$/;
  if ($("#tendangnhap").val()==""){
    $("#tbtendangnhap").html("Bắt buộc nhập");
    return false
  }
  console.log(mautendangnhap);
    if (!mautendangnhap.test($("#tendangnhap").val())) {
      $("#tbtendangnhap").html("");
      return false;
    }
    $("#tbtendangnhap").html("*");
    return true;
}
function ktmatkhau(){
  var maumatkhau = /^[A-Za-z0-9(!@#$%^&*)_]{6,20}$/;
  if ($("#matkhau").val()==""){
    $("#tbmatkhau").html("Bắt buộc nhập");
    return false
  }
  console.log(maumatkhau);
    if (!maumatkhau.test($("#matkhau").val())) {
      $("#tbmatkhau").html("");
      return false;
    }
    $("#tbmatkhau").html("*");
    return true;
}
function ktnhaplai(){
  var maunhaplai = /^[A-Za-z0-9(!@#$%^&*)_]{6,20}$/;
  if ($("#nhaplaimatkhau").val()==""){
    $("#tbnhaplaimatkhau").html("Bắt buộc nhập");
    return false
  }
  console.log(maunhaplai);
    if (!maunhaplai.test($("#nhaplaimatkhau").val())) {
      $("#tbnhaplaimatkhau").html("");
      return false;
    }
    $("#tbnhaplaimatkhau").html("*");
    return true;
}
function ktten() {
    var mauten = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
    if ($("#hoten").val() == "") {
      $("#tbhoten").html("Bắt buộc nhập");
      return false;
    }
    console.log(mauten);
    if (!mauten.test($("#hoten").val())) {
      $("#tbhoten").html("Chữ cái đầu phải viết hoa !!");
      return false;
    }
    $("#tbhoten").html("*");
    return true;
  }
  function ktemail() {
    var mauemail = /[A-Za-z0-9]+(@iuh.edu.vn){1}$/;
    if ($("#email").val() == "") {
      $("#tbeamil").html("Bắt buộc nhập");
      return false;
    }

    if (!mauemail.test($("#email").val())) {
      $("#tbemail").html("*Emai có dạng: xxxxx@iuh.edu.vn !!");
      return false;
    }
    $("#tbemail").html("*");
    return true;
  }
  function ktdiachi() {
    var maudc = /([A-Z])$/;
    if ($("#diachi").val() == "") {
      $("#tbdiachi").html("Bắt buộc nhập");
      return false;
    }
    console.log(maudc);
    if (!maudc.test($("#diachi").val())) {
      $("#tbdiachi").html("* Chữ cái phải viết hoa !!");
      return false;
    }
    $("#tbdiachi").html("*");
    return true;
  }
  function ktrasdt() {
    var mausdt = /(^0{1})+[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
    if ($("#sdt").val() == "") {
        $("#tbsdt").html("Bắt buộc nhập");
        return false;
      }
    if (!mausdt.test($("#sdt").val())) {
      $("#tbsdt").html("0xxx-xxx-xxx");
      return false;
    }
    $("#tbsdt").html("*");
    return true;
  }

  

  var ten = document.getElementById("hoten");
  var email = document.getElementById("email");
  var diachi = document.getElementById("diachi");
  var sdt = document.getElementById("sdt");
  let d = 1;

