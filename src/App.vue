<template>
  <header id="app">
    <!-- the router outlet, where all matched components would ber viewed -->
    <div>
      <b-nav>
        <b-nav-item v-bind:to="'/'">Home</b-nav-item>
        <b-nav-item v-bind:to="'/contact-us'">Contact Us</b-nav-item>
      </b-nav>

      <HelloWorld message="Hello World"/>
    </div>
    <!-- <router-link v-bind:to="'/'">Home</router-link><br>
    <router-link v-bind:to="'/contact-us'">Contact us</router-link> -->

    <router-view></router-view>
  </header>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
