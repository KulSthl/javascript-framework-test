<template>
<header class="header">
    <label>Current User: {{name}}</label>
        <input type="text" v-model="changeUser"> 
         <button @click="submit">
            Apply
        </button>
</header>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend ({
  name: 'Header',
  data() {
    return {
        name: "TestUser",
        changeUser:""
    }
  },
  methods : {
      submit(){
          this.name = this.changeUser
      }
   }
})
</script>