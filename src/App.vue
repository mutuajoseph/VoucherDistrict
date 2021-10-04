<template>
  <div id="app">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Voucher District App</title>
        <!-- Favicon-->
        <!-- Font Awesome icons (free version)-->
        <!-- <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script> -->
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <!-- <link href="css/styles.css" rel="stylesheet" /> -->
      </head>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  
  name: "app",
  data: () => ({
    isLogin:true,
    currentUser:null,
  }),
  methods:{
    logout(){
      console.log("Called")
      localStorage.removeItem("currentUser");
      this.$router.push({ name: "home" });
      this.currentUser = null
    }
  },
  mounted(){
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }
  
};
  
</script>

<style>
.router-color {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
	border: none;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	padding: 0;
}
.router-color:hover{
    color: #1abc9c;
    cursor: pointer;
}
</style>

