
const decToBit = (num) => {
    return parseInt(num,10).toString(2);
}

const adjustStr = (a,b) => {
    diff = Math.abs(a.length - b.length)
    return [
        a.padStart(a.length+diff,'0'), 
        b.padStart(a.length+diff,'0')]
}

const bitwiseAND = (a, b) => {
    bit_a = decToBit(a);
    bit_b = decToBit(b);

    let iter = 0;
    let val_c = [];

    [bit_a,bit_b] = adjustStr(bit_a, bit_b)

    let c = [];
    for (let i = 0; i < bit_a.length; i++){        
        if(bit_a[i] === bit_b[i]){
            c.push(bit_a[i]);
        } else {
            c.push('0');
        }
    }
    return parseInt(c.join(''), 2);
}

const bitwiseOR = (a,b) => {
    let bit_a = decToBit(a);
    let bit_b = decToBit(b);

    [bit_a,bit_b] = adjustStr(bit_a, bit_b)
    let c = [];

    for (let i = 0; i < bit_a.length; i++){
        if (bit_a[i] === bit_b[i]){
            c.push(bit_a[i])
        } else {
            c.push('1')
        }
    }
    return parseInt(c.join(''),2);
}

const bitwiseXOR = (a,b) => {
    let bit_a = decToBit(a);
    let bit_b = decToBit(b);

    [bit_a,bit_b] = adjustStr(bit_a, bit_b)
    let c = [];

    for (let i = 0; i < bit_a.length; i++){
        if(bit_a[i] === bit_b[i]){
            c.push('0')
        } else {
            c.push('1')
        }
    }
    return parseInt(c.join(''),2);
}

a = 32;
b = 17;

console.log(decToBit(32));
console.log(decToBit(17));

console.log(adjustStr(decToBit(32), decToBit(17)))


console.log(bitwiseAND(a, b))
console.log(bitwiseOR(a,b))
console.log(bitwiseXOR(a,b))
