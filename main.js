// tạo mảng để lưu nhiều sinh viên khác nhau
// tạo mảng bên file danhsachsinhvien
//   var list = [];

// tạo đối tượng dssv từ lớp đối tượng DanhSachSinhVien
var dssv = new DanhSachSinhVien();

// tạo đối tượng validation từ lớp đối tượng validation
var validation = new Validation();

function addUser() {
  console.log("12121212huynguyen2");
}

function getELe(id) {
  return document.getElementById(id);
}

// lấy data từ LocalStorage để show ra ngoài table
getLocalStorage();

function layDuLieuDauVao(isAdd) {
  var _maSV = getELe("txtMaSV").value;
  var _tenSV = getELe("txtTenSV").value;
  var _email = getELe("txtEmail").value;
  var _matKhau = getELe("txtPass").value;
  var _ngaySinh = getELe("txtNgaySinh").value;
  var _khoaHoc = getELe("khSV").value;
  var _diemToan = getELe("txtDiemToan").value;
  var _diemLy = getELe("txtDiemLy").value;
  var _diemHoa = getELe("txtDiemHoa").value;
  //isValid: là true => cho phép thêm sinh viên vào mảng
  var isValid = true;

  /**
   * Validation (kiểm tra tính hợp lệ của dữ liệu đầu vào)
   */
  // kiểm tra validation cho input maSV
  if (isAdd) {
    isValid &=
      validation.kiemTraRong(
        _maSV,
        "divMaErr",
        "(*) Mã Sinh Viên Không Dc Rỗng"
      ) &&
      validation.kiemTraDoDaiKyTu(
        _maSV,
        "divMaErr",
        "(*) Độ dài từ 4 - 10",
        4,
        10
      ) &&
      validation.kiemTraMaSVTrung(
        _maSV,
        "divMaErr",
        "(*) Mã Sinh Viên đã tồn tại",
        dssv.list
      );
  }

  isValid &=
    validation.kiemTraRong(
      _tenSV,
      "divTenErr",
      "(*) Tên Sinh Viên Không Dc Rỗng"
    ) &&
    validation.kiemTraKyTuChuoi(
      _tenSV,
      "divTenErr",
      "(*) Tên Sinh Viên phải là chữ"
    );

  isValid &=
    validation.kiemTraRong(_email, "divEmailErr", "(*) Email Không Dc Rỗng") &&
    validation.kiemTraEmail(
      _email,
      "divEmailErr",
      "(*) Email Không đúng định dạng"
    );

  isValid &=
    validation.kiemTraRong(
      _matKhau,
      "divMatKhauErr",
      "(*) Mật Khẩu Không Dc Rỗng"
    ) &&
    validation.kiemTraMatKhau(
      _matKhau,
      "divMatKhauErr",
      "(*) Mật Khẩu Không đúng định dạng"
    );

  isValid &=
    validation.kiemTraRong(
      _ngaySinh,
      "divNgaySinhErr",
      "(*) Ngày Sinh Không Dc Rỗng"
    ) &&
    validation.kiemTraNgaySinh(
      _ngaySinh,
      "divNgaySinhErr",
      "(*) Ngày Sinh Không đúng định dạng"
    );

  isValid &= validation.kiemTraKhoaHoc(
    "khSV",
    "divKHErr",
    "(*) Hãy chọn khóa học"
  );

  isValid &=
    validation.kiemTraRong(
      _diemToan,
      "divToanErr",
      "(*) Điểm Toán Không Dc Rỗng"
    ) &&
    validation.kiemTraSo(
      _diemToan,
      "divToanErr",
      "(*) Điểm Không đúng định dạng"
    );

  isValid &=
    validation.kiemTraRong(_diemLy, "divLyErr", "(*) Điểm Lý Không Dc Rỗng") &&
    validation.kiemTraSo(_diemLy, "divLyErr", "(*) Điểm Không đúng định dạng");

  isValid &=
    validation.kiemTraRong(
      _diemHoa,
      "divHoaErr",
      "(*) Điểm Hóa Không Dc Rỗng"
    ) &&
    validation.kiemTraSo(
      _diemHoa,
      "divHoaErr",
      "(*) Điểm Không đúng định dạng"
    );

  //tạo đối tượng sinhVien từ lớp tối tượng SinhVIen bằng từ khóa new

  if (isValid) {
    var sinhVien = new SinhVien(
      _maSV,
      _tenSV,
      _email,
      _matKhau,
      _ngaySinh,
      _khoaHoc,
      _diemToan,
      _diemLy,
      _diemHoa
    );
    return sinhVien;
  }
  return null;
}

