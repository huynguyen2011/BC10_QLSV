function Validation() {
  this.kiemTraRong = function (input, divId, mess) {
    // kiểm tra validation cho input maSV
    //.trim() để trường hợp user vô tình nhấn space cũng k nhập được dữ liệu
    if (input.trim() === "") {
      // thông báo lỗi
      getELe(divId).innerHTML = mess;
      //cách 1
      // getELe("divMaErr").classList.add("alert"); // dùng để add background cho dòng thông báo
      // getELe("divMaErr").classList.add("alert-danger");
      //cách 2
      getELe(divId).className = "alert alert-danger";
      return false;
    } else {
      getELe(divId).innerHTML = "";
      getELe(divId).className = "";
      return true;
    }
  };

  this.kiemTraDoDaiKyTu = function (input, divId, mess, min, max) {
    if (input.length >= min && input.length <= max) {
      getELe(divId).innerHTML = "";
      getELe(divId).className = "";
      return true;
    }
    getELe(divId).innerHTML = mess;
    getELe(divId).className = "alert alert-danger";
    return false;
  };

  this.kiemTraKyTuChuoi = function (input, divId, mess) {
    var letter =
      "^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW|_]+$";
    // hàm match là hàm của javascript
    if (input.match(letter)) {
      getELe(divId).innerHTML = "";
      getELe(divId).className = "";
      return true;
    }
    getELe(divId).innerHTML = mess;
    getELe(divId).className = "alert alert-danger";
    return false;
  };

  this.kiemTraEmail = function (input, divId, mess) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(letter)) {
      getELe(divId).innerHTML = "";
      getELe(divId).className = "";
      return true;
    }
    getELe(divId).innerHTML = mess;
    getELe(divId).className = "alert alert-danger";
    return false;
  };

  this.kiemTraMatKhau = function (input, divId, mess) {
    var letter =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (input.match(letter)) {
      getELe(divId).innerHTML = "";
      getELe(divId).className = "";
      return true;
    }
    getELe(divId).innerHTML = mess;
    getELe(divId).className = "alert alert-danger";
    return false;
  };

  this.kiemTraNgaySinh = function (input, divId, mess) {
    var letter = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if (input.match(letter)) {
      getELe(divId).innerHTML = "";
      getELe(divId).className = "";
      return true;
    }
    getELe(divId).innerHTML = mess;
    getELe(divId).className = "alert alert-danger";
    return false;
  };

  // tham số idSelect là id của thẻ select bên html
  // selectedIndex là thuộc tính có chọn khóa học không
  // option ở dưới được xem như 1 mảng có số thứ tự 0-2, set selectedIndex != 0 để bắt user phải chọn KH01 hoặc KH02
  // <option>Chọn khóa học</option>
  //  <option>KH001</option>
  //  <option>KH002</option>
  this.kiemTraKhoaHoc = function (idSelect, divId, mess) {
    if (getELe(idSelect).selectedIndex != 0) {
      getELe(divId).innerHTML = "";
      getELe(divId).className = "";
      return true;
    }
    getELe(divId).innerHTML = mess;
    getELe(divId).className = "alert alert-danger";
    return false;
  };

  this.kiemTraSo = function (input, divId, mess) {
    var letter = /^[0-9]+$/;
    if (input.match(letter)) {
      getELe(divId).innerHTML = "";
      getELe(divId).className = "";
      return true;
    }
    getELe(divId).innerHTML = mess;
    getELe(divId).className = "alert alert-danger";
    return false;
  };

  this.kiemTraMaSVTrung = function (input, divId, mess, arr) {
    /**
     * 1. duyệt mảng arr
     * 2. kiểm tra nếu như item.maSV trùng với input => trùng mã SV => false
     * 3. ngược lại => không trùng => true
     */
    var status = true;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].maSV === input) {
        status = false;
        break;
      }
    }
    if (status) {
      getELe(divId).innerHTML = "";
      getELe(divId).className = "";
      return true;
    }
    getELe(divId).innerHTML = mess;
    getELe(divId).className = "alert alert-danger";
    return false;
  };
}
