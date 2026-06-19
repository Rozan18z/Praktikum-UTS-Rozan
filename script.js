// Tunggu sampai semua halaman HTML kelar di-download sama browser
document.addEventListener("DOMContentLoaded", function () {
    // Cuma buat ngetes di inspect console, mastiin script-nya udah jalan
    console.log("Portal Manchester United: Bootstrap & JS Terintegrasi!");


    // === FUNGSI MENU MOBILE (AUTO TUTUP SAAT DIKLIK) ===
    // Cari semua tombol menu link di navbar kamu
    const navLinks = document.querySelectorAll(".nav-links a");
    // Cari menu hp yang id-nya "mobileMenu"
    const menuToggle = document.getElementById("mobileMenu");
    
    // Kalau menu hp-nya emang ada di halaman itu
    if (menuToggle) {
        // Cek satu-per-satu semua link menu yang ada
        navLinks.forEach(function (link) {
            // Kalau salah satu link menu itu diklik sama user
            link.addEventListener("click", function () {
                // Ambil fungsi collapse bawaan Bootstrap si menu hp tadi
                const bsCollapse = bootstrap.Collapse.getInstance(menuToggle);
                // Kalau fungsinya aktif dan ketemu
                if (bsCollapse) {
                    // Tutup otomatis laci menunya biar gak ngalangin layar
                    bsCollapse.hide();
                }
            });
        });
    }
});