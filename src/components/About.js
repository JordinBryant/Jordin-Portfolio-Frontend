import React from 'react'

const About = () => {
  return (
    <section id="about" >
        <div className="about-container">
        <div id="image-container">
            <img src="https://i.imgur.com/qg7Jrsw.png" alt="headshot"/>
        </div>
        <div id="about-text">
            <h2 className="h2">Hi, I'm Jordin 👋  </h2>
            <p>I have recently graduated from a Bootcamp through General Assembly where I learned fullstack web development. Before this, I did about 3 months of self-study, including Codecademy's HTML and CSS courses. I'm currently studying Flutter with Dart in a Development Bootcamp! As you can imagine, I am learning something new everyday and am excited to continue this journey. </p>
            <h4>Prior to entering the tech world . . .</h4>
            <p>I've worn many different hats, as a Flight Attendant, Marketing Representative and a Cosmetologist. These experiences were very fulfilling and I was able to serve others, which I love!  I believe a team-focused and transparent communication style, as well as the ability to thrive and adapt in resource-strapped environments also make me a great developer  </p>
            <h4>When I'm not coding...</h4>
            <p>I love to travel around the US, cooking French cuisine, and most of all keeping up with my physical fitness via pilates and weight training.</p>
        </div>
        </div>
    </section>
  )
}

export default About;