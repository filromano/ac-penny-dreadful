<template>
    <div class="background-page" :style="{'background-image': backgroundImage}">
        <div class="background-gradient">
            <div class="top-content">
                <h1>{{ title }}</h1>
                <p class="details">80% Indicado/Ciencia Ficción/{{ year }}/EUA/14</p>
            </div>
            <main-content></main-content>
            <bottom-content></bottom-content>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import bottomContent from './components/BottomContent.vue'
import mainContent from './components/mainContent.vue'
export default {
    data() {
        return {
            title: '',
            backgroundImage: '',
            year: '',
            name: ''
        }
    },
    components: {
        bottomContent,
        mainContent
    },
    created () {
        axios.get('/tv-shows/SHOW123.json')
            .then(response => {
                const serieInfo = response.data
                this.title = serieInfo.Title
                this.year = serieInfo.Year
                this.backgroundImage = 'url(' + serieInfo.Images.Background + ')'
                console.log(serieInfo);
                
            })
            .catch(error => console.log(error))
    }
}
</script>

<style lang="sass">
    @import './assets/scss/geral.scss';
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, caption {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
    }

    %full-size {
        width: 100%;
        height: 100%;
    }
    body, html {
        @extend %full-size;
        font-family: 'Nunito', sans-serif;
        color: white;
    }

    .background-page {
        @extend %full-size;
        display: block;
        background-size: cover;
        position: relative;
    }
    .background-gradient {
        @extend %full-size;
        position: relative;
        display: block;
        background: linear-gradient(to left,
                     rgba(0,0,0, 1), 
                     rgba(0,0,0, .5)),
                    linear-gradient(to top,
                     rgba(0,0,0, .4), 
                     rgba(0,0,0, 0),
                     rgba(0,0,0, .4));
    }
    .top-content {
        display: block;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        padding: 20px 0 0 40px;
        height: 20%;
    }
    h1{
        font-size: 55px;
    }
    .details {
        font-size: 20p;
        color: $text-color;
    }

    .main-content {
        display: block;
        float: right;
        height: 50%;
        width: 30%;
    }
</style>
