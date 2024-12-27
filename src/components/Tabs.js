import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Browse from "../pages/Browse";

function CustomTabs() {
  return (
    <Tabs defaultActiveKey="browse" id="recipe-tabs" className="mb-3">
      <Tab eventKey="browse" title="">
        <Browse />
      </Tab>
    </Tabs>
  );
}

export default CustomTabs;
