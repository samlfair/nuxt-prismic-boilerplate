<template>
  <div class="container">
    Page
    <p>{{JSON.stringify(document)}}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({params, $prismic, error}) {
    const document = await $prismic.api.getByUID('page', params.uid)
    return { document }
  }
}
</script>

