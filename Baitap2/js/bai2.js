// Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E).

var B = "Bố";
var M = "Mẹ";
var A = "Anh Trai";
var E = "Em Gái";
var F, E, G, H, Z, K;
var thanhVien = A;
switch (thanhVien) {
  case B:
    console.log("Chào Bố");
    break;
  case M:
    console.log("Chào Mẹ");
    break;
  case A:
    console.log("Chào Anh Trai");
    break;
  case E:
    console.log("Chào Em Gái");
    break;
  default:
    console.log("Chào người lạ");
}
