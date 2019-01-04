<template>
    <div class="top-content">
        <div class="serie-info">
            <h1 class="title">{{ title }}</h1>
            <p class="details">80% Indicado/Ciencia Ficción/{{ year }}/EUA/14</p>
        </div>
        <img class="close-button" src="../assets/svg/close-search-w.svg">
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                title: '',
                year: '',
            }
        },
        created () {
            axios.get(this.$store.state.serieInfo)
                .then(response => {
                    const serieInfo = response.data
                    this.title = serieInfo.Title
                    this.year = serieInfo.Year
                    
                })
                .catch(error => console.log(error))
        }
    }
</script>
<style lang="sass">
    @import '../assets/scss/geral.scss';

    .serie-info {
        display: block;
        width: auto;
        float: left;
    }

    .title {
        font-size: 55px;
    }

    .top-content {
        display: block;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        padding: 20px 0 0 $content-padding;
        height: 20%;
    }

    .details {
        font-size: 20p;
        color: $text-color;
    }

    .close-button {
        display: block;
        float: right;
        width: auto;
        padding: 10px $content-padding 0 0;
        cursor: pointer;
    }
</style>
