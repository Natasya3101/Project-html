// javascript navbar
// Function untuk mengganti tampilan menu navigasi ketika ikon hamburger diklik
function toggleNavbar() {
    // Memilih elemen dengan kelas "hamburger" dari dokumen dan menyimpannya dalam variabel "hamburger"
    const hamburger = document.querySelector(".hamburger");
    // Memilih elemen dengan kelas "nav-bar" dari dokumen dan menyimpannya dalam variabel "navBar"
    const navBar = document.querySelector(".nav-bar");

    // Mengalihkan status kelas "active" pada ikon menu hamburger
    hamburger.classList.toggle("active");

    // Mengalihkan status kelas "active" pada menu navigasi, mengontrol visibilitasnya
    navBar.classList.toggle("active");
}

// Function untuk menutup menu navigasi ketika salah satu link di dalamnya diklik
function closeNavbar() {
    // Memilih elemen dengan kelas "hamburger" dari dokumen dan menyimpannya dalam variabel "hamburger"
    const hamburger = document.querySelector(".hamburger");

    // Memilih elemen dengan kelas "nav-bar" dari dokumen dan menyimpannya dalam variabel "navBar"
    const navBar = document.querySelector(".nav-bar");

    // Menghapus kelas "active" dari ikon menu hamburger, menyembunyikannya
    hamburger.classList.remove("active");

    // Menghapus kelas "active" dari menu navigasi, menyembunyikan menu
    navBar.classList.remove("active");
}

// Menambahkan event listener klik pada ikon menu hamburger
document.querySelector(".hamburger").addEventListener("click", toggleNavbar);

// Menambahkan event listener klik pada semua link di dalam menu navigasi
document.querySelectorAll(".nav-link").forEach(link => {
    // Ketika salah satu link diklik, fungsi closeNavbar() dipanggil untuk menutup menu
    link.addEventListener("click", closeNavbar);
});
