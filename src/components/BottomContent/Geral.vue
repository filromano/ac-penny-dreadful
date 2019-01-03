<template>
    <div>
        <ul class="actions-list">
            <li>
                <img src="../../assets/svg/add-gray-s.svg" alt="">
                <p>Mi Lista</p>
        </li>
            <li>
                <img src="../../assets/svg/sad-gray-w.svg" alt="">
                <p>Evaluar</p>
        </li>
            <li>
                <img src="../../assets/svg/rec-gray-s.svg" alt="">
                <p>Grabar</p>
        </li>
            <li>
                <img src="../../assets/svg/share-gray-s.svg" alt="">
                <p>Compartir</p>
        </li>
        </ul>
        <div class="sinopse">
            <p><strong>SINOPSE</strong></p>
            <p>{{ sinopse }}</p>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                sinopse: '',
            }
        },
        created () {
            axios.get('/tv-shows/SHOW123.json')
                .then(response => {
                    const serieInfo = response.data
                    this.sinopse = serieInfo.Synopsis
                })
                .catch(error => console.log(error))
        }
    }
</script>

<style lang="sass">
    @import '../../assets/scss/geral.scss';
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
            cursor: pointer;
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
</style>
 