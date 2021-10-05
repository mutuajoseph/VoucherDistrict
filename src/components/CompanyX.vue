<template>
  <div id="buy-voucher">
    <Navbar />
    <div class="shadow-md w-4/12 mx-auto my-20 p-4" v-if="!submitted">
      <div class="flex flex-col py-4">
        <label class="font-bold text-sm" for="title">CompanyY</label>
        <input
          type="text"
          class="border-b border-gray-300"
          id="title"
          required
          v-model="voucher.title"
          name="Hallo"
        />
      </div>

      <div class="flex flex-col py-2">
        <label class="font-bold text-sm" for="amount">Amount</label>
        <!-- <input
          class="border-b border-gray-300"
          placeholder="Enter amount"
          id="amount"
          required
          v-model="voucher.amount"
          name="amount"
        /> -->
        <select name="amount" required v-model="voucher.amount" id="amounts">
          <option value="">Choose amount</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
      </div>

      <div class="flex flex-col py-4">
        <label class="font-bold text-sm" for="mail">Mail</label>
        <input
          class="border-b border-gray-300"
          placeholder="Enter mail"
          id="mail"
          required
          v-model="voucher.mail"
          name="mail"
        />
      </div>
      <button
        @click="saveVoucher"
        class="w-full bg-red-800 py-2 text-white font-bold rounded"
      >
        Buy voucher now!
      </button>
    </div>

    <!-- <div v-else class="w-5/12 mx-auto shadow-md p-4 my-24 flex flex-col justify-center items-center gap-4">
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newVoucher">Add</button>
    </div> -->


     <div v-else class="w-7/12 mx-auto shadow-md p-4 my-24 flex flex-col justify-center items-center gap-4">
      <img src="../assets/checked.gif" alt="Checked">
      <h4>Congrats! Voucher bought successfully!</h4>
      <button class="btn btn-success" @click="newVoucher">Add</button>
    </div>
    <Footer />
  </div>
</template>


<script>
import VoucherDataService from "../services/VoucherDataService";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
export default {
  name: "add-voucher",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      voucher: {
        id: null,
        title: "CompanyX",
        amount: "",
        mail: "",
        published: false,
        loading: false
      },
      submitted: false,
    };
  },

  created() {
    console.log(this.VueSimpleAlert)
  },

  methods: {
    saveVoucher() {
      var data = {
        title: this.voucher.title,
        amount: this.voucher.amount,
        mail: this.voucher.mail,
      };
      this.loading = true
      VoucherDataService.create(data)
        .then((response) => {
          this.voucher.id = response.data.id;
          console.log(response.data);
          this.loading = false;
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newVoucher() {
      this.submitted = false;
      this.voucher = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
