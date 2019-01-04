<template>
    <div class="cast">
        <ul>
            <li  v-for="member in cast" :key="member.ID">
                <p class="character">Personagem</p>
                <p class="actor">{{ member.Name }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                sinopse: '',
                cast: []
            }
        },
        created () {
            axios.get(this.$store.state.serieInfo)
                .then(response => {
                    const serieInfo = response.data
                    const castData = serieInfo.Cast
                    for (let key in castData) {
                        const member = castData[key]
                        this.cast.push(member)
                    }
                })
                .catch(error => console.log(error))
        }
    }
</script>
<style lang="sass">
    @import '../../assets/scss/geral.scss';
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