<template>
  <section class="d-flex justify-content-evenly flex-lg-row mobile p-4">
    <div class="d-flex flex-column justify-content-center">
      <h1 class="text-dark fw-bold mb-3">Make remote work</h1>
      <div>
        <p class="hero-text mb-4">Get your team in sync, no matter your location<br>
        Streamline processes, create team rituals, and watch productibity sour</p>
      </div>
      <button class="btn btn-dark w-25 mb-4 action-button ">Learn more</button>

      <div class="d-flex justify-content-evenly mt-4">
        <img class="img-fluid img-size" src="../assets/client-databiz.svg" alt="databiz logo">
        <img class="img-fluid img-size" src="../assets/client-audiophile.svg" alt="audiophile logo">
        <img class="img-fluid img-size" src="../assets/client-meet.svg" alt="meet logo">
        <img class="img-fluid img-size" src="../assets/client-maker.svg" alt="maker logo">
      </div>
    </div>
    <div>
      <img class="img-fluid img" src="../assets/image-hero-desktop.png" alt="">
    </div>
  </section>
</template>

<style scoped>
  .hero-text {
    font-size: 18px;
    color: hsl(0, 0%, 41%);
  }

  h1 {
    font-size: 80px;
  }

  .img {
    height: 80vh;
    /* width: 100vw; */
  }

  @media  only screen and (max-width: 900px) {
    .mobile {
      flex-direction: column-reverse;
    }
    .img {
      height: 50vh;
      width: 100vw;
    }
    h1 {
      margin-top: 20px;
      font-size: 35px;
    }
    .hero-text {
      font-size: 16px;
    }
    .hero-text, h1 {
      text-align: center;
    }
    .action-button {
      width: 50% !important;
      margin: 0 auto;
    }
    .img-size {
      width: 50px
    }
  }
  
</style>