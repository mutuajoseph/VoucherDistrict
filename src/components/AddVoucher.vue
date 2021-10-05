<template>
  <div class="add-voucher">
    <Navbar />
    <div class="shadow-md my-20 w-4/12 mx-auto p-3" v-if="!submitted">
      <div class="flex flex-col">
        <label class="font-bold text-sm" for="title">Title</label>
        <input
          type="text"
          class="border-b border-gray-300"
          id="title"
          placeholder="Enter voucher title"
          required
          v-model="voucher.title"
          name="title"
        />
      </div>
      <div class="flex flex-col py-4">
        <label class="font-bold text-sm"  for="description">Description</label>
        <input
          class="border-b border-gray-300"
          id="description"
          placeholder="Enter voucher description"
          required
          v-model="voucher.description"
          name="description"
        />
      </div>
      <button @click="saveVoucher" class="w-full text-white bg-red-800 rounded font-bold py-2">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newVoucher">Add</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import VoucherDataService from "../services/VoucherDataService";
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
export default {
  name: "add-voucher",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      voucher: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveVoucher() {
      var data = {
        title: this.voucher.title,
        description: this.voucher.description,
      };
      VoucherDataService.create(data)
        .then((response) => {
          this.voucher.id = response.data.id;
          console.log(response.data);
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








