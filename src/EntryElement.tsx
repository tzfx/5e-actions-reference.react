import { ReactElement } from "react";
import type { Entry } from "./data/action";

type Props = {
  entry: Entry;
  index?: number;
};

function EntryElement({ entry, index }: Props): ReactElement {
  if (typeof entry === "string") {
    return <p key={index}>{entry}</p>;
  } else {
    switch (entry.type) {
      case "inset":
        return (
          <>
            {entry.entries?.map((e, i) => EntryElement({ entry: e, index: i }))}
          </>
        );
      case "list":
        return (
          <ul key={index}>
            {entry.items?.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
      case "entries":
        return (
          <div>
            <strong>{entry.name}</strong>
            {entry.entries?.map((item, i) => <p key={i}>{item as string}</p>)}
          </div>
        );
    }
    return <>{JSON.stringify(entry)}</>;
  }
}

export default EntryElement;
