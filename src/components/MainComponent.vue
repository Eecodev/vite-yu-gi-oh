<template>
    <section>
        <div class="row gy-4">
            <div class="col-12 col-md-4 col-lg-3" v-for="(card, index) in store.cardList" :key="card.id">
                <CardComponent :image="card.card_images" :title="card.name" :subtitle="card.archetype" :text="card.desc"/>
            </div>
        </div>
    </section>
</template>

<script>
import {store} from '../data/store.js';
import CardComponent from './CardComponent.vue';

export default {
    name: 'MainComponent',
    components: {
        CardComponent
    },
    data() {
        return {
            store
        };
    },
}
</script>

<style lang="scss" scoped>

</style>