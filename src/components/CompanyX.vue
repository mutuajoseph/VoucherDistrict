<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
<br><br/>
<br><br/>
        <label for="title">Company</label>
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
        <label for="amount">Amount</label>
        <input
          class="form-control"
          id="amount"
          required
          v-model="voucher.amount"
          name="amount"
        />
      </div>

		<div class="form-group">
        <label for="mail">Mail</label>
        <input
          class="form-control"
          id="mail"
          required
          v-model="voucher.mail"
          name="mail"
        />
      </div>
      <button @click="saveVoucher" class="btn btn-success">Buy voucher now!</button>
    </div>

    <div v-else>
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
        title: "CompanyX",
		amount: "",
		mail: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveVoucher() {
      var data = {
        title: this.voucher.title,
		amount: this.voucher.amount,
		mail: this.voucher.mail

      };
      VoucherDataService.create(data)
        .then(response => {
          this.voucher.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newVoucher() {
      this.submitted = false;
      this.voucher = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
