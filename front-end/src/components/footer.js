const footer = () => {
  const $app = document.getElementById("footer");
  const $footer = document.createElement("footer");

  $footer.classList.add("footer");
  $footer.innerHTML = `
    <div class="container__footer">
        <div class="box__footer">
            <div class="logo">
                <img src="src/assets/img/Logo.svg" alt="">
            </div>
            <div class="terms">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit cum cumque velit libero officiis quam doloremque reprehenderit quae corporis! Delectus architecto officia praesentium atque laudantium, nam deleniti sapiente deserunt.</p>
            </div>
        </div>
        <div class="box__footer">
            <h2>Soluciones</h2>
            <a href="https://www.google.com">App Desarrollo</a>
            <a href="#">App Marketing</a>
            <a href="#">IOS Desarrollo</a>
            <a href="#">Android Desarrollo</a>
        </div>

        <div class="box__footer">
            <h2>Compañia</h2>
            <a href="#">Acerca de</a>
            <a href="#">Trabajos</a>
            <a href="#">Procesos</a>
            <a href="#">Servicios</a>              
        </div>

        <div class="box__footer">
            <h2>Redes Sociales</h2>
            <a href="#"> <i class="fab fa-facebook-square"></i> Facebook</a>
            <a href="#"><i class="fab fa-twitter-square"></i> Twitter</a>
            <a href="#"><i class="fab fa-linkedin"></i> Linkedin</a>
            <a href="#"><i class="fab fa-instagram-square"></i> Instagram</a>
        </div>

    </div>

    <div class="box__copyright">
        <hr>
        <p>Todos los derechos reservados © 2022 <b>Snack4all</b></p>
    </div>
    `;

  $app.appendChild($footer);
};

export { footer };
