<template>
<b-col>
  <b-form-input class="my-3" v-model="searchText" @change="getNoticias" debounce="500" type="search" placeholder="Ingrese texto de búsqueda"></b-form-input>
  <b-overlay :show="spinner" rounded="sm">
  <b-list-group>
    <b-list-group-item v-for="(noticia, index) in noticias" :key="index" target="_parent" v-bind:href="`${getContentURL(noticia.slug)}`" class="flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ noticia.name }}</h5>
        <small>{{ noticia.date }}</small>
      </div>

      <p class="mb-1" :inner-html.prop="noticia.content | truncate(250)">
        {{ noticia.content }}
      </p>

    </b-list-group-item>
  </b-list-group>
  </b-overlay>
  <div class="my-3 overflow-auto">
      <b-pagination-nav v-model="currentPage" :link-gen="getNoticias" :number-of-pages="totalPages" :no-page-detect="true" align="fill"></b-pagination-nav>
  </div>
</b-col>
</template>
<script>
import NoticiasDataService from '../services/NoticiasDataService';
import { BListGroup,
         BListGroupItem,
         BPaginationNav,
         BOverlay } from 'bootstrap-vue';


export default {
    name: 'lista-noticias',
    components: {
        BListGroup,
        BListGroupItem,
        BPaginationNav,
        BOverlay },
    data() {
        return {
            noticias: [],
            searchText: '',
            currentPage: 1,
            totalPages: null,
            spinner: false
        }
    },
    methods: {
        getNoticias() {
            this.spinner = true;
            NoticiasDataService.getAll(this.searchText, this.currentPage - 1)
                .then(response => {
                    this.noticias = response.data.noticias;
                    this.totalPages = response.data.totalPages;
                    this.spinner = false;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        getContentURL(slug) {
            return "https://www.crcom.gov.co/es/noticia/"+slug;
        },
    },
    mounted() {
        this.getNoticias();
    }
}
</script>
