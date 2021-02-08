import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/FPA33-header.png"
        height="85"
        width="250"
        alt="FPA33"
      />
      <h1>DIREKTORI FPA 33 - ARSIP IAIN BONE</h1>
      <h2>
        Sumbe Informasi Terbuka Untuk Pengelola Arsip IAIN Bone-
      </h2>

      <Features />

      <div className="explanation">
        <p>
Selamat Datang di laman Web (Belum) Resmi Forum Pengelola Arsip IAIN Bone. Web ini dikelola secara independen oleh Pengelola Arsip IAIN Bone dan diharapkan dalam beberapa bulan kedepan dapat memiliki subdomain dan email resmi dari iain-bone.ac.id👏 dan tentunya dikelola secara profesional.
Walau web ini memanfaatkan domain, hosting dan template yang serba gratis, namun tidak murahan, tetap selektif dan memaksimalkan segala sumber daya yang ada , dan hasilnya ?! Seperti yang anda lihat 😊. Jika ingin berterimakasih, tentunya First, kepada Allah SWT, atas segala nikmatnya. Second Blogger dengan segala gratisannya. Third Template dari igniel.com yang luar biasa smooth dan keren. Terimakasih.
Selanujutnya Apa ?
        </p>

        <p>
Tentunya butuh energi yang tidak sedikit, disamping SDM. Namun kami memiliki visi untuk mewujudkan Pengelolaan Kearsipan yang inovatif dan kreatif di lingkungan IAIN Bone, dan dalam prosesnya membutuhkan segala bantuan yang ada, dan kehadiran Web ini dalam visi kami memiliki peranan penting, sebagai jembatan, sebagai wadah informasi kegiatan kearsipan, sebagai komunitas dan segala kemungkinan perkembangannya, yang kami pun sangat antusisa melihatnya.
        </p>
      </div>
    </div>
  </>
)
