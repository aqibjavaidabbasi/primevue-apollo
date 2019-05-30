<template>
  <div id="app">
    <div class="app-container">
      <img alt="Vue logo" src="./assets/primevue-logo.png">
      <HelloWorld msg="Welcome to Your PrimeVue + TypeScript App"/>
      <form @submit.prevent="greet">
        <InputText type="text" v-model="text"/>
        <Button type="submit" label="Submit"/>
        <h3>{{message}}</h3>
      </form>
    </div>

    <Toast/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  public message: string = '';
  public text: string = '';

  public greet() {
    if (this.text.length) {
      this.$toast.add({ severity: 'info', summary: 'Hello ' + this.text });
      this.message = 'Hello ' + this.text;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.app-container {
  text-align: center;
}

body #app .p-button {
  margin-left: .2em;
}

form {
  margin-top: 2em;
}
</style>
