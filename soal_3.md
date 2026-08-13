# Perbedaan Flexbox dan CSS Grid

## 1. Perbedaan Layout 1D dan 2D

### Flexbox — Layout 1D

Flexbox merupakan sistem layout **satu dimensi (1D)**. Artinya, Flexbox bekerja terutama pada **satu arah dalam satu waktu**, yaitu:

* Horizontal → `flex-direction: row`
* Vertikal → `flex-direction: column`

Flexbox cocok digunakan ketika kita ingin mengatur posisi, jarak, dan ukuran beberapa elemen dalam **satu baris atau satu kolom**.

Contoh:

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

Kode tersebut dapat digunakan untuk mengatur logo, menu navigasi, dan tombol agar tersusun dalam satu baris.

### CSS Grid — Layout 2D

CSS Grid merupakan sistem layout **dua dimensi (2D)**. Grid dapat mengatur elemen berdasarkan **baris (row) dan kolom (column) secara bersamaan**.

Contoh:

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

Dengan Grid, kita dapat menentukan struktur kolom dan baris sehingga posisi elemen lebih mudah dikontrol dalam sebuah halaman.

### Perbedaan Utama

| Aspek             | Flexbox                                            | CSS Grid                                                   |
| ----------------- | -------------------------------------------------- | ---------------------------------------------------------- |
| Jenis layout      | 1D                                                 | 2D                                                         |
| Fokus             | Satu arah                                          | Baris dan kolom                                            |
| Cocok untuk       | Komponen dan susunan sederhana                     | Struktur layout halaman                                    |
| Pengaturan utama  | `flex-direction`, `justify-content`, `align-items` | `grid-template-columns`, `grid-template-rows`, `grid-area` |
| Contoh penggunaan | Navbar, button group                               | Dashboard, gallery                                         |

## 2. Skenario Penggunaan

### Flexbox Lebih Tepat Digunakan

#### 1. Navbar

Flexbox sangat cocok untuk membuat navbar karena elemen biasanya tersusun dalam satu baris.

Contohnya:

```text
Logo     Home  About  Services  Contact     Login
```

Dengan Flexbox, kita dapat menggunakan `justify-content` untuk mengatur jarak dan `align-items` untuk menyelaraskan elemen secara vertikal.

#### 2. Button Group

Flexbox juga cocok untuk mengatur beberapa tombol yang berada dalam satu baris atau kolom.

Contoh:

```text
[ Cancel ]  [ Save ]
```

Kita dapat menggunakan `gap` untuk memberikan jarak antar tombol dan `justify-content` untuk mengatur posisinya.

---

### CSS Grid Lebih Diunggulkan

#### 1. Dashboard

Dashboard biasanya memiliki banyak komponen yang tersusun dalam baris dan kolom.

Contoh:

```text
+------------+------------+------------+
|  Revenue   |   Users    |   Orders   |
+------------+------------+------------+
|                  Chart                |
+---------------------------------------+
| Recent Orders       | Activity        |
+---------------------+-----------------+
```

CSS Grid lebih tepat karena kita dapat menentukan ukuran dan posisi setiap bagian berdasarkan baris dan kolom.

#### 2. Image Gallery

Grid sangat cocok untuk membuat galeri gambar karena gambar dapat disusun dalam beberapa kolom dan baris.

Contoh:

```text
+-------+-------+-------+
| Image | Image | Image |
+-------+-------+-------+
| Image | Image | Image |
+-------+-------+-------+
```

Dengan `grid-template-columns` dan `gap`, jumlah kolom dan jarak antar gambar dapat diatur dengan mudah.

## Kesimpulan

**Flexbox** lebih tepat digunakan untuk mengatur elemen dalam **satu dimensi**, misalnya navbar, button group, atau komponen yang tersusun dalam satu baris atau kolom.

Sedangkan **CSS Grid** lebih cocok untuk layout **dua dimensi** yang membutuhkan pengaturan baris dan kolom secara bersamaan, seperti dashboard dan image gallery.

Singkatnya:

> **Flexbox = 1D (baris atau kolom)**
> **CSS Grid = 2D (baris dan kolom)**
