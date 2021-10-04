<template>
  <div>
    <Navbar />
    <div class="w-1/2 mx-auto my-6 rounded-lg px-6 py-4 shadow-md">
      <!-- title -->
      <div class="font-bold text-2xl mb-6">My Profile</div>

      <div class="flex">
        <!-- avatar -->
        <div class="rounded-full w-4/12">
          <img class="w-72" src="../assets/user.png" alt="avatar image">
        </div>
        <!-- form -->
        <form class="w-8/12 px-4">
          <div class="my-6 py-2">
            <input
              placeholder="Username"
              type="text"
              v-model="username"
              disabled="true"
              class="border-b border-gray-400 w-full"
            />
          </div>
          <div class="my-6 py-2">
            <input
              placeholder="Email"
              type="text"
              v-model="email"
              class="border-b border-gray-400 w-full"
            />
          </div>
          <div class="my-4 py-2">
            <input
              placeholder="Password"
              type="password"
              v-model="password"
              class="border-b border-gray-400 w-full"
            />
          </div>
          <div>
            <button
              type="button"
              @click="editClicked"
              class="w-full bg-red-800 text-white py-2 rounded font-bold"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- <div class="grid-wrapper">
      <div></div>
      <div class="col-right">
        <div class="field-cont" style="margin-top: 90px">
          <h4><b>Profile</b></h4>
          <div class="input mt-20">
            <input
              placeholder="Username"
              type="text"
              v-model="username"
              style="height: 36px; width: 220px"
              disabled="true"
            />
          </div>
          <div class="input mt-20">
           
          </div>
          <div class="input mt-20">
            <input
              placeholder="Password"
              type="password"
              v-model="password"
              style="height: 36px; width: 220px"
            />
          </div>
          <div>
            <button
              type="button"
              class="btn btn-danger"
              @click="editClicked"
              style="width: 100px"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div> -->
  </div>
</template>

<script>
import VoucherDataService from "../services/VoucherDataService";
import Navbar from "../components/Navbar.vue";
export default {
  name: "{Profile}",
  components: {
    Navbar,
  },
  data() {
    return {
      username: localStorage.getItem("currentUserName"),
      email: localStorage.getItem("email"),
      password: "",
    };
  },

  methods: {
    editClicked: function () {
      window.console.log("edit is clicked");
      let obj = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      VoucherDataService.editUser(obj)
        .then((response) => {
          console.log(response);
          window.alert("Successfully Edited");
          this.$router.push({ name: "home" });
        })
        .catch((e) => {
          if (e.response.status == 400) {
            alert("Already Exist");
          } else {
            console.log(e);
          }
        });
    },
  },
  created() {},
};
</script>


<style scoped>
.grid-wrapper {
  display: grid;
  height: 98vh;
  padding: 150px;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: Roboto;
  line-height: 1.13;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #000000;
  overflow: hidden;
}
.input {
  max-width: 255px;
}
.col-right {
  /* height: 100vh; */
  display: flex;
  inset: 10px;
  align-items: baseline;
  padding: 0px 80px;
  background-color: darkgray;
  border: 2px solid black;
  border-radius: 16px;
}
.field-cont {
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
}
.mt-20 {
  margin-top: 20px;
}
</style>
