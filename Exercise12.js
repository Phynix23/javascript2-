// Discount Calculator

let price = 8000;
let discountPercent = 15;

let discountAmount = (price * discountPercent) / 100;
let finalPrice = price - discountAmount;

console.log(`Discount: ₦${discountAmount}`);
console.log(`Final price: ₦${finalPrice}`);