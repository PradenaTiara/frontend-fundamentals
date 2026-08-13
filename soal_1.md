Berikut versi yang siap dimasukkan ke file **`.md`**:

# Perbedaan Elemen `<article>` dan `<section>` dalam HTML5

Berdasarkan spesifikasi HTML5 dan dokumentasi MDN Web Docs, `<article>` dan `<section>` merupakan elemen semantik yang digunakan untuk memberikan struktur dan makna pada konten halaman web. Meskipun keduanya dapat digunakan untuk mengelompokkan konten, tujuan penggunaannya berbeda.

## 1. Perbedaan `<article>` dan `<section>`

Elemen `<article>` digunakan untuk konten yang bersifat **mandiri atau self-contained**, yaitu konten yang tetap memiliki makna apabila dipisahkan dari halaman utama. Contohnya adalah artikel berita, posting blog, komentar, posting forum, atau kartu produk.

Sementara itu, `<section>` digunakan untuk **mengelompokkan konten berdasarkan tema atau topik tertentu** dalam sebuah dokumen. Biasanya `<section>` memiliki heading seperti `<h2>` atau `<h3>` yang menjelaskan isi bagian tersebut.

Cara sederhana untuk membedakannya adalah:

* **`<article>`** → konten dapat berdiri sendiri.
* **`<section>`** → bagian atau kelompok dari suatu halaman.

Contoh:

```html
<section>
  <h2>Berita Terbaru</h2>

  <article>
    <h3>Belajar HTML untuk Pemula</h3>
    <p>Artikel mengenai dasar-dasar HTML.</p>
  </article>

  <article>
    <h3>Mengenal CSS</h3>
    <p>Artikel mengenai dasar-dasar CSS.</p>
  </article>
</section>
```

Pada contoh tersebut, `<section>` digunakan untuk mengelompokkan topik **Berita Terbaru**, sedangkan setiap berita menggunakan `<article>` karena masing-masing berita merupakan konten yang dapat berdiri sendiri.

## 2. Kapan Menggunakan `<article>`?

Pengembang sebaiknya menggunakan `<article>` ketika sebuah konten merupakan unit informasi yang independen dan dapat digunakan atau didistribusikan secara terpisah.

Contohnya:

```html
<article>
  <h2>Tips Belajar JavaScript</h2>
  <p>
    JavaScript merupakan bahasa pemrograman yang banyak digunakan
    untuk membuat halaman web menjadi interaktif.
  </p>
</article>
```

Selain artikel berita atau blog, `<article>` juga dapat digunakan untuk komentar pengguna, posting forum, dan product card apabila konten tersebut dianggap sebagai unit yang berdiri sendiri.

## 3. Kapan Menggunakan `<section>`?

Elemen `<section>` sebaiknya digunakan ketika pengembang ingin membagi sebuah halaman menjadi beberapa bagian berdasarkan tema atau fungsi.

Contohnya pada halaman portfolio:

```html
<main>
  <section>
    <h2>About Me</h2>
    <p>Saya adalah seorang Frontend Developer.</p>
  </section>

  <section>
    <h2>Projects</h2>

    <article>
      <h3>Project A</h3>
      <p>Deskripsi Project A.</p>
    </article>

    <article>
      <h3>Project B</h3>
      <p>Deskripsi Project B.</p>
    </article>
  </section>
</main>
```

`<section>` digunakan untuk bagian **About Me** dan **Projects**, sedangkan setiap project dapat menggunakan `<article>` karena masing-masing project merupakan unit informasi yang dapat berdiri sendiri.

## 4. Perbedaan dengan `<div>`

`<div>` merupakan elemen generic yang tidak memiliki makna semantik khusus. Elemen ini biasanya digunakan sebagai container untuk kebutuhan layout, styling, atau pengelompokan elemen ketika tidak terdapat elemen semantik yang sesuai.

Contohnya:

```html
<div class="article">
  <h2>Belajar JavaScript</h2>
  <p>Materi mengenai dasar-dasar JavaScript.</p>
</div>
```

