import React, { Component } from 'react';
import Button from '../../component/Button/button';
import Timer from '../../component/Timer/timer';
import TodoList from '../../component/TodoList/index';




class Home extends Component{

  constructor(props) {
    super(props);
    this.state={
      isShow:false,
      timer:60
    }
  }

  componentWillMount(){
    console.log('挂载之前')
  }
  componentDidMount(){
    console.log('挂载完成')
  }

  componentWillUpdate(){
    console.log('将要更新')
  }

  componentDidUpdate(){
    console.log('更新完成')
  }

  onClick=()=>{
    this.setState({
      isShow:!this.state.isShow
    })
    console.log('dsad')

  }
  onClick2=()=>{
    this.setState({
      isShow:!this.state.isShow
    })
  }

  render(){
    return (
      <div>
        <Button onClick={this.onClick}>提交</Button>
      
        <Button onClick={this.onClick2}>
         {
           !this.state.isShow&&<span>发送短信验证码</span>
         }
         {
           this.state.isShow&&
          <Timer timer='60' overtext="重新发送"></Timer>
         }
        
        </Button>

        <TodoList></TodoList>

        
      </div>
    )
  }
}

export default Home;
