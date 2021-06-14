<template>
  <div
    class="min-w-max hover:shadow-lg hover:border-2 hover:cursor-pointer transition-all duration-300 rounded-xl transform hover:-translate-y-2 p-10"
  >
    <img :src="logo" alt="" class="mx-auto p-10" />
    <p class="font-bold text-2xl mx-auto text-center">
      {{ name }}
    </p>
    <br />
    <p class="mx-auto text-center text-base text-brand-green pb-10">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String },
    logo: { type: String },
    subtitle: { type: String },
  },
};
</script>

<style>
</style>