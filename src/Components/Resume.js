import React from 'react';

const Resume = (props) => (
     <section id="resume">
          <div className="row education">
            <div className="three columns header-col">
                <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
                {props.data.education.map(edu => 
                      <div key={edu.school} className="row item">
                        <div className="twelve columns">
                          <h3>{edu.school}</h3>
                          <p className="info">{edu.degree}<span>&bull;</span> 
                            <em className="date">{edu.graduated}</em>
                          </p>
                          <p>{edu.description}</p>
                        </div>
                      </div> 
                  )}
            </div> 
          </div>
          <div className="row work">
            <div className="three columns header-col">
                <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
                {props.data.work.map(job =>
                    <div key={job.company} className="row item">
                      <div className="twelve columns">
                        <h3>{job.company}</h3>
                        <p className="info">{job.title} <span>&bull;</span> 
                          <em className="date">{job.years}</em>
                        </p>
                        <p>{job.description}</p>
                      </div>
                    </div>
                )} 
            </div> 
          </div> 
            <div className="row skill">
              <div className="three columns header-col">
                  <h1><span>Skills</span></h1>
              </div>
              <div className="nine columns main-col">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt.
                  </p>
              <div className="bars">
                <ul className="skills">
                  {props.data.skills.map(skill =>
                    <li key={skill.name}>
                      <span style={{ width: skill.level }} 
                      className="bar-expand"></span>
                      <em>{skill.name}</em>
                    </li>                      
                  )}
                </ul>
              </div>
            </div> 
          </div> 
       </section>
)

export default Resume;