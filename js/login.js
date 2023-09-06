 
// Untuk mengelompokkan kedua form yaitu form login dan form sign-up.
const container = document.querySelector('.container');

// Elemen ini merupakan tombol yang akan digunakan untuk menampilkan form sign-up ketika ditekan
const signUp = document.querySelector('.up-button');

// Elemen ini merupakan tombol yang akan digunakan untuk menampilkan form login ketika ditekan
const signIn = document.querySelector('.in-button');

const log = document.getElementById('login');
// log.classList.add('hidden');
const sing = document.getElementById('sign-up');
// Event listener ini akan merespons ketika tombol ditekan, event listener ini akan menambahkan atau menghapus class 'active' pada elemen dengan class 'container'
signUp.addEventListener('click', () => {
    container.classList.toggle('active');
    sing.classList.remove('hidden');
    log.classList.add('hidden');
});

signIn.addEventListener('click', () => {
    container.classList.toggle('active');
    sing.classList.add('hidden');
    log.classList.remove('hidden');
});
// Variabel menyimpan elemen dengan id 'login-form' yang merupakan form login
const loginForm = document.getElementById('login-form');

// Variabel menyimpan elemen dengan id 'sign-up-form' yang merupakan form sign-up. Namun, form sign-up tidak memiliki event listener yang dijelaskan
const signUpForm = document.getElementById('sign-up-form');

// Variabel 'signUpButton' menyimpan elemen,elemen ini merupakan tombol yang akan digunakan untuk menampilkan form sign-up ketika ditekan
const signUpButton = document.querySelector('.up-button');

// Variabel 'signInButton' menyimpan elemen, elemen ini merupakan tombol yang akan digunakan untuk menampilkan form login ketika ditekan
const signInButton = document.querySelector('.in-button');

loginForm.addEventListener('submit', (event) => {
    // Mencegah pengiriman form secara default (refresh halaman) saat tombol submit ditekan
    event.preventDefault();
    // Mengambil input elemen untuk username dari form login
    const loginUsernameInput = document.getElementById('login-user');
    // Mengambil input elemen untuk password dari form login
    const loginPasswordInput = document.getElementById('login-password');
    // Mengambil nilai yang diinputkan oleh pengguna pada input username
    const usernameInput = loginUsernameInput.value;
    // Mengambil nilai yang diinputkan oleh pengguna pada input password
    const passwordInput = loginPasswordInput.value;
        // Memeriksa apakah input username atau password kosong (hanya berisi spasi atau karakter lain selain teks)
    if (usernameInput.trim() === '' || passwordInput.trim() === '') {
        // Menampilkan pesan peringatan jika ada input yang kosong
        alert('Harap isi username dan password terlebih dahulu.');
        return;
    }

    alert('Login berhasil! Selamat datang, ' + usernameInput + '.');
    // Menampilkan pesan selamat datang dengan menggunakan nilai input username yang telah diisi

    window.location.href = '/html/index.html';
    // Pengalihan halaman setelah login berhasil akan diarahkan ke halaman 'index.html'
});


signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const signUpUsernameInput = document.getElementById('sign-up-user');
    const signUpEmailInput = document.getElementById('sign-up-email');
    const signUpPasswordInput = document.getElementById('sign-up-password');
    const signUpTermsInput = document.querySelector('#sign-up-form input[type="checkbox"]');
    const usernameInput = signUpUsernameInput.value;
    const emailInput = signUpEmailInput.value;
    const passwordInput = signUpPasswordInput.value;
    if (usernameInput.trim() === '' || emailInput.trim() === '' || passwordInput.trim() === '') {
        alert('Harap isi semua data terlebih dahulu.');
        return;
    }
    if (!signUpTermsInput.checked) {
        // Memeriksa apakah checkbox persetujuan "terms & conditions" tidak dicentang.
        alert('Harap setujui persyaratan dan ketentuan.');
        // Menampilkan pesan peringatan jika checkbox persetujuan tidak dicentang.
        return;
    }

    alert('Sign Up berhasil! Selamat datang, ' + usernameInput + '.');
    // Menampilkan pesan selamat datang dengan menggunakan nilai input username yang telah diisi.

    window.location.href = '/html/index.html';
    // Pengalihan halaman setelah sign-up berhasil. Pengguna akan diarahkan ke halaman 'index.html'.
});

function toggleSignup() {
    container.classList.toggle('active');
}
