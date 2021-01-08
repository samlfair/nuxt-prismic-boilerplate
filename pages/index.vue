<template>
  <div>
    Homepage
    {{JSON.stringify(config)}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ params, $prismic, error }) {
    const config = await $prismic.api.getSingle('config')
    return { config }
  },
  head() {
  }
}

// config
// page

</script>
