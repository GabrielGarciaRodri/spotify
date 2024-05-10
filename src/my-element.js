import { LitElement, css, html } from 'lit'


export class MyElement extends LitElement {
  

  constructor() {
    super();
    this.image = "/src/assets/image20.svg"
    this.title = "Money Machine"
    this.description = "1000 Gecks"
    this.leftArrow= "/src/assets/leftArrow.png"
    this.playButton = "/src/assets/play.svg"
    this.leftArrow= "/src/assets/leftArrow.png"
  } 

  static styles =css`
    .container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      grid-template-areas:
      "imagen"
      "description"
      "buttons"
      ;
      width: 250px;
      height: 350px;
      background-color: blue;
      border-radius: 10px;
    }

    .container-image{
      height: 100%;
      grid-area: imagen;
      background: red;
      margin-top: 10px;
      display: flex;
      justify-content: center;
    }

    .container-image img {
      width: 200px;
      height: 200px;
      border-radius: 10px;
    }

    .artist_description{
      background: green;
      height: 50%;
      grid-area: description;
      color: #fff;
    }

    .artist_description h2 {
      font-size: 20px;
    }

    .artist_description h3 {
      font-size: 15px;
    }

    .text_music{
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .interactive_buttons{
      grid-area: buttons;
      display: flex;
      justify-content: center;
      align-items: center;
    }


    button{
      border-radius: 100px;
      border-style: none;
      background-color: transparent;
    }

    .leftButton{
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    .rightButton{
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }

    .playButton{
      width: 60px;
      height: 60px;
    }
  `
  render(){
    return html`
      <div class="container">
        <div class="container-image"> 
          <img src="${this.image}">
        </div>
        <div class= "song_title">
          <h2>${this.title}</h2>
        </div>
        <div class="artist_description">
          <h3>${this.description}</h3>
        </div>  
        <div class= "interactive_buttons">
          <button><img src="${this.leftArrow}"></button> 
          <button><box-icon name='play'></box-icon></button> 
          <button></button>
        </div>
      </div>
    `;
  }

}

window.customElements.define('my-element', MyElement)
