<template>
  <div class="">
    <Navbar />
    <div class="">
      <div class="">
        <div class="w-5/12 mx-auto shadow-md p-3 my-20" v-if="!submitted">
          <div>
            <h4 class="font-bold">Aktiviere dein Gutschein</h4>
            <div class="py-3 text-sm">
              Aktiviere dein Gutschein jetzt! Benutze dazu die ID, die du
              erhalten hast. Der Gutschein wird nach der Aktivierung in deiner
              Bibliothek abrufbar sein.
            </div>

            <div class="my-4">
              <div class="">
                <input
                  type="text"
                  class="border-b border-gray-300 w-full"
                  placeholder="Type in Voucher ID"
                  v-model="id"
                />
                <button
                  class="w-full mt-4 bg-red-800 py-2 text-white font-bold rounded"
                  @click="activateVoucher"
                >
                  Activate
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <br /><br />
          <br /><br />
          <br /><br />
          <h4>{{ message }}</h4>
          <button @click="activateVoucher" class="btn btn-outline-secondary">
            Activate
          </button>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>



<script>
import VoucherDataService from "../services/VoucherDataService";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
export default {
  name: "activate-vouchers",
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      vouchers: [],
      currentVoucher: null,
      currentIndex: -1,
      title: "",
      published: "",
      mail: "",
      submitted: false,
    };
  },
  methods: {
    activateVoucher() {
      VoucherDataService.activate(
        this.id,
        localStorage.getItem("currentUserName")
      )
        .then((response) => {
          this.submitted = true;
          this.vouchers = response.data;
          if (response.data.published === false) {
            this.message = "Your voucher is already in use!";
          } else {
            this.message = "Congrats! You have registered your voucher. Access it in you library";
          }
          console.log(response.data);
          window.alert(response.data.mail);
        })
        .catch((e) => {
          if (e.response.status == 400) {
            alert("Voucher already activated");
          } else {
            console.log(e);
          }
        });
    },
  },
};
</script>

<style>
.list {
  /* text-align: left; */
  /* max-width: 750px; */
  /* margin: center; */
  text-align: center;
}
</style>