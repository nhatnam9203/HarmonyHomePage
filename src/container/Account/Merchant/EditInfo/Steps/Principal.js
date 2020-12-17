import React from "react";

function Principal() {
  return (
    <div>
      <div className="app__toggle d-flex justify-content-between toggle_box mt-4">
        <div className="app__toggle-text" aria-label="open">
          <div className="d-flex text-center">
            <span>3</span>
            <h3>Principal Information</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principal;
