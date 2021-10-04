<template>
<div>
  <div id="preloder">
    <div class="loader"></div>
  </div>
  <Navbar/>
  <section class="page-section portfolio" id="portfolio">
    <div class="container">
      <h2
        class="
          page-section-heading
          text-center text-uppercase text-secondary
          mb-0
        "
      >
        Choose company
      </h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
      </div>
      <div class="row justify-content-center">
      </div>
    </div>

    <section class="categories">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-20">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg"
                  data-setbg="assets/img/wine.jpeg"
                >
                  <div class="categories__text">
                    <h4>Wein Laden Zurich</h4>
                    <p>In Zürichs bester Weinstube</p>
                    <router-link to="/companyY">Company Y</router-link>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg"
                  data-setbg="assets/img/massage.jpeg"
                >
                  <div class="categories__text">
                    <h4>Best Thai Zürich</h4>
                    <p>At Best Thai Zürich</p>
                    <router-link to="/companyX">Company X</router-link>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg"
                  data-setbg="assets/img/categories/category-4.jpg"
                >
                  <div class="categories__text">
                    <h4>Wellness Oase Schmerikon</h4>
                    <p>Im Berghotel Blume</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg"
                  data-setbg="assets/img/wurst.jpg"
                >
                  <div class="categories__text">
                    <h4>Sternen Grill</h4>
                    <p>Jetzt Taler kaufen</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
               <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg"
                  data-setbg="assets/img/wurst.jpg"
                >
                  <div class="categories__text">
                    <h4>E Wurst im Sterne!</h4>
                    <p>Jetzt Taler kaufen</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
               <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg"
                  data-setbg="assets/img/wurst.jpg"
                >
                  <div class="categories__text">
                    <h4>E Wurst im Sterne!</h4>
                    <p>Jetzt Taler kaufen</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import jQuery from 'jquery';
const $=jQuery;
window.$ = $;

export default ({
  components: {
    Navbar
  },

  mounted() {
     $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
  },
})
</script>


