import "./style.css";
import InfoCard from "./TimeCard";
import "animate.css";
import React, { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import pic from "./assets/pic.png";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  getNameFromURL() {
    const path = window.location.pathname;
    const nameFromPath = path.slice(1); // Removes the leading '/'
    return decodeURIComponent(nameFromPath.replace(/\+/g, " "));
  }

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  render() {
    const name = this.getNameFromURL();
    const { showModal } = this.state;

    return (
      <div className="app-container">
        <MusicPlayer />
        <h1 className="content_img animate__animated animate__fadeIn animate__slower animate__delay-4s clickable-title">
          Selamat Ulang Tahun, <br />
          Arunika-ku
        </h1>

        <h4
          className="content_img animate__animated animate__fadeIn animate__slower animate__delay-4s clickable-title"
          onClick={this.toggleModal}
        >
          Buka Undanganmu, Disini
        </h4>

        <div className="content_img animate__animated animate__fadeIn animate__slower animate__delay-2s">
          <img src={pic} alt="Birthday" />
        </div>

        <div className="bottom-background animate__animated animate__fadeInUp animate__slower" />

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Arunika Birthday</h2>
              <p>
                <strong>Tempat:</strong> Diinfokan Nanti
              </p>
              <p>
                <strong>Waktu:</strong> 15:30 WIB, Dijemput di rumah-mu
              </p>
              <p>
                <strong>Tanggal:</strong> April 27, 2025
              </p>
              <button onClick={this.toggleModal}>Tutup</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MyComponent;
