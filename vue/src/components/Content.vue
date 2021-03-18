<template>
<div class="content">
            <p>Qui esse ea sunt eu enim et amet aliqua eiusmod do magna dolor laboris. Quis nostrud ex elit eu ex irure quis cillum laborum occaecat elit occaecat. Amet aute amet magna pariatur pariatur. Deserunt est pariatur pariatur voluptate pariatur fugiat est elit id ipsum quis ea officia velit.</p>
            <p>Score: {{score}}</p>
            <div class="flex">
                <div class="card" v-for="item in data.quiz.maths" :key="item.question">
                    <Question :question="item" v-on:question-answered="handleQuestion"/>
                    </div>
                    <div class="card" v-for="item in data.quiz.sport" :key="item.question">
                    <Question :question="item" v-on:question-answered="handleQuestion"/>
                    </div>
            </div>
        </div>
</template>
<script lang="ts">
import {FakeData, fake} from "../FakeData"
import {  Vue } from 'vue-property-decorator';
import Question from './Question.vue'
export default Vue.extend ({
  name: 'Content',
  data() {
        return {
            data : JSON.parse(fake) as FakeData,
            score:0
        }
  },
  methods : {
      increaseScore(){
           this.score = this.score +1
      },
      decreaseScore(){
          this.score = this.score-1
      },
      handleQuestion(state:{isCorrect:boolean,isAnswered:boolean}){
          if(state.isAnswered){
              if(state.isCorrect){
                  this.increaseScore()
              }
              else{
                  this.decreaseScore()
              }
          }
      }
   },
   components:{
       Question
   }
})
</script>