<template>
  <section
    class="bg-brand-green grid grid-cols-1 md:grid-cols-3 gap-4 p-20 md:p-10"
  >
    <div class="flex justify-center space-x-4 w-full mt-6 md:m-0">
      <img src="../assets/svg/facebook.svg" alt="" class="h-10" />
      <img src="../assets/svg/instagram.svg" alt="" class="h-10" />
      <img src="../assets/svg/linkedin.svg" alt="" class="h-10" />
      <img src="../assets/svg/youtubr.svg" alt="" class="h-10" />
      <img src="../assets/svg/spotify.svg" alt="" class="h-10" />
    </div>
    <div class="text-white p-6 md:p-0 w-full">
      <p
        class="
          pb-6
          font-light
          text-gray-100 text-xl
          md:text-base
          tracking-wider
        "
      >
        Support
      </p>
      <ul>
        <li>Our team</li>
        <li>Shows</li>
        <li>Book a show</li>
      </ul>
    </div>
    <div class="text-white p-6 md:p-0">
      <p
        class="
          pb-6
          font-light
          text-gray-100 text-xl
          md:text-base
          tracking-wider
        "
      >
        BAU Radio
      </p>
      <ul>
        <li>Contact us</li>
        <li>FAQ</li>
        <li>Blog</li>
        <li>Join us</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style scoped>
ul {
  list-style-type: circle;
}
hr {
  height: 2px;
  color: white;
}
</style>