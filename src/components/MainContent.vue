<template>
    <div class="main-content">
        <ul>
            <li></li>
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
                    season1: [],
                },
                {
                    title: 'T2',
                    season2: []
                }]
            }
        },
        created () {
            axios.get('/episodes/SHOW123.json')
                .then(response => {
                    const show = response.data.filter(Boolean)
                    for (let key in show) {
                        const episode = show[key]
                        if(episode.SeasonNumber == '1'){
                           this.serie[0].season1.push(episode)
                        }else if(episode.SeasonNumber == '2'){
                           this.serie[1].season2.push(episode)
                        }
                    }
                    console.log(this.serie[0].season1)
                    console.log(this.serie[1].season2)
                })
                .catch(error => console.log(error))
        },
    }
</script>
