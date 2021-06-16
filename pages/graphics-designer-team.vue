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
        teamName: "Graphics Designer",
        subtitle: "The artist of every color",
        logo: "/team/logos/logo_gd.svg",
        slug: "graphics-designer-team",
        members: [
          {
            name: "Jahidul Islam",
            desc: "I like to explore and do something creative",
            img: "https://i.imgur.com/I25oo6J.jpg",
          },
          {
            name: "Niladri Shekhar Das Nobel",
            desc: "Nothing can be described me cause I am still trying to find myself",
            img: "https://i.imgur.com/uWFrFXf.jpg",
          },
          {
            name: "Safiara Nusrat Nova",
            desc: "A girl with a wide smile!,I think volunteering makes me proud. Painting and reading books are enough for me to be happy!",
            img: "https://i.imgur.com/3zSO3O0.jpg",
          },
          {
            name: "Smrety Kona Das",
            desc: "",
            img: "https://i.imgur.com/vldWQeE.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>