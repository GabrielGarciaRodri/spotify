import { LitElement, css, html } from 'lit'


export class MyElement extends LitElement {
  

  constructor() {
    super();
    this.image = "/src/assets/image20.svg"
    this.title = "Money Machine"
    this.description = "1000 Gecks"
    this.leftArrow= "/src/assets/leftArrow.png"
    this.playButton = "/src/assets/play.svg"
    this.rightArrow= "/src/assets/rightArrow.png"
  } 

  static styles =css`


    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 260px;
      height: 330px;
      border-radius: 20px;
      position: relative;
      overflow: hidden;
    }

    .container::before{
      content: "";
      position: absolute;
      width: 120%;
      height: 130%;
      background-image: url(/src/assets/image20.svg);
      background-size: cover;
      background-position: center;
      background-repeat: repeat;
      filter: blur(10px);
      z-index: -1;
    }

    .atras img{
      width: 100%;
      height: 100%;
    }

    .atras{
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 20px;
      height: 20px;
      top: 40px;
      left: 10px;
      z-index: 2;
    }

    .main_container{
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      gap: 5px;
      position: relative;
      z-index: 1;
    }

    .main_container .bck_img{
      display: flex;
    }

    .bck_img img{
      width: 200px;
      max-height: 250px;
    }

    .interactive_buttons{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button{
      border-radius: 100px;
      border-style: none;
      background-color: transparent;
    }

    .button_play{
      display: flex;
      justify-content: center;
      align-items: center;  
      margin: 10px;
      border-radius: 100%;
      background-color: #27AE60;
      font-size: 50px;
      width: 40px;
      height: 40px;
    }
    
    box-icon {
      width: 35px;
      height: 35px;
    }
    
  `
  render(){
    return html`
      <div class="container">

        <div class="atras"><img src="/src/assets/atras.svg"></div>
        
        <div class="main_container"> 
          <div class="bck_img">
          <img src="${this.image}">
          </div>
          <h2>${this.title}</h2>
          <h3>${this.description}</h3>
        </div>


        <div class= "interactive_buttons">
          <button><img src="${this.leftArrow}"></button> 
          <button class= "button_play"><box-icon name='play' color='#ffffff'></box-icon></button> 
          <button><img src="${this.rightArrow}"></button>
        </div>
      </div>
    `;
  }

}

window.customElements.define('my-element', MyElement)
