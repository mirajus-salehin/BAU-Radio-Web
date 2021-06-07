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
  data() {
    return {
      questions: [
        {
          id: "tab-multi-one",
          for: "tab-multi-one",
          qs: "Question number 1",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.",
        },
        {
          id: "tab-multi-two",
          for: "tab-multi-two",
          qs: "Question number 2",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.",
        },
        {
          id: "tab-multi-three",
          for: "tab-multi-three",
          qs: "Question number 3",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.",
        },
        {
          id: "tab-multi-four",
          for: "tab-multi-four",
          qs: "Question number 4",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.",
        },
        {
          id: "tab-multi-five",
          for: "tab-multi-five",
          qs: "Question number 5",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.",
        },
        {
          id: "tab-multi-six",
          for: "tab-multi-six",
          qs: "Question number 6",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.",
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