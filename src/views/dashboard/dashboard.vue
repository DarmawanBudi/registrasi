<template>
  <div class="container">
    <h2 class="mt-3">Dashboard</h2>

    <div class="d-flex justify-content-center align-items-center">
      <div class="spinner-border text-primary" role="status" v-if="loading==true">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

      <div class="card inbox my-5" @click="inbox">
        <div class="card-body in text-white push">
          <h2 class="">Pendaftar</h2>
          <h1 class="mt-3 mb-5 text-center">
            <b-icon icon="inbox-fill"></b-icon>
            {{dashboard.pendaftaran_pending}}
          </h1>
        </div>
      </div>
 
      <div class="card kursus my-5" @click="kursus">
        <div class="card-body program text-white push">
          <h2>Program Kursus</h2>
          <h1 class="mt-3 mb-5 text-center">
            <b-icon icon="book"></b-icon>
            {{dashboard.program_kursus}}
          </h1>
          <!-- <h4 class="text-right">
            <router-link class="link" :to='{name:"program_kursus"}'>
              <b-icon icon="arrow-right-circle-fill"></b-icon>
            </router-link>
          </h4> -->
        </div>
      </div>
      <!-- <div class="card">
        <div class="card-body instruktur text-white">
          <h5 class="card-title">Instruktur</h5>
          <h2 class="text-center">
            <b-icon icon="person-lines-fill"></b-icon>
            {{dashboard.instruktur}}
          </h2>
          <h4 class="text-right">
            <router-link class="link" :to='{name:"instruktur"}'>
              <b-icon icon="arrow-right-circle-fill"></b-icon>
            </router-link>
          </h4>
        </div>
      </div>
      <div class="card">
        <div class="card-body nilai text-white">
          <h5 class="card-title">Nilai Siswa</h5>
          <h2 class="text-center">
            <b-icon icon="file-earmark-medical"></b-icon> Nilai
          </h2>
          <h4 class="text-right">
            <router-link class="link" :to='{name:"nilai_siswa"}'>
              <b-icon icon="arrow-right-circle-fill"></b-icon>
            </router-link>
          </h4>
        </div>
      </div> -->

    <!-- <div class="card mt-5">
      <table class="table table-striped">
        <thead>
          <th>
            <h5 class="mt-3">{{new Date() | moment("dddd, Do MMMM YYYY")}}</h5>
          </th>
          <th colspan="3" class="text-right">
            <router-link :to='{name:"jadwal"}'>
              <i>
                Read More
                <b-icon icon="chevron-double-right"></b-icon>
              </i>
            </router-link>
          </th>
        </thead>
        <tbody>
          <tr v-for="(element,index) in dashboard.jadwal_hari_ini" :key="index">
            <td>{{element.programkursusinstrukturs.programkursuses.nama}}</td>
            <td>{{new Date(element.tanggal + " " + element.waktu_mulai) | moment("hh:mm")}} - {{new Date(element.tanggal + " " + element.waktu_berakhir) | moment("hh:mm")}}</td>
            <td>{{element.materi}}</td>
            <td>{{element.programkursusinstrukturs.instrukturs.nama}}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<script>
import axios from "@/service/axios";
export default {
  data: () => {
    return {
      dashboard: [],
      loading: false,
    };
  },
  mounted() {
    this.getdashboard();
    // this.$info();
    // console.log(this);
  },
  methods: {
    getdashboard() {
      this.loading = true;
      axios.get("/frontoffice").then((response) => {
        if (response.data.success == true) {
          this.dashboard = response.data.data;
          // console.log(response);
          this.loading = false;
        }
      });
    },
    kursus () {
      this.$router.push({name:'program_kursus'})
    },
    inbox () {
      this.$router.push({name:'inbox'})
    }
  },
};
</script>

<style>
.link {
  color: white;
}
.in{
  background-color: #8cd17f;
}
.program {
  background-color: #DBA348;
}
.instruktur {
  background-color: #D09D59;
}
.nilai {
  background-color: #6F9552;
}
.push:hover {
  cursor: pointer;
  /* text-decoration: underline; */
  border: solid rgb(255, 255, 255);
  /* border-style:double; */
}
/* .pad {
  margin: 10vh;
} */
/* .inbox {
  margin-left: 15vh;
  margin-top: 5vh;
  margin-bottom: 15vh;
  height: 30vh;
  width: 100vh;
}
.kursus {
  margin-left: 15vh;
  margin-top: 5vh;
  height: 30vh;
  width: 100vh;
} */
</style>