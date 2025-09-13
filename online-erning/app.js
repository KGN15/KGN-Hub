document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".guide-card");
    cards.forEach((card, i) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, i * 200);
    });
});
