//alert("Tôi yêu rikkei academy")

// bài 2
// let studentId;
// let studentName;

// if(confirm("Bạn có phải học viên RA không?")){
//     studentId = prompt("Nhập mã học viên");
//     studentName = prompt("Nhập tên học viên")
//     console.log("studentId, studentName", studentId, studentName)
// }


// bài 3
// let nameA = prompt("Nhập name");
// let admin = prompt("Nhập admin");
// admin = nameA;
// console.log("admin", admin)

// bài 4
//console.log("Tuổi của bạn", 2023 - Number(prompt("Năm sinh của bạn")))\

// bài 5
// let rate = Number(prompt("Nhập vào hệ số lương?"))
// let basicSalary = Number(prompt("Nhập vào lương cơ bản?"))
// let commission = Number(prompt("Nhập vào tỷ lệ hoa hồng?"))
// let basic = (rate+commission)*basicSalary;
// console.log("basic", basic)

// bài 6
// let rate = Number(prompt("Nhập vào hệ số lương?"))
// let basicSalary = Number(prompt("Nhập vào lương cơ bản?"))
// let commission = Number(prompt("Nhập vào tỷ lệ hoa hồng?"))
// let basic = (rate+commission)*basicSalary;
// console.log("basic", basic)


// bài 10

// alert(Number(prompt("Nhập 1 số")) % 2 == 0 ? "Số chẳn" : "Số lẻ")

// bài 11
// let a = Number(prompt("A"));
// let b = Number(prompt("B"));
// let c = Number(prompt("C"));

/* So sánh a với b 
    => nếu a hơn thì so sánh a và c để tìm max 
    => nếu b hơn thì so sánh b và c để tìm max
*/
// let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

/* So sánh a với b */
// let min = (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);

// console.log(`Giá trị lớn nhất là:` + max);
// console.log(`Giá trị nhỏ nhất là:` + min);

// bài 12
// let number = Number(prompt
//     ("Nhập vào số 3 chữ số!"));

// let so1 = Math.floor(number / 100);
// let so2 = Math.floor(number / 10) % 10;
// let so3 = number % 10;

// console.log("Test", "" + so3 + so2 + so1)




// bài 13
let number = Number(prompt("Nhập vào số 3 chữ số!"));

alert(number % 3 != 0 ? number % 3 : 0)
