import React from "react";
import paper from "components/Paper";
import alert from "./alert";

export default context => {
  const { tr } = context;
  const Paper = paper(context);
  const Alert = alert(context);
  return function AlertExamples() {
    return (
      <Paper>
        <h3>{tr.t("Alert")}</h3>
        <Alert.Danger type="danger" message="Alert danger" />
        <Alert.Warning message="Alert warning" />
        <Alert.Info message="Alert info message" title="My Title" code="500" />
      </Paper>
    );
  };
};
