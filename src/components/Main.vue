<template>
  <div id="top">
    <div id="imageca">
      <img src="../assets/hero.jpg">
      <div class="containerText">
        <div class="row">
          <div class="col-xs-12 col-sm-12">
            <h1 class="titre">Foodero</h1>
            <div class="textr">
              <p>Food & Photography</p>

              <button class="btn btn-default btnsub" type="submit">Galerie</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
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
  text-align: center;
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
  background-color: black;
  color: white;
}

@media (min-width: 300px) and (max-width: 440px) {
  h1,
  .textr {
    font-size: 0.3rem;
    margin-left: auto;
    margin-right: 5px;
  }
  .btn {
    height: 30px;
  }
}

@media (min-width: 440px) and (max-width: 530px) {
  h1 {
    font-size: 0.5rem;
  }
  .textr {
    font-size: 0.2rem;
    margin-left: auto;
    margin-right: 34px;
  }
  .btn {
    height: 37px;
  }
}

@media (min-width: 530px) and (max-width: 800px) {
  h1 {
    font-size: 1rem;
  }
  .textr {
    font-size: 0.8rem;
    margin-left: auto;
    margin-right: 34px;
  }
  .btn {
    height: 37px;
  }
}
</style>

