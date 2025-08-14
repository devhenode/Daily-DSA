// This is how to look a String

let number = 12345
let number_str = number.toString();

for (let digit_char of number_str) {
    let digit = parseInt(digit_char);

    
    console.log(`Digits: ${digit}`);
    
    
}

/* Output 

Digits: 1
Digits: 2
Digits: 3
Digits: 4
Digits: 5

*/