Kode tersebut secara visual dapat dibuat sama dengan:

```html
<article>
  <h2>Belajar JavaScript</h2>
  <p>Materi mengenai dasar-dasar JavaScript.</p>
</article>
```

Namun, secara semantik keduanya berbeda. `<div>` hanya memberikan informasi bahwa elemen tersebut merupakan sebuah container, sedangkan `<article>` memberikan informasi bahwa konten tersebut merupakan sebuah unit konten yang mandiri.

Oleh karena itu, pengembang sebaiknya tidak menggunakan `<div>` untuk semua bagian halaman. Gunakan elemen semantik yang sesuai apabila memang tersedia.

## 5. Pentingnya Semantic HTML untuk Accessibility

Penggunaan elemen semantik sangat penting untuk **accessibility**, terutama bagi pengguna yang menggunakan screen reader dan teknologi bantu lainnya.

Elemen seperti `<article>`, `<section>`, `<main>`, `<nav>`, `<header>`, dan `<footer>` membantu teknologi bantu memahami struktur serta fungsi setiap bagian halaman.

Sebagai contoh:

```html
<main>
  <section>
    <h2>Projects</h2>

    <article>
      <h3>Website E-Commerce</h3>
      <p>Project pembuatan website e-commerce.</p>
    </article>

    <article>
      <h3>Dashboard IoT</h3>
      <p>Project dashboard untuk monitoring perangkat IoT.</p>
    </article>
  </section>
</main>
```

Dengan struktur tersebut, screen reader dapat lebih mudah memahami bahwa terdapat bagian utama, sebuah section bernama "Projects", dan beberapa article di dalamnya.

Sebaliknya, jika seluruh struktur hanya menggunakan `<div>`, informasi semantik tersebut tidak tersedia secara langsung bagi teknologi bantu.

## 6. Pentingnya Semantic HTML untuk SEO

Semantic HTML juga membantu mesin pencari memahami **struktur dan konteks konten** pada sebuah halaman.

Misalnya:

```html
<article>
  <h1>Belajar JavaScript untuk Pemula</h1>

  <section>
    <h2>Apa itu JavaScript?</h2>
    <p>Penjelasan mengenai JavaScript.</p>
  </section>

  <section>
    <h2>Variabel dalam JavaScript</h2>
    <p>Penjelasan mengenai variabel.</p>
  </section>
</article>
```

Struktur tersebut memberikan informasi yang lebih jelas mengenai hubungan antara judul utama, section, dan isi konten.

Namun, penggunaan `<article>` dan `<section>` **tidak secara otomatis meningkatkan ranking SEO**. Semantic HTML lebih berperan dalam memberikan struktur dan konteks yang jelas kepada mesin pencari. Faktor SEO lainnya seperti kualitas konten, heading, metadata, performa website, internal linking, dan pengalaman pengguna juga tetap penting.

## Kesimpulan

Perbedaan mendasar antara `<article>` dan `<section>` adalah tujuan penggunaannya. `<article>` digunakan untuk konten yang **mandiri dan dapat berdiri sendiri**, sedangkan `<section>` digunakan untuk **mengelompokkan konten berdasarkan tema atau bagian tertentu dalam sebuah halaman**.

Sementara itu, `<div>` sebaiknya digunakan ketika hanya diperlukan container generic untuk layout atau styling dan tidak terdapat makna semantik khusus.

Penggunaan semantic HTML sangat penting karena membantu **accessibility** dengan memberikan struktur yang lebih mudah dipahami oleh screen reader dan teknologi bantu. Selain itu, semantic HTML juga membantu **SEO** dengan memberikan konteks dan struktur konten yang lebih jelas kepada mesin pencari.

Dengan demikian, pemilihan antara `<article>`, `<section>`, dan `<div>` sebaiknya didasarkan pada **makna dan tujuan konten**, bukan hanya pada tampilan visualnya.
