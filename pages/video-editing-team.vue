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
        teamName: "Video Editing",
        subtitle: "The manipulators of emotion",
        logo: "/team/logos/logo_ve.svg",
        slug: "video-editing-team",
        head: {
          name: "Md. Mifta-Ul-Jannat Tuhin",
          desc: "Tuhin is an undergraduate student at BAU, Mymensingh. He has thrust for knowledge. Loves to make videos. He is a video editor & a designer. He is looking forward to a challenging career that will provide him with an opportunity that stimulates intellectual growth.",
          img: "https://i.imgur.com/yl02vik.jpg",
        },
        members: [
          {
            name: "Fatema Binte Latif",
            desc: "A girl who is passionate about voice arts & recitations. Experimenting with different kinds of art forms is her biggest curiosity. She loves to learn & grow.",
            img: "https://i.imgur.com/UfEgLor.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>