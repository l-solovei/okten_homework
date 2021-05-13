<template>
  <div>
    <h1>ToDo List</h1>
    <input type = 'text' v-model='todo'>
    <button 
      v-if="todolist.lenght <10"
      @click='save'
      >OK</button>
    <p v-else>Too many tasks</p>
    <ul>
      <li v-for='(todoo, index) in todolist' :key='index'>
        {{todolist[index]}}
        <button @click='remove(index)'>Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      todo : '',
      todolist : [],
    }
  },


  methods:{
    save(){
      if (this.todo){
        this.todolist.push(this.todo);
        this.todo = '';
        console.log(this.todolist);
      }
      else{
        alert('task not added');
      }
    },

    remove(index){
      this.todolist.splice(index, 1);
      console.log(this.todolist);
    }
  }
}
</script>

<style>

</style>
