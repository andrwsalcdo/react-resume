import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Header from './Components/Header'
import About from './Components/About'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: null,
      dataLoaded: false
    }
  }

  getResumeData() {
    axios.get('http://localhost:3000/resumeData.json')
      .then(res => {
        this.setState({ resumeData: res.data, dataLoaded: true });
      }) 
      .catch(err => console.log('error:', err));
  }
  
  componentDidMount() {
    this.getResumeData(); 
  }

  render() {
    if(this.state.dataLoaded === false) {
      return (
        <h1>loading</h1>
      );
    }
    else {
      return (
        <div>
          <Header data={this.state.resumeData.main} />
           <About />
           <Resume />
           <Portfolio />
           <Testimonials />
           <Contact />
           <Footer />
        </div> 
      )
    }
  }
}

export default App;