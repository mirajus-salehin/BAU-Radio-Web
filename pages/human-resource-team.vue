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
        teamName: "Human Resource",
        subtitle: "The man behind every decision",
        logo: "/team/logos/logo_hr.svg",
        slug: "human-resource-team",
        members: [
          {
            name: "Ridwan Ahmed Rahat",
            desc: "Let's EXPLORE! There Is No Reason To STOP..",
            img: "https://i.imgur.com/3LlZz72.png",
          },
          {
            name: "Zahin Hassan Shafin",
            desc: "Gardener, Ailurophile, Memer",
            img: "https://i.imgur.com/zQok3dd.jpg",
          },
          {
            name: "Shaila Sultana Sraboni",
            desc: "I love to explore myself in the toughest situations and finding myself winning! I am an enthusiast who always try to enrich herself in a good way. I am someone who always love to be surrounded by good friends who gives positive vibes. I love being the Apple of eye of my own people.!!",
            img: "https://i.imgur.com/W5c5rDC.jpg",
          },
          {
            name: "Sanjida Haider",
            desc: "An enthusiastic and responsible one, with a very optimistic soul. Loves to seize every moments in life. Has proved her excellence on the stage of debate and public speaking. An animal lover, has a keen interest in oceanography and marine biology. Travelling all over the world is the biggest dream of her. Has a voluntary organization of her own. Believes that positivity can solve every problem in life.",
            img: "https://i.imgur.com/y6PeZX8.jpg",
          },
          {
            name: "Mafruha Khanom",
            desc: "An earnest person who is accountable to the responsibilities. Immense passion for painting and volunteering where it is helping to get inner peace. If it is needed for the works, can take pressure of work and a habit to make it perfect.",
            img: "https://i.imgur.com/mKiPf90.jpg",
          },
          {
            name: "Syeda Tahmida Yeasmin",
            desc: "",
            img: "https://i.imgur.com/9Bd7Z97.jpg",
          },
          {
            name: "Shanjida Afroz Supti",
            desc: "Sometimes its hard to introduce myself because i know myself so well that i do not know where to start. I am a person who is positive about every aspect of life. I am just someone who is still trying to be a good human being. The thing that makes me relax is music. I am very passionate about my works and I am highly ambitious. I love meeting new people .  ",
            img: "https://i.imgur.com/u0K02cV.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>