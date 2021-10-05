<template>
  <div>
    <div id="preloder">
      <div class="loader"></div>
    </div>
    <Navbar />

    <section class="px-24 py-8">
      <!-- title -->
      <div class="py-4">
        <div class="font-bold text-3xl uppercase">Choose company</div>
        <div class="bg-red-800 w-20 h-2"></div>
      </div>
      <!-- A list of companies -->
      <div class="flex flex-wrap gap-2">
        <div class="w-2/12 rounded shadow-md">
          <img class="rounded" src="../assets/wine.jpeg" alt="wine image" />
          <div class="my-4 px-2">
            <div class="font-bold py-1">Wein Laden Zurich</div>
            <div>In Zürichs bester Weinstube</div>

            <!-- shop now button -->
            <div class="mt-4">
              <button
                @click="$router.push({ path: `/companyY` })"
                class="uppercase border-b-4 border-red-800 font-bold"
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div class="w-2/12 rounded shadow-md">
          <img
            class="rounded"
            src="../assets/massage.jpeg"
            alt="massage image"
          />
          <div class="my-4 px-2">
            <div class="font-bold py-1">Best Thai Zürich</div>
            <div>At Best Thai Zürich</div>

            <!-- shop now button -->
            <div class="mt-4">
              <button
                @click="$router.push({ path: `/companyX` })"
                class="uppercase border-b-4 border-red-800 font-bold"
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div class="w-2/12 rounded shadow-md">
          <img
            class="rounded"
            src="../assets/category-4.jpg"
            alt="category image"
          />
          <div class="my-4 px-2">
            <div class="font-bold py-1">Wellness Oase Schmerikon</div>
            <div>Im Berghotel Blume</div>

            <!-- shop now button -->
            <div class="mt-4">
              <button class="uppercase border-b-4 border-red-800 font-bold">
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div class="w-2/12 rounded shadow-md">
          <img class="rounded" src="../assets/wurst.jpg" alt="wurst image" />
          <div class="my-4 px-2">
            <div class="font-bold py-1">Sternen Grill</div>
            <div>Jetzt Taler kaufen</div>

            <!-- shop now button -->
            <div class="mt-4">
              <button class="uppercase border-b-4 border-red-800 font-bold">
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div class="w-2/12 rounded shadow-md">
          <img class="rounded" src="../assets/wurst.jpg" alt="wurst image" />
          <div class="my-4 px-2">
            <div class="font-bold py-1">E Wurst im Sterne!</div>
            <div>Jetzt Taler kaufen</div>

            <!-- shop now button -->
            <div class="mt-4">
              <button class="uppercase border-b-4 border-red-800 font-bold">
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div class="w-2/12 rounded shadow-md">
          <img class="rounded" src="../assets/wurst.jpg" alt="wurst image" />
          <div class="my-4 px-2">
            <div class="font-bold py-1">E Wurst im Sterne!</div>
            <div>Jetzt Taler kaufen</div>

            <!-- shop now button -->
            <div class="mt-4">
              <button class="uppercase border-b-4 border-red-800 font-bold">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue"
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  components: {
    Navbar,
    Footer
  },

  mounted() {
    $(".set-bg").each(function () {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });
  },
};
</script>


