<template>
    <div class="main-content">
        <ul class="season-nav">
            <li @click="changeSeason(season.season)" v-for="season in serie" :key="season.season" :class="{ active:season.active }">{{ season.title }}</li>
        </ul>
        <ul v-for="season in activeSeason" :key="season.season">
            <li v-for="episode in season.episodes" :key="episode.ID">
                {{ episode.SeasonNumber }}
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data (){
            return {
                serie: [{
                    title: 'T1',
                    season: '1',
                    episodes: [],
                    active: true
                },
                {
                    title: 'T2',
                    season: '2',
                    episodes: [],
                    active: false
                }]
            }
        },
        created () {
            axios.get('/episodes/SHOW123.json')
                .then(response => {
                    const show = response.data.filter(Boolean)
                    for (let key in show) {
                        const episode = show[key]
                        for(var i=0;i<this.serie.length;i++) {
                            if(episode.SeasonNumber == this.serie[i].season) {
                                this.serie[i].episodes.push(episode)
                            }
                        }
                    }
                    console.log(this.serie[0].episodes)
                    console.log(this.serie[1].episodes)
                })
                .catch(error => console.log(error))
        },
        computed: {
            activeSeason() {
                return this.serie.filter(function(u) {
                    return u.active;
                })
            }
        },
        methods: {
            changeSeason(season) {
                for(var i=0; i<this.serie.length;i++) {
                    this.serie[i].active = false
                    if (season == this.serie[i].season) {
                        this.serie[i].active = true
                    }
                }
            }
        }
    }
</script>
<style lang="sass">
    @import '../assets/scss/geral.scss';

    .main-content {
        display: block;
        float: right;
        height: 50%;
        width: 30%;
        padding-right: 40px;
    }

    .season-nav {
        @extend %navigation;
        li {
            margin-right: 20px;
        }
    }
</style>
