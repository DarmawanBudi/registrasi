<template>
  <div class="container">
    <div class="my-3 text-center">
      <h2>FORMULIR PENDAFTARAN KURSUS ALFABANK YOGYAKARTA</h2>
      <br />
      <p>
        Jika Anda sedang mencari tempat kursus komputer yang tepat untuk meningkatkan kemampuan dan sertifikasi,
        jangan bingung dan ragu untuk bergabung dengan ALFABANK YOGYAKARTA yang merupakan tempat Kursus Komputer dan
        Bahasa Asing terbaik di Kota Yogyakarta.
      </p>
      <br />
    </div>

    <form @submit.prevent="postReg">

      <!-- email -->
      <div class="mb-5 form-group row">
        <label class="col-md-3">Email</label>
        <div class="col-md-9">
          <input
            type="email"
            class="form-control"
            placeholder="Masukkan Email"
            title="masukkan email anda"
            v-model="email"
          />
        </div>
      </div>
      <div class="mb-3">
        <strong>IDENTITAS DIRI</strong>
        <br />
        <small>
          Harap diisi dengan BENAR sesuai dengan ijazah terakhir dan lengkap termasuk gelar. Data ini digunakan
          untuk setiap SERTIFIKAT yang Anda peroleh.
        </small>
      </div>

      <!-- nama lengap -->
      <div class="form-group row">
        <label class="col-md-3">Nama Lengkap</label>
        <div class="col-md-9">
          <input
            type="text"
            class="form-control"
            placeholder="Masukkan Nama Lengkap"
            title="masukkan nama lengkap anda"
            v-model="nama"
          />
        </div>
      </div>

      <!-- jenis kelamin -->
      <div class="form-group row">
        <label class="col-md-3">Jenis Kelamin</label>
        <div class="col-md-9">
          <input type="radio" v-model="jenis_kelamin" id="laki-laki" value="laki-laki" /> laki-laki
          <input type="radio" v-model="jenis_kelamin" id="perempuan" value="perempuan" /> perempuan
        </div>
      </div>

      <!-- tempat lahir -->
      <div class="form-group row">
        <label class="col-md-3">Tempat Lahir</label>
        <div class="col-md-9">
          <input
            type="text"
            class="form-control"
            placeholder="Masukkan Tempat Lahir"
            title="masukkan tempat lahir anda"
            v-model="tempat_lahir"
          />
        </div>
      </div>

      <!-- tanggal lahir -->
      <div class="form-group row">
        <label class="col-md-3">Tanggal lahir</label>
        <div class="col-md-9">
          <input type="date" v-model="tanggal_lahir" class="form-control" />
        </div>
      </div>

      <!-- agama -->
      <div class="form-group row">
        <label class="col-md-3">Agama</label>
        <div class="col-md-9">
          <select class="form-control" v-model="agama">
            <option disabled value>Pilih Salah Satu</option>
            <option value="Islam">Islam</option>
            <option value="Krisren">Kristen</option>
            <option value="Katolik">Katolik</option>
            <option value="Hindu">Hindu</option>
            <option value="Buddha">Buddha</option>
            <option value="Khonghucu">Khonghucu</option>
          </select>
        </div>
      </div>

      <!-- nama otang tua -->
      <div class="form-group row">
        <label class="col-md-3">Nama Orang Tua (Ibu)</label>
        <div class="col-md-9">
          <input
            type="text"
            class="form-control"
            placeholder="Masukkan Nama Orang Tua"
            title="masukkan nama orang tua anda"
            v-model="nama_ortu"
          />
        </div>
      </div>

      <!-- foto -->
      <div class="form-group row">
        <label class="col-md-3">Foto</label>
        <div class="ml-5 col-8">
          <b-form-file  placeholder="Masukkan Foto" @change="uploadImage"></b-form-file>
        </div>
      </div>

      <div class="mt-5">
        <strong>Tempat Tinggal Saat ini</strong>
      </div>

      <!-- alamat -->
      <div class="form-group row">
        <label class="col-md-3">Alamat</label>
        <div class="col-md-9">
          <textarea
            name="txtalamat"
            id
            cols="30"
            rows="3"
            class="form-control"
            placeholder="Masukkan Alamat"
            title="masukkan alamat anda"
            v-model="alamat_lengkap"
          ></textarea>
        </div>
      </div>

      <!-- kabupaten -->
      <div class="form-group row">
        <label class="col-md-3">Kabupaten</label>
        <div class="col-md-9">
          <input
            type="text"
            class="form-control"
            placeholder="Masukkan Kabupaten"
            title="masukkan kabupaten anda"
            v-model="kota"
          />
        </div>
      </div>

      <!-- provinsi -->
      <div class="form-group row">
        <label class="col-md-3">Provinsi</label>
        <div class="col-md-9">
          <input
            type="text"
            class="form-control"
            placeholder="Masukkan Provinsi"
            title="masukkan provinsi anda"
            v-model="provinsi"
          />
        </div>
      </div>

      <!-- no telepon -->
      <div class="form-group row">
        <label class="col-md-3">No Telepon</label>
        <div class="col-md-9">
          <input
            type="number"
            class="form-control"
            placeholder="Masukkan No Telepon"
            title="masukkan no telepon anda"
            v-model="no_telp"
          />
        </div>
      </div>

      <!-- no telepon orang tua -->
      <div class="form-group row">
        <label class="col-md-3">No Telepon Orang Tua</label>
        <div class="col-md-9">
          <input
            type="number"
            class="form-control"
            placeholder="Masukkan No Telepon Orang Tua"
            title="masukkan no telepon orang tua anda"
            v-model="no_telp_ortu"
          />
        </div>
      </div>

      <!-- akun instagram -->
      <div class="form-group row">
        <label class="col-md-3">Akun Instagram</label>
        <div class="col-md-9">
          <input
            type="text"
            class="form-control"
            placeholder="Masukkan Akun Instagram"
            title="masukkan akun instagram anda"
            v-model="instagram"
          />
        </div>
      </div>

      <!-- status sekolah  -->
      <div class="form-group row">
        <label class="col-md-3">Status Sekolah</label>
        <div class="col-md-9">
          <select class="form-control" v-model="status_sekolah">
            <option disabled value>Pilih Salah Satu</option>
            <option value="sekolah">Masih Sekolah/Kuliah</option>
            <option value="lulus_sekolah">Lulus Sekolah</option>
            <option value="lulus_kuliah">Lulus Kuliah</option>
            <option value="bekerja">Sudah Bekerja</option>
          </select>
        </div>
      </div>

      <!-- asal sekolah  -->
      <div class="form-group row">
        <label class="col-md-3">Asal Sekolah/Kampus</label>
        <div class="col-md-9">
          <input
            type="text"
            class="form-control"
            placeholder="Masukkan Asal Sekolah/Kampus"
            title="masukkan asal sekolah/kampus anda"
            v-model="asal_sekolah"
          />
        </div>
      </div>

      <!-- pekerjaan  -->
      <div class="form-group row">
        <label class="col-md-3">Pekerjaan</label>
        <div class="col-md-9">
          <select class="form-control" v-model="pekerjaan">
            <option disabled value>Pilih Salah Satu</option>
            <option value="Pelajar/Mahasiswa">Pelajar/Mahasiswa</option>
            <option value="Karyawan Swasta">Karyawan Swasta</option>
            <option value="Pegawai Negeri">Pegawai Negeri</option>
            <option value="TNI/POLRI">TNI/POLRI</option>
            <option value="Wirausaha">Wirausaha</option>
            <option value="Freelance">Freelance</option>
            <option value="Belum Bekerja">Belum Bekerja</option>
            <option value="Yang lain">Yang lain</option>
          </select>
        </div>
      </div>

      <div class="mt-5">
        <strong>PROGRAM STUDI PILIHAN</strong>
      </div>

      <!-- model pembelajaran  -->
      <div class="form-group row">
        <label class="col-md-3">Model Pembelajaran</label>
        <div class="col-md-9">
          <input type="radio" v-model="model_pembelajaran" id="offline" value="offline" /> offline
          <input type="radio" v-model="model_pembelajaran" id="online" value="online" /> online
        </div>
      </div>

      <!-- jenis program  -->
      <div class="form-group row">
        <label class="col-md-3">Jenis Program</label>
        <div class="col-md-9">
          <select class="form-control" v-model="jenis_program">
            <option disabled value>Pilih Salah Satu</option>
            <option value="Program 1Th">Program 1Th</option>
            <option value="Intensif">Intensif</option>
            <option value="Privat">Privat</option>
            <option value="Studi Kasus">Studi Kasus</option>
            <option value="Sertifikasi">Sertifikasi</option>
          </select>
        </div>
      </div>

      <!-- program studi  -->
      <div class="form-group row">
        <label class="col-md-3">Program Studi</label>
        <div class="col-md-9">
          <select class="form-control" v-model="programkursus">
            <option disabled value>Pilih Salah Satu</option>
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
          </select>
        </div>
      </div>

      <!-- jam pilihan  -->
      <div class="form-group row">
        <label class="col-md-3">Jam Pilihan</label>
        <div class="col-md-9 md-form md-outline">
          <input
            type="time"
            id="default-picker"
            v-model="jam"
            class="form-control"
            placeholder="Select time"
          />
        </div>
      </div>

      <!-- mulai prndidikan -->
      <div class="form-group row">
        <label class="col-md-3">Mulai Pendidikan</label>
        <div class="col-md-9">
          <input type="date" v-model="mulai_pendidikan" class="form-control" />
        </div>
      </div>

      <!-- info dari  -->
      <div class="form-group row">
        <label class="col-md-3">Informasi Dari</label>
        <div class="col-md-9">
          <select class="form-control" v-model="informasi_dari">
            <option disabled value>Pilih Salah Satu</option>
            <option value="Alumni Alfabank">Alumni Alfabank</option>
            <option value="Website">Website</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Brosur">Brosur</option>
            <option value="Teman">Teman</option>
            <option value="Keluarga">Keluarga</option>
            <option value="Media Elektronik/Cetak">Media Elektronik/Cetak</option>
            <option value="Presentasi di Sekolah">Presentasi di Sekolah</option>
          </select>
        </div>
      </div>

      <!-- catatan  -->
      <div class="form-group row">
        <label class="col-md-3">Catatan</label>
        <div class="col-md-9">
          <textarea
            cols="30"
            rows="5"
            class="form-control"
            placeholder="Masukkan Catatan"
            title="masukkan catatan anda"
            v-model="catatan"
          ></textarea>
        </div>
      </div>
      
      <div class="mt-5">
        <strong>Ketentuan dan Kebijakan</strong>
        <small>
          <p>
            1. Peserta wajib mengikuti kegiatan kursus sesuai dengan kelas yang diikuti sejumlah
            pertemuan yang ditentukan.
          </p>
          <p>
            2. Pelaksanaan kegiatan kursus dimulai sesuai dengan jadwal yang telah ditentukan,
            tetapi apabila terdapat perubahan akan diumumkan / diberitahukan kepada peserta.
          </p>
          <p>
            3. Biaya Pendidikan bisa diangsur 2 kali dengan ketentuan membayar 50% sebelum kelas
            berjalan dan pelunasan saat hari pertama masuk/ kelas berjalan.
          </p>
          <p>
            4. Jika Kuota peserta untuk kelas Ideal ( 5 orang ) belum terpenuhi, maka Jadwal Mulai
            akan di pending / ditunda 1 minggu dari Jadwal awal dan akan diinformasikan kepada
            calon peserta yang sudah mendaftar. Jika setelah penundaan, tapi kelas belum bisa
            memenuhi minimal 2 orang maka kelas akan dijalankan dengan metode pemadatan
            materi dengan jumlah pertemuan yang di sesuiakan lagi tanpa mengurangi materi.
          </p>
          <p>
            5. Apabila peserta mengundurkan diri, Biaya hanya bisa ditarik 80% dari total bea yang
            sudah dibayarkan.
          </p>
          <p>
            6. Semua Biaya yang telah dibayarkan tidak boleh ditarik kembali dengan alasan apapun,
            tetapi hak untuk mengikuti kursus berlaku selama 2 bulan sejak pembayaran dilakukan /
            jadwal kelas mulai. Bila lebih dari 2 bulan peserta tidak mengikuti kursus maka Hak nya
            akan Hangus. Selain itu, hak ini juga dapat dialihkan kepada orang lain.
          </p>
          <p>7. Permintaan Sertifikat tanpa melalui kursus atau ujian sertifikasi tidak dilayani.</p>
          <p>
            8. Pengambilan Sertfikat dilayani Maks. 4 bulan dari saat kelas berakhir. Jika
            pengambilan lebih dari itu dikenakan biaya Denda administrasi keterlambatan Rp
            50.000,-
          </p>
          <p>9. Hal-hal yang belum tercantum dalam ketentuan ini akan diatur kemudian hari.</p>
        </small>
      </div>
      <div>
        <p>Dengan memilih setuju anda telah membaca dan menyetujui persyaratan & ketentuan</p>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1">
          <strong>Setuju</strong>
        </label>
        <br />
      </div>
      <div class="text-center my-5">
        <input type="submit" value="registrasi" class="btn btn-danger radiusku" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "@/service/axios";
