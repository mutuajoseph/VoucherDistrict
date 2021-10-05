<template>
  <div class="">
    <Navbar />
    <div class="flex gap-4 px-24 py-10">
      <div class="w-5/12 mx-auto p-2">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search by Company"
            v-model="title"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="searchTitle"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div class="w-7/12 p-2 shadow-md">
        <div>
          <h4 class="font-bold">Your Vouchers List</h4>
          <ul class="list-group">
            <li
              class="list-group-item"
              :class="{ active: index == currentIndex }"
              v-for="(voucher, index) in vouchers"
              :key="index"
              @click="setActiveVoucher(voucher, index)"
            >
              {{ voucher.title }}
            </li>
          </ul>
          <button class="m-3 btn btn-sm btn-danger" @click="removeAllVouchers">
            Remove All
          </button>
        </div>
        <div class="col-md-6">
          <div v-if="currentVoucher">
            <h4>Voucher</h4>
            <div>
              <label><strong>Company:</strong></label>
              {{ currentVoucher.title }}
            </div>
            <div>
              <label><strong>Amount:</strong></label>
              {{ currentVoucher.amount }}
            </div>
            <div>
              <label><strong>Status:</strong></label>
              {{ currentVoucher.published ? "Published" : "Pending" }}
            </div>
            <router-link
              :to="'/vouchers/' + currentVoucher.id"
              class="badge badge-warning"
              >Edit</router-link
            >
          </div>
          <div v-else>
            <br />
            <p>Please click on a Voucher...</p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import VoucherDataService from "../services/VoucherDataService";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
export default {
  name: "vouchers-list",
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
    };
  },
  methods: {
    retrieveVouchers() {
      VoucherDataService.getAll(localStorage.getItem("currentUserName"))
        .then((response) => {
          this.vouchers = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveVouchers();
      this.currentVoucher = null;
      this.currentIndex = -1;
    },
    setActiveVoucher(voucher, index) {
      this.currentVoucher = voucher;
      this.currentIndex = voucher ? index : -1;
    },
    removeAllVouchers() {
      VoucherDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      VoucherDataService.findByTitle(this.title)
        .then((response) => {
          this.vouchers = response.data;
          this.setActiveVoucher(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveVouchers();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>


