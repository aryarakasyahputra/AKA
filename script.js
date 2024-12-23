// Recursive function to convert binary to decimal
function binaryToDecimal(binary, index = 0) {
    if (binary.length === 0) return 0;
    return (
        parseInt(binary[binary.length - 1]) * Math.pow(2, index) +
        binaryToDecimal(binary.slice(0, -1), index + 1)
    );
}

// Recursive function to convert decimal to binary
function decimalToBinary(decimal) {
    if (decimal === 0) return '';
    return decimalToBinary(Math.floor(decimal / 2)) + (decimal % 2);
}

function convertBinaryToDecimal() {
    const binary = document.getElementById('binaryInput').value;
    if (!/^[01]+$/.test(binary)) {
        document.getElementById('binaryToDecimalResult').textContent = 'Invalid binary number';
        return;
    }
    const decimal = binaryToDecimal(binary);
    document.getElementById('binaryToDecimalResult').textContent = `Decimal: ${decimal}`;
}

function convertDecimalToBinary() {
    const decimal = parseInt(document.getElementById('decimalInput').value, 10);
    if (isNaN(decimal) || decimal < 0) {
        document.getElementById('decimalToBinaryResult').textContent = 'Invalid decimal number';
        return;
    }
    const binary = decimal === 0 ? '0' : decimalToBinary(decimal);
    document.getElementById('decimalToBinaryResult').textContent = `Binary: ${binary}`;
}
