<template>
  <div class="w-full hover:shadow-lg hover:cursor-pointer transition duration-200 rounded-xl">
    <img :src="logo" alt="" class="mx-auto p-10"/>
    <p class="font-bold text-2xl mx-auto text-center">
      {{name}}
    </p>
    <br>
    <p class="mx-auto text-center text-base text-brand-green pb-10">
      {{subtitle}}
    </p>
  </div>
</template>

<script>
export default {
  props: ["name","logo","subtitle"],
  data(){
    return{
      logo:{
        type:String,
      }
    }
  }
};
</script>

<style>
</style>