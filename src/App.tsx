import { ReactElement, useEffect, useState } from "react";
import ActionElement from "./ActionElement";
import { Action } from "./data/action";
import actions from "./data/actions.yaml";
import SearchBar from "./SearchBar";

const centered: React.CSSProperties = {
  marginLeft: "auto",
  marginRight: "auto",
};

function App(): ReactElement {
  const [extras, setExtras] = useState(false);
  const [actionList, setActionList] = useState<Action[]>(
    actions.action.filter((a: Action) => a.srd)
  );

  const handleSearch = (search: string) => {
    setActionList(
      actions.action
        .filter((action: Action) => (!extras ? action.srd : true))
        .filter(({ name }: Action) =>
          search.length > 0
            ? name.toLowerCase().includes(search.toLowerCase())
            : true
        )
    );
  };

  useEffect(() => {
    setActionList(
      actions.action.filter((action: Action) => (!extras ? action.srd : true))
    );
  }, [extras]);

  // @todo: investigate hacking together some css masonry.
  const columns = 3;
  const elementWidth = 300;
  const height = ((actionList.length + 1) * elementWidth) / columns;
  // const breakdown = actionList.length / 3;
  // console.log(breakdown);

  return (
    <div style={{ ...centered, width: "1200px" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1>
          <span
            style={{ cursor: "default" }}
            onClick={() => setExtras(!extras)}
          >
            {extras ? "📚" : "📕"}
          </span>{" "}
          5e Actions Quick-Reference
        </h1>
        <h1 hidden>
          <SearchBar handleSearch={handleSearch}></SearchBar>
        </h1>
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
