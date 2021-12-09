import React from 'react';
import './App.css';
import Button from './componant/button';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      digit: 0,
    }
  }



  componentDidMount = () => {
    setInterval(() => {
      this.setState(prevState => ({
        digit: prevState.digit + 1,
      }));
    }, 1000);
  };





  render() {
  return (
    <div className="App">
      <h1 className="secc"> Hello dear user ! Welcom on our secrete page. Secrete ? Yes , just because all the information are hidden. In the following, you will see a button for showing them. <br/>
      Have a good time. <br/>
      Kinds regard ! </h1>
      <h4 className="sec">  Let us show you since how many seconds you are in our app </h4>
      <h5 className="time">
        {this.state.digit}s 
       </h5>
     <Button/>
    </div>
  );
}
}




export default App;
