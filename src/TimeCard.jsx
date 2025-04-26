import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function InfoCard() {
  return (
    <div className="info-card">
      {/* Left Column: Venue */}
      <div className="info-column">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
        <a
          href="https://maps.app.goo.gl/oEj3AtmAqhzmAiVf7"
          target="_blank"
          rel="noopener noreferrer"
          className="info-text"
        >
          Dapoer Kanjeng Mami, Duren Sawit, Jakarta Timur
        </a>
      </div>

      {/* Right Column: Time */}
      <div className="info-column-right">
        <div className="info-column-top">
          <FontAwesomeIcon icon={faCalendarAlt} className="info-icon" />
          <span className="info-text">4 Mei 2024</span>
        </div>
        <div className="info-column-bottom">
          <FontAwesomeIcon icon={faClock} className="info-icon" />
          <span className="info-text">10.00 WIB - 13.00 WIB</span>
        </div>
      </div>
    </div>
  );
}
