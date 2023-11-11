Bài tập 1
let a = +prompt("Nhập vào số a, tôi sẽ cho bạn kết quả của số a bình phương");
alert(a = a*a);

Bài tập 2
function tinhtoan() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let S = a * b;
    document.getElementById("result").innerHTML = "Đây là diện tích hình chữ nhật: " + S;
}

Bài tập 3
a,Nhập vào a, hiển thị ra chu vi và diện tích và hình vuông độ dài cạnh a:
function tinhtoan() {
    let a = +document.getElementById("a").value;
    let S = a * a;
    let P = a * 4;
    document.getElementById("result1").innerHTML = "Đây là chu vi hình vuông: " + P;
    document.getElementById("result2").innerHTML = "Đây là diện tích hình vuông: " + S;
}