<template>
  <div class="logo">
    <a>Hello</a>
    {{ name + " " + creator }}
  </div>
</template>

<script>
// javaScript codes
export default {
  name: "Logo",
  data() {
    return {
      name: "My first vue sandbox project",
      creator: "HoodadDeveloper",
    };
  },
};
</script>

<style scoped>
/* Only for this cpmponent */
/* CSS codes */
a {
  background-color: tomato;
}
</style>
