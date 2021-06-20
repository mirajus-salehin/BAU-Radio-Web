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
        lg:grid-cols-2
        xl:grid-cols-3
        gap-4
        place-items-center
        mt-6
      "
    >
      <nuxt-link v-for="team in teams" :key="team.page" :to="team.page">
        <teamcard
          :name="team.name"
          :logo="team.logo"
          :subtitle="team.subtitle"
        />
      </nuxt-link>
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
          name: "Human Resource",
          subtitle: "The man behind every decision",
          logo: "/team/logos/logo_hr.svg",
          page: "human-resource-team",
        },
        {
          name: "Content Writer",
          subtitle: "The brain behind every speech",
          logo: "/team/logos/logo_cw.svg",
          page: "content-writer-team",
        },
        {
          name: "Graphics Designer",
          subtitle: "The artist of every color",
          logo: "/team/logos/logo_gd.svg",
          page: "graphics-designer-team",
        },
        {
          name: "Social Media Management",
          subtitle: "The face of BAU Radio",
          logo: "/team/logos/logo_mm.svg",
          page: "social-media-management-team",
        },
        {
          name: "Event Management",
          subtitle: "The hard workers of every event",
          logo: "/team/logos/logo_em.svg",
          page: "event-mangement-team",
        },
        {
          name: "Strategy and planning",
          subtitle: "The brain of BAU Radio",
          logo: "/team/logos/logo_os.svg",
          page: "strategy-and-planning-team",
        },
        {
          name: "Finance",
          subtitle: "The cunnings of managment",
          logo: "/team/logos/logo_f.svg",
          page: "finance-team",
        },
        {
          name: "Marketing",
          subtitle: "The promoter of business",
          logo: "/team/logos/logo_m.svg",
          page: "marketing-team",
        },
        {
          name: "Video Editing",
          subtitle: "The manipulators of emotion",
          logo: "/team/logos/logo_ve.svg",
          page: "video-editing-team",
        },
        {
          name: "IT",
          subtitle: "The geeks of technolgy",
          logo: "/team/logos/logo_it.svg",
          page: "information-and-technology-team",
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