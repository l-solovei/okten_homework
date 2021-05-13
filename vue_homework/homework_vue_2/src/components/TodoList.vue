<template>
    <div>
        <p v-for='(todoo, index) in todolist' :key='index'>
            <TodoItem 
                :todo='todo'
                @removeitem = 'removeitem'/>
        </p>
    </div>
</template>

<script>

import TodoItem from '@/components/TodoItem';

export default {
    name : 'TodoList',

    components: {
        TodoItem
    },

    props: {
        todoList: {
            type: Array
        }
    },

    data(){
        return{
            
        }
    },

    methods: {
        removeitem(event){
            this.$emit('removeitem', event)
        }
    }
}
</script>

<style scoped>

</style>