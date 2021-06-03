function DanhSachSinhVien() {
  this.list = []; // tạo mảng để lưu nhiều sinh viên
  // phương thức themSinhVien còn gọi là tính năng thêm sinh viên
  this.themSinhVien = function (sv) {
    this.list.push(sv);
  };

  this._timViTri = function (maSV) {
    /**
     *  tìm vị trí maSV muốn xóa thông qua mảng list
     *  0. tạo var index = -1;
     *  1. duyệt mảng this.list
     *  2. nếu item.maSV == maSV => lấy index(i)
     *  3. splice(index, 1);
     */
    var index = -1;
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].maSV == maSV) {
        index = i;
        break;
      }
    }
    return index;
  };

  this._xoaSinhVien = function (maSV) {
    var index = this._timViTri(maSV);
    // Xóa SV
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  };

  this._layThongTinSinhVien = function (maSV) {
    // lấy vị trí
    var index = this._timViTri(maSV);
    if (index !== -1) {
      return this.list[index];
    }
  };

  this._capNhapSinhVien = function (sinhVien) {
    // lấy vị trí
    var index = this._timViTri(sinhVien.maSV);
    if (index !== -1) {
      this.list[index] = sinhVien;
    }
  };

  // cách viết nằm trong lớp đối tượng
  // this._timKiemSinhVien = function (keyWord) {};
}
// cách viết nằm ngoài lớp đối tượng
DanhSachSinhVien.prototype._timKiemSinhVien = function (keyWord) {
  /**
   * 0. tạo mangTimKiem = [];
   * 1. duyệt mảng list
   * 2. nếu như keyWord trùng với sinhVien.tenSV
   *  => tìm thấy: thêm sinhVien vào mangTimKiem
   * 3. trả về mangTimKiem
   */

  var mangTimKiem = [];
  for (var i = 0; i < this.list.length; i++) {
    if (
      this.list[i].tenSV.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
    ) {
      mangTimKiem.push(this.list[i]);
    }
  }
  return mangTimKiem;
};
