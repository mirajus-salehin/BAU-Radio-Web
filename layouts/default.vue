<template>
  <main>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-P2QQ2PG9CY"
    ></script>
    <navbar />
    <Nuxt />
    <footer>
      <foot />
    </footer>
  </main>
</template>

<style>
</style>

<script>
export default {
  mounted() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-P2QQ2PG9CY");
  },
};
</script>