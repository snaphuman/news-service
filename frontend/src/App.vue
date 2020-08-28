<template>
  <div id="app">
    <b-container fluid>
      <b-row v-show="false">
        <b-col>
          <router-link to="noticias">Noticias</router-link>
        </b-col>
      </b-row>
      <b-row>
        <router-view />
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
