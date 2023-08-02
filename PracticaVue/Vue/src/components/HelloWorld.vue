<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

//const count = ref(0)
//<button type="button" @click="count++">count is: {{ count }}</button>
</script>

<template>
  <h1 type="h1">{{ msg }}</h1>
  <p id="calculadora">
      <table className='calculadora' border="2">
        <tr>
          <td colspan="4" id="primeraFila">
            <p id="display">{{getOperation}}</p>
            <p id="display">{{getResult}}</p>
          </td>
        </tr>
        <tr>
          <td><button type="button" @Click="clickC()">C</button></td>
          <td><button type="button" @Click="click('(')">(</button></td>
          <td><button type="button" @Click="click(')')">)</button></td>
          <td><button type="button" @Click="click('/')">/</button></td>
        </tr>
        <tr>
          <td><button type="button" @Click="click('7')">7</button></td>
          <td><button type="button" @Click="click('8')">8</button></td>
          <td><button type="button" @Click="click('9')">9</button></td>
          <td><button type="button" @Click="click('*')">*</button></td>
        </tr>
        <tr>
          <td><button type="button" @Click="click('4')">4</button></td>
          <td><button type="button" @Click="click('5')">5</button></td>
          <td><button type="button" @Click="click('6')">6</button></td>
          <td><button type="button" @Click="click('-')">-</button></td>
        </tr>
        <tr>
          <td><button type="button" @click="click('1')">1</button></td>
          <td><button type="button" @Click="click('2')">2</button></td>
          <td><button type="button" @Click="click('3')">3</button></td>
          <td><button type="button" @click="click('+')">+</button></td>
        </tr>
        <tr>
          <td colSpan="2">
            <button type="button" @Click="click('0')">0</button>
          </td>
          <td><button type="button" @Click="click('.')">.</button></td>
          <td>
            <button type="button" @Click="clickResult()">=</button>
          </td>
        </tr>
      </table>
  </p>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
export default {
  data (){
    return{
      getOperation: '',
      getResult: '0'
    }
  },
  methods: {
    clickC(){
      this.getResult = '0';
    },

    click(numero){
      if(this.getResult == '0'){
        this.getResult = numero;
      }
      else{
        this.getResult += numero;
      }
    },

    clickResult(){
      let operacion = this.getResult;
      this.getOperation = operacion;

      this.getResult = eval(operacion);
    }
  }
}
</script>
<style scoped>
a {
  color: #145e3c;
}
</style>
