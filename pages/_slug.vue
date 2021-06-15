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

    return { article: article };
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Read more about this blog post",
        },
        { hid: "og:title", name: "og:title", content: this.article.title },
        {
          hid: "og:description",
          name: "og:description",
          content: "Official blog site of BAU Radio",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.article.img,
        },
        { hid: "og:type", name: "og:type", content: "article" },
      ],
    };
  },
};
</script>

<style>
</style>