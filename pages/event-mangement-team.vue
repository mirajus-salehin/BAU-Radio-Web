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
        <p class="tracking-wide font-bold text-brand-green">
          Head of {{ members.teamName }}
        </p>
        <membercard :img="members.head.img" :name="members.head.name" />
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
        teamName: "Event Management",
        subtitle: "The hard workers of every event",
        logo: "/team/logos/logo_em.svg",
        slug: "event-management-team",
        head: {
          name: "Abir Anjum",
          desc: "Believes in hard work and decency. Tries to do something out of the box. Book is the best friend of him.",
          img: "https://i.imgur.com/iRc6PGI.jpg",
        },
        members: [
          {
            name: "Sadia Islam Jebu",
            desc: "Happy soul",
            img: "https://i.imgur.com/P0wFYDf.jpg",
          },
          {
            name: "Naushin Alim Payel",
            desc: "",
            img: "https://i.imgur.com/gzv2GJD.jpg",
          },
          {
            name: "Istiaq Mahmud Sifat",
            desc: "Wants to be an owner of an entrepreneurial business. A lazy guitar player. My favorite hobby is gardening, cactus in particular. I like to collect and grow rare cactie. Traveling and reading are  one of my favorite things to do",
            img: "https://i.imgur.com/aVabgZE.jpgL",
          },
          {
            name: "Tamanna Parvin",
            desc: "I'm an introvert person. I like painting, cooking etc.",
            img: "https://i.imgur.com/Uwa0tpN.jpg",
          },
          {
            name: "Rifa Aktar",
            desc: "",
            img: "https://i.imgur.com/ofhI7pn.jpg",
          },
          {
            name: "Md. Samiun Nobi",
            desc: "I would say that I’m creative, hard-working, and detail-oriented,rabbit lover,short temperd person.",
            img: "https://i.imgur.com/DGhl8KS.jpg",
          },
          {
            name: "Tamanna Afrin Toma",
            desc: "",
            img: "https://i.imgur.com/5Ptll2M.jpg",
          },
          {
            name: "Fatema akter",
            desc: "Learning  something new and travelling is very passionate to me.Bedsides gathering knowledge, postive thinking in every aspect of life makes me more enthusiastic person.I like to feel music flowing on my face.",
            img: "https://i.imgur.com/c6KUzLq.jpg",
          },
          {
            name: "Farhana Farial",
            desc: "I am just a human.I have weakness, I make mistakes and I experience sadness; But I learn from all these things to make me a better person.I am passionate with my goal, that I really want to achieve.",
            img: "https://i.imgur.com/NaK8ANp.jpg",
          },
          {
            name: "Anindita Pramanik Purna",
            desc: "I am extremely passionate about debate. Cooking and drawing are also loved by me after debating. I am proud of my honesty and dedication to my work.",
            img: "https://i.imgur.com/SPzKkwn.jpg",
          },
          {
            name: "Angan Samadder",
            desc: "A man who always like to take challenges",
            img: "https://i.imgur.com/Bd7BbXD.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>