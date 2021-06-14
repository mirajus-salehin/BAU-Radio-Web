<template>
  <section class="mt-10">
    <section class="md:flex space-y-2 md:space-x-1 mt-10">
      <div class="w-full md:w-2/5 m-auto">
        <h1 class="heading-text">Still got any question?</h1>
        <p
          class="
            pt-4
            md:pt-10
            mr-10
            ml-10
            text-justify
            md:text-left
            leading-loose
          "
        >
          Check out some common questions about us. Hope you will find your
          answer.
        </p>
      </div>
      <div class="w-full md:w-3/5 px-2"><svg4 class="mx-auto" /></div>
    </section>
    <div class="w-full md:w-3/5 mx-auto p-8">
      <div class="mx-auto mb-10 mt-10">
        <h1 class="mx-auto text-center font-bold text-3xl lg:text-5xl">
          Frequently Asked Questions
        </h1>
      </div>
      <div class="shadow-md">
        <faqcard
          v-for="question in questions"
          :key="question"
          :q="question.qs"
          :answer="question.ans"
          :id="question.id"
          :for="question.for"
        />
      </div>
    </div>
  </section>
</template>

<script>
import faqcard from "~/components/faqcard.vue";
import svg4 from "~/components/svg4.vue";
export default {
  components: { faqcard, svg4 },
  head() {
    return {
      title: "FAQ",
      meta: [
        { hid: "og:title", name: "og:title", content: "FAQ" },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Frequently asked questions about BAU Radio.",
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
      questions: [
        {
          id: "tab-multi-one",
          for: "tab-multi-one",
          qs: "What is BAU Radio?",
          ans: "BAU Radio is a student-run Internet streaming service from Bangladesh Agricultural University. It was founded by a group of hardworking individuals.",
        },
        {
          id: "tab-multi-two",
          for: "tab-multi-two",
          qs: "Is it completly online?",
          ans: "Yes, BAU Radio is entirely a web-based service. You may listen to our shows for free at any time and from anywhere.",
        },
        {
          id: "tab-multi-three",
          for: "tab-multi-three",
          qs: "What is your vision?",
          ans: "BAU Radio's moto is 'Echoes of Dreams,' which corresponds to our vision. We have a goal of becoming the voice of every BAU student. We have a goal of creating a platform for BAU students to exchange their ideas with one another.",
        },
        {
          id: "tab-multi-four",
          for: "tab-multi-four",
          qs: "What is your mission?",
          ans: "Our goal is to propagate the BAU way of life across the country.",
        },
        {
          id: "tab-multi-five",
          for: "tab-multi-five",
          qs: "Are you available for paid collaboration?",
          ans: "Yes, we would be delighted to collaborate with you at any moment. For compensated partnership, please contact us.",
        },
        {
          id: "tab-multi-six",
          for: "tab-multi-six",
          qs: "Is there any opportunity for working with you?",
          ans: "Yes, we'd love to have someone as talented as you join our team. Please keep an eye out for job openings on our blogs and social media.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.heading-text {
  @apply font-bold text-3xl lg:text-5xl py-4 md:py-8 px-10 md:pl-10 tracking-widest;
}
</style>