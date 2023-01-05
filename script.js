function numberFunction(number) {
    if (number >= 10 && number <= 20) {
        console.log(number);
        return number;
    } else if (number < 100) {
        return number / 2;
    } else if (number < 10) {
        console.log(number * number);
    } else if (number >= 100 && number < 200) {
        return number;
    } else {
        return number * 2;
    }
}

document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("result").innerHTML = numberFunction(document.getElementById("number").value);
});
