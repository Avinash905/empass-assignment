import React, { useState } from "react";
import BookConsult from "./BookConsult";
import "../styles/profile.css";

const Profile = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="profile">
      <div className="profile-container">
        <div className="profile-background">
          <img
            src="https://images.pexels.com/photos/2609226/pexels-photo-2609226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile background"
            className="profile-background-pic"
          />
          <span></span>
        </div>
        <div className="profile-details">
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile pic"
            className="profile-image"
          />
          <div className="profile-info">
            <h4 className="profile-name">John</h4>
            <span className="profile-email light-text">john@gmail.com</span>
          </div>
          <button
            className="btn consult-btn"
            onClick={() => setModalOpen(true)}
          >
            Consult
          </button>
          <div className="profile-other-info">
            <div className="profile-tests">
              <h4>105</h4>
              <span className="light-text">Total Tests</span>
            </div>
            <div className="profile-followers">
              <h4>#10</h4>
              <span className="light-text">Rank</span>
            </div>
          </div>
        </div>
        <div className="profile-earning">
          <div className="profile-earning-top">
            <h5 className="card-heading">Overall Rating</h5>
          </div>
          <div className="profile-earning-data">
            <div className="progress">
              <div className="barOverflow">
                <div className="bar"></div>
              </div>
              <span>Good</span>
            </div>
            <strong className="total-earning">80%</strong>
            <span className="sub-text light-text">Score this Month</span>
          </div>
        </div>
        <div className="last-test">
          <div className="last-test-top">
            <h5 className="card-heading">Last Test</h5>
          </div>
          <div className="last-test-card">
            <div className="last-test-rank">#5</div>
            <div className="last-test-content">Scored 100 marks out of 120</div>
          </div>
        </div>
      </div>
      {modalOpen && <BookConsult setModalOpen={setModalOpen} />}
    </section>
  );
};

export default Profile;
