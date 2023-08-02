<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="==Calculadora en Vue 3==" />
</template>

<style>
#appfull {
  background-color: #49b849;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
h1 {
  color: #19223b;
}
#calculadora {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}
button {
  font-size: calc(10px + 2vmin);
  width: 100%;
  border-radius: 8px;
}

button:hover {
  background-color: rgb(70, 185, 147);
  color: white;
}
#primeraFila {
  background-color: white;
}
#display {
  background-color: white;
  font-size: calc(10px + 2vmin);
  width: 100%;
  border-radius: 8px;
}
</style>
