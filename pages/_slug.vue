<template>
  <article class="p-6 lg:px-16 mt-10 mb-10 min-h-screen">
    <nuxt-content
      :document="article"
      class="prose sm:prose-sm md:prose:md lg:prose-lg mx-auto"
    />
    <div class="mx-auto max-w-prose mt-10">
      <h1 class="mx-auto tracking-wide font-semibold">Tags</h1>
      <hr class="mt-4" />
      <div class="flex space-x-3 mt-4">
        <div v-for="tag in article.tags" :key="tag" class="tagBadge">
          <nuxt-link
            :to="{ path: 'filterblog', query: { tags: tag } }"
            class="text-brand-green font-bold"
          >
            {{ tag }}
          </nuxt-link>
        </div>
      </div>
    </div>
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
          content: this.article.titleImage,
        },
        { hid: "og:type", name: "og:type", content: "article" },
        { hid: "fb:app_id", name: "fb:app_id", content: "790052285034541" },
      ],
    };
  },
};
</script>

<style>
.tagBadge {
  @apply bg-brand-200 py-2 px-4 rounded-full;
}
</style>