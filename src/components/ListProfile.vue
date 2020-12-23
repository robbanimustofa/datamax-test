<template>
  <div id="listusers" class="p-lr-20 m-t-70">
    <div class="card m-t-10" v-for="ListUser in listfetch" :key="ListUser.id">
      <div class="text-center m-t-10">
        <img v-bind:src="ListUser.avatar" class="img-circle-big" alt="" />
      </div>
      <div class="card-body">
        <h5 class="card-title">
          User {{ ListUser.first_name }}
          {{ ListUser.last_name }}
        </h5>
        <p class="card-text">
          {{ ListUser.desc }}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          {{ ListUser.title }} {{ ListUser.first_name }}
          {{ ListUser.last_name }}
        </li>
        <li class="list-group-item">Phone: {{ ListUser.telp }}</li>
        <li class="list-group-item">Email: {{ ListUser.email }}</li>
        <li class="list-group-item">Age: {{ ListUser.age }}</li>
        <li class="list-group-item">Gender: {{ ListUser.gender }}</li>
        <li class="list-group-item">
          address: {{ ListUser.country }} {{ ListUser.city }}
          {{ ListUser.states }} {{ ListUser.postcode }}
          {{ ListUser.streetName }} {{ ListUser.streetNumber }}
        </li>
      </ul>
      <div class="card-body">
        <!-- <button type="button" class="btn btn-primary m-r-10" @click="getData">
          Generate
        </button> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListProfile",
  data() {
    return {
      listfetch: [],
      logourlList: "",
      length_data: 0,
      iduser: "",
      users: 20,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await this.$axios.get(this.$baseurl + "api/");
        console.log(response.data.results);
        if (response.status === 200) {
          //   alert("success");
          var data = response.data.results;
          this.length_data = data.length;
          for (var i = 0; i < data.length; i++) {
            this.listfetch.push({
              title: data[i].name.title,
              first_name: data[i].name.first,
              last_name: data[i].name.last,
              id: data[i].login.uuid,
              email: data[i].email,
              avatar: data[i].picture.large,
              telp: data[i].cell,
              age: data[i].dob.age,
              gender: data[i].gender,
              city: data[i].location.city,
              country: data[i].location.country,
              postcode: data[i].location.postcode,
              states: data[i].location.state,
              streetName: data[i].location.street.name,
              streetNumber: data[i].location.street.number,
              desc: data[i].location.timezone.description,
            });
          }
        }
      } catch (e) {
        alert("err");
      }
    },
  },
};
</script>
<style>
</style>