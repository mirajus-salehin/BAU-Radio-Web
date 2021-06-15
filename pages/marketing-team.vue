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
        teamName: "Marketing",
        subtitle: "The geeks of technolgy",
        logo: "/team/logos/logo_it.svg",
        slug: "marketing-team",
        members: [
          {
            name: "Khoshnur Yasmin Ratna",
            desc: "",
            img: "https://i.imgur.com/IwiuUrv.jpg",
          },
          {
            name: "Bijoy Kundu",
            desc: "This is Bijoy kundu, he has a great interest in pet sector.He also loves to keep pet.He is a undergraduate  veterinary student  & have a big dream to establish himself as a famous veterinary doctor.",
            img: "https://i.imgur.com/POmIRla.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>