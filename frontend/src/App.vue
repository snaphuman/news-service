<template>
  <div id="app">
    <div class="container">
      <router-link to="noticias">Noticias</router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
