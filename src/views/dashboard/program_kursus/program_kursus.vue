<template>
  <div class="container">
    <h2 class="mt-3">Program Kursus</h2>
    <div class="text-right">
      <router-link :to='{name:"tambah_program_kursus"}'>
        <strong>
          <b-icon icon="plus-circle-fill"></b-icon> Tambah Porgram kursus
        </strong>
      </router-link>
    <!-- <strong><b-icon icon="plus-circle-fill"></b-icon> Tambah Porgram kursus</strong> -->
    </div>

    <div class="d-flex justify-content-center align-items-center">
      <div class="spinner-border text-primary" role="status" v-if="loading==true" id="loading">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="card-columns">
      <div class="my-2 card border-primary" v-for="(element,index) in ProgramKursus" :key="index">
        <div class="bg-primary card-header text-white text-center">
          <div class="row">
            <div class="col-10 mt-1">
              <strong class="ml-5">{{element.nama}}</strong>
            </div>
            <div class="col-2">
              <!-- <b-icon icon="x-square-fill"></b-icon> -->
              <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  
                </button>
                <div class="dropdown-menu">
                  <!-- <b-button class="dropdown-item" v-b-modal.modal="`modal-${index}`">Detail</b-button> -->
                  <a class="dropdown-item" v-b-modal.modal="`modal-${index}`">Detail</a>
                  <a class="dropdown-item" href="#">Edit</a>
                  <!-- <div class="dropdown-divider"></div> -->
                  <a class="dropdown-item" @click="hps()">Hapus</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3 card-body text-center">
          <p>
            <b-icon icon="people-fill"></b-icon>
            {{element.pendaftarans_count}} Siswa | {{element.kuota}} Kuota
          </p>
          <span v-for="(object,k) in element.programkursusinstrukturs" :key="k">{{object.instrukturs.nama}}, </span>
          <b-modal :id="`modal-${index}`" title="Kompetensi">
              <div
                v-for="(object2,k2) in element.kompetensis" :key="k2"
                class="d-flex justify-content-between"
              >
                <span>{{object2.nama}}</span>
              </div>
          </b-modal>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <span>{{element.total_pertemuan}} Pertemuan</span>
          <span>Rp {{element.harga.toLocaleString()}}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "@/service/axios";
export default {
  data: () => {
    return {
      ProgramKursus: [],
      loading: false,
    };
  },
  mounted() {
    this.getProgramKursus();
  },
  methods: {
    getProgramKursus() {
      this.loading = true;
      axios.get("/frontoffice/programkursus").then((response) => {
        this.ProgramKursus = response.data.data;
        if (response.data.success == true) {
          this.loading = false;
        }
      });
    },
    hps () {
      confirm ('Apakah anda ingin menghapus program ini?')
    }
  },
};
</script>

<style>
#loading {
  width: 5rem;
  height: 5rem;
}
.dropdown-menu {
  cursor: pointer;
}
</style>