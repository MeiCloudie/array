// Thực hiện tạo một mảng chứa tên các sinh viên trong trường đại học
let danhSachSinhVien = ["Hoa", "Vân", "Sang", "Nguyên", "Khải", "Vân"]

// Lấy độ dài mảng
let doDaiMang = danhSachSinhVien.length
console.log(doDaiMang)
let sinhVienVan = danhSachSinhVien[doDaiMang - 1]
console.log(sinhVienVan)

// Thay thế dữ liệu trong mảng
danhSachSinhVien[4] = "Bích"
console.log(danhSachSinhVien)

let arrNumber = [1, 8, 4, 9]
document.querySelector(".btn-dark").onclick = () => {
  let soN = document.getElementById("soN").value * 1
  //   Push
  arrNumber.push(soN)
  document.getElementById("ketQua1").innerHTML = arrNumber

  //Demo pop
  //   let phanTuCuoi = arrNumber.pop()
  //   console.log(arrNumber)
  //   console.log(phanTuCuoi)
}

document.querySelector(".btn-success").onclick = () => {
  let tong = 0
  let demChiaHetChoHai = 0

  for (let i = 0; i < arrNumber.length; i++) {
    // Tính tổng
    tong += arrNumber[i]
    // Thực hiện đếm xem trong mảng có bao nhiêu số chia hết cho 2
    if (arrNumber[i] % 2 == 0) {
      demChiaHetChoHai++
    }
  }

  console.log(tong)
  console.log(demChiaHetChoHai)
}

// Phương thức indexOf và lastIndexOf
// let viTriNguyen = danhSachSinhVien.indexOf("Nguyên")
// console.log(viTriNguyen)
// let viTriVan = danhSachSinhVien.lastIndexOf("Vân")
// console.log(viTriVan)

let viTriNguyen = -1
for (let i = 0; i < danhSachSinhVien; i++) {
  if (danhSachSinhVien[i] == "Nguyên") {
    viTriNguyen = i
    break
  }
}
console.log("viTriNguyen", viTriNguyen)

let viTriVan = -1
for (let i = doDaiMang - 1; i >= 0; i--) {
  if (danhSachSinhVien[i] == "Vân") {
    viTriVan = i
    break
  }
}
console.log("viTriVan", viTriVan)
