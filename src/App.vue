<template>
  <HeaderComponent title="Yu-Gi-Oh Api" />
  <main>
    <SearchApp @filter-change="setParams" />
    <MainComponent/>
  </main>
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import SearchApp from './components/SearchApp.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    SearchApp
  },
  data() {
    return {
      params: {
        num: 20,
        offset: 0
      }
    }
  },
  methods: {
    setParams(search){
      console.log(search);
      if(search){
        this.params = {
          num: 20,
          offset: 0,
          archetype: search
        }
      } else{
        this.params = null
      }
      this.getCards();
    },
    getCards() {
      const url = store.apiUrl;

      axios.get(url, {params: this.params}).then((response) => {
        console.log(response);
        store.cardList = response.data.data;
      });
    },
    // getArchetypes(){
    //   let url = 'https://db.ygoprodeck.com/api/v7/archetypes.php?num=20&offset=0';

      
    //   axios.get(url).then((response) => {
    //     console.log(response);
    //     store.selectedArchetype = response.archetypes;
    //   })
    // }
  },
  created() {
    this.getCards();
    // this.getArchetypes();
  }
}
</script>

<style lang="scss" scoped>
  
</style>
