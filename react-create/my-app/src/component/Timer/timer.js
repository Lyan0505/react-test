import React, { Component } from 'react';
import { clearInterval } from 'timers';

class Timer extends Component{
  constructor(props){
    super(props);
    this.state={
      seconds:this.props.timer
    }
  }

  countDown(){
    this.timerInterval=setInterval(()=>{
      if(this.state.seconds===0){
        clearInterval(this.interVal);
        return;
      }
      this.setState(preState=>({
        seconds:preState.seconds-1
      }));

    },1000)
  }

  componentDidMount(){
  this.countDown();
  }

render(){
  return(
    <div className='count-time-component'>
    {
      this.state.seconds>0&&
      <span>{this.state.seconds}s</span>
    }
    {
      this.state.seconds===0&&
      <span>{this.props.overtext}</span>
    }
    </div>
  )
}

}
export default Timer;