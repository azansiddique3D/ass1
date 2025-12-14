function checkCharType(char) {
    // Ensure the input is a single character string or a number
    if (typeof char !== 'string' && typeof char !== 'number') {
        return "Invalid input type.";
    }
    
    // If it's a number type, treat it as a string for charCodeAt
    const inputChar = String(char); 

    if (inputChar.length !== 1) {
        return "Please enter a single character or number.";
    }

    const asciiCode = inputChar.charCodeAt(0);

    if (asciiCode >= 48 && asciiCode <= 57) {
        // ASCII for 0-9 is 48-57
        return `'${inputChar}' is a number.`;
    } else if (asciiCode >= 65 && asciiCode <= 90) {
        // ASCII for A-Z is 65-90
        return `'${inputChar}' is an uppercase letter.`;
    } else if (asciiCode >= 97 && asciiCode <= 122) {
        // ASCII for a-z is 97-122
        return `'${inputChar}' is a lowercase letter.`;
    } else {
        return `'${inputChar}' is a non-alphanumeric character.`;
    }
}

// Example usage:
console.log(checkCharType('A')); // Output: 'A' is an uppercase letter.
console.log(checkCharType('7')); // Output: '7' is a number.
console.log(checkCharType('b')); // Output: 'b' is a lowercase letter.
console.log(checkCharType(5));  // Output: '5' is a number.
