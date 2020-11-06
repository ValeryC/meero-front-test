<template>
  <div class="home">
    <Navbar/>
    <Main/>
    <Project/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Main from "@/components/Main.vue";
import Project from "@/components/Project.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Main,
    Project
  }
};
</script>
