<template>
  <HeaderComponent title="Yu-Gi-Oh Api" />
    <div v-for="(card, index) in store.cardList">{{ card.title }}</div>
    <MainComponent/>
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCards() {
      const url = store.apiUrl;

      axios.get(url).then((response) => {
        console.log(response);
        store.cardList = response.data.data;
      });
    }
  },
  created() {
    this.getCards();
  }
}
</script>

<style lang="scss" scoped></style>
