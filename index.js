// CÂU 1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + ... + n > 10000
var sum = 0;
var n = 1;
while (sum < 10000) {
  sum += n;
  if (sum > 10000) {
    break;
  }
  n++;
}
console.log(n);
document.getElementById(
  "ketQua1"
).innerHTML = `Kết quả số nguyên dương n nhỏ nhất là: ${n}`;

// Câu 2: Tính tổng: S(n) = x + x^2 + x^3 + ... + x^n

function tinhTong() {
  var soX = document.getElementById("soX").value * 1;
  var soN = document.getElementById("soN").value * 1;

  var sum2 = 0;
  for (var i = 1; i <= soN; i++) {
    sum2 += Math.pow(soX, i);
  }
  document.getElementById("ketQua2").classList.remove("d-none");
  document.getElementById("ketQua2").innerHTML = `Kết quả là: ${sum2}`;
}

// Câu 3: Tính giai thừa
function tinhGiaiThua() {
  var SoN1 = document.getElementById("soN1").value * 1;

  var result = 1;
  for (var i = 1; i <= SoN1; i++) {
    result *= i;
  }
  document.getElementById("ketQua3").classList.remove("d-none");
  document.getElementById("ketQua3").innerHTML = `Kết quả là: ${result}`;
}

// Câu 4: Vị trí chẵn div màu đỏ, vị trí lẻ div màu
function nhanDeXem() {
  var content = "";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      content += `<div class="bg-danger bg-opacity-75 p-3 m-2"></div>`;
    } else {
      content += `<div class="bg-primary bg-opacity-75 p-3 m-2"></div>`;
    }
  }
  document.getElementById("ketQua4").classList.remove("d-none");
  document.getElementById("ketQua4").innerHTML = content;
}

function getPrime() {
  var n = document.getElementById("soN2").value * 1;
  var result = "";
  if (n === 1) {
    result = "";
  } else if (n === 2) {
    result = "2";
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x !== 0) {
        result += `<span>${x}</span><br/>`
      }
    }
      console.log(result)
    document.getElementById("ketQua5").classList.remove("d-none");
    document.getElementById("ketQua5").innerHTML = result;
  }
}
