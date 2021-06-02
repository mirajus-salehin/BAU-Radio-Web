<template>
  <section>
    <div class="relative z-0">
      <footersvg></footersvg>
      <div class="flex justify-center space-x-6 absolute inset-0 z-10 text-xl mt-48 mx-20">
        <div class="flex justify-center space-x-2 w-1/3">
          <img src="../assets/svg/facebook.svg" alt="" class="h-10" />
          <img src="../assets/svg/instagram.svg" alt="" class="h-10" />
          <img src="../assets/svg/linkedin.svg" alt="" class="h-10" />
          <img src="../assets/svg/youtubr.svg" alt="" class="h-10" />
          <img src="../assets/svg/spotify.svg" alt="" class="h-10" />
        </div>
        <div class="text-white w-1/3">
          <p class="pb-6 font-light text-gray-100 text-base tracking-wider">
            Support
          </p>
          <ul>
            <li>Our team</li>
            <li>Shows</li>
            <li>Book a show</li>
          </ul>
        </div>
        <div class="text-white w-1/3">
          <p class="pb-6 font-light text-gray-100 text-base tracking-wider">
            BAU Radio
          </p>
          <ul>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Join us</li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  </section>
</template>

<script>
import footersvg from "./footersvg";
export default {};
</script>
<style>
ul {
  list-style-type: circle;
}
hr {
  height: 2px;
  color: white;
}
</style>