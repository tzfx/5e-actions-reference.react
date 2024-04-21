import type { Action } from "./data/action";
import EntryElement from "./EntryElement";

type Props = {
  action: Action;
};

function ActionElement({ action }: Props) {
  const anchor = action.name.toLowerCase().replace(/\s/g, "-");
  return (
    <div style={{ borderRadius: "5px", maxWidth: "350px" }}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h1 style={{ alignSelf: "center" }}>{action.emoji}</h1>
        <h2 style={{ alignSelf: "center" }} id={anchor}>
          {action.name}
        </h2>
        {action.time &&
          action.time.map((t) => (
            <small style={{ alignSelf: "end" }}>
              {typeof t === "string" ? t : [t.number, t.unit].join(" ")}
            </small>
          ))}
      </div>
      <div style={{ overflowY: "auto", height: "300px" }}>
        {action.entries.map((entry, i) => (
          <EntryElement key={i} entry={entry}></EntryElement>
        ))}
      </div>
      <ul hidden>
        {Object.entries(action).map(([k, v]) => (
          <li key={k}>
            {k}: {JSON.stringify(v)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActionElement;
