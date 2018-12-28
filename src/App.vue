<template>
    <div class="background-page" :style="{'background-image': backgroundImage}">
        <div class="background-gradient">
             <div class="top-content">
                 <h1>{{ title }}</h1>
                 <p class="details">80% Indicado/Ciencia Ficción/{{ year }}/EUA/14</p>
             </div>
             <div class="bottom-content">
                 <ul class="nav-list">
                    <li>General</li>
                    <li>Elenco</li>
                    <li>Principales Premios</li>
                 </ul>
                 <div>
                     <ul class="actions-list">
                         <li>
                             <img src="./assets/add-gray-s.svg" alt="">
                             <p>Mi Lista</p>
                        </li>
                         <li>
                             <img src="./assets/sad-gray-w.svg" alt="">
                             <p>Evaluar</p>
                        </li>
                         <li><img src="./assets/rec-gray-s.svg" alt=""></li>
                         <li><img src="./assets/share-gray-s.svg" alt=""></li>
                     </ul>
                     <p>Sinopse</p>
                    <p>{{ sinopse }}</p>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            title: '',
            backgroundImage: '',
            sinopse: '',
            year: '',
            name: ''
        }
    },
    created () {
        axios.get('https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json')
            .then(response => {
                const serieInfo = response.data
                this.title = serieInfo.Title
                this.year = serieInfo.Year
                this.backgroundImage = 'url(' + serieInfo.Images.Background + ')'
                this.sinopse = serieInfo.Synopsis
                console.log(response)
                const castData = serieInfo.Cast
                const cast = []
                for (let key in castData) {
                    const member = castData[key]
                    cast.push(member)
                }
                console.log(cast)
                this.name = cast[0].Name
            })
            .catch(error => console.log(error))
    }
}
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css?family=Nunito');
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
        background-size: cover;
        position: relative;
    }
    .background-gradient {
        @extend %full-size;
        background: linear-gradient(to left,
                     rgba(0,0,0, 1), 
                     rgba(0,0,0, .5)),
                    linear-gradient(to top,
                     rgba(0,0,0, .4), 
                     rgba(0,0,0, 0),
                     rgba(0,0,0, .4));
    }
    .top-content {
        padding: 20px 40px;
    }
    h1{
        font-size: 55px;
        font-weight: 'Bold';
    }
    .details {
        font-size: 20px;
        color: #C7C7C7;
    }
    .bottom-content {
        position: absolute;
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

    .nav-list{
        list-style: none;
        display: inline-block;
        clear: both;
        li {
            float: left;
        }
    }

    .actions-list {
        list-style: none;
        display: inline-block;
        clear: both;
        li {
            float: left;
            margin-left: 10px;
        }
    }
</style>
