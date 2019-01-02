<template>
    <div class="bottom-content">
        <ul class="nav-list">
            <li @click="changeBottom('geral')" :class=" { active:geral }">General</li>
            <li @click="changeBottom('cast')" :class=" { active:castlist }">Elenco</li>
            <li>Principales Premios</li>
        </ul>
        <div class="details-content">
            <div v-if="geral">
                <ul class="actions-list">
                    <li>
                        <img src="../assets/add-gray-s.svg" alt="">
                        <p>Mi Lista</p>
                </li>
                    <li>
                        <img src="../assets/sad-gray-w.svg" alt="">
                        <p>Evaluar</p>
                </li>
                    <li>
                        <img src="../assets/rec-gray-s.svg" alt="">
                        <p>Grabar</p>
                </li>
                    <li>
                        <img src="../assets/share-gray-s.svg" alt="">
                        <p>Compartir</p>
                </li>
                </ul>
                <div class="sinopse">
                    <p><strong>SINOPSE</strong></p>
                    <p>{{ sinopse }}</p>
                </div>
            </div>
            <div v-else-if="castlist" class="cast">
                <ul>
                    <li  v-for="member in cast" :key="member">
                        <p class="character">Personagem</p>
                        <p class="actor">{{ member.Name }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                cast: [],
                sinopse: '',
                geral: true,
                castlist: false
            }
        },
        created () {
            axios.get('/tv-shows/SHOW123.json')
                .then(response => {
                    const serieInfo = response.data
                    this.sinopse = serieInfo.Synopsis
                    console.log(response)
                    const castData = serieInfo.Cast
                    for (let key in castData) {
                        const member = castData[key]
                        this.cast.push(member)
                    }
                })
                .catch(error => console.log(error))
        },
        methods: {
            changeBottom(nav) {
                this.castlist = false
                this.geral = false
                if (nav == 'cast'){
                    this.castlist = true
                }else if(nav == 'geral'){
                    this.geral = true;
                }
                this.isActive = true;
                console.log(nav)
                console.log(this.castlist)
            }
        }
    }
</script>

<style lang="sass">
    @import '../assets/scss/geral.scss';
    .bottom-content {
        position: absolute;
        box-sizing: border-box;
        bottom: 0;
        width: 100%;
        height: 30%;
        background: linear-gradient(to right,
                     rgba(25, 25, 25, 1),
                     rgba(25, 25, 25, .9),
                     rgba(0,0,0, 0),
                     rgba(0,0,0, 0));
        padding: 20px 40px;
    }

    .nav-list {
        display: inline-block;
        width: 100%;
        box-sizing: border-box;
        list-style: none;
        border-bottom: 1px solid $text-color;
        li {
            float: left;
            position: relative;
            font-size: 20px;
            text-transform: uppercase;
            color:  $text-color;
            margin-right: 100px;
            padding-bottom: 10px;
            cursor: pointer;
        }
    }

    .active {
        &::after{
            content: '';
            display: block;
            position: absolute;
            margin-top: 10px;
            width: 100%;
            height: 3px;
            background-color: green;
        }
    }

    .details-content {
        display: block;
        width: 100%;
    }

    .actions-list {
        display: inline-block;
        box-sizing: border-box;
        width: 40%;
        list-style: none;
        clear: both;
        float: left;
        li {
            display: block;
            float: left;
            color: $text-color;
            margin-left: 30px;
            img {
                display: block;
                margin: 10px auto;
            }
            p {
                text-align: center;
            }
        }
    }

    .sinopse {
        display: block;
        box-sizing: border-box;
        float: left;
        width: 60%;
        padding-top: 10px;
        color: $text-color;
    }

    .cast {
        display: block;
        width: 100%;
        li {
            display: block;
            box-sizing: border-box;
            float: left;
            width: 15%;
            min-height: 90px;
            background: #605f5f;
            color: $text-color;
            text-align: center;
            padding-top: 20px;
            margin-top: 10px;
            margin-right: 2%;
            .character {
                font-size: 18px;
            }
            .actor{
                font-size: 14px;
            }
        }
    }
</style>
