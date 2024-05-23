import { LitElement, html, css } from "lit";

export class Reproductor extends LitElement {
  static properties = {
    title: { type: String }
  }

  constructor() {
    super();
    this.title = "Now Playing";
    this.song = "Villains and Heroes";
    this.album = "Metro Boomin";
    this.plustime = "2:14";
    this.negativetime = " -1:15";
    this.imagen = "/metroboom.png";
    this.dispositive = "Airpods Pro (Dave)";
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
    }

    my-element {
      background: green;
      width: 100vw;
    }

    .container {
      display: grid;
      width: 100% !important;
      height: 100vh;
      background: #f3f3f3;
      grid-template-columns: 1fr;
      grid-template-rows: 0.3fr 3fr 0.5fr 0.5fr 0.5fr 0.5fr 0.3fr;   
      grid-template-areas: 
        "title"
        "container__image"
        "song_name"
        "line_song"
        "change_song"
        "song_volumen"
        "dispositive";
    }

    /* Título de "Now Playing" */
    .title {
      grid-area: title;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Imagen del medio */
    .container__image {
      grid-area: container__image;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    }

    .container__image > img {
      border-radius: 10px;
      width: 60%;
    }

    /* Nombre de la canción */
    .song_name {
      grid-area: song_name;
      color: #1DB954;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .song_name .title_song {
      color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Tiempo de la canción */
    .line_song {
      display: flex;
      flex-direction: column;
      color: black;
    }

    .line_song .time {
      display: flex;
      justify-content: space-between;
      color: gray;
    }

    .line_song .time_line input[type="range"] {
      background-color: gray;
      height: 5px;
      border-radius: 2px;
      accent-color: #1DB954;
    }

    .line_song .time_line input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #00ff00;
      cursor: pointer;
    }

    .line_song input {
      width: 90%;
    }

    .line_song .time_line {
      display: flex;
      justify-content: center;
    }

    /* Cambiar la canción */
    .change_song {
      grid-area: change_song;
      display: flex;
      justify-content: space-evenly;
    }

    .change_song img {
      background-size: contain;
      width: 1.5vw;
      height: 100%;
      border: none;
      cursor: pointer;
    }

    .change_song .play {
      background-size: contain;
      width: 6vw;
      height: 100%;
      border: none;
      cursor: pointer;
    }

    /* Volumen de la canción */
    .song_volumen {
      grid-area: song_volumen;
      display: flex;
      justify-content: center;
    }

    .song_volumen .volumen_line input[type="range"] {
      background-color: gray;
      height: 5px;
      width: 50%;
      border-radius: 2px;
      accent-color: #1DB954;
    }

    .song_volumen .volumen_line input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #00ff00;
      cursor: pointer;
    }

    .volumen_line {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .volumen_line input {
      width: 80%;
    }

    .song_volumen .aleatory {
      background-size: contain;
      width: 1.5vw;
      height: 100%;
      border: none;
      cursor: pointer;
    }

    /* Dispositivo */
    .dispositive {
      grid-area: dispositive;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info_dispositive {
      display: flex;
      align-items: center;
      background: #1db95434;
      border-radius: 20px;
      width: 10vw;
      color: gray;
      justify-content: space-around;
    }

    @media screen and (max-width: 768px) {
      .change_song {
        grid-area: change_song;
        display: flex;
        justify-content: space-evenly;
      }

      .change_song .play {
        width: 20vw;
        height: 100%;
        border: none;
        cursor: pointer;
      }

      .change_song img {
        width: 6%;
        height: 100%;
        border: none;
        cursor: pointer;
      }

      .dispositive {
        grid-area: dispositive;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .info_dispositive {
        display: flex;
        align-items: center;
        background: #1db95434;
        border-radius: 20px;
        width: 50%;
        color: gray;
        justify-content: space-around;
      }
    }
  `;

  render() {
    return html`
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
      <div class="container">
        <div class="title">
          <h3>${this.title}</h3>
        </div>
        <div class="container__image">
          <img src=${this.imagen}>
        </div>
        <div class="song_name">
          <div class="plus">
            <i class='bx bx-plus'></i>
          </div>
          <div class="title_song">
            <h2>${this.song}</h2>
            <p>${this.album}</p>
          </div>
          <div class="like">
            <i class='bx bx-heart'></i>
          </div>
        </div>
        <div class="line_song">
          <div class="time">
            <p>${this.plustime}</p>
            <p>${this.negativetime}</p>
          </div>
          <div class="time_line">
            <input type="range" name="slider" id="slide2">
          </div>
        </div>
        <div class="change_song">
          <img src="/Group 45.svg" class="aleatory">
          <img src="/Group.svg" class="left">
          <img src="/play button.svg" class="play">
          <img src="/Group right.svg" class="right">
          <img src="/Group 44.svg" class="rewind">
        </div>
        <div class="song_volumen">
          <div class="volumen_line">
            <img src="/low_sound.svg" class="aleatory">
            <input type="range" name="slider" id="slide2">
            <img src="/up_sound.svg" class="aleatory">
          </div>
        </div>
        <div class="dispositive">
          <div class="info_dispositive">
            <img src="/Vector.svg" class="aleatory">
            <p>${this.dispositive}</p>
          </div>
        </div>
      </div>
    `;
  }
  _mostrar(){
    this.name = e.target.value
}
}

