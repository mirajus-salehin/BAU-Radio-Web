<template>
  <section class="mt-10 mb-10 min-h-screen">
    <div class="mx-auto">
      <h1 class="font-bold text-2xl mx-auto text-center mb-10">
        Meet our {{ member.teamName }} team
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10 place-items-center justify-items-center max-w-7xl mx-auto">
        <div v-for="member in member.members" :key="member">
          <membercard :img="member.img" :name="member.name" />
        </div>
      </div>
      <nuxt-content :document="member" />
    </div>
  </section>
</template>

<script>
import membercard from "~/components/membercard.vue";
export default {
  head(){
    return { title: this.member.teamName };
  },
  components: {
    membercard,
  },
  async asyncData({ $content, params }) {
    const member = await $content("team", params.team).fetch();
    return {
      member:member,
    };
  },
};
</script>

<style>
</style>