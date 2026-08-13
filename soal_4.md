# Analisis Event Loop JavaScript

## Urutan Output

Urutan output yang muncul di console adalah:

```text
A
D
C
B
```

Jadi, **`A → D → C → B`**.

## Penjelasan

Untuk memahami urutan tersebut, kita perlu memahami tiga bagian utama dalam mekanisme **Event Loop JavaScript**, yaitu **Call Stack**, **Microtask Queue**, dan **Macrotask/Task Queue**.

### 1. `console.log("A")`

```javascript
console.log("A");
```

Perintah ini merupakan kode synchronous. Kode langsung masuk ke **Call Stack** dan dijalankan.

Output:

```text
A
```

Setelah selesai, perintah tersebut dikeluarkan dari Call Stack.

---

### 2. `setTimeout()`

```javascript
setTimeout(() => {
    console.log("B");
}, 0);
```

`setTimeout()` tidak langsung menjalankan `console.log("B")`.

Meskipun waktunya `0` milidetik, callback `() => console.log("B")` akan dijadwalkan sebagai **Task/Macrotask**.

Callback tersebut nantinya masuk ke **Macrotask/Task Queue** setelah timer selesai dan ketika Call Stack sudah kosong.

Untuk sementara:

```text
Macrotask Queue:
B
```

---

### 3. `Promise.resolve().then()`

```javascript
Promise.resolve().then(() => {
    console.log("C");
});
```

Callback dari `.then()` merupakan **Microtask**.

Callback tersebut dimasukkan ke **Microtask Queue**.

Untuk sementara:

```text
Microtask Queue:
C
```

Microtask memiliki prioritas lebih tinggi daripada macrotask.

---

### 4. `console.log("D")`

```javascript
console.log("D");
```

Perintah ini kembali merupakan kode synchronous sehingga langsung dijalankan melalui **Call Stack**.

Output:

```text
D
```

Sampai tahap ini output menjadi:

```text
A
D
```

---

## 5. Call Stack Menjadi Kosong

Setelah seluruh kode synchronous selesai dijalankan, **Call Stack menjadi kosong**.

Kondisinya kira-kira:

```text
Call Stack
   ↓
  kosong

Microtask Queue
   ↓
   C

Macrotask Queue
   ↓
   B
```

Event Loop kemudian akan memproses **Microtask Queue terlebih dahulu**.

---

## 6. Microtask `C` Dijalankan

Callback Promise:

```javascript
() => {
    console.log("C");
}
```

diambil dari **Microtask Queue** dan dimasukkan ke Call Stack.

Kemudian dijalankan:

```text
C
```

Sehingga output menjadi:

```text
A
D
C
```

Setelah microtask `C` selesai, Microtask Queue sudah kosong.

---

## 7. Macrotask `B` Dijalankan

Barulah Event Loop mengambil callback `setTimeout()` dari **Macrotask/Task Queue**.

```javascript
() => {
    console.log("B");
}
```

Callback dimasukkan ke Call Stack dan dijalankan.

Output:

```text
B
```

Hasil akhirnya:

```text
A
D
C
B
```

## Gambaran Alur Event Loop

Secara sederhana, prosesnya dapat digambarkan sebagai berikut:

```text
Kode JavaScript
      │
      ▼
  Call Stack
      │
      ├── console.log("A") → A
      │
      ├── setTimeout() → Task Queue
      │
      ├── Promise.then() → Microtask Queue
      │
      └── console.log("D") → D
      │
      ▼
Call Stack kosong
      │
      ▼
Microtask Queue
      │
      └── Promise → C
      │
      ▼
Microtask Queue kosong
      │
      ▼
Macrotask / Task Queue
      │
      └── setTimeout → B
```

## Kesimpulan

Urutan output adalah:

```text
A
D
C
B
```

Hal ini terjadi karena:

1. **Kode synchronous** seperti `console.log("A")` dan `console.log("D")` dijalankan terlebih dahulu melalui **Call Stack**.
2. Callback `Promise.then()` masuk ke **Microtask Queue**.
3. Callback `setTimeout()` masuk ke **Macrotask/Task Queue**.
4. Setelah Call Stack kosong, **Microtask Queue diproses terlebih dahulu** sampai kosong.
5. Setelah itu barulah **Macrotask/Task Queue** diproses.

Dengan demikian, **Promise (`C`) dijalankan lebih dahulu daripada `setTimeout` (`B`)**, meskipun `setTimeout` memiliki delay `0` milidetik.
