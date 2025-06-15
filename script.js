// Menambahkan interaksi jika dibutuhkan

// Contoh efek klik pada kartu karakter
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.character-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert("You clicked: " + card.querySelector('h3').innerText);
        });
    });
});
