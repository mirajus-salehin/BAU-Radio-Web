<template>
  <article class="p-6 lg:px-16 mt-10 mb-10 min-h-screen">
    <nuxt-content
      :document="article"
      class="prose sm:prose-sm md:prose:md lg:prose-lg mx-auto"
    />
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