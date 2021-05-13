<template>
    <div>
      <h1>ToDo LIST</h1>
      <input type='text' v-model ='todo'>
      <button @click="save">Add</button>
    </div>
</template>

<script>
export default {
    name : 'AddTodo',

    data() {
        return{
            todo : ''
        }
    },

    methods: {
      save(){
        this.$emit('savetodo', this.todo)
      }
    }
}
</script>

<style scoped>

</style>