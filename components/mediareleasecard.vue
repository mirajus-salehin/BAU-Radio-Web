<template>
  <div class="max-w-sm">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img :src="imgPath" :alt="imgPath" />
    </div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        <p class="text-gray-700 text-base">
          {{ title }}
        </p>
      </div>
      <div class="mb-2">
        <p>
          {{ news }}
        </p>
      </div>
    </div>
    <a :href="link" target="_blank" ref="noopener">
      <button
        class="
          mt-6
          py-2
          px-4
          bg-brand-green
          text-white
          font-bold
          rounded-lg
          shadow-md
          hover:shadow-lg
          transition
          duration-300
        "
      >
        Read more
      </button>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imgPath: { type: String },
    title: { type: String },
    news: { type: String },
    link: { type: String },
  },
};
</script>

<style>
</style>