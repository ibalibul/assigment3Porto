// const Experience = () => {
//     return (
//         <div>
//             <h1>This is Experience</h1>
//         </div>
//     )
// }

import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <section className="herobw">
        <div className="container">
          <div className="row">
            <div class="col align-self-center">
              <h2 className="mb-3">My Experience</h2>
              <h3>INTERN SCHOOL</h3>
              <p>IT Support(Maret 2018)</p>
              <ul>
                <li>
                  Bertanggung jawab penuh atas Install Ulang Komputer dan Leptop
                  User, Merakit PC Komputer
                </li>
                <li>
                  Mengecek Hardisk Mengunakan Hiren 15, Membuat kabel jaringan
                </li>
              </ul>
              <h4>
                KETUA DIVISI KEROHANIAN HMIF ( Himpunan Mahasiswa Informatika )
              </h4>
              <ul>
                <p>Membuat Proker ( Program kerja Yasinan Sebulan Sekali )</p>
                <li>Membuat Proker ( Program kerja Yasinan Sebulan Sekali )</li>
              </ul>
              <h4>
                Berkolaborasi Dengan BackEnd Developer (2022 Agustus - Desember){' '}
              </h4>
              <ul className="mb-5">
                <li>
                  Membuat dan berkolaborasi Project Aplikasi Boking Tiket
                  Pesawat Mengunakan API yang di buat oleh BackEnd Developer,
                  Slacing UI pada Aplikasi, Memahami Retrofit,
                  SharedPreference,DataStore, OOP pada pemograman
                </li>
              </ul>
              <button className="btn btn-warning">Github</button>
            </div>
            <div class="col">
              <img src="/profile2.jpeg" alt="profile" style={{ width: 600 }} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
