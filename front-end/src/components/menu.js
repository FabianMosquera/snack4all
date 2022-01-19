const menu = () => {
  const $app = document.getElementById("app_menu");
  const $menu = document.createElement("article");

  const menu_array = [
    {
      id: 1,
      foto: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/428abc27-2376-4b7d-a4f3-4b4728e8611a/202201180619_kgecafslkio.png",
      title: "2 EGG MCMUFFIN DOBLE SALCHICHA",
      description: "2 English Muffin con Doble Salchicha, queso cheddar y huevo",
    },
    /*{
      id: 2,
      foto: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/9c066de9-6aa1-42d8-a695-6a003649d24d/202106212237_RDG4_.jpeg",
      title: "CHEESECAKE + 1LITRO DE HELADO",
      description: "Cheescake de limón",
    },*/
    {
      id: 3,
      foto: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/3ae4e339-7f7a-4288-adde-2f2b3e06d964/202112291615_QQ6J_i.jpg",
      title: "COMBO PARA COMPARTIR",
      description: "Lleva 4 Sub + 4 Bebidas",
    },
  ];

  $menu.classList.add("article");
  menu_array.forEach((m) => {
    $menu.innerHTML += `
      <figure class="figure_content">
        <img
          src="${m.foto}"
          alt=""
        />
        <div class="article_content">
          <figcaption>${m.title}</figcaption>
          <p>
            ${m.description}
          </p>
        </div>
      </figure>
      <div class="content_btn">
        <button class="btn preview" id="preview">Vista Previa</button>
        <button class="btn carrito" id="carrito">Agregar al carrito</button>
      </div>`;

    $app.appendChild($menu);
  });
};

export { menu };
