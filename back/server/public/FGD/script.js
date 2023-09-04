const mainImage = document.getElementById('main-image');
const thumbnailCarousel = document.querySelector('.thumbnail-carousel');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

const apiUrl = `http://www.fgddesarrolloweb.es/server/server.php`;
const bag = new FormData()
bag.set('req' ,'get_all_post')


let startIndex = 0; // Índice de inicio del sliding window
const windowSize = 5; // Tamaño de la ventana de visualización
let mk = false
// Realizar solicitud a la API News API utilizando fetch
fetch(apiUrl , {
  method: 'POST', 
  body: bag
})
  .then(response => response.json())
  .then(data => {
    if (data.status == 200) {
      const articles = data.bag;

      // Función para llenar las miniaturas
      function populateThumbnails() {
        thumbnailCarousel.innerHTML = ''; // Limpiar miniaturas

        let i= 0
        while(i<windowSize){
          const  index = (startIndex) + i % articles.length

          if (articles[index] && articles[index].cover) {
            const article = articles[index];
            const thumbnailCarouselItem = document.createElement('div');
            thumbnailCarouselItem.className = 'carousel-slide-thumbnail';
            thumbnailCarouselItem.style.background = `url(${article.cover}) no-repeat center/cover`;
            thumbnailCarouselItem.addEventListener('click', () => {
              mainImage.src = article.img;
              removeActiveClassFromThumbnails();
              thumbnailCarouselItem.classList.add('active');
            });
            thumbnailCarousel.appendChild(thumbnailCarouselItem);
          }

          i++ ; 
        }
      }

      // Inicializar carrusel de miniaturas
      populateThumbnails();

      if (articles[0] && articles[0].img) {
        mainImage.src = articles[0].img;
        thumbnailCarousel.children[0].classList.add('active');
      }
      
      // Control de eventos para "next" y "previous"
      prevButton.addEventListener('click', () => {
        if (startIndex > 0) {
          startIndex -= 1;  
          populateThumbnails();
        }
      });

      nextButton.addEventListener('click', () => {
        if (startIndex < articles.length) {
          startIndex += 1;
          populateThumbnails();
        }
      });
    }
  })
  .catch(error => {
    console.error('Error al obtener datos de la API: ', error);
  });

function removeActiveClassFromThumbnails() {
  const thumbnailItems = thumbnailCarousel.querySelectorAll('.carousel-slide-thumbnail');
  thumbnailItems.forEach(item => {
    item.classList.remove('active');
  });
}
