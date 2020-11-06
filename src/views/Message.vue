<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <i class="fas fa-hotel"></i>
        <!-- <img :src="require('../assets/nestor.jpg')" height="20px" width="20px"> -->
        Nestor reservation App
      </b-navbar-brand>

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

    <b-container fluid class="bv-example-row mt-4">
      <b-row>
        <b-col cols="12">
          <b-table :fields="fieldsMessage" bordered striped hover :items="messages">
            <template v-slot:cell(delete)="row">
              <b-button
                size="md"
                variant="danger"
                block
                @click="deletekey('messages',row.item.id)"
              >Delete Message</b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { db } from "@/firebase";
export default {
  data() {
    return {
      email: "",
      id: "",
      messages: [],
      fieldsMessage: [
        { key: "message", label: "Message", sortable: true },

        { key: "email", label: "E-mail", sortable: true },
        { key: "delete", label: "Delete Message", sortable: true }
      ]
    };
  },
  created() {
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
