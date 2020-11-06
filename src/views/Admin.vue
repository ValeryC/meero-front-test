<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <router-link to="/">
              <b-button size="sm" class="my-2 mr-2 my-sm-0">
                <i class="fas fa-door-open"></i> Exit
              </b-button>
            </router-link>

            <!-- Right aligned nav items -->
            <router-link to="/admin">
              <b-button size="sm" class="my-2 mr-2 my-sm-0">
                <i class="fas fa-user"></i> Admin
              </b-button>
            </router-link>

            <router-link to="/message">
              <b-button size="sm" class="my-2 mr-2 my-sm-0">
                <i class="fas fa-envelope"></i> Message
              </b-button>
            </router-link>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { db } from "@/firebase";
export default {
  data() {
    return {
      form: {
        email: "",
        firstname: "",
        lastname: "",
        nationality: "",
        birth: "",
        phone: "",
        room: "",
        price: "",
        date: ""
      },
      color: "",

      single: [],
      double: [],
      family: [],
      deluxe: [],
      clients: [],
      messages: [],
      fields: [
        { key: "id", label: "Reservation Id", sortable: true },
        { key: "clientID", label: "ClientID", sortable: true },
        { key: "firstname", label: "Firstname", sortable: true },
        { key: "lastname", label: "Lastname", sortable: true },
        { key: "nationality", label: "Nationality", sortable: true },

        { key: "phone", label: "Phone", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        { key: "room", label: "Room", sortable: true },
        { key: "price", label: "Price", sortable: true },
        { key: "day", label: "Day", sortable: true },
        { key: "delete", label: "Delete Reservation", sortable: true },
        { key: "Edit", label: "Edit Reservation", sortable: true }
      ],
      fieldsClient: [
        { key: "id", label: "Id", sortable: true },
        { key: "lastname", label: "lastname", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        { key: "delete", label: "Delete Client", sortable: true }
      ],
      fieldsMessage: [
        { key: "id", label: "Id", sortable: true },
        { key: "message", label: "Message", sortable: true },
        { key: "lastname", label: "lastname", sortable: true },

        { key: "email", label: "E-mail", sortable: true },
        { key: "delete", label: "Delete Message", sortable: true }
      ]
    };
  },
  created() {
    db.collection("Single").onSnapshot(querySnapshot => {
      this.single = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.single.push(x);
      });
    });

    db.collection("Double").onSnapshot(querySnapshot => {
      this.double = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.double.push(x);
      });
    });

    db.collection("Family").onSnapshot(querySnapshot => {
      this.family = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.family.push(x);
      });
    });

    db.collection("Deluxe").onSnapshot(querySnapshot => {
      this.deluxe = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.deluxe.push(x);
      });
    });

    db.collection("clients").onSnapshot(querySnapshot => {
      this.clients = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.clients.push(x);
      });
    });

    db.collection("messages").onSnapshot(querySnapshot => {
      this.messages = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.messages.push(x);
      });
    });
  },

  methods: {
    deletekey(collection, id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection(collection)
          .doc(id)
          .delete()
          .then(function() {
            console.log("Document successfully deleted");
          })
          .catch(function(error) {
            console.error("Error removing document: ", error);
          });
      }
    },
    modaldata(room, price, color) {
      this.$bvModal.show("my-modal");
      this.form.room = room;
      this.color = color;
      this.form.price = price;
    },

    onUpdate(evt) {
      evt.preventDefault();

      db.collection("clients")
        .add({
          firstname: this.form.firstname,
          lastname: this.form.lastname,
          nationality: this.form.nationality,
          phone: this.form.phone,
          email: this.form.email,
          room: this.form.room
        })
        .then(docRef => {
          db.collection(this.form.room)
            .add({
              clientID: docRef.id,
              firstname: this.form.firstname,
              lastname: this.form.lastname,
              nationality: this.form.nationality,
              room: this.form.room,
              price: this.form.price,
              day: this.form.date,
              birth: this.form.birth,
              phone: this.form.phone,
              email: this.form.email
            })
            .then(d => {
              Swal.fire(
                "Good job! Copy your id Reservation",
                `Reservation id: ${d.id}`,
                "success"
              );

              this.form.email = "";
              this.form.nationality = "";
              this.form.firstname = "";
              this.form.lastname = "";
              this.form.birth = "";
              this.form.phone = "";
            });
        });
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>
i {
  color: #48a9a6;
}
img {
  height: 20xvh !important;
  width: 100%;
}
</style>
