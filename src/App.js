import React, { Component } from 'react';
import logo from './logo.svg';
import Test from './test.js';
import './App.css';

class App extends Component {

  state = {
    loading : "로딩중입니다.",
    animalData: ""
  }

  componentWillMount(){

    console.log("componentWillMount")

  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loading: "로딩이 완료되었습니다.",
        animalData: [
          {
            name : "강아지",
            img : "http://cfile7.uf.tistory.com/image/2127004454DAB0C70ED925"
          },
          {
            name : "고양이",
            img : "http://i.imgur.com/Hz3BAWV.jpg" 
          },
          {
            name : "사자",
            img : "https://ncache.ilbe.com/files/attach/new/20170921/377678/998364904/10037858787/404599e6cb76702059ac4122de007fc6.jpg"
          },
          {
            name : "호랑이",
            img : "http://cfile22.uf.tistory.com/image/272A963D5216B64C095177"
          }
        ]
      })
    }, 3000)
  }
  
  _renderAnimal = () => {
    const animals = this.state.animalData.map((animal, index) => {
      return <Test title={animal.name} photo={animal.img} />
    })
    return animals
  }


  render() {
    console.log("Render")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.loading}</h1>
        </header>
        <p className="App-intro">
          {this.state.animalData ? this._renderAnimal() : '잠시만 기다려주세요.' }
        </p>
      </div>
    );
  }
}

export default App;
