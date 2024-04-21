import { ReactElement } from "react";
import type { Entry } from "./data/action";

type Props = {
  entry: Entry;
};

function EntryElement({ entry }: Props): ReactElement {
  if (typeof entry === "string") {
    return <p>{entry}</p>;
  } else {
    switch (entry.type) {
      case "inset":
        return <>{entry.entries?.map((e) => EntryElement({ entry: e }))}</>;
      case "list":
        return <ul>{entry.items?.map((item) => <li>{item}</li>)}</ul>;
      case "entries":
        return (
          <div>
            <strong>{entry.name}</strong>
            {entry.entries?.map((item) => <p>{item as string}</p>)}
          </div>
        );
    }
    return <>{JSON.stringify(entry)}</>;
  }
}

export default EntryElement;
