<template>
  <div class="app">
    <!-- <DLButton/> -->
    <DLButton icon="logo.png" buttonType="secondary" label="Hello"/>
  </div>
</template>

<script>
import DLButton from './components/atom/DLButton'
export default {
  components: {
    DLButton
  }
}
</script>

<style lang="scss">
.app {
  background-color: bisque;
}
</style>
