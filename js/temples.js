const temple = {
    temples: [
        ` 
            <!-- inicio -->
                <div class="col s6 offset-s3 conten white">
                    <img src="./recursos/juego_de_finanzas-01.jpg" alt="">
                </div>
                <style>
                    img{
                        position:relative;
                        width:100%;
                        height: 100%;
                        border-radius:inherit;
                    }
                </style>
            <!-- fin -->
        `,
        //...................................................................... 
        `
            <!-- inicio -->
            <div class="col s6 offset-s3 conten grey_darknnes">
                <div class="col s5 offset-s1 center">
                    <img src="./recursos/assets/explainer1-01.png" class="col s10" alt="" srcset="">
                    <p class="col s11 center">
                        Las <span>FINANZAS</span> se definen como el arte y la ciencia de administrar el dinero
                    </p>
                </div>
                <div class="col s6 subconten_2">
                    <h5 class="col s12 center white blue_page_text">
                        <span>A nivel</span> PERSONAL
                    </h5>
                    <p class="col s12 center">
                        Afectan las decisiones individuales de cuanto dinero gastar de los ingresos, cuanto ahorrar y como invertir los ahorros.
                    </p>
                    <h5 class="col s12 center white blue_page_text">
                        <span>A nivel</span> EMPRESARIAL
                    </h5>
                    <p class="col s12 center">
                        Implican el mismo tipo de deciciones: como incrementar el dinero de los invercionistas, como invertor el dinero para obtenet una utilidad, y de que modo convien reinvertir las ganancias de la empresa o distribuirlas entre los invercionistas.
                    </p>
                </div>
            </div>
        <!-- fin -->

        <style>
            p {
                color: white;
                font-size: medium;
            }
            
            p span {
                font-size: large;
            }
            
            h5 {
                font-size: larger;
                font-weight: 600;
                border-radius: 10px;
                padding: 5px;
            }
            
            h5 span {
                font-style: italic;
            }
            
            .conten h5,
            p,
            img {
                margin-top: 12px;
                margin-bottom: 12px;
            }
        </style>
        `,
        //...................................................................... 
        `
        <div class="col s6 offset-s3 conten grey_darknnes">
            <div class="col s6 subconten">
                <h6 class="col s12 white-text center ">Selecciona la respuesta correcta</h6>
                <p class="col s12 label">
                    1-¿ Que son las finanzas ?
                </p>
                <div class="col s12 question">
                    <span class="col s1">A</span>
                    <p class="col s11">Tener mucho dinero para gastar.</p>
                </div>
                <div class="col s12 question">
                    <span class="col s1">B</span>
                    <p class="col s11">un conjunto de planes</p>
                </div>
                <div class="col s12 question">
                    <span class="col s1">C</span>
                    <p class="col s11">el arte y la ciencia de admnistrar el dinero.</p>
                </div>
                <div class="col s12 question">
                    <span class="col s1">D</span>
                    <p class="col s11">A y B son correctas.</p>
                </div>
            </div>
            <div class="col s5 ">
                <div class="col s8 offset-s3 img_nube_pos">
                    <img src="./recursos/assets/nube.png" alt="" srcset="">
                </div>
            </div>
        </div>



        <style>
            .subconten {
                margin-top: 5%;
            }
            
            h6 {
                font-style: italic;
            }
            
            .label {
                margin: 10px;
                font-size: medium;
                font-weight: 600;
                color: white
            }
            
            .question {
                margin: 10px;
                background: white;
                border-radius: 20px;
                padding: 0px !important;
            }
            
            .question p {
                font-size: smaller;
                font-weight: 600;
                border-radius: 0px 10px 10px 0px
            }
            
            .question span {
                background: grey;
                border-radius: 10px 0px 0px 10px;
                margin: 0px;
                font-size: smaller;
                font-weight: 600;
            }
            
            .question p:hover {
                transition: 0.5s;
                background: grey;
                color: white;
            }
            
            .question:hover span {
                transition: 0.5s;
                background-color: white;
            }
            
            .img_nube_pos img {
                margin-top: 80%;
            }
        </style>
        `,
        //...................................................................... 

        `
            <div class="col s6 offset-s3 conten grey_darknnes">
            <div class="col s6 center ">
                <h6 class="col s12 white-text ">CONCEPTOS DE GASTOS.</h6>
                <p class="col s12 white-text"> Por lo regular la gentela dedica poco tiempo a educar sobre conceptos de gastos, es decir, ingresos o salidads de dinero para el consumo personal y familiar.</p>
                <br>
                <p class="col s12 white-text">Es importante saber que hay dos tipos de gastos.</p>
                <div class="col s12">
                    <div class="col s5">
                        <h6 class="col s12 label  center blue_page_text">Gastos Fijos</h6>
                        <img class="col s12" src="./recursos/assets/gastos-02.png" alt="">
                        <p class="col s12 white-text ejemplo">Ej.: Pago del alquiler de la casa.</p>
                    </div>
                    <div class="col s5 offset-s1">
                        <h6 class="col s12 label  center blue_page_text">Gastos Variables</h6>
                        <img class="col s12" src="./recursos/assets/gastos-03.png" alt="">
                        <p class="col s12 white-text ejemplo">Ej.: Pago de energia electrica.</p>
                    </div>
                </div>
            </div>
            <div class="col s6 center ">
                <p class="col s12 center white-text">Para controlarlos es necesario tener un presupuesto personal, una herramienta financiera que ayuda a matener el contro de los incgesos, gastos, ahorro e inversion.</p>
                <div class="col s7 offset-s3 gastos_img">
                    <div class="col s4">
                        <img src="./recursos/assets/gastos-07.png" class="cosita" alt="" srcset="">
                        <p class="col s12 white-text center">Ingresos</p>
                    </div>
                    <div class="col s4">
                        <img src="./recursos/assets/gastos-06.png" alt="" srcset="">
                        <p class="col s12 white-text center">Gastos</p>
                    </div>
                    <div class="col s4">
                        <img src="./recursos/assets/gastos-04.png" alt="" srcset="">
                        <p class="col s12 white-text center">Ahorro</p>
                    </div>
                    <div class="col s4">
                        <img src="./recursos/assets/gastos-05.png" class="cosita" alt="" srcset="">
                        <p class="col s12 white-text center">Inversión</p>
                    </div>

                </div>
            </div>

        </div>
        <style>
            .conten h6 {
                margin-top: 10px;
                margin-bottom: 10px;
                font-weight: 600;
            }
            
            .conten p {
                margin-top: 5px;
                margin-bottom: 5px;
            }
            
            h6.label {
                margin-top: 10px;
                background-color: white;
                border-radius: 20px;
                font-size: small;
                font-weight: 600;
                font-style: italic;
                padding: 2px !important;
            }
            
            p.ejemplo {
                font-size: x-small;
            }
            
            div.gastos_img div {
                margin: 23px;
            }
            
            div.gastos_img div p {
                font-size: x-small;
            }
            
            div.gastos_img div img.cosita {
                width: 117%;
            }
        </style>
        

        `,
        //...................................................................... 

        `
        <div class="col s6 offset-s3 conten grey_darknnes">
            <div class="col s6 subconten">
                <h6 class="col s12 white-text center ">Selecciona la respuesta correcta</h6>
                <p class="col s12 label">
                    1-¿ Que son las gastos ?
                </p>
                <div class="col s12 question">
                    <span class="col s1">A</span>
                    <p class="col s11">el dinero que llevo en el bolsillo.</p>
                </div>
                <div class="col s12 question">
                    <span class="col s1">B</span>
                    <p class="col s11">Una parte del sueldo.</p>
                </div>
                <div class="col s12 question">
                    <span class="col s1">C</span>
                    <p class="col s11">El dinero de la alcancia.</p>
                </div>
                <div class="col s12 question">
                    <span class="col s1">D</span>
                    <p class="col s11">Egresos o salidas de dinero para el consumo personal y familiar.</p>
                </div>
            </div>
            <div class="col s5 ">
                <div class="col s8 offset-s3 img_nube_pos">
                    <img src="./recursos/assets/nube.png" alt="" srcset="">
                </div>
            </div>
        </div>



        <style>
            .subconten {
                margin-top: 5%;
            }
            
            h6 {
                font-style: italic;
            }
            
            .label {
                margin: 10px;
                font-size: medium;
                font-weight: 600;
                color: white
            }
            
            .question {
                margin: 10px;
                background: white;
                border-radius: 20px;
                padding: 0px !important;
            }
            
            .question p {
                font-size: smaller;
                font-weight: 600;
                border-radius: 0px 10px 10px 0px
            }
            
            .question span {
                background: grey;
                border-radius: 10px 0px 0px 10px;
                margin: 0px;
                font-size: smaller;
                font-weight: 600;
            }
            
            .question p:hover {
                transition: 0.5s;
                background: grey;
                color: white;
            }
            
            .question:hover span {
                transition: 0.5s;
                background-color: white;
            }
            
            .img_nube_pos img {
                margin-top: 80%;
            }
        </style>
        `,
        //...................................................................... 
        `
        <div class="col s6 offset-s3 conten grey_darknnes">
            <div class="col s6 center ">
                <img src="./recursos/assets//edufinance.png" class="col s7 offset-s2" alt="" srcset="">
                <p class="col s12 center white-text">
                    Es lamentable decir que la educacion dinanciera personal y familiar no forma parte de los programas educativos de nigun nive, en tal sentido existe mucha gente con creencias limitadas sobre el diner, y basados en sus creencias emiten opiniones.
                </p>
            </div>
            <div class="col s6 center second">
                <p class="col s12 center white-text">
                    Ese tipo de persona vivie dando recomendaciones financieras cuado sus opiniones estan basadas en creencias limitantes
                </p>
                <img src="./recursos/assets/confused-02.png" class="col s7 offset-s2" alt="" srcset="">
            </div>

        </div>
        <style>
            div.second * {
                margin-top: 25px;
            }
        </style>


        `,
        //...................................................................... 
        `
        <div class="col s6 offset-s3 conten grey_darknnes">
            <div class="col s6 center contenido">
                <p class="col s12 center white-text ">
                    La mayoria de las personas y familias no estipulan un porcentaje de sus ingresos para cada gasto, segun algunos expertos en finazaqs personales la gente deberia destinar entre :
                </p>
                <div class="col s9 offset-s1 tipos_img">
                    <div class="col s12">
                        <div class="col s5">
                            <img src="./recursos/assets/alimentacion-02.png" alt="" class="col s12" srcset="">
                            <p class="col s12 center porciento blue_page_text">15-35%</p>
                            <p class="col s12 white-text center">Alimentacion</p>
                        </div>

                        <div class="col s5 cosita">
                            <img src="./recursos/assets/casa-02.png" alt="" class="col s11 " srcset="">
                            <p class="col s12 center porciento blue_page_text">15-25%</p>
                            <p class="col s12 white-text center">Alquiler de vivienda</p>
                        </div>
                    </div>
                    <div class="col s12">
                        <div class="col s5">
                            <img src="./recursos/assets/carro-02.png" alt="" class="col s12" srcset="">
                            <p class="col s12 center porciento blue_page_text">10-15%</p>
                            <p class="col s12 white-text center">Trasporte o vehiculo</p>
                        </div>
                        <div class="col s5 cosita">
                            <img src="./recursos/assets/gastos-04.png" alt="" class="col s9 offset-s1 " srcset="">
                            <p class="col s12  center porciento blue_page_text">5-10%</p>
                            <p class="col s12 white-text center ">Ahorro</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s6 center contenido ">
                <img src="./recursos/assets/gastos hormiga-02.png" class="col s7 offset-s3" alt="" srcset="">
                <p class="col s12 center white-text">
                    Tambien se recomienda cuidarse de los gastos hormigas, so los gastos no planificados de poco significado en el momento como el pago a los parqueaderos, imprevistos, los limpiadores de cristales en semaforos, gastos en reuniones de amigos.
                </p>
            </div>

        </div>
        <style>
            .contenido {
                margin-top: 10px;
            }
            
            div.tipos_img div {
                margin: 10px;
            }
            
            .porciento {
                border-radius: 20px;
                font-size: small;
                font-weight: 700;
                margin: 5px;
            }
            
            .porciento+p {
                font-size: x-small;
            }
            
            div.tipos_img div.cosita {
                margin: 1px 0px 0px 26px !important;
            }
            
            p.porciento {
                background: white;
            }
        </style>

        `,
        //...................................................................... 
        `
        <div class="col s6 offset-s3 conten grey_darknnes">
            <div class="col s6 subconten">
                <h6 class="col s12 white-text center ">Selecciona la respuesta correcta</h6>
                <p class="col s12 label">
                    1-¿ Cual es tu opinion con relacion al ahorro ?
                </p>
                <div class="col s12 question">
                    <span class="col s1">A</span>
                    <p class="col s11">Para que ahorrar si el dinero se hizo para gastarlo.</p>
                </div>
                <div class="col s12 question">
                    <span class="col s1">B</span>
                    <p class="col s11">El dinero ya esta hecho solo hay que salir a buscarlo cada dia</p>
                </div>
                <div class="col s12 question">
                    <span class="col s1">C</span>
                    <p class="col s11">Siempre se puede ahorrar cuando existe flujo de ingresos</p>
                </div>
                <div class="col s12 question">
                    <span class="col s1">D</span>
                    <p class="col s11">B y C son correctas.</p>
                </div>
            </div>
            <div class="col s5 ">
                <div class="col s8 offset-s3 img_nube_pos">
                    <img src="./recursos/assets/nube.png" alt="" srcset="">
                </div>
            </div>
        </div>



        <style>
            .subconten {
                margin-top: 5%;
            }
            
            h6 {
                font-style: italic;
            }
            
            .label {
                margin: 10px;
                font-size: medium;
                font-weight: 600;
                color: white
            }
            
            .question {
                margin: 10px;
                background: white;
                border-radius: 20px;
                padding: 0px !important;
            }
            
            .question p {
                font-size: smaller;
                font-weight: 600;
                border-radius: 0px 10px 10px 0px
            }
            
            .question span {
                background: grey;
                border-radius: 10px 0px 0px 10px;
                margin: 0px;
                font-size: smaller;
                font-weight: 600;
            }
            
            .question p:hover {
                transition: 0.5s;
                background: grey;
                color: white;
            }
            
            .question:hover span {
                transition: 0.5s;
                background-color: white;
            }
            
            .img_nube_pos img {
                margin-top: 80%;
            }
        </style>
        `,
        //...................................................................... 
    ],
    gettemples: function(a) {
        return this.temples[a]
    }
}



var rendel = document.getElementById("rendel");
var contador = 0;

function Contador(n) {
    contador = contador + (n);
    console.log(contador);
    carga(contador)
}

function carga(_i) {
    rendel.innerHTML = temple.gettemples(_i);
}