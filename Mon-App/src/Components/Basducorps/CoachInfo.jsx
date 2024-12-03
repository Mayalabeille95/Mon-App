import React from "react";

const Coachinfo = () => {
  return (
    <div>
      <section className="conseils">
        <h1>Travaille ton bas du corps avec notre coach !</h1>

        <img
          src="/Assets/images/coachbasducorp.jpg"
          alt="coach Christophe DEPAY"
        />

        <div className="span">
          <span style={{ color: "gold" }}>&#9733;</span>
          <span style={{ color: "gold" }}>&#9733;</span>
          <span style={{ color: "gold" }}>&#9733;</span>
          <span style={{ color: "gold" }}>&#9733;</span>
          <span style={{ color: "gray" }}>&#9734;</span>
          <span
            style={{ marginLeft: "8px", color: "gold", fontWeight: "bold" }}
          >
            4
          </span>
        </div>

        <h2>Christophe DEPAY</h2>
      </section>
    </div>
  );
};

export default Coachinfo;
