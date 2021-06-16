<template>
  <div class="p-4 w-full h-full flex flex-col gap-5 place-items-center justify-items-center">
    <img :src="img" alt="" class="w-36 h-36 rounded-full mx-auto" />
    <div class="mx-auto">
        {{name}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String },
    img: { type: String },
  },
};
</script>

<style>
</style>