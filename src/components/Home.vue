<head>
  <!-- Custom Scripts for this template -->
  <script src="assets/js/jquery-3.3.1.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
  <script src="assets/js/jquery.magnific-popup.min.js"></script>
  <script src="assets/js/jquery-ui.min.js"></script>
  <script src="assets/js/mixitup.min.js"></script>
  <script src="assets/js/jquery.slicknav.js"></script>
  <script src="assets/js/owl.carousel.min.js"></script>
  <script src="assets/js/jquery.nicescroll.min.js"></script>
  <script src="assets/js/main.js"></script>
</head>
 <template>
  <div>
    <div id="preloder">
      <div class="loader"></div>
    </div>
    <Navbar />
    <section>
      <div class="flex justify-around items-center px-24 py-4">
        <div class="w-1/2">

        <div class="relative left-24">
          <!-- title -->
          <div class="text-black font-black text-6xl my-4">Company X</div>
          <div>
            Kaufen noch heute ein Gutschein von Company X um ihren <br />
            Lieben eine Freude zu machen
          </div>
          <div class="my-4">
            <button @click="$router.push({path: `/buy`})" class="bg-red-800 py-2 px-4 text-white font-bold">
              Shop Now
            </button>
          </div>
        </div>
        </div>
        <div class="w-1/2">
          <img class="w-10/12" src="../assets/Payment.png" alt="hero icon" />
        </div>
      </div>
    </section>

    <section class="services spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="services__item">
              <i class="fa fa-car"></i>
              <h6>Free Shipping</h6>
              <p>Per Email oder Post!</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="services__item">
              <i class="fa fa-money"></i>
              <h6>Gutscheine sicher aufbewahren</h6>
              <p>In Ihrer Online Bibliothek</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="services__item">
              <i class="fa fa-support"></i>
              <h6>Online Support 24/7</h6>
              <p>Dedicated support</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="services__item">
              <i class="fa fa-headphones"></i>
              <h6>Payment Secure</h6>
              <p>100% secure payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="categories">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 p-0">
            <div
              class="categories__item categories__large__item set-bg"
              data-setbg="assets/img/eating.jpeg"
            >
              <div class="categories__text">
                <h1>Company X</h1>
                <h4Big>
                  Kaufen noch heute ein Gutschein von Company X um ihren Lieben
                  eine Freude zu machen
                </h4Big>
                <router-link to="/companyX">Shop now</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg"
                  data-setbg="assets/img/wine.jpeg"
                >
                  <div class="categories__text">
                    <h4>Wein kosten bei Company Y</h4>
                    <p>In Zürichs bester Weinstube</p>
                    <router-link to="/companyY">Shop now</router-link>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg"
                  data-setbg="assets/img/massage.jpeg"
                >
                  <div class="categories__text">
                    <h4>Thai Massage</h4>
                    <p>At Best Thai Zürich</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg"
                  data-setbg="assets/img/categories/category-4.jpg"
                >
                  <div class="categories__text">
                    <h4>Wellness pur</h4>
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

    <section class="my-10">
      <div class="flex flex-col justify-center items-center gap-2 mb-4">
        <h4 class="text-center font-bold">Unsere Mission</h4>
        <div class="bg-red-800 h-1 w-14"></div>
      </div>

      <h4 class="px-24 text-center">
        Gewinnen Sie mit Voucher District die Kontrolle über Ihre
        Geschenksgutscheine zurück. Wir machen sie handlich und einfach
        zugänglich!
      </h4>
    </section>

    <!-- <section
      class="banner set-bg my-4"
      data-setbg="assets/img/banner/banner-1.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-8 m-auto">
            <div class="banner__slider owl-carousel">
              <div class="banner__item">
                <div class="banner__text">
                  <span>Jetzt profiteren</span>
                  <h1>Neue Kollektion von Kleidermarke X</h1>
                  <a href="#">Shop now</a>
                </div>
              </div>
              <div class="banner__item">
                <div class="banner__text">
                  <span>2 für 1 Essen mit Gutschein</span>
                  <h1>Ab ins Restaurant!</h1>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="discount">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 p-0"></div>
          <div class="col-lg-6 p-0">
            <div class="discount__text">
              <div class="discount__text__title">
                <span>Discount</span>
                <h2>Restaurant Kürbis</h2>
                <h5><span>20%</span>Auf Gutscheine ab 100.-</h5>
              </div>
              <div class="discount__countdown" id="countdown-time">
                <div class="countdown__item">
                  <span>22</span>
                  <p>Days</p>
                </div>
                <div class="countdown__item">
                  <span>18</span>
                  <p>Hour</p>
                </div>
                <div class="countdown__item">
                  <span>46</span>
                  <p>Min</p>
                </div>
                <div class="countdown__item">
                  <span>05</span>
                  <p>Sec</p>
                </div>
              </div>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue"
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  mounted() {
    $(".set-bg").each(function () {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });
  },

  components: {
    Navbar,
    Footer
  },
};
</script>