/**
 * Thêm sinh viên
 * DOM tới button thêm sinh viên bằng sự kiện onclick gán cho nó 1 function
 * cách này gọi là gán gián tiếp
 * cách 2
 */

// getELe("btnAdd").onclick = function () {
//     console.log(123);
// }

/**
 * cách 3
 * addEventListener có tên gọi callback function là hàm có 2 tham số:
 * + tham số 1 là sự kiện sẽ dc sử dụng
 * + tham số 2 là hàm dc kích hoạt khi tham số 1 dc chọn
 */
getELe("btnAdd").addEventListener("click", function (event) {
  event.preventDefault();
  var sinhVien = layDuLieuDauVao(true);

  //lấy các thông tin từ user nhập vào từ input

  // var _maSV = getELe("txtMaSV").value;
  // var _tenSV = getELe("txtTenSV").value;
  // var _email = getELe("txtEmail").value;
  // var _matKhau = getELe("txtPass").value;
  // var _ngaySinh = getELe("txtNgaySinh").value;
  // var _khoaHoc = getELe("khSV").value;
  // var _diemToan = getELe("txtDiemToan").value;
  // var _diemLy = getELe("txtDiemLy").value;
  // var _diemHoa = getELe("txtDiemHoa").value;

  //tạo lớp đối tượng sinhVien bên sinhVien.js
  //   var sinhVien = {
  //     //key:value

  //     maSV: _maSV,
  //     tenSV: _tenSV,
  //     email: _email,
  //     matKhau: _matKhau,
  //     ngaySinh: _ngaySinh,
  //     khoaHoc: _khoaHoc,
  //     diemToan: _diemToan,
  //     diemLy: _diemLy,
  //     diemHoa: _diemHoa,

  //     tinhDTB: function () {
  //       //cách return giá trị về thẳng không cần khai báo biến
  //       return (
  //         (parseFloat(this.diemToan) +
  //           parseFloat(this.diemLy) +
  //           parseFloat(this.diemHoa)) /
  //         3
  //       );
  //     },
  //   };

  //isValid: là true => cho phép thêm sinh viên vào mảng
  // var isValid = true;

  /**
   * Validation (kiểm tra tính hợp lệ của dữ liệu đầu vào)
   */
  // kiểm tra validation cho input maSV
  // isValid &=
  //   validation.kiemTraRong(
  //     _maSV,
  //     "divMaErr",
  //     "(*) Mã Sinh Viên Không Dc Rỗng"
  //   ) &&
  //   validation.kiemTraDoDaiKyTu(
  //     _maSV,
  //     "divMaErr",
  //     "(*) Độ dài từ 4 - 10",
  //     4,
  //     10
  //   ) &&
  //   validation.kiemTraMaSVTrung(
  //     _maSV,
  //     "divMaErr",
  //     "(*) Mã Sinh Viên đã tồn tại",
  //     dssv.list
  //   );

  // isValid &=
  //   validation.kiemTraRong(
  //     _tenSV,
  //     "divTenErr",
  //     "(*) Tên Sinh Viên Không Dc Rỗng"
  //   ) &&
  //   validation.kiemTraKyTuChuoi(
  //     _tenSV,
  //     "divTenErr",
  //     "(*) Tên Sinh Viên phải là chữ"
  //   );

  // isValid &=
  //   validation.kiemTraRong(_email, "divEmailErr", "(*) Email Không Dc Rỗng") &&
  //   validation.kiemTraEmail(
  //     _email,
  //     "divEmailErr",
  //     "(*) Email Không đúng định dạng"
  //   );

  // isValid &=
  //   validation.kiemTraRong(
  //     _matKhau,
  //     "divMatKhauErr",
  //     "(*) Mật Khẩu Không Dc Rỗng"
  //   ) &&
  //   validation.kiemTraMatKhau(
  //     _matKhau,
  //     "divMatKhauErr",
  //     "(*) Mật Khẩu Không đúng định dạng"
  //   );

  // isValid &=
  //   validation.kiemTraRong(
  //     _ngaySinh,
  //     "divNgaySinhErr",
  //     "(*) Ngày Sinh Không Dc Rỗng"
  //   ) &&
  //   validation.kiemTraNgaySinh(
  //     _ngaySinh,
  //     "divNgaySinhErr",
  //     "(*) Ngày Sinh Không đúng định dạng"
  //   );

  // isValid &= validation.kiemTraKhoaHoc(
  //   "khSV",
  //   "divKHErr",
  //   "(*) Hãy chọn khóa học"
  // );

  // isValid &=
  //   validation.kiemTraRong(
  //     _diemToan,
  //     "divToanErr",
  //     "(*) Điểm Toán Không Dc Rỗng"
  //   ) &&
  //   validation.kiemTraSo(
  //     _diemToan,
  //     "divToanErr",
  //     "(*) Điểm Không đúng định dạng"
  //   );

  // isValid &=
  //   validation.kiemTraRong(_diemLy, "divLyErr", "(*) Điểm Lý Không Dc Rỗng") &&
  //   validation.kiemTraSo(_diemLy, "divLyErr", "(*) Điểm Không đúng định dạng");

  // isValid &=
  //   validation.kiemTraRong(
  //     _diemHoa,
  //     "divHoaErr",
  //     "(*) Điểm Hóa Không Dc Rỗng"
  //   ) &&
  //   validation.kiemTraSo(
  //     _diemHoa,
  //     "divHoaErr",
  //     "(*) Điểm Không đúng định dạng"
  //   );

  //tạo đối tượng sinhVien từ lớp tối tượng SinhVIen bằng từ khóa new
  // var sinhVien = new SinhVien(
  //   _maSV,
  //   _tenSV,
  //   _email,
  //   _matKhau,
  //   _ngaySinh,
  //   _khoaHoc,
  //   _diemToan,
  //   _diemLy,
  //   _diemHoa
  // );

  //kiểm tra nếu thông tin hợp lệ mới cho nhập sinh viên

  if (sinhVien) {
    sinhVien.tinhDTB();
    //push đối tượng sinhVien vào mảng list
    dssv.themSinhVien(sinhVien);

    // xuất nội dung ra table
    taoBang(dssv.list);

    // lưu danh sách xuống LocalStorage
    setLocalStorage();
  }
});

