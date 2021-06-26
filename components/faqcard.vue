<template>
  <div class="tab w-full overflow-hidden border-t">
    <input class="absolute opacity-0" :id="id" type="checkbox" name="tabs" />
    <label
      class="block p-5 leading-normal cursor-pointer"
      :for="id"
      >{{ q }}</label
    >
    <div
      class="
        tab-content
        overflow-hidden
        border-l-2
        bg-gray-100
        border-green-500
        leading-normal
      "
    >
      <p class="p-5">
        {{ answer }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String },
    q: { type: String },
    answer: { type: String },
  },
};
</script>

<style scoped>
/* Tab content - closed */
.tab-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35;
  transition: max-height 0.35s;
}
/* :checked - resize to full height */
.tab input:checked ~ .tab-content {
  max-height: 100vh;
}
/* Label formatting when open */
.tab input:checked + label {
  @apply text-xl p-5 border-l-2 border-brand-green-lighter bg-gray-100 text-brand-green;
}
/* Icon */
.tab label::after {
  float: right;
  right: 0;
  top: 0;
  display: block;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5;
  font-size: 1.25rem;
  text-align: center;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
}
/* Icon formatting - closed */
.tab input[type="checkbox"] + label::after {
  content: "+";
  font-weight: bold; 
  border-width: 1px; 
  border-radius: 9999px; 
  border-color: #b8c2cc; 
}
.tab input[type="radio"] + label::after {
  content: "\25BE";
  font-weight: bold;
  border-width: 1px;
  border-radius: 9999px; 
  border-color: #b8c2cc;
}
/* Icon formatting - open */
.tab input[type="checkbox"]:checked + label::after {
  transform: rotate(315deg);
  background-color: #297880; 
  color: #f8fafc; 
}
.tab input[type="radio"]:checked + label::after {
  transform: rotateX(180deg);
  background-color: #297880; 
  color: #f8fafc; 
}
</style>