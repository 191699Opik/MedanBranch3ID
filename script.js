// Tambahkan event listener untuk menampilkan pesan di konsol saat menu diklik
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function() {
            console.log(`Navigasi ke ${link.textContent}`);
        });
    });
});