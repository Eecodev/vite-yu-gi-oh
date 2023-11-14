<template>

    <!-- searchBar -->
    <select name="searchbar" id="searchbar" v-model="textSearch" @change="passData" placeholder="Archetypes">
        <option value="-eyes dragon">-Eyes Dragon</option>
        <option value="@ignister">@Ignister</option>
        <option value="a.i.">A.I.</option>
        <option value="abc">ABC</option>
        <option value="abyss actor">Abyss Actor</option>
        <option value="alien">Alien</option>
        <option value="noble knight">Noble Knight</option>
        <option value="infernoble knight">Infernoble Knight</option>
        <option value="batteryman">Batteryman</option>
        <option value="cyberdark">Cyberdark</option>
    </select>
</template>

<script>
    export default {
        name: 'SearchApp',
        data(){
            return{
                textSearch: ''
            }
        },
        methods:{
            passData(){
                this.$emit('filterChange', this.textSearch);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>