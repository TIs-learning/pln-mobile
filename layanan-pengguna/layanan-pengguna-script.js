const linkLayanan = [
    "https://www.youtube.com/embed/SOhW2CKxeM8", 
    "https://www.youtube.com/embed/JDyixyq_ETU", 
    "https://www.youtube.com/embed/M87aZAICXgs", 
    "https://www.youtube.com/embed/IUK64y_c914", 
    "https://www.youtube.com/embed/W6Vtw0Qj7pw", 
    "https://www.youtube.com/embed/T75VnzFCNOc" 
];

const tombolMenu = document.querySelectorAll('.btn-menu');
const layarSimulasi = document.getElementById('layar-simulasi');

// Kasih perintah ke setiap tombol pas diklik
tombolMenu.forEach((tombol, index) => {
    tombol.addEventListener('click', () => {
        // 1. Ilangin warna aktif dari semua tombol
        tombolMenu.forEach(btn => btn.classList.remove('active'));
        
        // 2. Kasih warna aktif ke tombol yang barusan diklik
        tombol.classList.add('active');
        
        // 3. Ganti sumber layar iframe sesuai urutan tombol di array
        layarSimulasi.src = linkLayanan[index];
    });
});