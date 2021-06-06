<template>
  <section class="mt-10 mx-10 mb-10">
    <div class="mx-auto">
      <h1>Meet our team</h1>
    </div>
    <div class="w-full mx-auto mb-10">
      <h2 class="text-center mx-auto">
        Our teams are divided into 12 different category. View the members as
        category
      </h2>
    </div>
    <div
      class="
        mx-auto
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-4
        place-items-center
        mt-6
      "
    >
      <teamcard
        v-for="team in teams"
        :key="team"
        :name="team.name"
        :logo="team.logo"
        :subtitle="team.subtitle"
      />
    </div>
  </section>
</template>

<script>
import teamcard from "@/components/teamcard";
export default {
  components: teamcard,
  head() {
    return { title: "Team" };
  },
  data() {
    return {
      teams: [
        {
          name: "RJ's Corner",
          subtitle: "The voice of BAU Radio",
          logo: "/team/logos/logo_rj.svg",
        },
        {
          name: "Human Resource",
          subtitle: "The man behind every decision",
          logo: "/team/logos/logo_hr.svg",
        },
        {
          name: "Content Writer",
          subtitle: "The brain behind every speech",
          logo: "/team/logos/logo_cw.svg",
        },
        {
          name: "Graphics Designer",
          subtitle: "The artist of every color",
          logo: "/team/logos/logo_gd.svg",
        },
        {
          name: "Social Media Managment",
          subtitle: "The face of BAU Radio",
          logo: "/team/logos/logo_mm.svg",
        },
        {
          name: "Event Managment",
          subtitle: "The hard workers of every event",
          logo: "/team/logos/logo_em.svg",
        },
        {
          name: "Operations",
          subtitle: "The brain of BAU Radio",
          logo: "/team/logos/logo_os.svg",
        },
        {
          name: "Finance",
          subtitle: "The cunnings of managment",
          logo: "/team/logos/logo_f.svg",
        },
        {
          name: "Marketing",
          subtitle: "The promoter of business",
          logo: "/team/logos/logo_m.svg",
        },
        {
          name: "Video Editing",
          subtitle: "The manipulators of emotion",
          logo: "/team/logos/logo_ve.svg",
        },
        {
          name: "IT",
          subtitle: "The geeks of technolgy",
          logo: "/team/logos/logo_it.svg",
        },
      ],
    };
  },
};
</script>
<style scoped>
h1 {
  @apply mx-auto text-center font-bold text-4xl py-10 tracking-widest;
}
h2 {
  @apply mx-auto text-center font-semibold text-xl text-brand-green pt-6;
}
</style>