//arr = array = danh sach sinh vien
function taoBang(arr) {
  // reset tbody (để mỗi lần thêm sinh viên chỉ xuất hiện 1 dòng mới)
  getELe("tbodySinhVien").innerHTML = "";

  for (var i = 0; i < arr.length; i++) {
    //tạo dòng (tr)
    //document.createElement dùng để tạo thẻ mới
    var tagTR = document.createElement("tr");

    // tạo cột (td)- 7 cột (bước này chỉ mới tạo cột chưa có nội dung)
    var tagTD_MaSV = document.createElement("td");
    var tagTD_TenSV = document.createElement("td");
    var tagTD_Email = document.createElement("td");
    var tagTD_NgaySinh = document.createElement("td");
    var tagTD_KhoaHoc = document.createElement("td");
    var tagTD_DTB = document.createElement("td");
    var tagTD_Button_Edit = document.createElement("td");
    var tagTD_Button_Delete = document.createElement("td");

    // tạo nội dung cho 7 cột
    tagTD_MaSV.innerHTML = arr[i].maSV;
    tagTD_TenSV.innerHTML = arr[i].tenSV;
    tagTD_Email.innerHTML = arr[i].email;
    tagTD_NgaySinh.innerHTML = arr[i].ngaySinh;
    tagTD_KhoaHoc.innerHTML = arr[i].khoaHoc;
    tagTD_DTB.innerHTML = arr[i].diemTB;
    tagTD_Button_Edit.innerHTML =
      '<button class="btn btn-info" onclick="suaSinhVien(\'' +
      arr[i].maSV +
      "')\">Sửa</button>";
    tagTD_Button_Delete.innerHTML =
      '<button class="btn btn-danger" onclick="xoaSinhVien(\'' +
      arr[i].maSV +
      "')\">Xóa</button>";

    //" + arr[i].maSV +" là nối chuỗi
    //  \' \' có nghĩa là dấu nháy đơn nằm ngoài cùng
    //appendChild 7 cột vào dòng (appenChild dùng để lồng 1 thẻ vào 1 thẻ khác)
    tagTR.appendChild(tagTD_MaSV);
    tagTR.appendChild(tagTD_TenSV);
    tagTR.appendChild(tagTD_Email);
    tagTR.appendChild(tagTD_NgaySinh);
    tagTR.appendChild(tagTD_KhoaHoc);
    tagTR.appendChild(tagTD_DTB);
    tagTR.appendChild(tagTD_Button_Edit);
    tagTR.appendChild(tagTD_Button_Delete);
    //appendChild dòng vào tbody
    getELe("tbodySinhVien").appendChild(tagTR);
  }
}

