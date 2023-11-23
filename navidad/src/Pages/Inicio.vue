<template>
  <section id="section" class="page-leave-active">
    <div class="background"></div>
    <button class="pushable" @click="moveToSecondScreen()">
      <span class="front"> Comencemos! </span>
    </button>
  </section>
</template>

<script>
import { ref } from "vue";
import router from "../router";
export default {
  setup() {
    function moveToSecondScreen() {
      const section = document.getElementById("section");
      section.classList.add(".page-enter");

      router.push({ path: "/buscar" });
    }

    return {
      moveToSecondScreen,
    };
  },
};
</script>
<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  background-image: url("https://i.pinimg.com/564x/b1/48/a0/b148a0a7eb95cebdc9d0aaa88138be39.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

/* Button */
.pushable {
  background: hsl(340deg 100% 32%);
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
}
.front {
  display: block;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: hsl(345deg 100% 47%);
  color: white;
  transform: translateY(-6px);
}

.pushable:active .front {
  transform: translateY(-2px);
}

/* Transition  */
.page-enter-active,
.page-leave-active {
  opacity: 1;
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
