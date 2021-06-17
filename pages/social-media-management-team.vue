<template>
  <section class="mt-10 mb-10 min-h-screen">
    <div class="flex flex-col place-items-center justify-items-center pb-10">
      <h1
        class="text-center text-xl lg:text-5xl font-bold my-10 tracking-widest"
      >
        Meet our {{ members.teamName }} team
      </h1>
      <h3 class="text-center text-xl my-10 tracking-widest text-brand-green">
        {{ members.subtitle }}
      </h3>
    </div>
    <div class="flex place-items-stretch justify-items-center mb-10">
      <div class="mx-auto">
        <p class="tracking-wide font-bold text-brand-green text-center">
          Head of {{ members.teamName }}
        </p>
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
          <div v-for="head in members.heads" :key="head">
            <membercard :img="head.img" :name="head.name" />
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-7xl mb-10 mt-10">
      <p class="tracking-wide font-bold text-brand-green text-center">
        Genaral Members
      </p>
    </div>
    <div
      class="
        mx-auto
        grid grid-cols-1
        md:grid-cols-2
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
        teamName: "Social Media Management",
        subtitle: "The face of BAU Radio",
        logo: "/team/logos/logo_mm.svg",
        slug: "social-media-management-team",
        heads: [
          {
            name: "Riya Saha",
            desc: "First of all I am a learner.I want to learn more and more. Painting is my passion. I love to draw my thoughts. Beside painting I want to be a RJ.",
            img: "https://i.imgur.com/ZtA78Ha.jpg",
          },
          {
            name: "Dipannita Karmokar",
            desc: "Very passionate about creative things.Loves to do art and crafts.Rain and animal lover.Proud of being an helpful person.Interested in trying new things and challenges.Have the ability to work understand pressure.",
            img: "https://i.imgur.com/LMiNMqR.jpg",
          },
          {
            name: "MD Sifat Habib Siam",
            desc: "Diligent. willing to work at pressure, able to cope with any working environment and co-workers.",
            img: "https://i.imgur.com/PCRgQtV.jpg",
          },
        ],
        members: [
          {
            name: "Md. Rafat Hasan",
            desc: 'A Creative Writer who is likely to delve into the realms of the imagination. And apart from writing, he loves to travel and is a music lover. Rafat enjoys networking and meeting new people. He enjoys new experiences in everything he does. He is greatly influenced by the quote, "Reach high, for stars lie hidden in you. Dream deep, for every dream precedes the goal.” His attitude is to contribute to the community and he appreciates volunteer work.',
            img: "https://i.imgur.com/KPZOUkH.jpg",
          },
          {
            name: "Shomeswar Paul Showmik",
            desc: "I like reading. But if a book has too much action, it bores me.",
            img: "https://i.imgur.com/mLduqjT.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>