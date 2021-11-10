import '../Assets/Css/Home.css';
import $ from 'jquery';

function Home() {

    function moveToSelected(element) {
        if (element == "next") {
          var selected = $(".selected").next();
        } else if (element == "prev") {
          var selected = $(".selected").prev();
        } else {
          var selected = element;
        }
      
        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();
      
        $(selected).removeClass().addClass("selected");
      
        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");
      
        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");
      
        $(nextSecond).nextAll().removeClass().addClass("hideRight");
        $(prevSecond).prevAll().removeClass().addClass("hideLeft");
      }
      
      // Eventos teclado
      $(document).keydown(function (e) {
        switch (e.which) {
          case 37: // left
            moveToSelected("prev");
            break;
      
          case 39: // right
            moveToSelected("next");
            break;
      
          default:
            return;
        }
        e.preventDefault();
      });
      
      $("#carousel div").click(function () {
        moveToSelected($(this));
      });
      
      $("#prev").click(function () {
        moveToSelected("prev");
      });
      
      $("#next").click(function () {
        moveToSelected("next");
      });
      

    return (

        <div>
            <main>

<div id="carousel">

  <div class="hideLeft">
    <img src="https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg"/>
  </div>

  <div class="prevLeftSecond">
    <img src="https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg"/>
  </div>

  <div class="prev">
    <img src="https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg"/>
  </div>

  <div class="selected">
    <img src="https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg"/>
  </div>

  <div class="next">
    <img src="https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg"/>
  </div>

  <div class="nextRightSecond">
    <img src="https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg"/>
  </div>

  <div class="hideRight">
    <img src="https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg"/>
  </div>

</div>

<div class="buttons">
  <button id="prev">Prev</button>
  <button id="next">Next</button>
</div>

</main>


        </div>
    )
}

export default Home;