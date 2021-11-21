<template>
  <header class="flex">
    <div class="branding flex">
      <img src="@/assets/file-invoice-dollar-solid.png" alt="branding" />
    </div>
    <div class="user-options flex flex-column">
      <div>
        <img src="@/assets/login.png" alt="login" />
        <p @click="$router.push({ name: 'Login' })">Login</p>
      </div>
      <!-- <div>
        <img src="@/assets/logout.png" alt="logout" />
        <p @click="$router.push({ name: 'Home' })">Log Out</p>
      </div>
      <div>
        <img src="@/assets/profile.png" alt="profile" />
        <p @click="$router.push({ name: 'Home' })">Profile</p>
      </div> -->
      <div>
        <img src="@/assets/register.png" alt="register" />
        <p @click="$router.push({ name: 'Register' })">Register</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style src="../styles/Navigation.scss" lang="scss" scoped></style>
