import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    endPoint: {
        name: 'name',
        desc: 'desc',
        archetype: 'archetype',
        card_images: 'card_images'
    },
    cardList: [],
});