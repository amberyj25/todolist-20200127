<template>
<div>
  <h2>todolist</h2>
  <todo-input @emittodo="addtodolist"></todo-input>
  <ul>
  <todo-item v-for="(item,index) in text2" :item="item" @click.native="remove(index)"></todo-item>
  </ul>
</div>
</template>

<script>
import todoInput from "./todoInput.vue"
import todoItem from "./todoItem.vue"
export default {
  components:{
    todoInput,
    todoItem
  },
  data(){
    return {
      text2:[]
    }
  },
  methods:{
  addtodolist(text1){
    this.text2.push(text1)
  },
  remove(index){
    this.text2.splice(index,1);
  }
  }
}
</script>
<style scoped>
h2 {
    color: blueviolet
}
</style>