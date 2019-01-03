<template>
    <div class="bottom-content">
        <ul class="nav-list">
            <li @click="changeBottom('geral')" :class=" { active:geral }">General</li>
            <li @click="changeBottom('cast')" :class=" { active:castlist }">Elenco</li>
            <li>Principales Premios</li>
            <li><img src="../assets/svg/logo-telecine.svg" alt=""></li>
        </ul>
        <div class="details-content">
            <transition name="fade" mode="out-in">
                <geral-content v-if="geral"></geral-content>
                <cast-content v-else-if="castlist"></cast-content>
            </transition>
        </div>
    </div>
</template>

<script>
    import geralContent from './BottomContent/Geral.vue'
    import castContent from './BottomContent/Cast.vue'
    import axios from 'axios'
    export default {
        components: {
            geralContent,
            castContent
        },
        data() {
            return {
                geral: true,
                castlist: false
            }
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
        @extend %navigation;
        li {
            margin-right: 100px;
        }
        li:last-child {
            margin-right: 0;
            float: right !important;
            cursor: default;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        }
</style>
