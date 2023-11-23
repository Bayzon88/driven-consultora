<template>
  <section>
    <div class="background"></div>
    <div id="search" class="page-enter-active">
      <input class="input-text" type="text" placeholder="" />
      <button class="pushable" @click="moveToSecondScreen()">
        <span class="front"> Buscar </span>
      </button>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    function moveToSecondScreen() {}
    return {
      moveToSecondScreen,
    };
  },
  mounted() {
    setTimeout(() => {
      document.getElementById("search").classList.add("page-enter");
    }, 500);
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
/* Text Input */
.input-text {
  position: absolute;
  top: 50%;
  height: 3rem;
  width: 90%;
  left: 5%;

  padding: 12px 20px;
  font-size: 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: white;
  border-radius: 6px;
  text-align: center;
  outline: transparent;
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
  bottom: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
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

/* transition classes */
.page-enter-active,
.page-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .page-leave-active in <2.1.8 */ {
  opacity: 1;
}
</style>
