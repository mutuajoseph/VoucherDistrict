<template>
  <div v-if="currentVoucher" class="edit-form">
    <br><br/>
<br><br/>
    <h4>Voucher</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentVoucher.title"
        />
      </div>
      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentVoucher.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentVoucher.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteVoucher"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateVoucher"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Voucher...</p>
  </div>
</template>

<script>
import VoucherDataService from "../services/VoucherDataService";

export default {
  name: "voucher",
  data() {
    return {
      currentVoucher: null,
      message: ''
    };
  },
  methods: {
    getVoucher(id) {
      VoucherDataService.get(id)
        .then(response => {
          this.currentVoucher = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentVoucher.id,
        title: this.currentVoucher.title,
        published: status
      };

      VoucherDataService.update(this.currentVoucher.id, data)
        .then(response => {
          console.log(response.data);
          this.currentVoucher.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateVoucher() {
      VoucherDataService.update(this.currentVoucher.id, this.currentVoucher)
        .then(response => {
          console.log(response.data);
          this.message = 'The voucher was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteVoucher() {
      VoucherDataService.delete(this.currentVoucher.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "vouchers" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getVoucher(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
