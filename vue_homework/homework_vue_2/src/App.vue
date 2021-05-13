<template>
  <div>
    <AddTodo
    @savetodo = 'savetodo'/>
    <TodoList
    :todoList = 'todoList'
    @removeitem = 'removeitem'/>
  </div>
</template>

<script>

import AddTodo from '@/components/AddTodo';
import TodoList from '@/components/TodoList';


export default {
  name: 'App',

  components: {
    AddTodo,
    TodoList
  },

  data(){
    return{
      todoList : [
        'clean house',
        'drink coffe',
        'do work'
      ]
    }
  },

  methods: {
    savetodo(event){
      this.todoList.push(event)
    },
    removeitem(event){
      this.todoList.splice(event, 1)
    }
  }
}
</script>

<style>

</style>
