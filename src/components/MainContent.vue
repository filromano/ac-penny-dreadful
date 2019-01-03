<template>
    <div class="main-content">
        <ul class="season-nav">
            <li @click="changeSeason(season.season)" v-for="season in serie" :key="season.season" :class="{ active:season.active }">{{ season.title }}</li>
        </ul>
        <ul class="episode-list" v-for="season in activeSeason" :key="season.season">
            <li v-for="episode in season.episodes" :key="episode.ID">
                <div @click="openDescription(episode.ID)" class="episode">
                    <p class="episode-title">{{ episode.EpisodeNumber }} {{ episode.Title }}</p>
                    <img class="play-icon" src="../assets/play-small-player-w.svg" alt="">
                </div>
                <div :id="episode.ID" class="episode-description hidden">
                    <img class="episode-image" :src=episode.Image>
                    <p class="episode-synopsis">{{ episode.Synopsis }}</p>
                </div>
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
            },
            openDescription(id) {
                var descriptions = document.querySelectorAll(".episode-description")
                descriptions.forEach(function(item) {
                    item.classList.add("hidden")
                })
                var episode = document.getElementById(id)
                episode.classList.remove("hidden")
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
        height: 40px;
        li {
            margin-right: 20px;
        }
    }

    .episode-list {
        display: block;
        width: 100%;
        height: 70%;
        list-style: none;
        overflow: scroll;
        li {
            display: block;
            width: 100%;
            float: left;
            border-bottom: 1px solid #303030;
        }
    }

    .episode {
        display: block;
        float: left;
        width: 100%;
        padding: 10px 0;
        cursor: pointer;
    }

    .episode-title {
        display: block;
        float: left;
        width: auto;
    }

    .episode-image {
        display: block;
        max-width: 80%;
        padding: 10px 0;
    }

    .episode-synopsis{
        margin-bottom: 10px;
    }

    .play-icon {
        display: block;
        float: right;
        max-width: 25px;
    }

    .hidden {
        display: none;
    }
</style>
