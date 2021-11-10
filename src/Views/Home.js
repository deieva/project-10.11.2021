function Home() {

    return (

        <div>

<section>
  <div class="container">
    <div class="row justify-content-center m-0">
      <div class="col-9 p-0">
        <div class="form_wrapper position-relative">
          {/* <!--left tab genrate--> */}
          <div class="get_thumbnail">
            <ul class="new_steps pichtProlist">
              <li class="thumbnail disabled step_0 personalInfo move" data-index="0">Slide 1</li>
            </ul>
          </div>
          {/* <!--end left tab genrate--> */}
          <div class="form_box">
            <ul class="sliders">
              {/* <!--tab 1 start here--> */}
              <li class="slide active">
                <h1>slide 1</h1>
              </li>
              <li class="slide">
                <h1>slide 2</h1>
              </li>
              <li class="slide">
                <h1>slide 3</h1>
              </li>

              <li class="slide">
                <h1>slide 4</h1>
              </li>
            </ul>
          </div>
          <div class="sideBarElement">
            <ul class="steps pichtProlist">
              <li class="thumbnail step_1" data-index="1">Slide 2</li>
              <li class="thumbnail step_2" data-index="2">Slide 3</li>
              <li class="thumbnail step_3" data-index="3">Slide 4</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default Home;