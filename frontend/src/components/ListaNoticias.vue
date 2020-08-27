<template>
<div>
  <b-list-group>
    <b-list-group-item v-for="(noticia, index) in noticias" :key="index" v-bind:href="`${getContentURL(noticia.slug)}`" class="flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ noticia.name }}</h5>
        <small>{{ noticia.date }}</small>
      </div>

      <p class="mb-1" :inner-html.prop="noticia.content | truncate(250)">
        {{ noticia.content }}
      </p>

    </b-list-group-item>
  </b-list-group>
</div>
</template>
<script>
import NoticiasDataService from '../services/NoticiasDataService';
import { BListGroup, BListGroupItem } from 'bootstrap-vue';


export default {
    name: 'lista-noticias',
    components: [ BListGroup, BListGroupItem ],
    data() {
        return {
            noticias: [],
        }
    },
    methods: {
        getNoticias() {
            NoticiasDataService.getAll()
                .then(response => {
                    this.noticias = response.data.noticias;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        getContentURL(slug) {
            return "https://www.crcom.gov.co/es/noticia/"+slug;
        }
    },
    computed: {

    },
    mounted() {
        this.getNoticias();
    }
}

</script>
