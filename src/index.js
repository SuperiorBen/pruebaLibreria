const btnWallet = 
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn-chivo");
    btn.addEventListener("click", e => { e.preventDefault(); alert("Clickeado") });
});

// module.exports = { btnWallet }