//console.log("đã vào 2")

let a = 5;
a = 7;
//console.log("a1", a) // 7

a += 7; // a = a + 7

//console.log("a2", a) // 14

a -= 7; // a = a - 7

//console.log("a3", a) // 7

a *= 7; // a = a * 7

////console.log("a4", a) // 49

a /= 7; // a = a / 7

console.log("a5", a) // 7

a %= 7; // a = a % 7

//console.log("a6", a) // 0


let test = a==7;
let test2 = a==0;
let test3 = a==="0";
let test4 = a=="0";
//console.log("test test2 test3 test4", test, test2, test3, test4)

let test5 = 5;
/*
    Giá trị 
    test5 => 5
    5 => 0
    5 === 0 => false => true
*/
//console.log("test5", test5 != 0)
/*
    Giá trị 
    test5 => 5
    5 => 5
    5 === 5 => true => false
*/
//console.log("test6", test5 !== 5)
/*
    Giá trị 
    test5 => 5
    "5" => "5"
    5 === "5" => false => true
*/
//console.log("test7", test5 !== "5") 

/*
    Giá trị 
    test5 => 5
    "5" => "abc"
    5 === "abc " => false => true
*/
//console.log("test8", test5 !== "abc") 


/*
    Giá trị 
    test5 => 5
    "5" => "5"
    5 == "5" => true => false
*/
//console.log("test9", test5 != "5") 

let d = 5;
let c = 9;

// console.log("dc", d < c)


// console.log("dc", d > c)

// console.log("dc", d >= c)


// console.log("dc", d > 5)

// console.log("dc", d >= 5)

// console.log("dc", d < 5)

// console.log("dc", d <= 5)

// console.log("dc", d <= "5") // 5 < "5" 5 == "5"

// console.log("dcc", d == 9 && d == 5 && d < 7)
// console.log("dcc", d == 9 || d == 5)
// console.log("dcc", !(d == 9 || d == 5))

let b = 5

console.log("test1", b == 5 ? "Xin chào" : "Bái bai")
console.log("test2", b > 5 ? "Bái Bai" : "Xin Chào")

let cb = b == 5 ? "Xin chào" : "Bái bai";
console.log("cb", cb)