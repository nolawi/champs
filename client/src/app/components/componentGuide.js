import React, { createElement as h } from "react";
import glamorous from "glamorous";
import spinners from "./spinner/spinner.examples";
import alerts from "./alert/alert.examples";
import panels from "./panel/panel.examples";
import inputs from "./input/input.examples";
import buttons from "./button/button.examples";

export default context => {
  const { tr, parts } = context;

  const ViewContainer = glamorous("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  });

  const GuideView = glamorous("div")({
    //height: "100vh",
    display: "flex",
    margin: 20
  });

  const Content = glamorous("div")({
    //flex: "1 1 auto",
    //overflow: "auto"
  });

  return function ComponentGuide() {
    //console.log("ComponentGuide")
    
    return (
      <GuideView>
        <Content>

          <h1>{tr.t("The component guide.")}</h1>
          <h3>
            {tr.t(
              "A showroom to display components and views with various properties"
            )}
          </h3>
          <h2>
            {tr.t("Components")}
          </h2>
          <ViewContainer>
            {h(buttons(context))}
            {h(inputs(context))}
            {h(alerts(context))}
            {h(spinners(context))}
            {h(panels(context))}
          </ViewContainer>
          <h2>
            {tr.t("Authentication")}
          </h2>
          <ViewContainer>
            {h(parts.auth.containers().login())}
            {h(parts.auth.containers().register())}
            {h(parts.auth.containers().logout())}
            {h(parts.auth.containers().forgot())}
            {h(parts.auth.containers().resetPassword())}
          </ViewContainer>

          <h2>
            {tr.t("Profile")}
          </h2>
          <ViewContainer>
            {h(parts.profile.containers().profile())}
          </ViewContainer>
        </Content>
      </GuideView>
    );
  };
};
