<template>
    <div class="card bg-transparent border-0 ">
        <img :src="image" class="card-img-top" :alt="title">
        <div class="card-body text-center">
            <h5 class="card-title">{{ title }}</h5>
            <h5 class="card-title">{{ subtitle }}</h5>
            <h5 class="card-title">{{ text }}</h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: [
            'image',
            'title',
            'subtitle',
            'text'
        ]
    }
</script>

<style lang="scss" scoped>

</style>