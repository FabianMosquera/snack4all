const restaurant = () => {
  const $app = document.getElementById("app");
  const $restaurant = document.createElement("article");

  const restaurant_array = [
    {
      id: 1,
      foto: "https://pbs.twimg.com/profile_images/1380267041790300166/uXdEuQ_D_400x400.png",
      title: "Frisby",
      description: "20-40Min $7.000",
      calificacion: '<i class="fas fa-star"></i>',
    },
    {
      id: 2,
      foto: "https://d25dk4h1q4vl9b.cloudfront.net/bundles/front/media/images/favicons/favicon-512.png",
      title: "McDonald's",
      description: "40-60Min $GRATIS",
      calificacion: '<i class="fas fa-star"></i>',
    },
    {
      id: 3,
      foto: "https://www.peru-retail.com/wp-content/uploads/Dunkin-Logo-1024x576.jpg",
      title: "Dunkin",
      description: "20-40Min $4.600",
      calificacion: '<i class="fas fa-star"></i>',
    },
    {
      id: 4,
      foto: "https://ccplazacentral.com/wp-content/uploads/2021/07/logo-cosechas.jpg",
      title: "Cosechas",
      description: "40-60Min $GRATIS",
      calificacion: '<i class="fas fa-star"></i>',
    },
    {
      id: 5,
      foto: "https://sandwichqbano.com/wp-content/uploads/2020/08/logo-qbano-01.png",
      title: "Qbano",
      description: "10-15Min $3.500",
      calificacion: '<i class="fas fa-star"></i>',
    },
    {
      id: 6,
      foto: "https://restaurante.guide/wp-content/uploads/2019/09/subway-logo.jpg",
      title: "SUBWAY",
      description: "20-25Min $5.500",
      calificacion: '<i class="fas fa-star"></i>',
    },
    {
      id: 7,
      foto: "https://www.elpais.com.co/files/article_main/uploads/2019/06/20/5d0bdb8801237.jpeg",
      title: "Ventolini",
      description: "10-15Min $GRATIS",
      calificacion: '<i class="fas fa-star"></i>',
    },
    {
      id: 8,
      foto: "https://palmettoplaza.com/wp-content/uploads/2019/09/la-locura.jpg",
      title: "La locura",
      description: "30-35Min $6.500",
      calificacion: '<i class="fas fa-star"></i>',
    },
  ];
  $restaurant.classList.add("card");
  $restaurant.classList.add("wrapper");
  restaurant_array.forEach((r) => {
    $restaurant.innerHTML += `
      <div id="card">
      <div class="card-content">
        <div class="card-img">
          <img src="${r.foto}" alt="" />
        </div>
        <div class="card-text">
          <h3>${r.title}</h3>
          ${r.calificacion}
          ${r.calificacion}
          ${r.calificacion}
          ${r.calificacion}
          ${r.calificacion}
          <p>
            ${r.description}
          </p>          
        </div>
      </div>
    </div>`;

    $app.appendChild($restaurant);
  });
};

export { restaurant };