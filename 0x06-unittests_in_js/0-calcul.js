// Round a and b and return the sum of it
function calculateNumber(a, b) {
    const rounded_a = Math.round(a);
    const rounded_b = Math.round(b);
    return rounded_a + rounded_b;
}

module.exports = calculateNumber;
