import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import './profile.css';

const Profile = () => {
  return (
    <div className="ProfilePage">
      <Card style={{ width: '100%', marginBottom: 80 }}>
        <Card.Body>
          <Card.Title style={{ fontSize: 28, fontWeight: 'bold', }}>Profile</Card.Title>
          <div className="MyCV">

            <div className="Contact">
              <h3 style={{ textAlign: 'center' }}>{`Itsara Nulor`}</h3>
              <div className="MyInfo">
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                  <p>62/4 Aspire Erawan Tower B, Sukhumvit Rd, Pak Nam, Mueang Samut Prakan, Samut Prakan 10270</p>
                  <p>Phone: 09-4593-8220  Email: itsara.nlr@gmail.com</p>
                  <p>GitHub: github.com/itsara-n</p>
                </div>
              </div>
            </div>

            <div className="Objective">
              <h5>OBJECTIVE</h5>
              <p>Frontend Developer 2+ years experience with React Native to develop, testing and debugging a mobile application both of iOS and Android within FinTech startup.</p>
            </div>

            <div className="Education">
              <h5>EDUCATION</h5>
              <div className="MyInfo">
                <div className="Subject">
                  <p>2012-1016</p>
                </div>
                <div className="Content">
                  <p className="Title">Price of Songkla University, Phuket campus</p>
                  <p className="SubTitle">Bachelor of Engineering in Computer Engineering</p>
                  <ul>
                    <li>Accumulative GPA: 2.66</li>
                    <li>Senior Project is an internship evaluation system on web-based and mobile application. Developed by using AngularJs, Ionic framework and Firebase.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="Experience">
              <h5>EXPERIENCE</h5>
              <div className="MyInfo">
                <div className="Subject">
                  <p>Jun - Aug 2016</p>
                </div>
                <div className="Content">
                  <p className="Title">Thai Airways International Public Company Limited</p>
                  <p className="SubTitle">Programmer Intern</p>
                  <ul>
                    <li>Develop a part of java web application for the internal project.</li>
                  </ul>
                </div>
              </div>
              <div className="MyInfo">
                <div className="Subject">
                  <p>Mar 2017 - Present</p>
                </div>
                <div className="Content">
                  <p className="Title">LQID360 (Scale360) Company Limited</p>
                  <p className="SubTitle">Frontend Developer</p>
                  <ul>
                    <li>Develop features of mobile marketplace application.</li>
                    <li>Develop ATM Services features in a mobile banking application.</li>
                    <li>Join the chat team to develop a mobile chat application.</li>
                    <li>Create internal tools and library for development.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="Volunteer">
              <h5>VOLUNTEER</h5>
              <div className="MyInfo">
                <div className="Subject">
                  <p>May 2016</p>
                </div>
                <div className="Content">
                  <p className="Title">ACM-ICPC World Finals 2016, Phuket</p>
                  <p className="SubTitle">Host Student Volunteer</p>
                  <ul>
                    <li>Installation the contest room.</li>
                    <li>Facilitate to contestant and coach.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="Skill">
              <h5>{`TECHNICAL SKILL`}</h5>
              <div className="MyInfo">
                <div className="Subject">
                  <p>Programming</p>
                </div>
                <div className="Content">
                  <p>JavaScript, C, HTML, CSS, Go(Basic), SQL(Basic)</p>
                </div>
              </div>
              <div className="MyInfo">
                <div className="Subject">
                  <p>Frameworks</p>
                </div>
                <div className="Content">
                  <p>React Native, React, Redux, AngularJS, Ionic1</p>
                </div>
              </div>
              <div className="MyInfo">
                <div className="Subject">
                  <p>Testing</p>
                </div>
                <div className="Content">
                  <p>Jest, Enzyme</p>
                </div>
              </div>
              <div className="MyInfo">
                <div className="Subject">
                  <p>Database</p>
                </div>
                <div className="Content">
                  <p>Realm, Firebase</p>
                </div>
              </div>
              <div className="MyInfo">
                <div className="Subject">
                  <p>Tools</p>
                </div>
                <div className="Content">
                  <p>Jira, Bitbucket, GitHub, Git, Adobe XD</p>
                </div>
              </div>
            </div>

            <div className="Hobby">
              <h5>{`HOBBIES`}</h5>
              <div className="MyInfo">
                <ul>
                  <li>Photography</li>
                  <li>Backpacking</li>
                  <li>Reading</li>
                </ul>
              </div>
            </div>


            <div className="Personal">
              <h5>{`PERSONAL`}</h5>
              <div className="MyInfo">
                <ul>
                  <li>Age: 25</li>
                  <li>Religion: Buddha</li>
                  <li>Marital Status: Single</li>
                  <li>Military Status: Exempted (Finished Reserved Officers Training Corps Course)</li>
                  <li>Health: Excellent</li>
                </ul>
              </div>
            </div>

          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;