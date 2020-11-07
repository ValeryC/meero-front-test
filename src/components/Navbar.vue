<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant>
      <b-navbar-brand href="#">
        <!-- <i class="fas fa-hotel"></i>  -->
        <img :src="require('../assets/logo.svg')" height="50px" width="150px">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button
              @click="modaldata2('Send Message', 'primary')"
              size="sm"
              class="my-2 mr-2 my-sm-0 navButton"
            >Inscription</b-button>
            <b-button
              @click="modaldata2('Administrator', 'dark')"
              size="sm"
              class="my-2 mr-2 my-sm-0 navButton navConnexion"
            >Connexion</b-button>
            <div class="item"></div>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-modal hide-footer id="my-modal2" :title="title">
      <b-form @submit="onSubmit2">
        <b-form-group
          v-if="color == 'primary'"
          id="input-group-1"
          label="E-mail:"
          label-for="input-1"
        >
          <b-form-input
            v-if="color == 'primary'"
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter E-mail"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          v-if="color == 'primary'"
          id="input-group-1"
          label="Contact:"
          label-for="input-1"
        >
          <b-form-textarea
            id="textarea"
            v-model="form.message"
            placeholder="Enter Message..."
            row="3"
            max-row="6"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group v-if="color == 'dark'" id="input-group-1" label="User:" label-for="input-1">
          <b-form-input
            v-if="color == 'dark'"
            id="input-1"
            v-model="admininput.user"
            type="text"
            required
            placeholder="Enter User"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          v-if="color == 'dark'"
          id="input-group-1"
          label="Password:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="admininput.pass"
            type="password"
            required
            placeholder="Enter Password"
          ></b-form-input>
        </b-form-group>

        <b-button class="text-white btnA" block type="submit" :variant="color">{{title}}</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { db } from "@/firebase";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      form: {
        reservationid: "",
        message: "",
        room: null,
        email: ""
      },

      color: "",
      title: "",
      show: false,

      admin: {
        user: "meero",
        pass: "meero"
      },
      admininput: {
        user: "",
        pass: ""
      }
    };
  },
  methods: {
    onSubmit2(evt) {
      this.show = false;
      evt.preventDefault();
      switch (this.title) {
        case "Contact":
          db.collection("messages")
            .add({ message: this.form.message, email: this.form.email })
            .then(() => {
              this.$bvModal.hide("my-modal2");
              Swal.fire({
                icon: "success",
                title: "Message Sent"
              });
            })
            .catch(() => {
              console.log("Error - Messages");
            });
          break;
        case "Administrator":
          if (
            this.admin.user == this.admininput.user &&
            this.admin.pass == this.admininput.pass
          ) {
            this.$router.push("/admin");
          } else {
            Swal.fire({
              icon: "error",
              title: "Incorrect"
            });
          }
          break;
      }
    },
    modaldata2(title, color) {
      this.$bvModal.show("my-modal2");
      this.color = color;
      this.title = title;

      this.reservation.email = "";

      this.reservation.message = "";

      this.admininput.user = "";
      this.admininput.pass = "";
      this.show = false;
    }
  }
};
</script>

<style scoped>
i {
  color: #48a9a6;
}

img {
  margin-left: 20px;
}

.item {
  margin-right: 40px;
}

.navButton {
  color: #beedff;
  font-size: 25px;
}

.navConnexion {
  border: 1px solid #beedff;
  border-radius: 10px;
}

button {
  background-color: transparent;
  border: none;
}
button:hover {
  background-color: #beedff;
}
button:hover > i {
  color: white;
}

.btnA {
  background-color: black;
}

.navbar-dark .navbar-toggler {
  color: white;
  border-color: #47cefe;
  background-color: #47cefe;
}
</style>


