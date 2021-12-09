import React from 'react'


class Profile extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        fullname: "Salma Omar Saleh Toure",
        bio:"Salma is a student in Web development and Civil Engineering-She's a very attractive and passionate . With her , you're futur is on good hands",
        profession:"She's a student",
        imgSrc:"Salma.jpg"
      }
    }
    render() {
        return (
          <div className="App">
            <img className="pic" src={this.state.imgSrc }alt= "Salma" width="200px" height="200px" />
           <p>{this.state.fullname}</p>
           <p>{this.state.bio}</p>
           <p>{this.state.profession }</p>
           
          </div>
        )
    }
}

    
export default Profile