<template>
  <div id="registration">
    <div class="flex justify-between h-screen">
      <!-- card image -->
      <div class="w-1/2 px-32">
        <div class="flex flex-col items-start justify-start">
          <div class="mt-10">
            Dont have an account?<router-link
              to="/register"
              class="text-red-800 font-bold mx-1"
              >Create account</router-link
            >
          </div>

          <!-- registration form -->
          <div class="mt-20 w-11/12">
            <!-- header -->
            <div>
              <div class="text-4xl font-black">
                Sign In to <span class="text-red-800">Company X</span>
              </div>
              <div class="text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Perspiciatis, quae!
              </div>
            </div>

            <div class="mt-4">
              <!-- username -->
              <div class="flex flex-col my-6">
                <label class="font-bold">Username</label>
                <input
                  placeholder="Enter your username"
                  class="border-b border-red-800 w-11/12"
                  type="text"
                  v-model="username"
                />
              </div>
              <!-- password -->
              <div class="flex flex-col my-6">
                <label class="font-bold">Password</label>
                <input
                  placeholder="Enter your password"
                  class="border-b border-red-800 w-11/12"
                  type="password"
                  v-model="password"
                />
              </div>

              <!-- register button  -->
              <div class="mt-8">
                <button
                  @click="loginClicked"
                  class="bg-red-800 text-white w-11/12 py-2 font-bold rounded"
                >
                  Login
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
  data: () => ({
    username: "",
    password: "",
  }),
  name: "Login",
  methods: {
    loginClicked: function () {
      let obj={
        username:this.username,   
        password:this.password,
      }

      console.log(obj)
      AuthService.loginUser(obj)
        .then((response) => {         
          console.log(response.data.token);
          localStorage.setItem("currentUser", JSON.stringify({token:response.data.token}));
          localStorage.setItem("currentUserName", this.username);     
          this.$router.push({ name: "home" });
          window.location.reload();
        })
        .catch((e) => {
          if (e.response.status == 400) {
            alert("Already Exist");
          } else {
            console.log(e);
            alert(e);
          }
        });

    },
  },
  created() {
    if (localStorage.getItem("currentUser")) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>