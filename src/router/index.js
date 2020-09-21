import Vue from 'vue'
import VueRouter from 'vue-router'
import panel from '../views/dashboard/panel.vue'
import login from '../views/login.vue'
import home from '../views/home.vue'
import registrasi from '../views/registrasi.vue'
import program_kursus from '../views/dashboard/program_kursus/program_kursus.vue'
import tambah_program_kursus from '../views/dashboard/program_kursus/tambah_program_kursus.vue'
import edit_program_kursus from '../views/dashboard/program_kursus/edit_program_kursus.vue'
import instruktur from '../views/dashboard/instruktur.vue'
import dashboard from '../views/dashboard/dashboard.vue'
import jadwal from '../views/dashboard/jadwal.vue'
import daftar_absensi from '../views/dashboard/absensi/daftar_absensi.vue'
import absensi from '../views/dashboard/absensi/absensi.vue'
import detail_siswa from '../views/dashboard/siswa/detail_siswa.vue'
import profile_fo from '../views/dashboard/profile_fo.vue'
import siswa from '../views/dashboard/siswa/siswa.vue'
import nilai_siswa from '../views/dashboard/siswa/nilai_siswa.vue'
import tambah_siswa from '../views/dashboard/siswa/tambah_siswa.vue'
import inbox from '../views/dashboard/inbox/inbox.vue'
import detail_inbox from '../views/dashboard/inbox/detail_inbox.vue'
import test from '../views/dashboard/test.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/registrasi',
      name: 'registrasi',
      component: registrasi
    },
  {
    path: '/panel',
    name: 'panel',
    component: panel,
    children: [
    {
      path: 'inbox',
      name: 'inbox',
      component: inbox
    },
    {
      path: 'detail_inbox/:id_siswa_pending',
      name: 'detail_inbox',
      component: detail_inbox
    },
    {
      path: 'program_kursus',
      name: 'program_kursus',
      component: program_kursus
    },
    {
      path: 'edit_program_kursus',
      name: 'edit_program_kursus',
      component: edit_program_kursus
    },
    {
      path: 'tambah_program_kursus',
      name: 'tambah_program_kursus',
      component: tambah_program_kursus
    },
    {
      path: 'instruktur',
      name: 'instruktur',
      component: instruktur
    },
    {
      path: 'dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: 'jadwal',
      name: 'jadwal',
      component: jadwal
    },
    {
      path: 'daftar_absensi',
      name: 'daftar_absensi',
      component: daftar_absensi
    },
    {
      path: 'absensi/:id_program_kursus/:id_jadwal',
      name: 'absensi',
      component: absensi
    },
    {
      path: 'detail_siswa/:id_siswa',
      name: 'detail_siswa',
      component: detail_siswa
    },
    {
      path: 'profile_fo',
      name: 'profile_fo',
      component: profile_fo
    },
    {
      path: 'siswa',
      name: 'siswa',
      component: siswa
    },
    {
      path: 'nilai_siswa',
      name: 'nilai_siswa',
      component: nilai_siswa
    },
    {
      path: 'tambah_siswa',
      name: 'tambah_siswa',
      component: tambah_siswa
    },
    {
      path: 'test',
      name: 'test',
      component: test
    },
  ]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
