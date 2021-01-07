export default class Song {
    constructor(data) {
        this.title = data.trackName || data.title;
        this.albumArt =
            data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
        this.artist = data.artistName || data.artist;
        this.album = data.collectionName || data.album;
        this.price = data.trackPrice || data.price;
        this.preview = data.previewUrl || data.preview;
        this.id = data.trackId || data._id;
    }

    get Template() {
        return `
               <div class="card text-center">
                    <h3>NOW PLAYING</h3>
                    <img src="${this.albumArt}" alt="">
                    <h4>${this.artist} - ${this.title}</h4>
                    <p><b>Album: </b>${this.album} | <b>Price: </b>$${this.price}</p>
                    <audio controls src="${this.preview}"></audio>
                </div>
                <div class="row justify-content-center">
                    <div class="col-6">
                        <button class="btn btn-outline-success" onclick="app.songsController.addSong('${this.id}')">Add to Playlist</button>
                    </div>
                </div>
        `;
    }

    get playlistTemplate() {
        return `
       
        `;
    }
}