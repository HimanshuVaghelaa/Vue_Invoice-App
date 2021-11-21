<template>
  <div class="home container">
    <div class="wrapper register">
      <div class="container">
        <div class="col-left">
          <div class="register-text">
            <h2>Welcome</h2>
            <p>Already have an account ?</p>
            <a class="btn" @click="$router.push({ name: 'Login' })">Sign In</a>
          </div>
        </div>

        <div class="col-right">
          <div class="register-form">
            <h2 class="register-form-label">Register</h2>
            <form action="">
              <p>
                <label class="register-form-input-label"
                  >Username<span>*</span></label
                >
                <input type="text" placeholder="Enter your username" required />
              </p>
              <p>
                <label class="register-form-input-label"
                  >Email<span>*</span></label
                >
                <input type="text" placeholder="Enter your email" required />
              </p>
              <p>
                <label class="register-form-input-label"
                  >Password<span>*</span></label
                >
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </p>
              <p>
                <input type="submit" value="Sign Up" />
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
  name: "Register",
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {},
};
</script>

<style src="../styles/Register.scss" lang="scss" scoped></style>
