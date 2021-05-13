<template>
    <div>
        <span>{{todo}}</span>
        <button @click="remove">Remove</button>
    </div>
</template>

<script>
export default {
    name : 'TodoItem',

    props: {
        todo: {
            type: String
        }
    },

    methods: {
        remove(){
            this.$emit('removeitem', this.todo)
        }
    }
}
</script>

<style scoped>

</style>