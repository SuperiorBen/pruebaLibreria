const btnWallet = 
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn-chivo");
    btn.addEventListener("click", function(e){ e.preventDefault(); /**Funcion de callback */ registerPayment(); });

    /**
     * FN: Register payment
     * IN: 
     */
    function registerPayment(){
        let URL = "https://poke-benja-fd1142.netlify.app/";
        window.open(URL, 'CHIVO PAGOS', 
        'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=600,height=1000,left = 400,top = 50');
    }
});



// module.exports = { btnWallet }