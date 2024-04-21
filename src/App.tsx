import { ReactElement, useEffect, useState } from "react";
import ActionElement from "./ActionElement";
import actions from "./data/actions.yaml";
import { Action } from "./data/action";

const centered: React.CSSProperties = {
  marginLeft: "auto",
  marginRight: "auto",
};

function App(): ReactElement {
  const [extras, setExtras] = useState(false);
  const [actionList, setActionList] = useState(
    actions.action.filter((a: Action) => a.srd),
  );

  useEffect(() => {
    setActionList(
      actions.action.filter((action: Action) => (!extras ? action.srd : true)),
    );
  }, [extras]);

  const columns = 3;
  const elementWidth = 300;

  const height = ((actionList.length + 1) * elementWidth) / columns;
  const breakdown = actionList.length / 3;
  console.log(breakdown);

  return (
    <div style={{ ...centered, width: "1200px" }}>
      <h1>
        <span style={{ cursor: "default" }} onClick={() => setExtras(!extras)}>
          {extras ? "📚" : "📕"}
        </span>{" "}
        5e Actions Quick-Reference
      </h1>
      <div hidden>
        <label>🔎</label>
        <input id="searchbar" type="text"></input>
      </div>
      <div
        style={{
          height: `${height}px`,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {actionList.map((action: Action) => (
          <ActionElement key={action.name} action={action}></ActionElement>
        ))}
      </div>
    </div>
  );
}

export default App;
