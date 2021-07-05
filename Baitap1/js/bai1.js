// Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
function hienThi() {
  var ketQuaEL = document.getElementById("ketQua");
  ketQuaEL.innerHTML = "";
  var thuTuEL = document.createElement("p");
  thuTuEL.innerHTML = "Sắp xếp dãy số theo thứ tự tăng dần : " + tinhThutu();
  ketQuaEL.appendChild(thuTuEL);
}

function tinhThutu() {
  var Number1 = +document.getElementById("soMot").value;
  var Number2 = +document.getElementById("soHai").value;
  var Number3 = +document.getElementById("soBa").value;
  thuTu = "";

  if (Number1 >= Number2 && Number2 >= Number3) {
    thuTu = Number3 + " ; " + Number2 + " ; " + Number1;
    return thuTu;
  }
  if (Number1 >= Number3 && Number2 <= Number3) {
    thuTu = Number2 + " ; " + Number3 + " ; " + Number1;
    return thuTu;
  }
  if (Number2 >= Number1 && Number1 >= Number3) {
    thuTu = Number3 + " ; " + Number1 + " ; " + Number2;
    return thuTu;
  }
  if (Number2 >= Number3 && Number1 <= Number3) {
    thuTu = Number1 + " ; " + Number3 + " ; " + Number2;
    return thuTu;
  }
  if (Number3 >= Number2 && Number1 <= Number2) {
    thuTu = Number1 + " ; " + Number2 + " ; " + Number3;
    return thuTu;
  }
  thuTu = Number2 + " ; " + Number1 + " ; " + Number3;
  return thuTu;
}
