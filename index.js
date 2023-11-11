// Bài tập 1
// let a = +prompt("Nhập vào số a, tôi sẽ cho bạn kết quả của số a bình phương");
// alert(a = a*a);

// Bài tập 2
function tinhtoan() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let S = a * b;
    document.getElementById("result").innerHTML = "Đây là diện tích hình chữ nhật: " + S;
}

