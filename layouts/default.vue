<template>
    <Navbar />
    <div id="content">
      <slot/>
    </div>
    <Footer />
</template>

<script>
</script>

<style lang="scss" scoped>
  #content {
    max-width: 1250px;
    padding: 230px 0;
    margin: 0 auto;
  }
</style>