export default {
  data: () => {
    return {
      preview: require("@/assets/default.png"),
      nama: "",
      email: "",
      no_telp: "",
      foto: "",
      alamat_lengkap: "",
      kota: "",
      provinsi: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      nama_ortu: "",
      no_telp_ortu: "",
      instagram: "",
      asal_sekolah: "",
      jam: "",
      mulai_pendidikan: "",
      catatan: "",

      jenis_kelamin: '',
      agama: "",
      status_sekolah: "",
      pekerjaan: "",
      model_pembelajaran: "",
      jenis_program: "",
      programkursus: "",
      informasi_dari: "",
      options: [{ value: null, text: "Please select an option" }],
    };
  },
  mounted() {
    this.getProgramKursus();
  },
  methods: {
    uploadImage(event) {
      this.foto = event.target.files[0];
      this.preview = URL.createObjectURL(event.target.files[0]);
    },
    getProgramKursus() {
      axios.get("/frontoffice/programkursus").then((response) => {
        if (response.data.success == true) {
          this.options = response.data.data;
          this.loading = false;
          let program = [];
          this.options.forEach((element) => {
            program.push({
              value: element.id,
              text: element.nama,
            });
          });
          this.options = program;
        }
      });
    },
    postReg() {
      let form = new FormData();
      form.append("nama", this.nama);
      form.append("email", this.email);
      form.append("no_telp", this.no_telp);
      form.append("foto", this.foto);
      form.append("alamat_lengkap", this.alamat_lengkap);
      form.append("kota", this.kota);
      form.append("provinsi", this.provinsi);
      form.append("tempat_lahir", this.tempat_lahir);
      form.append("tanggal_lahir", this.tanggal_lahir);
      form.append("nama_ortu", this.nama_ortu);
      form.append("no_telp_ortu", this.no_telp_ortu);
      form.append("instagram", this.instagram);
      form.append("asal_sekolah", this.asal_sekolah);
      form.append("jam", this.jam+':00');
      form.append("mulai_pendidikan", this.mulai_pendidikan);
      form.append("catatan", this.catatan);
      form.append("jenis_kelamin", this.jenis_kelamin);
      form.append("agama", this.agama);
      form.append("status_sekolah", this.status_sekolah);
      form.append("pekerjaan", this.pekerjaan);
      form.append("model_pembelajaran", this.model_pembelajaran);
      form.append("jenis_program", this.jenis_program);
      form.append("informasi_dari", this.informasi_dari);
      form.append("programkursus[][id_program_kursus]", this.programkursus);
      axios.post("/frontoffice/siswa/tambah/store", form).then((response) => {
        if (response.data.success == true) {
          alert ('Pendaftaran Berhasil');
          this.$router.push({name:'home'})
        }
      });
    },
  },
};
</script>

<style>
</style>