<template>
  <nav>
    <div class="flex justify-between items-center pt-6 pr-10">
      <div class="invisible">BAU Radio</div>
      <div class="hidden md:flex justify-between space-x-4 pr-6" ref="menu">
        <nuxt-link to="/" class="nav-item" exact="">Home</nuxt-link>
        <nuxt-link to="/ourteam" class="nav-item" exact="">Our team</nuxt-link>
        <nuxt-link to="/blog" class="nav-item" exact="">Blog</nuxt-link>
        <nuxt-link to="/contact" class="nav-item" exact="">Contact us</nuxt-link>
        <nuxt-link to="/faq" class="nav-item" exact="">FAQ</nuxt-link>
      </div>

      <div class="flex md:hidden button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition-all"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
    <!--mobile menu-->
    <div class="mobile-menu hidden md:hidden mr-2 bg-white">
      <div class="flex flex-col gap-2">
        <nuxt-link to="/" class="mobile-nav" exact="">Home</nuxt-link>
        <nuxt-link to="/ourteam" class="mobile-nav" exact="">Our team</nuxt-link>
        <nuxt-link to="/blog" class="mobile-nav" exact="">Blog</nuxt-link>
        <nuxt-link to="/contact" class="mobile-nav" exact="">Contact us</nuxt-link>
        <nuxt-link to="/FAQ" class="mobile-nav" exact="">FAQ</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    const button = document.querySelector("div.button");
    const menu = document.querySelector("div.mobile-menu");

    button.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  },
};
</script>

<style>
.nav-item {
  @apply px-6 py-2 hover:cursor-pointer hover:bg-brand-green-lighter hover:text-white rounded-xl font-bold transition duration-200;
}
.mobile-nav {
  @apply px-6 py-2 bg-white;
}
a.nuxt-link-active {
  @apply bg-brand-green text-white font-bold;
}
</style>