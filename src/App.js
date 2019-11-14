import React,{Component} from 'react';
import './App.css';
 
class Apps extends Component {
 

  
  render() {
    return(
          <div>  
            <h1>name game: {this.props.game} status: {this.props.status}%</h1>
          </div>
        );        
      }
    }
export default Apps;
