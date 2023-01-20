<template>
    <Navbar />
    <div id="content">
      <slot/>
    </div>
    <Footer />
</template>

<script>
</script>

<style lang="scss">
  #__nuxt {
    display: flex;
    flex-direction: column;
    background: #18191B;

    width: 100%;
    min-height: 100vh;
    padding: 0 48px;
  }
  #content {
    max-width: 1250px;
    padding: 230px 0;
    margin: 0 auto;
  }
</style>