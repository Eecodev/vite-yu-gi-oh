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
          offset: 0
        }
      } else{
        this.params = null
      }
    },
    getCards() {
      const url = store.apiUrl;

      axios.get(url).then((response) => {
        console.log(response);
        store.cardList = response.data.data;
      });
    },
    getArchetypes(){
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php?num=20&offset=0', {params: this.params}).then((response) => {
        console.log(response);
        store.selectedArchetype = response.archetypes;
      })
    }
  },
  created() {
    this.getCards();
    this.getArchetypes();
  }
}
</script>

<style lang="scss" scoped></style>
