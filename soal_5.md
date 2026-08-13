# Perbedaan `var`, `let`, `const`, dan Hoisting

## 1. Perbedaan Scope `var` dengan `let` dan `const`

Perbedaan utama antara `var` dan `let`/`const` terletak pada **scope** atau cakupan variabelnya.

### `var` — Function Scope

Variabel yang dideklarasikan menggunakan `var` memiliki **function scope**. Artinya, variabel tersebut dapat diakses di seluruh fungsi tempat variabel tersebut dideklarasikan.

`var` tidak terikat pada block seperti `{ }`, `if`, atau `for`.

Contoh:

```javascript
if (true) {
    var nama = "Pradena";
}

console.log(nama);
```

Output:

```text
Pradena
```

Walaupun `nama` dibuat di dalam blok `if`, variabel tersebut masih dapat diakses dari luar blok karena `var` tidak memiliki block scope.

---

### `let` dan `const` — Block Scope

Variabel yang dibuat menggunakan `let` dan `const` memiliki **block scope**. Artinya, variabel hanya dapat digunakan di dalam blok `{ }` tempat variabel tersebut dideklarasikan.

Contoh:

```javascript
if (true) {
    let nama = "Pradena";
    const umur = 23;

    console.log(nama);
    console.log(umur);
}

console.log(nama); // Error
console.log(umur); // Error
```

`nama` dan `umur` hanya tersedia di dalam blok `if`.

Jadi:

| Keyword | Scope          |
| ------- | -------------- |
| `var`   | Function scope |
| `let`   | Block scope    |
| `const` | Block scope    |

---

## 2. Hoisting dalam JavaScript

**Hoisting** adalah mekanisme JavaScript ketika deklarasi variabel dan fungsi diproses oleh JavaScript sebelum kode program dijalankan.

Namun, hoisting tidak berarti bahwa seluruh kode variabel benar-benar "dipindahkan" ke atas. Yang terjadi adalah deklarasi variabel diproses terlebih dahulu sesuai aturan masing-masing jenis deklarasi.

Perilaku `var` berbeda dengan `let` dan `const`.

### Hoisting pada `var`

Deklarasi `var` mengalami hoisting dan secara otomatis mendapatkan nilai awal `undefined`.

Contoh:

```javascript
console.log(nama);

var nama = "Pradena";
```

Kode tersebut secara konsep dapat dipahami seperti:

```javascript
var nama;

console.log(nama);

nama = "Pradena";
```

Output:

```text
undefined
```

Jadi, meskipun `console.log(nama)` berada sebelum deklarasi dalam kode, JavaScript sudah mengetahui deklarasi `nama`. Namun, nilainya masih `undefined` karena assignment `"Pradena"` belum dijalankan.

---

### Hoisting pada `let` dan `const`

`let` dan `const` juga mengalami hoisting dalam arti deklarasinya sudah diketahui oleh JavaScript ketika membuat lexical environment. Namun, keduanya **tidak dapat diakses sebelum deklarasi dijalankan**.

Contoh:

```javascript
console.log(nama);

let nama = "Pradena";
```

Hasilnya:

```text
ReferenceError
```

Hal yang sama berlaku untuk `const`:

```javascript
console.log(umur);

const umur = 23;
```

Hasilnya juga:

```text
ReferenceError
```

Hal tersebut terjadi karena adanya **Temporal Dead Zone (TDZ)**.

---

## Temporal Dead Zone (TDZ)

**Temporal Dead Zone (TDZ)** adalah periode sejak awal scope sebuah variabel `let` atau `const` dibuat sampai deklarasi variabel tersebut dieksekusi.

Selama berada dalam TDZ, variabel tersebut **tidak boleh diakses**.

Contoh:

```javascript
{
    // TDZ dimulai

    console.log(nama); // ReferenceError

    let nama = "Pradena";

    // TDZ berakhir
}
```

Pada contoh tersebut, `nama` sudah diketahui oleh JavaScript, tetapi belum dapat digunakan sebelum baris deklarasinya dijalankan.

### Perbandingan

```javascript
// var
console.log(a); // undefined
var a = 10;
```

Sedangkan:

```javascript
// let
console.log(b); // ReferenceError
let b = 10;
```

Dan:

```javascript
// const
console.log(c); // ReferenceError
const c = 10;
```

Perbedaannya dapat diringkas:

| Aspek                   | `var`                          | `let`               | `const`             |
| ----------------------- | ------------------------------ | ------------------- | ------------------- |
| Scope                   | Function scope                 | Block scope         | Block scope         |
| Hoisting                | Ya                             | Ya                  | Ya                  |
| Nilai sebelum deklarasi | `undefined`                    | Tidak dapat diakses | Tidak dapat diakses |
| TDZ                     | Tidak                          | Ya                  | Ya                  |
| Akses sebelum deklarasi | Bisa, menghasilkan `undefined` | `ReferenceError`    | `ReferenceError`    |

## Kesimpulan

`var` memiliki **function scope**, sedangkan `let` dan `const` memiliki **block scope**. Karena itu, `let` dan `const` lebih aman digunakan untuk menghindari variabel yang tidak sengaja dapat diakses di luar blok.

Dalam hal **hoisting**, deklarasi `var` di-hoist dan diinisialisasi dengan `undefined`, sehingga dapat diakses sebelum baris deklarasinya. Sementara itu, `let` dan `const` juga diproses saat hoisting, tetapi berada dalam **Temporal Dead Zone (TDZ)** sampai deklarasinya dieksekusi. Jika diakses selama TDZ, JavaScript akan menghasilkan `ReferenceError`.

Dalam JavaScript modern, **`let` dan `const` umumnya lebih disarankan daripada `var`** karena memiliki block scope dan perilaku yang lebih aman terhadap kesalahan akibat akses variabel sebelum deklarasi.
