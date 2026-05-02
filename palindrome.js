function palindrome(myString){
    var input = myString.replace(/[^A-Z0-9]/ig,"").toLowerCase();

    var reversedInput = input.split("").reverse().join("");

    if (input == reversedInput){
        document.write(myString + " is a palindrome ")
    }

    else {
        document.write(myString + " is not a palindrome")
    }
}

palindrome("shanelle")