import React from 'react';

const About = (props) => (
      <section id="about">
          <div className="row">
              <div className="three columns">
                  <img className="profile-pic" src={props.data.image} alt="" />
              </div>
              
              <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p> {props.data.bio} </p>
                  <div className="row">
                      <div className="columns contact-details">
                          <h2>Contact Details</h2>
                          <p className="address">
                            <span>{props.data.name}</span><br />
                            <span>{props.data.address.street}<br /> 
                            {props.data.address.city}, {props.data.address.state} {props.data.address.zip}
                            </span><br />
                            <span>{props.data.phone}</span><br />
                            <span>{props.data.email}</span>
                          </p>
                      </div>

                      <div className="columns download">
                          <p>
                            <a href={props.data.resumedownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                          </p>
                      </div>
                  </div> 
              </div> 
          </div>
      </section>
)

export default About;