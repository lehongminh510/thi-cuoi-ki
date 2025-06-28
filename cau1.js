function laSoNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let n = parseInt(prompt("Nhập số phần tử của mảng (n <= 50):"));
let a = [];
let b = [];

for (let i = 0; i < n; i++) {
    let value = parseInt(prompt(`Nhập phần tử a[${i}]:`));
    a.push(value);
}

console.log("Mảng vừa nhập:", a);

for (let i = 0; i < a.length; i++) {
    if (laSoNguyenTo(a[i]) || a[i] =
