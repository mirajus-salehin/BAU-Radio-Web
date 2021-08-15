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
    <a
      href="https://agami.com.bd/details/%E0%A6%AC%E0%A6%BE%E0%A6%89-%E0%A6%B0%E0%A7%87%E0%A6%A1%E0%A6%BF%E0%A6%93%E0%A6%83-%E0%A7%A7%E0%A7%A8%E0%A7%A9%E0%A7%A7-%E0%A6%8F%E0%A6%95%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A6%AC%E0%A7%81%E0%A6%9C%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A7%87-%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A6%A4%E0%A6%AE/112/"
      target="_blank"
      ref="noopener"
    >
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
  },
};
</script>

<style>
</style>