<template>
  <div>
    <section>
      <div class="containerfluid">
        <h1>
          <a name="gal">Gallerie</a>
        </h1>
        <p>Les réalisations de meero</p>

        <!--  Photos  -->

        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-2">
            <img
              v-img:group
              alt="photo1"
              src="../assets/gallery_1.jpg"
              class="img-thumbnail photo1"
            >
          </div>
          <div class="col-sm-2">
            <img
              v-img:group
              alt="photo2"
              src="../assets/gallery_2.jpg"
              class="img-thumbnail photo2"
            >
          </div>
          <div class="col-sm-2">
            <img
              v-img:group
              alt="photo3"
              src="../assets/gallery_3.jpg"
              class="img-thumbnail photo3"
            >
          </div>
          <div class="col-sm-2">
            <img
              v-img:group
              alt="photo4"
              src="../assets/gallery_4.jpg"
              class="img-thumbnail photo4"
            >
          </div>
          <div class="col-sm-2">
            <img
              v-img:group
              alt="photo5"
              src="../assets/gallery_5.jpg"
              class="img-thumbnail photo5"
            >
          </div>
          <div class="col-sm-1"></div>
        </div>

        <!-- Informations  -->

        <div class="container text">
          <div class="row">
            <div class="col-sm-3 margeText">
              <center>
                <p class="title">+8500 professionnels</p>
                <p class="textInfo">partout en France</p>
              </center>
            </div>
            <div class="col-sm-3 margeText leftBorder">
              <center>
                <p class="title">Communiquez</p>
                <p class="textInfo">autrement avec vos clients</p>
              </center>
            </div>
            <div class="col-sm-3 margeText leftBorder">
              <center>
                <p class="title">Disponible</p>
                <p class="textInfo">en 24 heures</p>
              </center>
            </div>
            <div class="col-sm-3 margeText leftBorder">
              <center>
                <p class="title">Images HD</p>
                <p class="textInfo">retouche incluse</p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div class="buttonRemonter">
        <!-- <a href="#top"> -->
        <button class="btn btn-default btnsub" type="submit" @click="scroll">Remonter</button>
        <!-- </a> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    scroll() {
      const element = document.getElementById("top");
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
.containerfluid {
  font-family: "Roboto";
  text-align: -webkit-center;
  margin-left: 20px;
  margin-right: 20px;
}

img {
  margin-bottom: 10%;
}

.info {
  font-size: 20px;
}

h1 {
  color: black;
  font-size: 60px;
  font-family: "Roboto";
  font-weight: 100;
  text-align: center;
  margin-top: 5%;
}

p {
  color: black;
  font-size: 30px;
  font-family: "Roboto";
  font-weight: 100;
  text-align: center;
}

.col-sm-3 {
  text-align: center;
  margin-bottom: 5%;
}

.margeText {
  padding-bottom: 5%;
  padding-top: 3%;
}

.leftBorder {
  border-left-width: 1px;
  border-left-color: #ffcb2b;
  border-left-style: solid;
}

.text {
  padding-top: 50px;
}

.title {
  color: rgba(70, 72, 73, 0.9);
  font-weight: bolder;
  font-size: 0.9em;
}

.textInfo {
  color: rgba(70, 72, 73, 0.9);
  font-size: 0.9em;
}

.btn {
  border-radius: 10px;
  color: #47cefe;
  width: 250px;
  height: 60px;
  font-size: 30px;
}

.btn-default {
  background-color: white;
  border-color: #47cefe;
  margin-bottom: 50px;
}

button:hover {
  color: white !important;
  background-color: #47cefe;
}
.buttonRemonter {
  text-align: center;
}
a {
  text-decoration: none;
  color: #47cefe;
}
a:hover {
  text-decoration: none;
  color: #47cefe;
}

@media (min-width: 300px) and (max-width: 440px) {
  h1 {
    width: 116px;
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }
}

@media (min-width: 440px) and (max-width: 530px) {
  h1 {
    width: 116px;
    font-size: 26px;
  }

  p {
    font-size: 22px;
  }
}

@media (min-width: 530px) and (max-width: 800px) {
  h1 {
    width: 116px;
    font-size: 26px;
  }

  p {
    font-size: 22px;
  }
}
</style>
