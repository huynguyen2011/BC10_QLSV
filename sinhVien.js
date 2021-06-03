// Tạo lớp đối tượng sinhVien
// khi tạo lớp đối tượng: trong bài có bao nhiêu dữ liệu đầu vào thì tạo bấy nhiêu tham số
function SinhVien(
  _maSV,
  _tenSV,
  _email,
  _matKhau,
  _ngaySinh,
  _khoaHoc,
  _diemToan,
  _diemLy,
  _diemHoa
) {
  // Viết hàm khởi tạo những thuộc tính & phương thức
  // thuộc tính khi tạo phải this.
  this.maSV = _maSV;
  this.tenSV = _tenSV;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngaySinh = _ngaySinh;
  this.khoaHoc = _khoaHoc;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;
  //tạo thuộc tính diemTB để hứng điểm khi tính xong phương thức tinhDTB
  this.diemTB = 0;

  this.tinhDTB = function () {
    this.diemTB =
      (parseFloat(this.diemToan) +
        parseFloat(this.diemLy) +
        parseFloat(this.diemHoa)) /
      3;
    return this.diemTB;
  };
}
