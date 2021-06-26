<template>
  <main class="mt-24 mb-4">
    <!--intro section-->
    <section
      class="flex flex-col justify-center items-center lg:flex-row space-x-2 mt-10"
    >
      <div class="lg:w-2/5 m-auto px-4">
        <h1 class="title-text text-center xl:text-left">BAU Radio</h1>
        <h3 class="moto mt-10 text-center xl:text-left">Echoes of dreams</h3>
        <p class="pt-4 text-justify md:text-left leading-loose">
          BAU Radio is an online radio station of Bangladesh Agricultural
          University, administrated by its student.The very first online
          streaming platform has come to light in the
          <b><br> 60-years history</b> of BAU.
        </p>
        <div class="pt-4">
          <a
            href="https://www.youtube.com/channel/UCqbb6Kk9_tZeIUtI82B6FFg"
            target="_blank"
            ref="noopener"
          >
            <button class="btn" v-on:click="track">Tune in</button>
          </a>
        </div>
      </div>
      <div class="flex justify-center lg:w-3/5"><svg1 /></div>
    </section>
    <!--who are we section-->
    <section class="mt-24 mb-10">
      <div class="mx-auto text-center mb-10 max-w-6xl">
        <h1
          class="mx-auto text-center font-bold text-3xl lg:text-5xl"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          Who are we
        </h1>
      </div>
      <div
        class="
          inline-grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-2
          place-items-center
          justify-items-center
          items-baseline
          gap-4
        "
      >
        <whocard
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          v-for="who in whos"
          :key="who.title"
          :title="who.title"
          :subtitle="who.subtitle"
          :logo="who.logoDir"
        />
      </div>
    </section>
    <!--echoes of dreams-->
    <section class="md:flex mt-10">
      <div
        class="m-auto md:w-3/5"
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-center"
      >
        <svg2 />
      </div>
      <div
        class="
          md:w-2/5
          text-center
          flex flex-col
          place-items-center
          justify-items-center
          items-center
          my-auto
        "
      >
        <h1
          class="title-text"
          id="q"
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
        >
          Echoes of dreams
        </h1>
        <p
          class="leading-loose px-6 pt-6"
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
        >
          Evreyone is a dreamer. But not everyone has the right platform to
          share their idea. We will give you that platform. BAU Radio is your
          own platform to share your dreams. Our goal is to take "Echoes of
          Dreams" from BAU to every corner of the country.
        </p>
      </div>
    </section>
    <!--got anything to share-->
    <section class="md:flex space-x-1 mt-24">
      <div class="w-full md:w-2/5 m-auto">
        <h1 class="title-text text-center" data-aos="fade-down">
          Got anything to share?
        </h1>
        <p
          class="pt-10 px-4 text-center leading-loose"
          data-aos="fade-up"
        >
          We will help you to share to the whole university. Through our
          platform you will have access to the thousands of students of our
          university and others.
        </p>
        <div class="max-w-lg mx-auto" data-aos="zoom-in">
          <nuxt-link to="contact" class="flex justify-center place-items-center">
            <button class="btn mt-10">Contact us</button>
          </nuxt-link>
        </div>
      </div>
      <div
        class="w-full md:w-3/5"
        data-aos="fade-down"
      >
        <svg3 />
      </div>
    </section>
  </main>
</template>

<script>
import svg1 from "~/components/svg1";
import svg2 from "~/components/svg2";
import svg3 from "~/components/svg3";
import whocard from "~/components/whocard";
import aos from "~/plugins/aos";
export default {
  mixins: [aos],
  components: { svg1, svg2, svg3, whocard },
  head() {
    return {
      title:
        "BAU Radio - An online radio service Of Bangladesh Agricultural University",
      meta: [
        { hid: "og:title", name: "og:title", content: "BAU Radio" },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "BAU Radio is an online radio station of Bangladesh Agricultural University, administrated by its student.The very first online streaming platform has come to light in the 60-years history of BAU.",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "https://i.imgur.com/nh4cmMm.png",
        },
      ],
    };
  },
  data() {
    return {
      whos: [
        {
          title: "Making history",
          subtitle:
            "Bangladesh Agricultural University's first campus online radio platform, which debuted on 13th June 2021 & harmonized some passionate students' long-held dreams",
          logoDir: "/logos/who card logos/firstever.svg",
        },
        {
          title: "Our coverage",
          subtitle:
            "With our creative and unparalleled content, we are aiming to be the best national campus radio platform in Bangladesh.",
          logoDir: "/logos/who card logos/love.svg",
        },
        {
          title: "Live update",
          subtitle:
            "In a variety of ways, we use our voices to entertain people. Our campus is presented through the experiences and stories of our students. We also broadcast our students' activities, creative ideas, and untold thoughts from a 1200-acre campus to every corner of our country.So that at the end of the day, our countrymen, as well as campus residents, can enjoy a simple burst of refreshment.",
          logoDir: "/logos/who card logos/update.svg",
        },
        {
          title: "Future landmark",
          subtitle:
            "We plan to reflect our BAU with fresh content. We will act as a lead-in to advertising for all facets of BAU, which will capture every student's hidden and unspoken thoughts throughout 1231 acres. We'll have a discourse, and they'll be the catalyst. With our creative and unparalleled content, we are aiming to be the best national campus radio platform in Bangladesh.",
          logoDir: "/logos/who card logos/voice.svg",
        },
      ],
    };
  },
  methods: {
    track() {
      this.$ga.event({
        eventCategory: "button_clicked",
        eventAction: "click_action",
        eventLabel: "tune_in",
        eventValue: 123,
      });
    },
  },
};
</script>

<style scoped>
.title-text {
  @apply font-bold text-3xl lg:text-5xl tracking-widest;
}

.moto {
  @apply hidden md:block text-xl lg:text-2xl text-brand-black tracking-wider font-semibold;
}
.btn {
  @apply focus:ring-0 bg-brand-green text-white hover:shadow-md hover:bg-brand-dark transform hover:translate-x-2 font-bold rounded-full px-8 py-2 transition-all ease-out duration-200;
}
html {
  scroll-behavior: smooth;
}
</style>
