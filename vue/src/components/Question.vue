<template>
    <label>{{question.question}}...
        <button v-bind:class="{false:lock && (answer !== option), correct:lock && (answer === option)}" v-for="option in question.options" :key="option" @click="handleClick(option)">
            {{option}}
        </button>
    </label>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import {Question} from '../FakeData'
export default Vue.extend({
    data(){
        return {
            answer:this.question.answer,
            lock:false,
            state:{isAnwered:false,isCorrect:false}
        }
    },
  props: {
    question: {} as PropType<Question>,
  },
  methods:{
      handleClick(value:string){
        if(!this.lock){
            if(this.answer === value){
            this.$emit("question-answered",{isAnswered:true,isCorrect:true})
        }
        else{
            this.$emit("question-answered",{isAnswered:true,isCorrect:false})
        }
        this.lock = true
        }
      }
  }
})
</script>