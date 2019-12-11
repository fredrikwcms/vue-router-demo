<template>
    <form>
        <label for="your-name">Enter your name:</label>
        <input name="your-name" type="text" v-model="name">
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    }
}
</script>