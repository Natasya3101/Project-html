/* file js di pisah setiap api nya karena api nya berbeda-beda setiap kategori, jika di bikin function makas data apinya akan bercampur semua
    ,contohnya jika kita ke halaman berita teknologi maka berita selain teknologi akan tertampilkan juga*/

// Mendapatkan referensi ke elemen dengan kelas "container" pada halaman web   
const container = document.querySelector(".container")

fetch("https://api-berita-indonesia.vercel.app/sindonews/terbaru/", {
    method: 'GET', // Menggunakan metode HTTP GET untuk mengambil data
}).then(response => response.json()) // Mengubah API menjadi format JSON
    .then(res => { // Setelah data berhasil diambil, menampilkan data di halaman web)
        // Mengambil data yang isinya array object
        const data = res.data.posts
        // Menampilkan data kedalam konsol
        console.log(data)
        data.map((berita) => {
            // Membuat tag p 
            // jadi variabel title berada di dalam tag p
            const title = document.createElement("h2")
            title.classList.add("title")
            // Mengisi isi konten yang ada di dalam tag p yang dibuat
            title.textContent = berita.title

            // Menampilkan hari tanggal dan jam berita
            const pubDate = document.createElement("p")
            pubDate.classList.add("date")
            pubDate.textContent = berita.pubDate

            // Membuat tag img
            const image = document.createElement("img")
            // Membuat class pada image
            image.classList.add("image-box")
            // jika gagal
            image.alt = "check your internet"
            // Mengisi src atau alamat link dari data array yang dibuat diatas
            image.src = berita.thumbnail

            // Membuat tag p
            const description = document.createElement("p")
            description.classList.add("description")
            // Membuat tag a
            const link = document.createElement("a")
            link.classList.add("link")
            link.href = berita.link
            // mengakses link di deskripsi
            link.textContent = berita.description
            
            // Membuat tag div
            const box = document.createElement("div")
            box.classList.add("box")
            // Memasukan judul,tgl waktu, image dan deskripsi kedalam box (tag div)
            box.appendChild(title)
            box.appendChild(pubDate)
            box.appendChild(image)
            box.appendChild(description)
            description.appendChild(link)
            // Memanggil div dengan class container yang ada pada body yang di tampung di dalam variabel container
            const container = document.querySelector(".container")
            // Memasukan box kedalam tag div dengan class container yang ada di tag body
            container.appendChild(box)
        })


    })
    .catch(error => { // Jika terjadi kesalahan saat mengambil data dari API,
        // menampilkan pesan kesalahan ke konsol menggunakan console.error()
        console.error(error);
});

