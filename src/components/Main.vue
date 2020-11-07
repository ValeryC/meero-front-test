<template>
  <div>
    <div id="imageca">
      <img src="../assets/hero.jpg">
      <div class="containerText">
        <div class="row">
          <div class="col-xs-12 col-sm-12">
            <h1 class="titre">Foodeero</h1>
            <div class="textr">
              <p>Food & Photography</p>

              <button class="btn btn-default btnsub" type="submit" @click="scroll">Gallerie</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  methods: {
    scroll() {
      const element = document.getElementById("gallery");
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
#imageca {
  margin: 0;
  position: relative;
  background-color: black;
}

#imageca img {
  width: 100vw;
  opacity: 0.8;
}

h1 {
  -webkit-text-stroke: 2px;
  font-weight: bold;
  font-size: 5.5rem;
  font-family: Roboto;
}

.textr {
  font-size: 60px;
  font-family: Roboto;
  font-weight: 100;
}

.containerText {
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: white;
  position: absolute;
  top: 30%;
  width: 100vw;
  text-align: -webkit-center;
  color: white;

  letter-spacing: 0.1em;
  font-family: Roboto;
}

.btn {
  border-radius: 10px;
  color: white;
  width: 250px;
  height: 60px;
  font-size: 30px;
}

.btn-default {
  background-color: #47cefe;
  border-color: white;
}

.btn-default:hover {
  background-color: white;
  color: #47cefe !important;
}

a {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: none;
  color: white;
}

@media (min-width: 300px) and (max-width: 440px) {
  h1,
  .textr {
    width: 116px;
    font-size: 18px;
  }
  .btn {
    height: 28px;
    width: 92px;
    font-size: 12px;
  }
  .btn-default {
    background-color: #47cefe;
    border-color: white;
  }
}

@media (min-width: 440px) and (max-width: 530px) {
  h1,
  .textr {
    width: 116px;
    font-size: 22px;
  }
  .btn {
    height: 34px;
    width: 96px;
    font-size: 14px;
  }
  .btn-default {
    background-color: #47cefe;
    border-color: white;
  }
}

@media (min-width: 530px) and (max-width: 800px) {
  h1,
  .textr {
    font-size: 44px;
  }
  .btn {
    height: 34px;
    width: 96px;
    font-size: 14px;
  }
  .btn-default {
    background-color: #47cefe;
    border-color: white;
  }
}
</style>

