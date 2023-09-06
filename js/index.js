// Mengambil elemen dengan kelas "hamburger" dan "nav-bar" pada halaman web
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

// Menambahkan event listener pada elemen dengan kelas "hamburger" ketika diklik
hamburger.addEventListener("click", () => {
    // Ketika hamburger di-klik, tambahkan atau hapus kelas "active" pada elemen hamburger dan navBar
    // ini akan mengubah tampilan hamburger menjadi ikon aktif ketika menu diaktifkan atau dinonaktifkan
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
});

// Mengambil semua elemen dengan kelas "nav-link" pada halaman web dan menambahkan event listener ( untuk menangkap dan merespons peristiwa (events) ) ke masing-masingnya
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    // Ketika salah satu elemen dengan kelas "nav-link" di-klik, hapus kelas "active" dari elemen hamburger dan navBar
    // ini akan menyembunyikan menu setelah salah satu tautan navigasi dipilih
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
}));
