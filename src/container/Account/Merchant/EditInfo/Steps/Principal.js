import React from "react";
import { Tab, Tabs } from "react-bootstrap";

import PrincipalDetail from "./PrincipalDetail";

function Principal(formik) {
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
      <div className="app__content">
        <Tabs transition={false}>
          <Tab eventKey="home" title="Principal 1" className="principal_tab">
            <PrincipalDetail formik={formik} />
          </Tab>
          <Tab eventKey="profile" title="Principal 2" className="principal_tab">
            <PrincipalDetail formik={formik} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Principal;
