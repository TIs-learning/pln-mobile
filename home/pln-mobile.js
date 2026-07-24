// 1. Ambil elemen modal dari HTML
const modal = document.getElementById("modal-panduan");
const btnClose = document.querySelector(".close-btn");
const modalJudul = document.getElementById("modal-judul");
const modalIsi = document.getElementById("modal-isi");

// 2. Kita siapin data panduannya di sini
const dataPanduan = {
    "Panduan Membeli Token Listrik": `
        <ol>
            <li>Download aplikasi PLN Mobile di Play Store atau App Store.</li>
            <li>Login menggunakan e-mail dan password yang sudah didaftarkan.</li>
            <li>Pilih menu Token & Pembayaran.</li>
            <li>Masukkan Nomor ID Pelanggan.</li>
            <li>Klik Periksa.</li>
            <li>Pilih Beli Token.</li>
            <li>Pilih nominal token dari Rp 5.000 hingga Rp 1 juta.</li>
            <li>Masukkan kode voucher di menu Gunakan Voucher.</li>
            <li>Di bagian bawah akan muncul detail transaksi pembelian token.</li>
            <li>Klik Lanjutkan Pembayaran</li>
            <li>Pilih Metode Pembayaran.</li>
            <li>Klik Bayar.</li>
            <li>Lanjutkan hingga pembelian token berhasil.</li>
        </ol>
    `,
    "Panduan Membayar Tagihan Token Listrik": `
        <ol>
            <li>Buka aplikasi PLN Mobile lalu login dengan akun Anda.</li>
            <li>Pada halaman utama, pilih menu <b>"Token & Pembayaran"</b>.</li>
            <li>Masukkan ID Pelanggan atau nomor meteran. Jika sudah tersimpan, pilih dari daftar.</li>
            <li>Klik <b>"Periksa"</b> untuk menampilkan detail tagihan listrik.</li>
            <li>Cek informasi tagihan, seperti jumlah yang harus dibayar dan periode bulan berjalan.</li>
            <li>Tekan <b>"Lanjutkan Pembayaran"</b> untuk menuju proses pembayaran.</li>
            <li>Pilih metode pembayaran dengan menekan <b>"Ganti Metode Pembayaran"</b>. Opsi yang tersedia antara lain:
                <ul>
                    <li>Virtual Account Bank (Mandiri, BRI, BNI, BCA, dan lainnya).</li>
                    <li>Dompet digital (GoPay, OVO, Dana, LinkAja, ShopeePay).</li>
                    <li>Kartu kredit/debit.</li>
                </ul>
            </li>
            <li>Ikuti instruksi sesuai metode yang dipilih hingga transaksi berhasil.</li>
            <li>Setelah pembayaran selesai, Anda akan menerima notifikasi resmi dari PLN Mobile.</li>
            <li>Untuk bukti pembayaran, masuk ke menu <b>"Transaksi Saya"</b>.</li>
        </ol>
        <p style="margin-left: 15px; font-style: italic; color: #555;">Tips: Jika memilih e-wallet, pastikan saldo cukup agar transaksi tidak gagal.</p>
    `,
    "Panduan Cara Lapor Gangguan Listrik": `
        <ol>
            <li>Pilih jenis keluhan yang sedang dialami, misalnya <b>"Pengaduan Listrik Padam"</b>.</li>
            <li>Masukkan atau pilih Identitas Pelanggan (IDP) yang ingin dilaporkan.</li>
            <li>Atur koordinat lokasi gangguan agar sesuai dengan alamat yang terdaftar pada IDP tersebut.</li>
            <li>Isi kelengkapan alamat secara mendetail mulai dari provinsi, kota, kecamatan, serta kelurahan dengan benar.</li>
            <li>Berikan rincian patokan alamat seperti nomor rumah atau warna pagar untuk mempermudah petugas menemukan lokasi.</li>
            <li>Tuliskan deskripsi singkat mengenai keluhan yang dialami dan lampirkan foto kondisi di lapangan.</li>
        </ol>
    `,
    "Panduan Pemasangan Listrik Baru": `
        <ol>
            <li>Buka aplikasi PLN Mobile, pilih menu <b>“Pasang Baru”</b>.</li>
            <li>Tentukan lokasi pemasangan, isi detail layanan, masukkan data SLO, pilih token untuk prabayar, lalu isi data pelanggan.</li>
            <li>Klik <b>“Kirim Permohonan”</b> dan lakukan pembayaran sesuai tagihan.</li>
            <li>Setelah pembayaran, petugas PLN akan datang melakukan pemasangan kWh meter.</li>
        </ol>
    `,
    "Panduan Menambah Daya Listrik": `
        <li>Buka aplikasi PLN Mobile dan login menggunakan akun yang telah terdaftar.</li>
            <li>Pada halaman utama, pilih menu <b>Perubahan Daya</b>, lalu pilih <b>Mulai</b>.</li>
            <li>Pilih ID pelanggan yang telah didaftarkan pada aplikasi PLN Mobile atau masukkan ID pelanggan, kemudian pilih <b>Lanjutkan</b>.</li>
            <li>Anda dapat menentukan koordinat lokasi yang sesuai, pilih <b>Ya</b>.</li>
            <li>Setelah itu lengkapi data lokasi sesuai dengan keadaan sebenarnya, pilih <b>Lanjutkan</b>.</li>
            <li>Pilih daya baru yang diinginkan, jenis koneksi (prabayar atau pascabayar), peruntukan listriknya, dan pilih <b>Lanjutkan</b>.</li>
            <li>Isikan data pelanggan dan data pemohon, pilih <b>Lanjutkan</b> dan <b>Kirim Permohonan</b>.</li>
            <li>Anda akan diarahkan ke halaman yang menampilkan Syarat dan Ketentuan, klik <b>Setuju</b>.</li>
            <li>Kemudian muncul halaman pemberitahuan Permohonan Berhasil, dan setelah memilih <b>“OK”</b>, akan keluar tampilan Detail Permohonan dan pilih <b>Lanjutkan Pembayaran</b>.</li>
            <li>Pilih metode pembayaran dan lakukan pembayaran sesuai dengan nominal yang tertera.</li>
        </ol>
    `,
    "Panduan Cara Cek Status Pengaduan": `
        <ol>
            <li>Buka aplikasi PLN Mobile yang ada di ponsel Anda, apabila belum memilikinya maka dapat mengunduhnya di Play Store atau App Store.</li>
            <li>Pastikan bahwa login dengan akun Anda yang telah terdaftar di aplikasi.</li>
            <li>Pada halaman layar awal aplikasi, klik opsi <b>“Pengaduan”</b>.</li>
            <li>Selanjutnya, pilih jenis gangguan listrik yang terjadi di wilayah Anda (misalnya: gangguan listrik padam).</li>
            <li>Masukkan IDPEL atau nomor meteran Anda atau Anda juga bisa menandai lokasi gangguan listrik dengan klik opsi <b>“Gunakan Titik Lokasi”</b> lalu mengisi beberapa data pendukung.</li>
            <li>Setelah itu, Anda harus mengunggah foto lokasi terjadinya gangguan listrik.</li>
            <li>Kemudian, klik opsi <b>“Kirim Pengaduan”</b>. Anda kemudian akan mendapat nomor pengaduan dengan format “Gxxx”.</li>
            <li>Untuk melihat status pengaduan, pengguna bisa menuju opsi <b>“Pengaduan”</b> untuk melihat informasi terkait proses pengaduan PLN Anda.</li>
        </ol>
    `
};

  // 3. Ambil semua kartu fitur
const cards = document.querySelectorAll(".card-fitur");

  // 4. Tambahin aksi klik ke setiap kartu
cards.forEach(card => {
    card.addEventListener("click", () => {
        // Ambil teks dari h3 (judul kartu)
        const judul = card.querySelector("h3").innerText;
        
        // Ganti isi modal sesuai judul yang diklik
        modalJudul.innerText = judul;
        modalIsi.innerHTML = dataPanduan[judul] || "<p>Panduan belum tersedia.</p>";
        
        // Munculin modalnya
        modal.style.display = "flex";
    });
});

  // 5. Aksi buat tombol tutup (X)
btnClose.addEventListener("click", () => {
    modal.style.display = "none";
});

  // 6. Tutup modal kalau area gelap di luar kotak putih diklik
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});