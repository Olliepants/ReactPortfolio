import React, { Component } from 'react';
import './App.css';
//import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Person from './Person/Person'

class App extends Component {
  state = {


  }



  render() {


    return (
      <div className="App">


        <div className="bgimg-1">
          <div className="caption">
            <h1  >Oliver Lopez</h1>
            <span style={{ fontSize: '20 px' }}>Los Angeles based Software Developer</span>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            padding: '30px 40px',
            marginRight: '150px',
            marginLeft: '150px'
          }}>
            <h3>Bio</h3>
            <p style={{
              padding: '10px 20px',
              textalign: 'justify',

            }}>
              A creative and motivated individual with experience in Node web development.
               I have experience building progressive web applications with HTML, CSS, JavaScript, AngularJS, ReactJS, and NodeJS for RESTful API’s where necessary.
               Software Developer principles and SRUM/AGILE methodologies with a high commitment to quality. Strong communication skills, analytical problem solving skills,
               who adapts to unfamiliar software environments and languages. Feel free to contact me to arrange an interview.
                I would love to speak with you about how I could contribute!Fluent in English, Spanish and Portuguese.
          </p>

          </div>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border"
              style={{
                backgroundcolor: 'transparent',
                fontSize: '10px',
                color: '#f7f7f7'
              }}>Full Stack Web Developer </span>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            padding: '40px 80px',
            textalign: "justify"
          }}>
            <h2 > Skills    </h2>

            <p style={{
              padding: '10px 20px',
              textalign: 'justify',

            }}>Rapidly prototyped a variety of full-stack features, using both ReactJS
                                                                                                  and AngularJS components, Angular UI Router, RESTful APIs, Express and MongoDB.
                                                                                                  Leveraged Express routing stacks to cleanly enforce authentication,
                                                                                                  model validation, and authorization.
                                                                                                  Adhered to team and industry standards with respect to API design,
                                                                                                  ES6 coding style, CSS selector conventions, and Promise handling.
                                                                                                  Participated in daily standups, weekly client demonstrations and
                                                                                                  feedback meetings, code reviews, technical knowledge-sharing
                presentations, and product ideation. </p>

          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">
            <span className="border" style={{
              backgroundcolor: 'transparent',
              fontSize: '10px',
              color: '#f7f7f7'
            }}>Tech Stack</span>
          </div>
        </div>

        <div>
          <div style={{ position: 'relative' }}>
            <div style={{

              backgroundcolor: '#282E34',
              padding: '50px 80px',
              textalign: 'justify'
            }}>

              <h5>Front end:</h5>
              <p> JavaScript / ES6,
ReactJS, AngularJS, JQuery,
Bootstrap, Angular UI Router,
Moment.js, Summernote,
Select2, Constraint Validation
API, Ajax, HTML5, CSS3
Middle tier: Node.js, Express,
Joi validation, typings, Gulp,
Babel, Browserify, MongoDB
Driver, Promise, Heroku.
</p>
              <h5>Backend:</h5>
              <p> MongoDB, MLab
              cloud, AWS S3
              Third-party APIs: SendGrid,
              npm / bower, Google Maps
              Other technical: git, bash,
              Agile / Scrum, Visual Studio
              Code, Robo3T, Visual Studio
              Team Foundation Server,
GitHub, Chrome D</p>
            </div>
          </div>
        </div>

        <div className="bgimg-1">
          <div className="caption">
            <div className="caption">

              <span className="border" style={{
                backgroundcolor: 'transparent',
                fontSize: '30px',
                color: '#f7f7f7'
              }}><a href="https://www.linkedin.com/in/o-lopez/">LinkedIn</a>
                <a href="mailto:olopez32br@gmail.com">Email</a>
                <a href="https://github.com/Olliepants">GitHub</a></span>
            </div>
          </div>
        </div>

        <div>
        </div>
      </div>



    );
  }
}

export default App;
