<template>
  <div id="app" class="container">
    <Cabecera></Cabecera>
    <Lista />
  </div>
</template>

<script>
import Cabecera from "./components/Cabecera.vue";
import Lista from "./components/Lista";

export default {
  name: "app",
  components: {
    Cabecera,
    Lista
  }
};
</script>
