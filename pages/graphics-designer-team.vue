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
        teamName: "Graphics Designer",
        subtitle: "The artist of every color",
        logo: "/team/logos/logo_gd.svg",
        slug: "graphics-designer-team",
        head: {
          name: "Safiara Nusrat Nova",
          img: "https://i.imgur.com/3zSO3O0.jpg",
        },
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