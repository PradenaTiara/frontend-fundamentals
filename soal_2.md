# Penjelasan `box-sizing` dalam CSS

## 1. Perhitungan `content-box` dan `border-box`

Properti `box-sizing` menentukan bagaimana nilai `width` dan `height` sebuah elemen dihitung.

### `content-box`

`content-box` adalah nilai default CSS. Pada nilai ini, `width` dan `height` hanya berlaku untuk **area content**.

Total ukuran elemen dihitung dengan menambahkan padding dan border:

**Total Width:**

```text
width + padding kiri + padding kanan + border kiri + border kanan
```

**Total Height:**

```text
height + padding atas + padding bawah + border atas + border bawah
```

---

### `border-box`

Pada `border-box`, nilai `width` dan `height` sudah mencakup **content + padding + border**.

Jadi, ukuran total elemen tetap sesuai dengan nilai `width` dan `height` yang diberikan.

```text
Total Width = width
Total Height = height
```

Jika padding dan border ditambahkan, ukuran area content akan mengecil agar ukuran keseluruhan elemen tetap sesuai dengan `width` dan `height`.

## 2. Contoh Perhitungan

Diketahui:

```css
width: 300px;
padding: 20px;
border: 5px solid black;
```

### Menggunakan `content-box`

Karena `content-box` hanya menghitung `width` sebagai lebar content:

```text
Total width
= width + padding kiri + padding kanan + border kiri + border kanan
= 300px + 20px + 20px + 5px + 5px
= 350px
```

Jadi, **total lebar elemen adalah 350px**.

### Menggunakan `border-box`

Pada `border-box`, `width: 300px` sudah mencakup content, padding, dan border.

```text
Total width = 300px
```

Jadi, **total lebar elemen adalah 300px**.

Area content-nya menjadi:

```text
Content width
= 300px - 20px - 20px - 5px - 5px
= 250px
```

### Kesimpulan

| `box-sizing`  | Content | Padding | Border | Total Width |
| ------------- | ------: | ------: | -----: | ----------: |
| `content-box` |   300px |    40px |   10px |   **350px** |
| `border-box`  |   250px |    40px |   10px |   **300px** |

Jadi, perbedaan utamanya adalah **`content-box` membuat padding dan border ditambahkan ke ukuran yang ditentukan**, sedangkan **`border-box` memasukkan padding dan border ke dalam ukuran yang ditentukan**.
