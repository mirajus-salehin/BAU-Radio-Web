<template>
  <section class="mt-10 min-h-screen">
    <div class="mx-auto bg-gray-50 p-10">
      <h1 class="text-3xl pb-4">Quick support</h1>
      <h3 class="text-brand-green pb-4 pt-4">
        You can get all the information from here
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 place-items-center gap-2">
        <div
          class="
            mx-auto
            flex flex-col
            gap-y-4
            place-items-center
            justify-items-center
            w-full
            p-8
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-32 w-32 text-brand-green"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="font-semibold text-xl">Visit us</p>
          <p class="font-light">
            Bangladesh Agricultural University, Mymensing-2200
          </p>
        </div>
        <div
          class="
            flex flex-col
            gap-y-4
            place-items-center
            justify-items-center
            w-full
            p-8
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-32 w-32 text-brand-green"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>
          <p class="font-semibold text-xl">Call us</p>
          <p class="font-light">hr.bauradio@gmail.com</p>
        </div>
        <div
          class="
            flex flex-col
            gap-y-4
            place-items-center
            justify-items-center
            w-full
            p-8
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-32 w-32 text-brand-green"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <p class="font-semibold text-xl">Email us</p>
          <p class="font-light">hr.bauradio@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Contact",
    };
  },
};
</script>

<style>
</style>