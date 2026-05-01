var choice = prompt("Welcome to Area Calculator.\nPlease enter the number corresponding to your choice:\n1. Area of Rectangle\n2. Area of a Triangle\n3. Area of a Circle\n4. Area of a Parallelogram");

if (choice == "1"){
    var l = prompt("Enter the length")
    var w = prompt("Enter the width")
    var result = Number(l) * Number(w)
    alert("The area is " + result)
}

if (choice == "2"){
    var h = prompt("Enter the height")
    var b = prompt("Enter the base")
    var result = Number(h) * Number(b) / 2
    alert("The area is " + result)
}

if (choice == "3") {
    var r = prompt("Enter the radius")
    var result = 3.1415926535 * Number(r) * Number(r)
    alert("The Area is " + result)
}

if (choice == "4") {
    var h = prompt("Enter the height")
    var cb = prompt("Enter the corresponding base")
    var result = Number(h) * Number(cb)
    alert("The Area is " + result)
}