/**
 *  Sửa sinh viên
 */

function suaSinhVien(maSV) {
  var sinhVien = dssv._layThongTinSinhVien(maSV);

  // mở lại button update
  getELe("btnUpdate").style.display = "inline-block";

  // DOM tới các thẻ input show ra vablue
  getELe("txtMaSV").value = sinhVien.maSV;
  getELe("txtMaSV").disabled = true;
  // set maSV = disabled để lock mã sinh viên lại không cho user sửa

  getELe("txtTenSV").value = sinhVien.tenSV;
  getELe("txtEmail").value = sinhVien.email;
  getELe("txtPass").value = sinhVien.matKhau;
  getELe("txtNgaySinh").value = sinhVien.ngaySinh;
  getELe("khSV").value = sinhVien.khoaHoc;
  getELe("txtDiemToan").value = sinhVien.diemToan;
  getELe("txtDiemLy").value = sinhVien.diemLy;
  getELe("txtDiemHoa").value = sinhVien.diemHoa;
}

/**
 *  Xóa sinh viên
 */
function xoaSinhVien(maSV) {
  dssv._xoaSinhVien(maSV);
  console.log(dssv.list);
  taoBang(dssv.list);
  setLocalStorage();
}

/**
 *  Cập nhập sinh viên
 */
getELe("btnUpdate").addEventListener("click", function () {
  /**
   * lấy thông tin mới từ các thẻ input
   */
  var sinhVien = layDuLieuDauVao(false);
  sinhVien.tinhDTB();
  dssv._capNhapSinhVien(sinhVien);
  taoBang(dssv.list);
  setLocalStorage();
});

/**
 *  Reset from
 */
getELe("btnReset").addEventListener("click", function () {
  // Dom tới các thẻ input gán vablue là rỗng hết
  getELe("formSV").reset();
  getELe("btnUpdate").style.display = "none";
  getELe("txtMaSV").disabled = false;

  // Dom tới các thẻ div show ERR reset về ban đầu
});

/**
 *  Tìm Kiếm Sinh Viên
 */
getELe("txtSearch").addEventListener("keyup", function () {
  var keyWord = getELe("txtSearch").value;
  var mangTimKiem = dssv._timKiemSinhVien(keyWord);
  taoBang(mangTimKiem);
});

// set hàm để lưu dữ liệu xuống local
// muốn lưu xuống local phải chuyển dữ liệu về kiểu string
// tất cả các object hay array đều là kiểu json
function setLocalStorage() {
  // var arrString=JSON.stringify(); là cứ pháp chuyển từ kiểu json về kiểu string
  var arrString = JSON.stringify(dssv.list);
  localStorage.setItem("DSSV", arrString);
}

// set hàm để lấy dữ liệu dưới local
function getLocalStorage() {
  // chuyển dữ liệu từ kiểu string về json
  if (localStorage.getItem("DSSV")) {
    var data = localStorage.getItem("DSSV");
    dssv.list = JSON.parse(data);
    taoBang(dssv.list);
  }
}
