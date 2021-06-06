<template>
  <section class="w-full md:w-3/5 mx-auto p-8 min-h-screen">
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
  </section>
</template>

<script>
import faqcard from "~/components/faqcard.vue";
export default {
  components: { faqcard },
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

<style>
</style>