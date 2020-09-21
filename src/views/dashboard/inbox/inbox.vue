<template>
  <div class="container">
    <h2 class="mt-3 mb-5">Pendaftar</h2>
    <!-- <div class="d-flex justify-content-center align-items-center">
      <div class="spinner-border text-primary" role="status" v-if="loading==true" id="loading">
        <span class="sr-only">Loading...</span>
      </div>
    </div> -->
    <!-- <div class="card border-info mb-4">
      <div class="card-header bg-light">
        <h5>01 September 2020</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-10">
            <strong>
              <b-icon icon="person-square"></b-icon> Darmawan
            </strong>
            <br />
            <strong>
              <b-icon icon="envelope"></b-icon> darmawan@gmail.com
            </strong>
          </div>
          <div class="col-2 mt-2 text-center">
            <b-button pill variant="outline-info" :to='{name:"detail_inbox"}'>Detail</b-button>
          </div>
        </div>
      </div>
    </div> -->
    <div v-for="(element,index) in siswa_pending" :key="index">
    <div class="card border-info mb-4" v-for="(object,k) in element.pendaftarans" :key="k">
      <div class="card-header bg-light">
        <h5>01 September 2020</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-10">
            <strong>
              <b-icon icon="person-square"></b-icon> {{element.nama}}
            </strong>
            <br />
            <strong>
              <b-icon icon="envelope"></b-icon> {{element.email}}
            </strong>
            <br />
            <strong>
              <b-icon icon="envelope"></b-icon> {{object.programkursuses.nama}}
            </strong>
          </div>
          <div class="col-2 mt-2 text-center" >
            <b-button pill variant="outline-info" :to="{name:'detail_inbox',params:{id_siswa_pending:object.id}}">Detail</b-button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <!-- <div class="card border-info mb-4">
      <div class="card-header bg-light">
        <h5>01 September 2020</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-10">
            <strong>
              <b-icon icon="person-square"></b-icon> Sulistyo
            </strong>
            <br />
            <strong>
              <b-icon icon="envelope"></b-icon> sulistyo@gmail.com
            </strong>
          </div>
          <div class="col-2 mt-2 text-center">
            <b-button pill variant="outline-info" :to='{name:"detail_inbox"}'>Detail</b-button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "@/service/axios";
export default {
  data:() => {
    return {
      siswa_pending:[],
    }
  },
  mounted() {
    this.getSiswa();
  },
  methods: {
    getSiswa() {
      axios.get("/frontoffice/siswa/pendaftaran/pending").then((response) => {
        console.log(response);
        if (response.data.success == true) {
          this.siswa_pending = response.data.data
        }
      })
    }
  }
};
</script>

<style>
</style>