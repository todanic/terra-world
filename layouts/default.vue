<template>
  <div id="app">
     <header class="header">
       <router-link to="/" exact>
         <Logo />
        </router-link>
      <nav class="inner" role="navigation">
        <router-link v-for="(list, key) in routes" :key="key" :to="`/${key}`">
          {{ list.title }}
        </router-link>
      </nav>
    </header>
    <nuxt nuxt-child-key="none" role="main" />
  </div>
</template>
<script>
import { routes } from '~/common/api'

export default {
  head () {
    const host = process.server
      ? this.$ssrContext.req.headers.host
      : window.location.host

    return {
      link: [
        // We use $route.path since we don't use query parameters
        { rel: 'canonical', href: `https://${host}${this.$route.path}` }
      ]
    }
  },
  computed: {
    routes: () => routes
  }
}
</script>
