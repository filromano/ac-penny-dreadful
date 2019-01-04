import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        serieInfo: '/tv-shows/SHOW123.json',
        episodeList: '/episodes/SHOW123.json'
    }
});
