<template>
  <section>
    <h2
      class="
        mt-10
        font-bold
        text-3xl
        lg:text-5xl
        py-4
        md:py-8
        px-10
        md:pl-10
        tracking-widest
        mx-auto
        text-center
      "
    >
      Latest Posts
    </h2>
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
        p-6
        min-h-screen
      "
    >
      <div v-for="article of articles" :key="article">
        <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
          <div class="card flex flex-col space-y-4">
            <div>
              <img :src="require(`~/assets/resources/${article.img}`)" alt="">
            </div>
            <div class="my-auto px-6">
              <h3 class="text-brand-green text-xl font-semibold py-4">
                {{ article.title }}
              </h3>
              <p class="text-base font-light">{{ article.description }}</p>
              <div
                class="pt-4 flex flex-col md:flex-row gap-2 md:gap-6 flex-wrap justify-items-center"
              >
                <div class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <p class="font-extralight">{{ article.read }}</p>
                </div>
                <div class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p class="font-extralight">Published at {{ article.date }}</p>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("blog", params.slug)
      .only(["title", "description", "slug", "read", "date","img"])
      .sortBy("date", "asc")
      .fetch();
    return {
      articles,
    };
  },
  head() {
    return {
      title: "Blog",
      meta: [
        { hid: "description", name: "description", content: "BAU Radio Blog" },
        { hid: "og:title", name: "og:title", content: "BAU Radio Blog" },
        {
          hid: "og:description",
          name: "og:description",
          content: "Official blog site of BAU Radio. Get the latest news about BAU Radio here.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  @apply shadow-md hover:shadow-lg hover:border-2 rounded-xl p-4 transition-all ease-out duration-200 transform hover:-translate-y-2;
}
</style>