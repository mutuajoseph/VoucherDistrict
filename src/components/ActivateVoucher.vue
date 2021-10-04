<template>
  <div class="list">
    <div class="row">
    <div class="col-md-4 col-sm-4 col-xs-12"></div>
    <div class="col-md-4 col-sm-4 col-xs-12">
      <div v-if="!submitted">
        <div>
          <br /><br />
          <br /><br />
          <br /><br />
          <h4>Aktiviere dein Gutschein</h4>
          <br /><br />
          Aktiviere dein Gutschein jetzt! Benutze dazu die ID, die du erhalten
          hast. Der Gutschein wird nach der Aktivierung in deiner Bibliothek abrufbar sein.
          <br /><br />
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Type in Voucher ID"
              v-model="id"
            />
            <button @click="activateVoucher" class="btn btn-outline-secondary">
              Activate
            </button>
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
    <div class="col-md-4 col-sm-4 col-xs-12"></div>

    </div>
  </div>
</template>



<script>
import VoucherDataService from "../services/VoucherDataService";
export default {
  name: "activate-vouchers",
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
      VoucherDataService.activate(this.id, localStorage.getItem("currentUserName"))
        .then((response) => {
          this.submitted = true;
          this.vouchers = response.data;
          if (response.data.published === false) {
            this.message = "Your voucher is already in use!";
          } else {
            this.message = "F OFF";
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