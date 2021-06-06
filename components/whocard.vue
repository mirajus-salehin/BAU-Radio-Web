<template>
  <div class="rounded-md px-6 mx-auto bg-white">
    <img :src="logo" alt="" class="mx-auto p-10" />
    <p class="font-bold text-2xl mx-auto text-center">
      {{ title }}
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
    title: { type: String, default: () => {} },
    logo: { type: String, default: () => {} },
    subtitle: { type: String, default: () => {} },
  },
};
</script>

<style>
</style>