import React from 'react';

const Testimonials = (props) => (
    <section id="testimonials">
        <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                  <h1><span>Client Testimonials</span></h1>
              </div>
              <div className="ten columns flex-container">
                    <ul className="slides">
                        {props.data.testimonials.map(quote =>  
                          <li>
                            <blockquote>
                              <p>{quote.text}</p>
                              <cite>{quote.user}</cite>
                            </blockquote>
                          </li>
                        )}
                    </ul>
              </div> 
            </div> 
        </div>  
      </section> 
)  

export default Testimonials;
