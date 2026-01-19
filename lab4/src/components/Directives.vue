<template>
  <div>
    <button class="btn btn-info" v-on:click="changeshow()" v-html=""></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello',
      isVisible: false
    }
  },
  methods: {
    showMessage: function() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>