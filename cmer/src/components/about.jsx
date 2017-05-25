import React, { Component } from 'react';
// THe about section should go under the hero/feature section and should span the width of the viewport. There should be an image behind the about, or a neutral color (possibly grey). The nav should have an href that references the id of the parent div.
class About extends Component {
  render() {
    return (
      <div id="About">
       <p>
         CMER is a project made by a group from the WDI Ada class at General Assembly. It is a work in progress so be warned tht some features may not work as intended or at all. If you have any questions regarding this project (or just want to shoot the breeze), feel free to visit my <a href='https://www.github.com/MadelineNF'>github</a>! This project was created in collaboration with Chim, Madeline, Emel, and Robert.
       </p>
      </div>
    );
  }
}

export default About;