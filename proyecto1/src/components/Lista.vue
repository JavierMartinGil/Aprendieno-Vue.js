<template>
  <div>
    <ul class="list-group">
      <li
        v-for="(fruta, index) of arrayOrdenado"
        :key="fruta.id"
        @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{index}} - {{fruta.nombre}}
        <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
      </li>
    </ul>
    <button class="btn btn-danger mt-2" @click="reiniciar">Reiniciar</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Lista",
  computed: {
    ...mapState(["frutas"]),
    arrayOrdenado() {
      return this.frutas.sort((a, b) => b.cantidad - a.cantidad);
    }
  },
  methods: {
    ...mapMutations(["aumentar", "reiniciar"])
  }
};
</script>