<template>
  <div class="fixed-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Test Datamax with Vue</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item" id="nav1">
            <a class="nav-link" href="/"
              >Increment Decrement Page
              <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item" id="nav2">
            <a class="nav-link" href="/countdowntimer">Countdown Timer Page</a>
          </li>
          <li class="nav-item" id="nav3">
            <a class="nav-link" href="/listusers">List Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavbarPage",
  methods: {
    gocoundownt() {
      $("#nav2").addClass("active");
      this.$router.push("/countdowntimer");
    },
    goincrement() {
      $("#nav1").addClass("active");
      this.$router.push("/");
    },
  },
};
</script>
<style>
</style>