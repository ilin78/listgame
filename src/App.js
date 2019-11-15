import React,{Component} from 'react';
import './App.css';
 
class Apps extends Component {

  test() {
    alert('THIS TEST')
  }

  
  render() {
    return(
          <div className="box">  
            <div className="text">name GAME: {this.props.game} status: {this.props.status}%</div>
            <button onClick={this.test} className="btn light">добавить</button> 
            <button onClick={this.test} className="btn red">Удалить</button>
          </div>
        );        
      }
    }
export default Apps;
