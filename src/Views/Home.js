import '../Assets/Css/Home.css';
function Home() {

  return (
    <div>

      <div class="full">
        <div class="blog-slider">
          <div class="blog-slider__wrp swiper-wrapper">
            <div class="blog-slider__item swiper-slide">
              <div class="blog-slider__img">

                <img src="https://images.pexels.com/photos/3420174/pexels-photo-3420174.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Gifts"/>
              </div>
              <div class="blog-slider__content">
                <div class="blog-slider__title">Buy Christmas gifts
                </div>
                <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                <a href="#" class="blog-slider__button">SHOP</a>
              </div>
            </div>
            <div class="blog-slider__item swiper-slide">
              <div class="blog-slider__img">
                <img src="https://images.pexels.com/photos/6141236/pexels-photo-6141236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Xmas tree"/>
              </div>
              <div class="blog-slider__content">
                <div class="blog-slider__title">Enjoy Christmas with your children</div>
                <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                <a href="#" class="blog-slider__button">READ MORE</a>
              </div>
            </div>

            <div class="blog-slider__item swiper-slide">
              <div class="blog-slider__img">
                <img src="https://images.pexels.com/photos/790916/pexels-photo-790916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Xmas firework"/>
              </div>
              <div class="blog-slider__content">
                <div class="blog-slider__title">Don't forget the fireworks</div>
                <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
              </div>
            </div>

          </div>
          <div class="blog-slider__pagination"></div>
        </div>
      </div>

    </div>
  )
}

export default Home;