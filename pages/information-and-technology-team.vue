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
        teamName: "IT",
        subtitle: "The geeks of technolgy",
        logo: "/team/logos/logo_it.svg",
        slug: "information-and-technology-team",
        head:{
          name:"Miazus Salehin",
          img:"https://i.imgur.com/onsegbH.jpg"
        },
        members: [
          {
            name: "Arpan Das",
            img: "https://i.imgur.com/IzB60IL.jpg",
            desc: "Ambitious. May be not the best with work but can give full effort to complete the tasks. Like to seek out the learning opportunities and not afraid to fail and struggle as a part of learning. Capability to fit in any work environment and co-workers.",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>