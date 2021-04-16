import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import "../../styles/alert.css";
export const errorAlert = (
  <div className="alert-message">
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
  </div>
);
export const warningAlert = (
  <div className="alert-message">
    <Alert severity="warning">
      <AlertTitle>Warning</AlertTitle>
      This is a warning alert — <strong>check it out!</strong>
    </Alert>
  </div>
);
export const deletedFromBagAlert = (
  <div className="alert-message">
    <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
      successfully deleted
    </Alert>
  </div>
);
export const addedToBagAlert = (
  <div className="alert-message">
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      successfully added to bag
    </Alert>
  </div>
);
