import React from 'react'

const About = () => {
  return (
    <section id="about" >
        <div className="about-container">
        <div id="image-container">
            <img src="https://i.imgur.com/qg7Jrsw.png" alt="headshot"/>
        </div>
        <div id="about-text">
            <h2 className="h2">I'm a full stack developer with a passion for writing creative, clean, and thoughtful code.</h2>
            <p>I have recently graduated from a Bootcamp through General Assembly where I learned how to code using HTML, CSS, JavaScript, React, Express, EJS, Mongoose, and Python. Before this, I did about 3 months of self-study, including Codecademy's HTML and CSS courses. I am currently studying Flutter with Dart in a Development Bootcamp! As you can imagine, I am learning something new everyday and am excited to continue this journey. </p>
            <h4>Prior to entering the tech world . . .</h4>
            <p>I was a flight attendant and a cosmetologist. Both careers were very fulfilling and I was able to serve others, which I love! </p>
            <h4>When I'm not coding . . .</h4>
            <p>I love to travel, cook, and most of all keep up with my physical fitness!.</p>
        </div>
        </div>
    </section>
  )
}

export default About;