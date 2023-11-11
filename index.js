// Bài tập 1
// let a = +prompt("Nhập vào số a, tôi sẽ cho bạn kết quả của số a bình phương");
// alert(a = a*a);
//
// Bài tập 2
// function tinhtoan() {
//     let a = +document.getElementById("a").value;
//     let b = +document.getElementById("b").value;
//     let S = a * b;
//     document.getElementById("result").innerHTML = "Đây là diện tích hình chữ nhật: " + S;
// }
//
// Bài tập 3
// a,Nhập vào a, hiển thị ra chu vi và diện tích và hình vuông độ dài cạnh a:
// function tinhtoan() {
//     let a = +document.getElementById("a").value;
//     let S = a * a;
//     let P = a * 4;
//     document.getElementById("result1").innerHTML = "Đây là chu vi hình vuông: " + P;
//     document.getElementById("result2").innerHTML = "Đây là diện tích hình vuông: " + S;
// }

// b,Nhập vào a và b, tính a^2, a^b
// function tinhtoan() {
//     let a = +document.getElementById("a").value;
//     let b = +document.getElementById("b").value;
//     let c = a ** b;
//     let d = a ** 2;
//     document.getElementById("result1").innerHTML = "Đây là a^b: " + c;
//     document.getElementById("result2").innerHTML = "Đây c a^2:" + d;
// }

// c,Nhập vào a và b, tính tổng các số từ a đến b
// function tinhtoan() {
//     let a = +document.getElementById("a").value;
//     let b = +document.getElementById("b").value;
//     let S = ((b - a + 1) * (a + b)) / 2;
//     document.getElementById("result").innerHTML = "Đây là tổng của dãy số trên S = " + S;
//
// }

// d,Nhập vào a là năm, in ra thế kỷ.
// function tinhtoan() {
//
//     let a = +(document.getElementById("a").value);
//     let b = ((a + 99) / 100) | 0;
//     document.getElementById('result').innerText = "Thế kỷ: " + b;
// }


// e,Nhập vào a, b, c, kiểm tra xem a, b, c có phải là 3 cạnh của:
//     1 tam giác?
//     1 tam giác cân?
//     1 tam giác đều?
//     1 tam giác vuông?

function Check() {

    let a = +(document.getElementById('a').value);
    let b = +(document.getElementById('b').value);
    let c = +(document.getElementById('c').value);
    if (a + b > c && a + c > b && b + c > a) {
        let result = "Đây là một tam giác ";
        if (a === b && b === c) {
            result += "đều";
        } else if (a === b || a === c || b === c) {
            result += "cân";
        } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
            result += "vuông";
        } else {
            result += "thường";
        }
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = "3 cạnh này không phải là 3 cạnh của 1 tam giác";
    }
}