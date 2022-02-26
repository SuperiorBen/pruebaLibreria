
// ==========================
// Elementos graficos =======
// ==========================

class ElementBtn {
    constructor() {
        this.icon;
        this.btnStyle;
    }

    serAttr(/**Parametros de personalización */) {
        // Icono Chivo
        this.icon = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="70px" height="50px"
      viewBox="0 0 294.000000 104.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,104.000000) scale(0.100000,-0.100000)" fill="#ccc" stroke="none">
          <path d="M396 1019 c-82 -19 -189 -80 -252 -143 -107 -107 -150 -230 -142
  -408 4 -94 8 -111 41 -179 27 -56 53 -91 100 -135 113 -106 232 -148 422 -149
  141 0 229 22 315 80 29 19 54 35 56 35 2 0 4 -17 4 -38 0 -45 23 -72 62 -72
  33 0 46 16 104 130 l48 95 15 -40 c38 -100 65 -140 111 -162 87 -45 178 -23
  235 55 17 22 33 41 36 41 3 1 19 -19 36 -43 42 -59 82 -80 145 -74 62 6 109
  43 163 125 22 34 43 62 46 62 3 1 18 -26 34 -60 93 -193 237 -167 305 56 15
  47 18 50 53 53 l38 3 -6 -34 c-16 -85 42 -177 129 -202 83 -24 148 -1 203 72
  25 32 28 45 28 109 l0 72 94 4 c77 3 96 7 107 23 18 24 18 46 0 71 -14 18 -31
  19 -348 22 -383 3 -371 6 -397 -84 -24 -86 -52 -154 -62 -154 -6 0 -30 42 -53
  93 -47 100 -76 133 -122 143 -39 7 -88 -31 -105 -83 -26 -78 -88 -163 -120
  -163 -26 0 -57 50 -90 142 -30 87 -39 98 -80 98 -33 0 -54 -24 -69 -80 -16
  -61 -55 -136 -80 -153 -11 -8 -32 -12 -46 -9 -28 5 -48 42 -77 142 -33 112
  -111 138 -189 62 l-28 -26 0 335 c0 374 -1 379 -64 379 -67 0 -67 1 -66 -369
  l1 -332 -25 -44 c-58 -98 -154 -145 -311 -152 -162 -8 -293 33 -375 118 -132
  137 -128 383 11 534 82 88 243 139 374 116 74 -13 107 -2 120 40 9 29 -24 72
  -61 80 -44 10 -224 8 -268 -2z m2196 -766 c25 -22 23 -71 -4 -100 -41 -44 -98
  -20 -98 40 0 66 58 100 102 60z" />
          <path d="M1502 537 c-44 -46 -14 -117 48 -117 62 0 92 73 50 118 -27 29 -71
  28 -98 -1z" />
      </g>
  </svg>`;

        // Propiedades de boton
        this.btnStyle = `height: 3em;
      width: 14em;
      border-radius: 8px;
      background-color: rgb(2, 0, 71) !important;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor:pointer`;
    }

    render() {
        let btn = document.getElementById("chivo-btn-contenedor");
        btn.innerHTML = this.icon;
        btn.style = this.btnStyle;

        return btn;
    }
}

// ==========================
// Registro de pago =========
// ==========================

class PaymentRegister {
    constructor() {
        this.URL = `https://nifty-payne-4223a3.netlify.app/`;


    }

    redirectToChivoPagos() {
        window.open(this.URL, 'CHIVO PAGOS',
            'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=600,height=1000,left = 400,top = 50');
    }

}


// ==========================
// Ejecucion de codigo ======
// ==========================

const elements = new ElementBtn();
const payment = new PaymentRegister();
let btnWallet = {};
btnWallet = {
    render: function () {
        elements.serAttr();
        btnWallet.clickBtn(elements.render());
    },
    clickBtn: function (btn) {
        btn.addEventListener("click", function (e) { e.preventDefault(); /**Funcion de callback */ btnWallet.paymentRegister(); });
    },
    paymentRegister: function () {
        payment.redirectToChivoPagos();
    },
    paramsChivo: {
        PubKey: "",
        CallbackURL: "",
        AmountUSD: "",
        SKU: "",
        Comment: ""
    }
};

// Verificacion si el modulo necesita ser exportado
if (typeof module !== 'undefined' && module.exports) {
    module.exports = btnWallet;
}