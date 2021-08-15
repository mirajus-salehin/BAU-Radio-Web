<template>
  <section
    class="bg-brand-green grid grid-cols-1 md:grid-cols-3 gap-4 px-20 md:p-10"
  >
  <div>
    <div class="flex justify-center space-x-4 w-full mt-6 md:m-0">
      <a href="https://www.facebook.com/bauradio21" target="_blank" ref="noopener"><img src="../assets/svg/facebook.svg" alt="" class="h-10" /></a>
      <a href="https://www.instagram.com/bau_radio/" target="_blank" ref="noopener"><img src="../assets/svg/instagram.svg" alt="" class="h-10" /></a>
      <a href="https://www.linkedin.com/company/bau-radio/" target="_blank" ref="noopener"><img src="../assets/svg/linkedin.svg" alt="" class="h-10" /></a>
      <a href="https://www.youtube.com/channel/UCqbb6Kk9_tZeIUtI82B6FFg" target="_blank" ref="noopener"><img src="../assets/svg/youtubr.svg" alt="" class="h-10" /></a>
    </div>
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
        Contact us
      </p>
      <ul>
        <li><a href="tel:+8801784-581634">+8801784-581634</a></li>
        <li><a href="mailto:bauradio.official@gmail.com">bauradio.official@gmail.com</a></li>
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
        Links
      </p>
      <ul>
        <li><nuxt-link to="contact">Contact us</nuxt-link></li>
        <li><nuxt-link to="blog">Blog</nuxt-link></li>
        <li><nuxt-link to="faq">FAQ</nuxt-link></li>
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