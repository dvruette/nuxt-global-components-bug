<template lang="html">
  <p>Hello from {{ message }}</p>
</template>

<script>
export default {
  data() {
    return {
      message: 'the other side'
    }
  }
}
</script>

<style lang="css">

p {
  padding: 16px;
  background: #bec;
  border-radius: 4px;
}

</style>
