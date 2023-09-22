// Nút phân trang
function themNutPhanTrang(soTrang, trangHienTai) {
    var divPhanTrang = document.getElementsByClassName('pagination')[0];

    var k = createLinkFilter('remove', 'page'); // xóa phân trang cũ
    if (k.indexOf('?') > 0) k += '&';
    else k += '?'; // thêm dấu

    if (trangHienTai > 1) // Nút về phân trang trước
        divPhanTrang.innerHTML = `<a href="` + k + `page=` + (trangHienTai - 1) + `"><i class="fa fa-angle-left"></i></a>`;

    if (soTrang > 1) // Chỉ hiện nút phân trang nếu số trang > 1
        for (var i = 1; i <= soTrang; i++) {
            if (i == trangHienTai) {
                divPhanTrang.innerHTML += `<a href="javascript:;" class="current">` + i + `</a>`

            } else {
                divPhanTrang.innerHTML += `<a href="` + k + `page=` + (i) + `">` + i + `</a>`
            }
        }

    if (trangHienTai < soTrang) { // Nút tới phân trang sau
        divPhanTrang.innerHTML += `<a href="` + k + `page=` + (trangHienTai + 1) + `"><i class="fa fa-angle-right"></i></a>`
    }
}
// Tính toán xem có bao nhiêu trang + trang hiện tại,
// Trả về mảng sản phẩm trong trang hiện tại tính được
function tinhToanPhanTrang(list, vitriTrang) {
    var sanPhamDu = list.length % soLuongSanPhamMaxTrongMotTrang;
    var soTrang = parseInt(list.length / soLuongSanPhamMaxTrongMotTrang) + (sanPhamDu ? 1 : 0);
    var trangHienTai = parseInt(vitriTrang < soTrang ? vitriTrang : soTrang);

    themNutPhanTrang(soTrang, trangHienTai);
    var start = soLuongSanPhamMaxTrongMotTrang * (trangHienTai - 1);

    var temp = copyObject(list);

    return temp.splice(start, soLuongSanPhamMaxTrongMotTrang);
}