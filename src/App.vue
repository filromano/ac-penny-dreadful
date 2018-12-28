<template>
    <div class="background-page" :style="{'background-image': backgroundImage}">
        <div class="background-gradient">
             <div class="top-content">
                 <h1>{{title}}</h1>
             </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            title: '',
            backgroundImage: '',
            name: ''
        }
    },
    created () {
        axios.get('https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json')
            .then(response => {
                const serieInfo = response.data
                this.backgroundImage = 'url(' + serieInfo.Images.Background + ')'
                this.title = serieInfo.Title
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

    %full-size{
        width: 100%;
        height: 100%;
    }
    body, html{
        @extend %full-size;
        font-family: 'Nunito', sans-serif;
        color: white;
    }

    .background-page{
        @extend %full-size;
        background-size: cover;
    }
    .background-gradient{
        @extend %full-size;
        background: linear-gradient(to left,
                     rgba(0,0,0, 1), 
                     rgba(0,0,0, .5));
    }
    .top-content{
        padding: 20px;
    }
    h1{
        font-size: 55px;
        font-weight: 300px;
    }
</style>
