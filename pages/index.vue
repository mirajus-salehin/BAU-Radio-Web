<template>
  <div>
    <!--intro section-->
    <section class="md:flex space-y-2 md:space-x-1 mt-10">
      <div class="w-full md:w-2/5 m-auto">
        <h1 class="title-text">BAU Radio</h1>
        <h3 class="moto">Echoes of dreams</h3>
        <p class="pt-4 md:pt-10 mr-10 ml-10 text-justify md:text-left leading-loose">
          An online radio service in Bangladesh Agrciltural University that is
          run by the students, for the students, to the students. Tune in more
          talks like our campus life.We also arrange expert talks on agriculture
          for farmers.
        </p>
        <div class="ml-10 mt-4 mb-4">
          <button class="btn">Tune in</button>
        </div>
      </div>
      <div class="w-full md:w-3/5"><svg1 /></div>
    </section>
    <!--who are we-->
    <section class="md:flex md:flex-col mt-10 mb-10">
      <div class="mx-auto mb-10">
        <h1 class="title-text">Who are we</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center justify-items-center gap-4">
        <whocard v-for="(who) in whos" :key="who"
          :title="who.title"
          :subtitle="who.subtitle"
          :logo="who.logoDir"
        />
      </div>
    </section>
    <!--echoes of dreams-->
    <section class="md:flex space-x-1 mt-10">
      <div class="w-full md:w-3/5"><svg2 /></div>
      <div class="w-full md:w-2/5 m-auto text-center">
        <h1 class="title-text">Echoes of dreams</h1>
        <p class="pt-10 pr-4 ml-10 mr-10">
          Evreyone is a dreamer. But not everyone has the right platform to
          share their idea. We will give you that platform. BAU Radio is your
          own platform to share your dreams.
        </p>
      </div>
    </section>
    <!--got anything to share-->
    <section class="md:flex space-x-1 mt-10">
      <div class="w-full md:w-2/5 m-auto">
        <h1 class="title-text text-center">Got anything to share?</h1>
        <p class="pt-10 pr-4 ml-10 text-justify">
          We will help you to share to the whole university. Through our
          platform you will have access to the thousands of students of our
          university and others.
        </p>
        <div class="ml-10 mt-4 mb-4">
          <button class="btn mx-auto">Contact us</button>
        </div>
      </div>
      <div class="w-full md:w-3/5"><svg3 /></div>
    </section>
  </div>
</template>

<script>
import svg1 from "~/components/svg1";
import svg2 from "~/components/svg2";
import svg3 from "~/components/svg3";
import whocard from "~/components/whocard";
export default {
  components: { svg1, svg2, svg3, whocard },
  head(){
    return {
      title:"BAU Radio"
    }
  },
  data() {
    return {
      whos: [
        {
          title: "First ever",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget condimentum pulvinar.",
          "logoDir":"/logos/who card logos/firstever.svg"
        },
        {
          title: "Made with love",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget condimentum pulvinar.",
          "logoDir":"/logos/who card logos/love.svg"
        },
        {
          title: "Your voice",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget condimentum pulvinar.",
          "logoDir":"/logos/who card logos/voice.svg"
        },
        {
          title: "Your voice",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget condimentum pulvinar.",
          "logoDir":"/logos/who card logos/voice.svg"
        },
      ],
    };
  },
};
</script>

<style>
.title-text {
  @apply font-bold text-3xl lg:text-5xl py-4 md:py-8 mx-10 md:ml-10 tracking-widest;
}

.moto {
  @apply hidden md:block py-2 ml-10 text-xl lg:text-2xl text-brand-black tracking-wide font-semibold;
}
.btn {
  @apply bg-brand-green text-white hover:shadow-md hover:bg-brand-dark font-bold rounded-full px-8 py-2 transition duration-200;
}
html {
  scroll-behavior: smooth;
}
</style>
