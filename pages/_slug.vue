<template>
  <article class="p-6 lg:px-16 mt-10">
    <nuxt-content :document="article" class="prose prose-sm sm:prose lg:prose-lg" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();

    return { article };
  },
};
</script>

<style>
</style>