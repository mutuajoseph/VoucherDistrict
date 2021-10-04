<template>
  <div id="navbar" class="bg-red-800 text-white w-full h-20 flex justify-between items-center px-24">
    <div class="font-bold text-2xl">
        Voucher District
    </div>

    <div>
        <ul class="flex justify-between items-center gap-4">
            <li><router-link v-if="currentUser" to="/buy">Buy Voucher</router-link></li>
            <li><router-link v-if="currentUser" to="/activate">Activate Voucher</router-link></li>
            <li><router-link v-if="currentUser" to="/vouchers">Library</router-link></li>
            <li><router-link v-if="!currentUser" to="/register">Register</router-link></li>
            <li><router-link v-if="currentUser" to="/profile">Profile</router-link></li>
            <li><router-link v-if="!currentUser" to="/login">Login</router-link></li>
            <li v-if="currentUser" @click="logout">Logout</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>