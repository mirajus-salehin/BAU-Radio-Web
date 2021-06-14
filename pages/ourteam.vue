<template>
  <section class="mt-10 mx-10 mb-10">
    <div class="mx-auto">
      <h1>Meet our team</h1>
    </div>
    <div class="w-full mx-auto mb-10">
      <h2 class="text-center mx-auto">
        Our teams are divided into 12 different category. View the members as
        category
      </h2>
    </div>
    <div
      class="
        mx-auto
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-4
        place-items-center
        mt-6
      "
    >
      <div v-for="member of members" :key="member">
        <nuxt-link :to="{ name: 'team', params: { team: member.slug } }">
          <teamcard
            :name="member.teamName"
            :logo="member.logo"
            :subtitle="member.subtitle"
          />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import teamcard from "@/components/teamcard";
export default {
  components: { teamcard },
  head() {
    return { title: "Team" };
  },
  async asyncData({ $content }) {
    const members = await $content("team")
      .only(["teamName", "logo", "subtitle", "slug"])
      .fetch();

    return {
      members,
    };
  },
};
</script>
<style scoped>
h1 {
  @apply mx-auto text-center font-bold text-4xl py-10 tracking-widest;
}
h2 {
  @apply mx-auto text-center font-semibold text-xl text-brand-green pt-6;
}
</style>