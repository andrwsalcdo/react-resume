import React from 'react';


const Portfolio = (props) => (
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
                <h1>Check Out Some of My Works.</h1>
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  {props.data.projects.map(project =>
                        <div key={project.url} className="columns portfolio-item">
                            <div className="item-wrap">
                                <a href={project.modal} title="">
                                    <img className="proj-img" alt={project.image} src={project.url} />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>{project.title}</h5>
                                            <p>{project.category}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                         </div>
                  )}
                </div> 
            </div> 
          </div>      
        </section>
)

export default Portfolio;