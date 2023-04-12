import React from 'react';

const About = () => {
  return (
    <article className="post">
      <div>
        <img
          className="absolte-bg"
          src="/profile2.jpeg"
          style={{ width: 750 }}
        />
      </div>
      <div className="post_container">
        <span
          className="post_author"
          style={{ fontFamily: 'Arrial, Helvatica, sans-serif' }}
        >
          Mochammad Iqbal Saputra
        </span>
        <div className="post_content">
          <header>
            <time className="post_time">8 Apr 2023</time>
            <h1 className="post_header">
              <span>Wellcome To </span>
              <span>my Website</span>
            </h1>
          </header>
          <p className="post_text">
            Hello My name is Mochammad Iqbal Saputra. I am an active student at
            the Indonesian Institute of Technology in 2020. I have experience as
            a Mobile Android with Kotlin. I also have an interest in having a
            career as a Mobile Android Engineer
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
