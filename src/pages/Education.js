import React from 'react';

class Education extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ fontWeight: 900, marginLeft: 450 }}>My Education </h1>
        <div class="row mt-5 mb-3 ">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Informatics - Bechelor's Degree</h5>
                <p class="card-text">
                  Institut Teknologi Indonesia <br /> Juli 2020 - PRESENT
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-1">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  Become a Master Android Enginnering <b /> From Zero To Hero
                  Kampus Merdeka Binar Academy
                </h5>
                <p class="card-text">2020 Agustus - Desember </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
