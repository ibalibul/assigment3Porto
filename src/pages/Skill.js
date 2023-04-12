import React from 'react';

class Skill extends React.Component {
  render() {
    return (
      <section className="herobw">
        <div className="container">
          <div className="row">
            <div class="col align-self-center">
              <h2 className="mb-3">My Skill</h2>
              <p>Front End Developer</p>
              <ul>
                <li>Html dan Css</li>
                <li>React Js</li>
                <li>Kotlin Engineer</li>
                <li>Git Version Controler</li>
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

export default Skill;
