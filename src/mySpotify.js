import { LitElement, css, html } from 'lit'


export class mySpotify extends LitElement {

    static styles = css`
    .container {
      display: inline-block;
      position: relative;
      width: 300px;
      height: 380px;
      border-radius: 12px;
      overflow: hidden;
    }

    .iframe-wrapper {
      width: 100%;
      height: 100%;
      border-radius: 12px;
      overflow: hidden;
    }

    iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    `;
    render() {
        return html`

            <div class= "container">
                <div class= "iframe-wrapper">
                    <iframe
                        src= "https://open.spotify.com/embed/track/4WNcduiCmDNfmTEz7JvmLv"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy">
                    </iframe>
                </div>
            </div>
             
        `
    }


}

customElements.define('my-spotify', mySpotify)
