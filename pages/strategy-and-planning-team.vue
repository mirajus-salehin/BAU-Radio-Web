<template>
  <section class="mt-10 min-h-screen">
    <div class="flex flex-col place-items-center justify-items-center pb-10">
      <h1 class="text-center text-xl lg:text-5xl font-bold my-10 tracking-widest">
        Meet our {{ members.teamName }} team
      </h1>
      <h3 class="text-center text-brand-green text-base lg:text-xl">
        They are {{ members.subtitle.toLowerCase() }}
      </h3>
    </div>
    <div
      class="
        mx-auto
        grid grid-cols-1
        md:grid-cols-3
        gap-4
        place-items-center
        justify-items-center
        max-w-7xl
      "
    >
      <div v-for="member in members.members" :key="member">
        <membercard :img="member.img" :name="member.name" />
      </div>
    </div>
  </section>
</template>

<script>
import membercard from "~/components/membercard.vue";
export default {
  components: {
    membercard,
  },
  data() {
    return {
      members: {
        teamName: "Strategy and Planning",
        subtitle: "The brain of BAU Radio",
        logo: "/team/logos/logo_os.svg",
        slug: "strategy-and-planning-team",
        members: [
          {
            name: "Vashwati Mondol",
            desc: "ভালোবাসি গান গাইতে,  ভালোবাসি প্রকৃতি কে , রবি ঠাকুরকে জায়গা দিয়েছি হৃদয়ে,  আর যেটা না বল্লেই না, আমি পেটুক নং ওয়ান",
            img: "https://i.imgur.com/clmCwnq.jpg",
          },
          {
            name: "Masfia Rahman",
            desc: "A person full of positive vibes, open minded  as well as responsible on own platform",
            img: "https://i.imgur.com/Q7jlRkn.jpg",
          },
          {
            name: "MD. Kamrul Hasan",
            desc: "",
            img: "https://i.imgur.com/HyigXEo.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>