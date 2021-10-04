<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="voucher.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="voucher.description"
          name="description"
        />
      </div>
      <button @click="saveVoucher" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newVoucher">Add</button>
    </div>
  </div>
</template>

<script>
import VoucherDataService from "../services/VoucherDataService";
export default {
  name: "add-voucher",
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








