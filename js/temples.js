var respuestas_correctas = 0;
const temple = {
    temples: [
        ` 
            <!-- inicio -->
                <div class="bol">
                <div class="col s10 m8 l6 offset-m2 offset-s1 offset-l3 conten white">
                    <img src="./recursos/juego_de_finanzas-01.jpg" alt="">
                </div>
                <div class="button col s6 offset-s3 ">
                    <a href="#" class="col s6 offset-s6 derecho" onclick="Contador(1)">
                    Empesar
                        <i class=" material-icons white-text ">keyboard_arrow_right</i>
                    </a>
                </div>
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
        `<!--1-->
         <div class="col s10 m8 l6 center offset-m2 offset-s1 offset-l3 bol">
            <div class="">
                <div class="bolita activa ">
                    <div class="box">
                        <span class="texto">Instructivo</span>
                        <i class="material-icons">arrow_drop_down</i>
                    </div>
                    <div class="palito"></div>
                    <div class="message center">1</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">2</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">3</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">4</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">5</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">6</div>
                </div>
                 <div class="bolita ">
                    
                    <div class="message center">7</div>
                </div>
            </div>
        </div>
        <!-- inicio -->
        <div class="col s10 m8 l6 offset-m2 offset-s1 offset-l3 conten grey_darknnes">
            <div class="col s12 m12 l6 offset-s1 center">
                <img src="./recursos/assets/explainer1-01.png" class="col s5 m5 l8 offset-l1" alt="" srcset="">
                <p class="col s6 m6 l8 offset-l1 offset-m1  center white-text texto_1">
                    Las <span>FINANZAS</span> se definen como el arte y la ciencia de administrar el dinero
                </p>
            </div>
            <div class="col m12 l6 subconten_2">
                <div class="col s12 m6 l12 center">
                    <h5 class="col s12 white blue_page_text">
                        <span>A nivel</span> PERSONAL
                    </h5>
                    <p class="col s12 white-text ">
                        Afectan las decisiones individuales de cuanto dinero gastar de los ingresos, cuanto ahorrar y como invertir los ahorros.
                    </p>
                </div>
                <div class="col s12 m6 l12 center">
                    <h5 class="col s12 white blue_page_text">
                        <span>A nivel</span> EMPRESARIAL
                    </h5>
                    <p class="col s12 white-text ">
                        Implican el mismo tipo de deciciones: como incrementar el dinero de los invercionistas, como invertor el dinero para obtenet una utilidad, y de que modo convien reinvertir las ganancias de la empresa o distribuirlas entre los invercionistas.
                    </p>
                </div>
            </div>
        </div>
        <div class="button col s6 offset-s3">
        <a href="#" class="col s6 " onclick="Contador(-1)"><i class="material-icons">keyboard_arrow_left</i>Anterior</a>
        <a href="#" class="col s6 derecho" onclick="Contador(1)">siguiente<i class=" material-icons white-text ">keyboard_arrow_right</i></a>
        </div>
        <!-- fin -->

        <style>
            p {
                font-size: 90%;
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
                margin-top: 15px;
                margin-bottom: 12px;
            }
            
            @media only screen and (min-width: 600px) and (max-width:992px) {
                p {
                    font-size: 12px;
                }
                p {
                    margin-top: 0px;
                    margin-bottom: 12px;
                }
                .texto_1 {
                    margin-top: 13%;
                    font-size: small;
                }
            }
            
            @media only screen and (max-width: 600px) {
                p {
                    font-size: 12px;
                }
                p {
                    margin-top: 0px;
                    margin-bottom: 12px;
                }
                .texto_1 {
                    margin-top: 6%;
                    font-size: small;
                }
            }
        </style>
        `,
        //...................................................................... 
        ` <!-- question -->
        <div class="col s10 m8 l6 center offset-m2 offset-s1 offset-l3 bol">
            <div class="">
                <div class="bolita activa ">
                    <div class="palito"></div>
                    <div class="message center">1</div>
                </div>
                <div class="bolita activa">
                    <div class="box">
                        <span class="texto">Pregunta</span>
                        <i class="material-icons">arrow_drop_down</i>
                    </div>
                    <div class="palito"></div>
                    <div class="message center">2</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">3</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">4</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">5</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">6</div>
                </div>
                 <div class="bolita ">
                    
                    <div class="message center">7</div>
                </div>
            </div>
        </div>
        <div class="col s10 m8 l6 offset-l3 offset-m2 offset-s1 conten grey_darknnes">
            <div class="col s12 m12 l6 subconten">
                <h6 class="col s12 white-text center ">Selecciona la respuesta correcta</h6>
                <p class="col s12 label">
                    1-¿ Que son las finanzas ?
                </p>
                <div class="col s12 question" onclick="question('r1','q1')">
                    <span class="col s1">A</span>
                    <p class="col s11">Tener mucho dinero para gastar.</p>
                </div>
                <div class="col s12 question" onclick="question('r2','q1')">
                    <span class="col s1">B</span>
                    <p class="col s11">un conjunto de planes</p>
                </div>
                <div class="col s12 question" onclick="question('r3','q1')">
                    <span class="col s1">C</span>
                    <p class="col s11">el arte y la ciencia de admnistrar el dinero.</p>
                </div>
                <div class="col s12 question" onclick="question('r4','q1')">
                    <span class="col s1">D</span>
                    <p class="col s11">A y B son correctas.</p>
                </div>
            </div>
            <div class="col s12 m12 l5 ">
                <div class="col s4 m4 l12 offset-l3 offset-s4 offset-m4 img_nube_pos" id="img_nube_pos">
                    <img src="./recursos/assets/nube.png" alt="" srcset="">
                    
                </div>
            </div>
        </div>
        <div class="button col s6 offset-s3">
        <a href="#" class="col s6 " onclick="Contador(-1)"><i class="material-icons">keyboard_arrow_left</i>Anterior</a>
        <a href="#" class="col s6 derecho" onclick="Contador(1)">siguiente<i class=" material-icons white-text ">keyboard_arrow_right</i></a>
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
                margin-top: 50%;
            }
            .img_nube_pos span {
               border-radius:20px;
               padding:5px 0px 5px 0px !important;
            }
            
            @media only screen and (min-width: 600px) and (max-width:992px) {
                .img_nube_pos img {
                    margin-top: 10%;
                }
            }
            
            @media only screen and (max-width: 600px) {
                .img_nube_pos img {
                    margin-top: 50%;
                }
            }
        </style>
        `,
        //...................................................................... 
        `<!--3-->
         <div class="col s10 m8 l6 center offset-m2 offset-s1 offset-l3 bol">
            <div class="">
                <div class="bolita activa ">
                    <div class="palito"></div>
                    <div class="message center">1</div>
                </div>
                <div class="bolita activa">

                    <div class="palito"></div>
                    <div class="message center">2</div>
                </div>
                <div class="bolita activa">
                    <div class="box">
                        <span class="texto">Instructivo</span>
                        <i class="material-icons">arrow_drop_down</i>
                    </div>
                    <div class="palito"></div>
                    <div class="message center">3</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">4</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">5</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">6</div>
                </div>
                 <div class="bolita ">
                    
                    <div class="message center">7</div>
                </div>
            </div>
        </div>
        <div class="col s10 m8 l6 offset-m2 offset-s1 offset-l3 conten grey_darknnes">
            <div class="col s12 m12 l6 center ">
                <h6 class="col s12 white-text ">CONCEPTOS DE GASTOS.</h6>
                <p class="col s12 white-text"> Por lo regular la gentela dedica poco tiempo a educar sobre conceptos de gastos, es decir, ingresos o salidads de dinero para el consumo personal y familiar.</p>
                <br>
                <p class="col s12 white-text">Es importante saber que hay dos tipos de gastos.</p>
                <div class="col s12 m12 l12">
                    <div class="col s4 m3 l5 offset-m2 offset-s1">
                        <h6 class="col s12 label  center blue_page_text">Gastos Fijos</h6>
                        <img class="col s12" src="./recursos/assets/gastos-02.png" alt="">
                        <p class="col s12 white-text ejemplo">Ej.: Pago del alquiler de la casa.</p>
                    </div>
                    <div class="col s4 m3 l5 offset-l1 offset-m1 offset-s1">
                        <h6 class="col s12 label  center blue_page_text">Gastos Variables</h6>
                        <img class="col s12" src="./recursos/assets/gastos-03.png" alt="">
                        <p class="col s12 white-text ejemplo">Ej.: Pago de energia electrica.</p>
                    </div>
                </div>
            </div>
            <div class="col s12 m12 l6 center ">
                <p class="col s12 center white-text">Para controlarlos es necesario tener un presupuesto personal, una herramienta financiera que ayuda a matener el contro de los incgesos, gastos, ahorro e inversion.</p>
                <div class="col s11S m8 l7 offset-l3 gastos_img offset-m2">
                    <div class="col s2 m2 l4">
                        <img src="./recursos/assets/gastos-07.png" class="cosita" alt="" srcset="">
                        <p class="col s12 white-text center">Ingresos</p>
                    </div>
                    <div class="col s2 m2 l4">
                        <img src="./recursos/assets/gastos-06.png" alt="" srcset="">
                        <p class="col s12 white-text center">Gastos</p>
                    </div>
                    <div class="col s2 m2 l4">
                        <img src="./recursos/assets/gastos-04.png" alt="" srcset="">
                        <p class="col s12 white-text center">Ahorro</p>
                    </div>
                    <div class="col s2 m2 l4">
                        <img src="./recursos/assets/gastos-05.png" class="cosita" alt="" srcset="">
                        <p class="col s12 white-text center">Inversión</p>
                    </div>

                </div>
            </div>
        </div>
        <div class="button col s6 offset-s3">
        <a href="#" class="col s6 " onclick="Contador(-1)"><i class="material-icons">keyboard_arrow_left</i>Anterior</a>
        <a href="#" class="col s6 derecho" onclick="Contador(1)">siguiente<i class=" material-icons white-text ">keyboard_arrow_right</i></a>
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
                font-size: 80%;
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
            
            @media only screen and (min-width: 600px) and (max-width:1292px) {
                h6.label {
                    font-size: x-small;
                }
                .conten p {
                    margin-top: 2px;
                    margin-bottom: 2px;
                    font-size: 13px;
                }
                p.ejemplo {
                    font-size:80%;
                }
                h6.label {
                    margin-top: 5px;
                }
                div.gastos_img div {
                    margin: 10px 10px 10px 10px !important;
                }
                div.gastos_img div p {
                    font-size: x-small;
                }
                div.gastos_img div img {
                    margin-left: 10px;
                }
                div.gastos_img div img.cosita {
                    width: 115%;
                }
            }
            
            @media only screen and (max-width: 600px) {
                h6.label {
                    font-size: 8.5px;
                }
                .conten p {
                    margin-top: 1px;
                    margin-bottom: 1px;
                    font-size: 13px;
                }
                p.ejemplo {
                    font-size: 6px;
                }
                h6.label {
                    margin-top: 2px;
                }
                div.gastos_img div {
                    margin: 10px 10px 10px 5px !important;
                }
                div.gastos_img div p {
                    font-size: x-small;
                }
                div.gastos_img div img {
                    margin-left: 10px;
                }
                div.gastos_img div img.cosita {
                    width: 115%;
                }
            }
        </style>


        `,
        //...................................................................... 
        `<!--4-->
         <div class="col s10 m8 l6 center offset-m2 offset-s1 offset-l3 bol">
            <div class="">
                <div class="bolita activa ">
                    <div class="palito"></div>
                    <div class="message center">1</div>
                </div>
                <div class="bolita activa">

                    <div class="palito"></div>
                    <div class="message center">2</div>
                </div>
                <div class="bolita activa">
                   
                    <div class="palito"></div>
                    <div class="message center">3</div>
                </div>
                <div class="bolita activa">
                    <div class="box">
                        <span class="texto">Pregunta</span>
                        <i class="material-icons">arrow_drop_down</i>
                    </div>
                    <div class="palito"></div>
                    <div class="message center">4</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">5</div>
                </div>
                <div class="bolita">
                    <div class="palito"></div>
                    <div class="message center">6</div>
                </div>
                 <div class="bolita ">
                    
                    <div class="message center">7</div>
                </div>
            </div>
        </div>
        <div class="col s10 m8 l6 offset-l3 offset-m2 offset-s1 conten grey_darknnes">
            <div class="col s12 m12 l6 subconten">
                <h6 class="col s12 white-text center ">Selecciona la respuesta correcta</h6>
                <p class="col s12 label">
                    1-¿ Que son las gastos ?
                </p>
                <div class="col s12 question" onclick="question('r1','q2')">
                    <span class="col s1">A</span>
                    <p class="col s11">El dinero que llevo en el bolsillo.</p>
                </div>
                <div class="col s12 question" onclick="question('r2','q2')">
                    <span class="col s1">B</span>
                    <p class="col s11">Una parte del sueldo.</p>
                </div>
                <div class="col s12 question" onclick="question('r3','q2')">
                    <span class="col s1">C</span>
                    <p class="col s11">El dinero de la alcancia</p>
                </div>
                <div class="col s12 question" onclick="question('r4','q2')">
                    <span class="col s1">D</span>
                    <p class="col s11">Egresos o salidas de dinero para el consumo personal y familiar.</p>
                </div>
            </div>
            <div class="col s12 m12 l5 ">
                <div class="col s4 m4 l12 offset-l3 offset-s4 offset-m4 img_nube_pos" id="img_nube_pos">
                    <img src="./recursos/assets/nube.png" alt="" srcset="">
                    
                </div>
            </div>
        </div>
        <div class="button col s6 offset-s3">
        <a href="#" class="col s6 " onclick="Contador(-1)"><i class="material-icons">keyboard_arrow_left</i>Anterior</a>
        <a href="#" class="col s6 derecho" onclick="Contador(1)">siguiente<i class=" material-icons white-text ">keyboard_arrow_right</i></a>
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
                margin-top: 50%;
            }
            
            @media only screen and (min-width: 600px) and (max-width:992px) {
                .img_nube_pos img {
                    margin-top: 10%;
                }
            }
            
            @media only screen and (max-width: 600px) {
                .img_nube_pos img {
                    margin-top: 50%;
                }
            }
        </style>
        `,
        //...................................................................... 
        `<!--5-->
         <div class="col s10 m8 l6 center offset-m2 offset-s1 offset-l3 bol">
            <div class="">
                <div class="bolita activa ">
                    <div class="palito"></div>
                    <div class="message center">1</div>
                </div>
                <div class="bolita activa">

                    <div class="palito"></div>
                    <div class="message center">2</div>
                </div>
                <div class="bolita activa">
                   
                    <div class="palito"></div>
                    <div class="message center">3</div>
                </div>
                <div class="bolita activa">
                    <div class="palito"></div>
                    <div class="message center">4</div>
                </div>
                <div class="bolita activa">
                    <div class="box">
                        <span class="texto">Instructivo</span>
                        <i class="material-icons">arrow_drop_down</i>
                    </div>
                    <div class="palito"></div>
                    <div class="message center">5</div>
                </div>
                <div class="bolita ">
                    <div class="palito"></div>
                    <div class="message center">6</div>
                </div>
                 <div class="bolita ">
                    
                    <div class="message center">7</div>
                </div>
            </div>
        </div>
        <div class="col s10 m8 l6 offset-m2 offset-s1 offset-l3 conten grey_darknnes">
            <div class="col s12 m6 l6 center ">
                <img src="./recursos/assets//edufinance.png" class="col s6 m9 l7 offset-l2 offset-m1" alt="" srcset="">
                <p class="col s6 m12 l12 center white-text">
                    Es lamentable decir que la educacion dinanciera personal y familiar no forma parte de los programas educativos de nigun nive, en tal sentido existe mucha gente con creencias limitadas sobre el diner, y basados en sus creencias emiten opiniones.
                </p>
            </div>
            <div class="col s12 m6 s6 center second">
                <p class="col s6 m12 l12 center white-text">
                    Ese tipo de persona vivie dando recomendaciones financieras cuado sus opiniones estan basadas en creencias limitantes
                </p>
                <img src="./recursos/assets/confused-02.png" class="col s6 m9 l7 offset-l2 offset-m1" alt="" srcset="">
            </div>
        </div>
        <div class="button col s6 offset-s3">
        <a href="#" class="col s6 " onclick="Contador(-1)"><i class="material-icons">keyboard_arrow_left</i>Anterior</a>
        <a href="#" class="col s6 derecho" onclick="Contador(1)">siguiente<i class=" material-icons white-text ">keyboard_arrow_right</i></a>
        </div>
        <style>
            div.second div {
                margin-top: 25px;
            }
            
            @media only screen and (min-width: 600px) and (max-width:992px) {
                div.conten div {
                    margin-top: 35px;
                }
            }
            
            @media only screen and (max-width: 600px) {
                div.conten div {
                    margin-top: 40px;
                }
                div.conten div p {
                    font-size: x-small;
                }
                div.conten div.second p {
                    margin-top: 25px;
                }
            }
        </style>
        `,
        //...................................................................... 
        `<!--6-->
        <div class="col s10 m8 l6 center offset-m2 offset-s1 offset-l3 bol">
            <div class="">
                <div class="bolita activa ">
                    <div class="palito"></div>
                    <div class="message center">1</div>
                </div>
                <div class="bolita activa">

                    <div class="palito"></div>
                    <div class="message center">2</div>
                </div>
                <div class="bolita activa">
                   
                    <div class="palito"></div>
                    <div class="message center">3</div>
                </div>
                <div class="bolita activa">
                    <div class="palito"></div>
                    <div class="message center">4</div>
                </div>
                <div class="bolita activa">
                    <div class="palito"></div>
                    <div class="message center">5</div>
                </div>
                <div class="bolita activa">
                    <div class="box">
                        <span class="texto">Instructivo</span>
                        <i class="material-icons">arrow_drop_down</i>
                    </div>
                    <div class="palito"></div>
                    <div class="message center">6</div>
                </div>
                 <div class="bolita ">
                    
                    <div class="message center">7</div>
                </div>
            </div>
        </div>
        <div class="col s10 m8 l6 offset-l3 offset-m2 offset-s1 conten grey_darknnes">
            <div class="col s12 m6 l6 center contenido">
                <p class="col s12 center white-text text_1">
                    La mayoria de las personas y familias no estipulan un porcentaje de sus ingresos para cada gasto, segun algunos expertos en finazaqs personales la gente deberia destinar entre :
                </p>
                <div class="col s12 m12 l9  offset-l1 offset-m1 tipos_img">
                    <div class="col s3 m5 l5">
                        <img src="./recursos/assets/alimentacion-02.png" alt="" class="col s12 l12 m12" srcset="">
                        <p class="col s12 center porciento blue_page_text">15-35%</p>
                        <p class="col s12 white-text center">Alimentacion</p>
                    </div>

                    <div class="col s3 m5 l5 cosita">
                        <img src="./recursos/assets/casa-02.png" alt="" class="col s11 " srcset="">
                        <p class="col s12 center porciento blue_page_text">15-25%</p>
                        <p class="col s12 white-text center">Alquiler de vivienda</p>
                    </div>


                    <div class="col s3 m5 l5">
                        <img src="./recursos/assets/carro-02.png" alt="" class="col s12" srcset="">
                        <p class="col s12 center porciento blue_page_text">10-15%</p>
                        <p class="col s12 white-text center">Trasporte o vehiculo</p>
                    </div>
                    <div class="col s3 m5 l5 cosita">
                        <img src="./recursos/assets/gastos-04.png" alt="" class="col m9 l9 offset-m1 offset-l1 " srcset="">
                        <p class="col s12  center porciento blue_page_text">5-10%</p>
                        <p class="col s12 white-text center ">Ahorro</p>

                    </div>
                </div>
            </div>
            <div class="col s12 m6 s6 center contenido ">
                <img src="./recursos/assets/gastos hormiga-02.png" class="col s5 m9 l7 offset-s3 offset-m1 offset-l3" alt="" srcset="">
                <p class="col s12 center white-text  text_2">
                    Tambien se recomienda cuidarse de los gastos hormigas, so los gastos no planificados de poco significado en el momento como el pago a los parqueaderos, imprevistos, los limpiadores de cristales en semaforos, gastos en reuniones de amigos.
                </p>
            </div>

        </div>
        <div class="button col s6 offset-s3">
        <a href="#" class="col s6 " onclick="Contador(-1)"><i class="material-icons">keyboard_arrow_left</i>Anterior</a>
        <a href="#" class="col s6 derecho" onclick="Contador(1)">siguiente<i class=" material-icons white-text ">keyboard_arrow_right</i></a>
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
            
            @media only screen and (min-width: 600px) and (max-width:1492px) {
                div.tipos_img div {
                    margin: 6px;
                }
                .porciento {
                    border-radius: 20px;
                    font-size: x-small;
                    font-weight: 700;
                    margin: 5px;
                }
                .contenido {
                    margin-top: 20px;
                }
                .porciento+p {
                    font-size: xx-small;
                    padding: 0px !important;
                }
                .text_1 {
                    margin-bottom: 10px;
                }
                .text_2 {
                    margin-top: 10px;
                }
            }
            
            @media only screen and (max-width: 600px) {
                div.tipos_img {
                    margin-top: 10px;
                }
                div.tipos_img div {
                    margin: 0px;
                }
                .porciento {
                    border-radius: 20px;
                    font-size: small;
                    font-weight: 700;
                    margin: 2px;
                }
                div.tipos_img div.cosita {
                    margin: -2px 0px 0px 0px !important;
                }
                .porciento {
                    border-radius: 20px;
                    font-size: xx-small;
                    font-weight: 700;
                    margin: 5px;
                }
                .text_1 {
                    font-size: small;
                }
                .text_2 {
                    font-size: small;
                }
                .porciento+p {
                    font-size: xx-small;
                    padding: 0px !important;
                }
        </style>

        `,
        //...................................................................... 
        `<!--7-->
       <div class="col s10 m8 l6  center offset-m2 offset-s1 offset-l3 bol">
            <div class="">
                <div class="bolita activa ">
                    <div class="palito"></div>
                    <div class="message center">1</div>
                </div>
                <div class="bolita activa">

                    <div class="palito"></div>
                    <div class="message center">2</div>
                </div>
                <div class="bolita activa">
                   
                    <div class="palito"></div>
                    <div class="message center">3</div>
                </div>
                <div class="bolita activa">
                    <div class="palito"></div>
                    <div class="message center">4</div>
                </div>
                <div class="bolita activa">
                   
                    <div class="palito"></div>
                    <div class="message center">5</div>
                </div>
                <div class="bolita activa">
                
                    <div class="palito"></div>
                    <div class="message center">6</div>
                </div>
                <div class="bolita activa">
                    <div class="box">
                        <span class="texto">Pregunta</span>
                        <i class="material-icons">arrow_drop_down</i>
                    </div>
                    <div class="message center">7</div>
                </div>
                
            </div>
        </div>
        <div class="col s10 m8 l6 offset-l3 offset-m2 offset-s1 conten grey_darknnes">
            <div class="col s12 m12 l6 subconten">
                <h6 class="col s12 white-text center ">Selecciona la respuesta correcta</h6>
                <p class="col s12 label">
                    1-¿ Cual es tu opinion con relacion al ahorro ?
                </p>
                <div class="col s12 question" onclick="question('r1','q3')">
                    <span class="col s1">A</span>
                    <p class="col s11">Para que ahorrar si el dinero se hizo para gastarlo.</p>
                </div>
                <div class="col s12 question" onclick="question('r2','q3')">
                    <span class="col s1">B</span>
                    <p class="col s11">El dinero ya esta hecho solo hay que salir a buscarlo cada dia</p>
                </div>
                <div class="col s12 question" onclick="question('r3','q3')">
                    <span class="col s1">C</span>
                    <p class="col s11">Siempre se puede ahorrar cuando existe flujo de ingresos</p>
                </div>
                <div class="col s12 question" onclick="question('r4','q3')">
                    <span class="col s1">D</span>
                    <p class="col s11">B y C son correctas.</p>
                </div>
            </div>
            <div class="col s12 m12 l5 ">
                <div class="col s4 m4 l12 offset-l3 offset-s4 offset-m4 img_nube_pos" id="img_nube_pos">
                    <img src="./recursos/assets/nube.png" alt="" srcset="">
                    
                </div>
            </div>
        </div>
        <div class="button col s6 offset-s3">
        <a href="#" class="col s6 " onclick="Contador(-1)"><i class="material-icons">keyboard_arrow_left</i>Anterior</a>
        <a href="#" class="col s6 derecho" onclick="Contador(1)">siguiente<i class=" material-icons white-text ">keyboard_arrow_right</i></a>
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
            
           
            @media only screen and (min-width: 1200px) {
                html {
                    font-size: small;
                }
                .img_nube_pos img {
                    margin-top: 150px;
                    width:70%;
                }
            }
            @media only screen and (min-width: 600px) and (max-width:992px) {
                .img_nube_pos img {
                    margin-top: 10%;
                }
            }
            
            @media only screen and (max-width: 600px) {
                .img_nube_pos img {
                    margin-top: 50%;
                }
                .question p {
                    font-size: xx-small;
                    font-weight: 600;
                    border-radius: 0px 10px 10px 0px
                }
            }
        </style>
        `,
        //...................................................................... 
        ` <div class="col s10 m8 l6 offset-l3 offset-m2 offset-s1 conten white bol">
                <div class="col l6 m6 s12">
                    <div class="col s4 m8 l8  offset-s4 offset-m2 offset-l2 img">
                        <img src="./recursos/assets/medalla.png">
                    </div>
                </div>
                <div class="col s12 l6 m6 ">
                    <div class="col s12  texto blue_page_text">
                        <span class="col s12 center label_puntuacion">Puntuacion</span>
                        <span class="col s12 center puntuacion">${respuestas_correctas}/4</span>
                        <span class="col s12 center texto_felitacion green_page_text">Exelente</span>
                        <p class="col s12 l10  offset-l1 m10  offset-m1 center el_lorem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                            illo dolores quisquam voluptatum mollitia delectus provident vel minima harum perferendis,
                            numquam laudantium voluptatibus nisi. Assumenda repellat animi sed mollitia odit.
                        </p>
                    </div>
                 </div>
            </div>
              <div class="button col s6 offset-s3">
        <a href="#" class="col s6 " onclick="Contador(-1)"><i class="material-icons">keyboard_arrow_left</i>Anterior</a>
        <a href="#" class="col s6 derecho" onclick="Contador(1)">siguiente<i class=" material-icons white-text ">keyboard_arrow_right</i></a>
        </div>
            <style>
                .img img{
                    margin-top:55px;
                }
                .texto {
                   margin-top:20px
                }
                .texto span{
                    margin-top:5px;
                    margin-bottom:5px;
                }
                .label_puntuacion{
                    font-size:x-small;
                    font-weight: 600;
                }
                .puntuacion{
                  font-size:large; 
                  font-weight: 600;
                }
                .texto_felitacion{
                     font-size:xx-large;
                    font-weight: 800;
                    font-style:italic;
                }
                .el_lorem{
                    font-size:small;
                }
            @media only screen and (min-width: 600px) and (max-width:992px) {
                
            }
            
            @media only screen and (max-width: 600px) {
                 .img img{
                    margin-top:10px;
                }
                .texto {
                   margin-top:10px
                }
                .texto span{
                    margin-top:5px;
                    margin-bottom:5px;
                }
            }
            </style>
        `
    ],
    gettemples: function(a) {
        return this.temples[a]
    }
}


var rendel = document.getElementById("rendel");





var contador = 0;

function Contador(n) {
    contador = contador + (n);
    console.log(temple.temples.length)
    if (contador < temple.temples.length) {
        carga(contador)

    } else {
        carga(0);
        respuestas_correctas = 0;
        console.log(contador);
    }
}

function carga(_i) {
    rendel.innerHTML = temple.gettemples(_i);
}


function question(resp, pregunta) {
    var nube = document.getElementById("img_nube_pos")
    if (pregunta == "q1") {
        if (resp == "r3") {
            respuestas_correctas = +1;

            nube.innerHTML = `
                    <img src="./recursos/assets/Alcancia-02.png" alt="" srcset="" style="width:60%;" >
                    <span class="col s6 offset-s2 center green white-text ">correcto</span>
            `
        } else {
            nube.innerHTML = `
                    <img src="./recursos/assets/Alcancia-01.png" alt="" srcset="" style="width:60%;">
                    <span class="col s6 offset-s2 center red white-text ">incorrecto</span>
            `
        }
    } else if (pregunta == "q2") {

        if (resp == "r4") {
            respuestas_correctas = +1;

            nube.innerHTML = `
                    <img src="./recursos/assets/Alcancia-02.png" alt="" srcset="" style="width:60%;" >
                    <span class="col s6 offset-s2 center green white-text ">correcto</span>
            `
        } else {
            nube.innerHTML = `
                    <img src="./recursos/assets/Alcancia-01.png" alt="" srcset="" style="width:60%;">
                    <span class="col s6 offset-s2 center red white-text ">incorrecto</span>
            `
        }

    } else if (pregunta == "q3") {
        if (resp == "r3") {
            respuestas_correctas = +1;

            nube.innerHTML = `
                    <img src="./recursos/assets/Alcancia-02.png" alt="" srcset="" style="width:60%;" >
                    <span class="col s6 offset-s2 center green white-text ">correcto</span>
            `
        } else {
            nube.innerHTML = `
                    <img src="./recursos/assets/Alcancia-01.png" alt="" srcset="" style="width:60%;">
                    <span class="col s6 offset-s2 center red white-text ">incorrecto</span>
            `
        }
    }


}