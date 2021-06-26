<template>
  <div class="w-full flex flex-col space-y-4 place-items-center">
    <img :src="logo" alt="" />
    <p class="font-bold text-2xl text-center">
      {{ title }}
    </p>
    <p class="text-center text-base text-brand-green pb-10  lg:w-3/4 xl:w-1/2">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => {} },
    logo: { type: String, default: () => {} },
    subtitle: { type: String, default: () => {} },
  },
};
</script>

<style>
</style>