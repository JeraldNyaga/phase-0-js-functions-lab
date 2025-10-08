function calculateTax(amount) {
    return 0.1 * amount
}

function convertToUpperCase(text) {
    return text.toUpperCase()
}

function findMaximum(num1, num2) {
    const res = num1 ? num1 >= num2 : num2
    if (res) {
        return num1
    } else {
        return num2
    }
}

// console.log(findMaximum(6, 6))

function isPalindrome(word) {
    if (word === "") {
        return true
    }
    for (let index = 0; index < word.length; index++) {
        if (word[index] !== word[(word.length - 1) - index]) {
            return false
        }
        return true
    }
}


function calculateDiscountedPrice(originalPrice, discountedPercentage) {
    return originalPrice - (originalPrice * discountedPercentage / 100)
}

console.log(calculateDiscountedPrice(100, 20))

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };