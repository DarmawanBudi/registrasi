<template>
  <div id="section-tambah-program-kursus">
    <!-- title -->
    <title-content viewTitle="Tambah Program Kursus" />

    <!-- body -->
    <div class="row">
      <div class="col-md-4">
        <!-- nama program kursus -->
        <div class="form-group">
          <label for="nama_program_kursus">Nama Program Kursus</label>
          <input type="text" name id="nama_program_kursus" class="form-control" />
        </div>

        <!-- kuota program kursus -->
        <div class="form-group">
          <label for="kuota_program_kursus">Kuota</label>
          <input type="text" name id="kuota_program_kursus" class="form-control" />
        </div>

        <!-- total pertemuan program kursus -->
        <div class="form-group">
          <label for="total_pertemuan_program_kursus">Total Pertemuan</label>
          <input type="text" name id="total_pertemuan_program_kursus" class="form-control" />
        </div>

        <!-- harga program kursus -->
        <div class="form-group">
          <label for="harga_program_kursus">harga</label>
          <input type="text" name id="harga_program_kursus" class="form-control" />
        </div>

        <fieldset class="border p-3">
          <legend class="w-auto d-flex justify-content-between">
            <small>Kompetensi standar</small>
          </legend>

          <div class="input-group">
            <input type="text" class="form-control" />
            <div class="input-group-append">
              <button @click="tambahInputKompetensi()" class="btn btn-sm" type="button">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <!-- dynamic component -->

          <div class="input-group mt-3" v-for="(input,index) in inputProgramKursus" :key="index">
            <input
              :id="`input-${index}`"
              :placeholder="`kompetensi ke ${index + 2}`"
              type="text"
              class="form-control"
            />
            <div class="input-group-append">
              <button @click="removeInputKompetensi(index)" class="btn btn-sm" type="button">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
            <!-- end -->
          </div>
        </fieldset>
      </div>

      <div class="col-md-8">
        <div class="row">
          <div class="card-columns">
            <div class="card" v-for="i in 10" :key="i" >
              <div class="media p-3">
                <img src="@/assets/default.png" alt class="rounded-circle" width="50" height="50" />
                <div class="media-body d-flex justify-content-around">
                  <!-- text -->
                  <div class="border-right px-4">
                    <h5 class="title-content">Aji Syahroni</h5>
                    <span class="badge badge-pill badge-info">wdp</span>
                  </div>
                  <!-- radio -->
                  <div class="d-flex align-items-center px-3">
                    <input style="width: 2rem; height: 2rem;" type="checkbox" class name id />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <button class="btn btn-block">Tambah</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputProgramKursus: [],
    };
  },
  methods: {
    tambahInputKompetensi() {
      this.inputProgramKursus.push({});
    },
    removeInputKompetensi(index) {
      this.inputProgramKursus.splice(index, 1);
    },
  },
};
</script>

<style>
</style>
