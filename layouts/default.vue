<template>
    <div class="wip">Work in progress...</div>
    <Navbar />
    <div id="content">
      <slot/>
    </div>
    <Footer />
</template>

<script>
</script>

<style lang="scss" scoped>
  .wip {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    z-index: 1000;
  }
  #content {
    max-width: 1250px;
    padding: 230px 0;
    margin: 0 auto;
  }
</style>