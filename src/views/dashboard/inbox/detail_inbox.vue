<template>
  <div class="container">
      <form class="mt-5">
          {{siswa.email}}
        <div class="mb-5 form-group row">
            <label class="col-md-3">
                Email
            </label>
            <div class="col-md-9">
                <input type="email" class="form-control" v-model="siswa.siswas.email" placeholder="" title="masukkan email anda">
            </div>
        </div>
        <div class="mb-3">
            <strong>IDENTITAS DIRI</strong><br>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Nama Lengkap
            </label>
            <div class="col-md-9">
                <input type="text" class="form-control" v-model="siswa.siswas.nama">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Jenis Kelamin
            </label>
            <div class="col-md-9">
                <input type="radio" v-model="siswa.siswas.detail_siswas.jenis_kelamin" name="txtkelamin" id="laki-laki" value="laki-laki"> laki-laki
                <input type="radio" v-model="siswa.siswas.detail_siswas.jenis_kelamin" name="txtkelamin" id="perempuan" value="perempuan"> perempuan
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Tempat Lahir
            </label>
            <div class="col-md-9">
                <input type="text" class="form-control" v-model="siswa.siswas.detail_siswas.tempat_lahir">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Tanggal lahir
            </label>
            <div class="col-md-9">
                <input type="date" v-model="siswa.siswas.detail_siswas.tanggal_lahir" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Agama
            </label>
            <div class="col-md-9">
                <select class="form-control">
                    <option>{{siswa.siswas.detail_siswas.agama}}</option>

                </select>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Nama Orang Tua (Ibu)
            </label>
            <div class="col-md-9">
                <input type="text" class="form-control" v-model="siswa.siswas.detail_siswas.nama_ortu">
            </div>
        </div>
              <div class="form-group row">
        <label class="col-md-3">Foto</label>
        <div class="ml-5 col-8">
          <b-img :src="siswa.siswas.foto"></b-img>
        </div>
        </div>
        <div class="mt-5">
            <strong>Tempat Tinggal Saat ini</strong>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Alamat
            </label>
            <div class="col-md-9">
                <textarea name="txtalamat" id="" cols="30" rows="3" class="form-control" v-model="siswa.siswas.alamat_lengkap"></textarea>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Kabupaten
            </label>
            <div class="col-md-9">
                <input type="text" class="form-control" v-model="siswa.siswas.kota">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Provinsi
            </label>
            <div class="col-md-9">
                <input type="text" class="form-control" v-model="siswa.siswas.provinsi">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                No Telepon
            </label>
            <div class="col-md-9">
                <input type="number" class="form-control"  v-model="siswa.siswas.no_telp">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                No Telepon Orang Tua
            </label>
            <div class="col-md-9">
                <input type="number" class="form-control" v-model="siswa.siswas.detail_siswas.no_telp_ortu">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Akun Instagram
            </label>
            <div class="col-md-9">
                <input type="text" class="form-control" v-model="siswa.siswas.detail_siswas.instagram">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Status Sekolah
            </label>
            <div class="col-md-9">
                <select class="form-control">
                    <option >{{siswa.siswas.detail_siswas.status_sekolah}}</option>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Asal Sekolah/Kampus
            </label>
            <div class="col-md-9">
                <input type="text" class="form-control" v-model="siswa.siswas.detail_siswas.asal_sekolah">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Pekerjaan
            </label>
            <div class="col-md-9">
                <select class="form-control">
                    <option>{{siswa.siswas.detail_siswas.pekerjaan}}</option>
                </select>
            </div>
        </div>
        <div class="mt-5">
            <strong>PROGRAM STUDI PILIHAN</strong>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Model Pembelajaran
            </label>
            <div class="col-md-9">
                <input type="radio" v-model="siswa.siswas.detail_siswas.model_pembelajaran" value="offline"> offline
                <input type="radio" v-model="siswa.siswas.detail_siswas.model_pembelajaran" value="online"> online
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Jenis Program
            </label>
            <div class="col-md-9">
                <select class="form-control">
                    <option >{{siswa.siswas.detail_siswas.jenis_program}}</option>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Program Studi
            </label>
            <div class="col-md-9">
                <select class="form-control">
                    <option >{{siswa.programkursuses.nama}}</option>
                </select>
                 
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Jam Pilihan
            </label>
            <div class="col-md-9 md-form md-outline">
                <input type="time" id="default-picker" class="form-control" v-model="siswa.siswas.detail_siswas.jam">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Mulai Pendidikan
            </label>
            <div class="col-md-9">
                <input type="date" class="form-control" v-model="siswa.siswas.detail_siswas.mulai_pendidikan">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Informasi Dari
            </label>
            <div class="col-md-9">
                <select class="form-control">
                    <option>{{siswa.siswas.detail_siswas.mulai_pendidikan}}</option>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-3">
                Catatan
            </label>
            <div class="col-md-9">
                <textarea cols="30" rows="5" class="form-control" v-model="siswa.siswas.detail_siswas.catatan"></textarea>
            </div>
        </div>
        <div class="text-center my-5">
            <button type="button" @click="konfirmasi" class="btn btn-primary">Konfirmasi</button>
        </div>
    </form>
  </div>
</template>

<script>
import axios from "@/service/axios";
export default {
  data:() => {
    return {
      siswa:[],
    }
  },
  mounted() {
    this.getSiswa();
  },
  methods: {
    getSiswa() {
        let id = this.$route.params.id_siswa_pending;
        axios.get("/frontoffice/siswa/pendaftaran/pending/" + id).then((response) => {
        if (response.data.success == true) {
          this.siswa = response.data.data
          console.log(this.siswa);
        }
      })
    },
    konfirmasi() {
        let id = this.$route.params.id_siswa_pending;
        axios.put("/frontoffice/siswa/toaktif/" + id).then((response) => {
            console.log(response);
            alert ('konfirmasi berhasil')
            this.$router.push({name:'inbox'})
        })
    }
  }
};
</script>

<style>

</style>