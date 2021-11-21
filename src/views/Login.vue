<template>
  <div class="home container">
    <div class="wrapper login">
      <div class="container">
        <div class="col-left">
          <div class="login-text">
            <h2>Welcome Back</h2>
            <p>Create your account.<br />It's totally free.</p>
            <a class="btn" @click="$router.push({ name: 'Register' })">Sign Up</a>
          </div>
        </div>

        <div class="col-right">
          <div class="login-form">
            <h2 class="login-form-label">Login</h2>
            <form action="">
              <p>
                <label class="login-form-input-label">Username<span>*</span></label>
                <input type="text" placeholder="Enter your username" required />
              </p>
              <p>
                <label class="login-form-input-label">Password<span>*</span></label>
                <input type="password" placeholder="Enter your password" required />
              </p>
              <p>
                <input type="submit" value="Sign In" />
              </p>
              <p>
                <a href="">Forget password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {},
};
</script>

<style src="../styles/Login.scss" lang="scss" scoped></style>
