<template>
  <div id="registration">
    <div class="flex justify-between h-screen">
      <!-- card image -->
      <div class="w-1/2 px-32">
        <div class="flex flex-col items-start justify-start">
          <div class="mt-10">
            Have an account?<router-link
              to="/login"
              class="text-red-800 font-bold mx-1"
              >Sign In</router-link
            >
          </div>

          <!-- registration form -->
          <div class="mt-20 w-11/12">
            <!-- header -->
            <div>
              <div class="text-4xl font-black">
                Welcome to <span class="text-red-800">Company X</span>
              </div>
              <div class="text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Perspiciatis, quae!
              </div>
            </div>

            <div class="mt-4">
              <!-- username -->
              <div class="flex flex-col my-8">
                <label class="font-bold">Username</label>
                <input
                  placeholder="Enter your username"
                  class="border-b border-gray-400 w-11/12"
                  type="text"
                  v-model="username"
                />
              </div>
              <!-- email -->
              <div class="flex flex-col my-10">
                <label class="font-bold">Email</label>
                <input
                  placeholder="Enter your email"
                  class="border-b border-gray-400 w-11/12"
                  type="text"
                  v-model="email"
                />
              </div>
              <!-- password -->
              <div class="flex flex-col my-8">
                <label class="font-bold">Password</label>
                <input
                  placeholder="Enter your password"
                  class="border-b border-gray-400 w-11/12"
                  type="password"
                  v-model="password"
                />
              </div>

              <!-- register button  -->
              <div class="">
                <button
                  @click="registerUser"
                  class="bg-red-800 text-white w-11/12 py-2 font-bold rounded"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- card text -->
      <div class="w-1/2 bg-red-800">
        <img
          class="w-10/12 relative left-24 top-8"
          src="../assets/rafiki.png"
          alt="sign up illustration"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "../services/AuthService";
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },

  methods: {
    cancelClicked: function () {
      this.$router.push({ name: "login" });
    },
    registerUser: function () {
      let obj = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      AuthService.registerUser(obj)
        .then((response) => {
          console.log(response);
          // window.alert("Successfully Registered");
          // this.$router.push({ name: "login" });
        })
        .catch((e) => {
          console.log(e.response)
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

<style>
</style>