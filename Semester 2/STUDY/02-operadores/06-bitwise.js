// Decimal: 0,1,2,3,4,5,6,7,8,9
// Binario: 0,1
// bit: 0 o 1
// Byte: 8 bits
// Byte: 0000 0000 -> 0;
// Byte: 0000 0001 -> 1;
// Byte: 0000 0010 -> 2;
// Byte: 0000 0011 -> 3;
// Byte: 0000 0100 -> 4;
// Byte: 0000 0101 -> 5;
// Byte: 0000 0110 -> 6;

// Operador Bitwise OR / Se ponen los dos números uno encima del otro y donde haya 1 queda 1.
console.log(1 | 3); // 0000 0011 = 3 (se compara los dos numeros en base 2 y se hace una operación AND.
console.log(1 | 4); // 0000 0101 = 5 "
console.log(3 | 5); // 0000 0111 = 7

// Operador Bitwise AND / Se ponen los dos números uno encima del otro y deben ser los dos 1 para que quede 1.
console.log(1 & 3); // 0000 0001 = 1
console.log(1 & 4); // 0000 0000 = 0
console.log(3 & 5); // 0000 0001 = 1