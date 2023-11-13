<template>
  <HeaderComponent title="Yu-Gi-Oh Api" />
  <div v-for="(card, index) in cards">Card title:{{ card.title }}</div>
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent
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
      })
    }
  },
  created() {
    this.getCards();
  }
}
</script>

<style lang="scss" scoped></style>
