<template>
<div>
  <b-form-input v-model="searchText" @change="doSearch()" debounce="500" type="search" placeholder="Ingrese texto de búsqueda"></b-form-input>
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
  <div class="overflow-auto">
      <b-pagination-nav v-model="currentPage" :link-gen="linkGen" :number-of-pages="10" :no-page-detect="true"></b-pagination-nav>
  </div>
</div>
</template>
<script>
import NoticiasDataService from '../services/NoticiasDataService';
import { BListGroup, BListGroupItem, FormInputPlugin, BPaginationNav } from 'bootstrap-vue';


export default {
    name: 'lista-noticias',
    components: [ BListGroup, BListGroupItem, FormInputPlugin, BPaginationNav ],
    data() {
        return {
            noticias: [],
            searchText: '',
            currentPage: 1
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
        async doSearch() {
           return await NoticiasDataService.getByKeyword(this.searchText)
                .then(response => {
                    this.noticias = response.data.noticias;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        getContentURL(slug) {
            return "https://www.crcom.gov.co/es/noticia/"+slug;
        },
        linkGen() {
            NoticiasDataService.setPage(this.currentPage - 1)
                .then(response => {
                    this.noticias = response.data.noticias;
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.getNoticias();
    }
}
</script>
