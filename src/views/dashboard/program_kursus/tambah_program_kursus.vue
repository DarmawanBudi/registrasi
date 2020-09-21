<template>
  <div class="container">
    <h2 class="mt-3">Tambah Program Kursus</h2>
    <div class="mt-5">
      <b-input-group class="mb-3">
        <b-input-group-prepend is-text>
          <b-icon icon="book"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="text" v-model="program_kursus" placeholder="Masukkan Program kursus"></b-form-input>
      </b-input-group>
      <b-input-group class="mb-3">
        <b-input-group-prepend is-text>
          <b-icon icon="people"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="text" v-model="final_project[0]" placeholder="Masukkan Kompetensi"></b-form-input>
      </b-input-group>

      <b-input-group class="mb-3">
        <b-input-group-prepend is-text>
          <b-icon icon="kanban"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="number" v-model="kuota" placeholder="Masukkan jumlah Kuota"></b-form-input>
      </b-input-group>
      
      <b-input-group class="mb-3">
        <b-input-group-prepend is-text>
          <b-icon icon="person-lines-fill"></b-icon>
        </b-input-group-prepend>
        {{instruktur}}
        <b-form-select v-model="instruktur" :options="options">
          <template v-slot:first>
            <b-form-select-option :value="null" disabled>Masukkan Instruktur</b-form-select-option>
          </template>
        </b-form-select>
      </b-input-group>
      <b-input-group class="mb-3">
        <b-input-group-prepend is-text>
          <b-icon icon="calendar2-range-fill"></b-icon>
        </b-input-group-prepend>
        <b-form-input
          type="number"
          v-model="total_pertemuan"
          placeholder="Masukkan jumlah Pertemuan"
        ></b-form-input>
      </b-input-group>
      <b-input-group class="mb-3">
        <b-input-group-prepend is-text>
          <b-icon icon="cash"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="number" v-model="harga" placeholder="Masukkan jumlah Biaya"></b-form-input>
      </b-input-group>

      <!-- <fieldset class="border p-3">
        <legend class="w-auto d-flex justify-content-between">
          <small>Kompetensi</small>
        </legend>
        <b-input-group>
          <b-form-input
            required
            v-model="final_project[0]"
            type="text"
            name="program_kursus"
            id="list_program_kursus"
            class="form-control"
            placeholder="Masukkan Kompetensi 1"
          ></b-form-input>
          <b-input-group-append>
            <button @click="tambahKompetensi()" class="btn btn-sm" type="button">
              <b-icon icon="plus"></b-icon>
            </button>
          </b-input-group-append>
        </b-input-group>

        <b-input-group class="mt-3" v-for="(element,index) in inputProgramKursus" :key="index">
          <b-form-input
            v-model="input[`${index+1}`]"
            type="text"
            :id="`element-${index+2}`"
            :placeholder="`Masukkan Kompetensi ${index + 2}`"
            class="form-control"
          />
          <b-input-group-append>
            <button @click="hapusKompetensi(index)" class="btn btn-sm" type="button">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </b-input-group-append>
        </b-input-group>
      </fieldset> -->

      <!-- <b-form-group label="Instruktur">
        <b-form-checkbox-group
          v-model="instruktur"
          class="mr-5 my-2"
          v-for="(element,index) in instruktur" :key="index"
        >
          <b-form-checkbox 
            class="d-flex justify-content-start"
            :value="element.id"
          >{{element.nama}}</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->
      
      <div class="text-center mt-5">
        <b-button class="mr-5 mt-2" @click="postProgram()">Simpan</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/service/axios";
export default {
  data: () => {
    return {
      program_kursus: null,
      kuota: null,
      total_pertemuan: null,
      harga: null,
      final_project: [],
      instruktur: [],
      options: [{ value: null, text: "Please select an option" }],
      file: null,
      file2: null,
      inputProgramKursus: [],
      input: [],
    };
  },
  mounted() {
    this.getInstrutur();
  },
  methods: {
    // getInstrutur() {
    //   // let id = this.$route.params.id;
    //   this.loading = true;
    //   axios.get("/frontoffice/instruktur").then((response) => {
    //     if (response.data.success == true) {
    //       this.instruktur = response.data.data;
    //     }
    //   });
    // },
    
    getInstrutur() {
      axios.get("/frontoffice/instruktur").then((response) => {
        if (response.data.success == true) {
          this.instruktur = response.data.data;
          this.options = response.data.data;

          let program = [];
          this.options.forEach((element) => {
            program.push({
              value: element.id,
              text: element.nama,
            });
          });
          // console.log(program);
          this.options = program;
        }
      });
    },
    postProgram() {
      let kompetensi = [];
      this.final_project.forEach((Element) => {
        kompetensi.push({
          nama: Element,
        });
      });

      let pengajar = [
        {
          id_instruktur:this.instruktur
        }
      ];
      // this.instruktur.forEach((Element) => {
      //   pengajar.push({
      //     id_instruktur: Element,
      //   });
      // });
console.log(this.instruktur);
      let object = {
        program_kursus: this.program_kursus,
        kuota: this.kuota,
        total_pertemuan: this.total_pertemuan,
        harga: this.harga,
        final_project: kompetensi,
        instruktur: pengajar,
      };
      axios
        .post("/frontoffice/programkursus/store", object)
        .then((response) => {
          if (response.data.success == true) {
            alert("aaaaaaa");
            this.$router.push({ name: "program_kursus" });
          }
        });
    },
    tambahKompetensi() {
      this.inputProgramKursus.push({});
    },
    hapusKompetensi(index) {
      this.inputProgramKursus.splice(index, 1);
    },
  },
};
</script>

<style>
</style>