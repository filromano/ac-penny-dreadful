<template>
    <div class="background-page" :style="{'background-image': backgroundImage}">
        <div class="background-gradient">
            <top-content></top-content>
            <main-content></main-content>
            <bottom-content></bottom-content>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import topContent from './components/TopContent.vue'
import mainContent from './components/mainContent.vue'
import bottomContent from './components/BottomContent.vue'
export default {
    data() {
        return {
            backgroundImage: '',
        }
    },
    components: {
        topContent,
        mainContent,
        bottomContent
    },
    created () {
        axios.get('/tv-shows/SHOW123.json')
            .then(response => {
                const serieInfo = response.data
                this.backgroundImage = 'url(' + serieInfo.Images.Background + ')'
                
            })
            .catch(error => console.log(error))
    }
}
</script>

<style lang="sass">
    @import './assets/scss/geral.scss';

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
</style>
