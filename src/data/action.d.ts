export type Action = {
  name: string;
  emoji: string;
  source: string;
  page: number;
  srd: boolean;
  basicRules: boolean;
  time: Time[];
  entries: Entry[];
  seeAlsoAction: string[];
  fromVariant: string;
};

export type Time = {
  number: number;
  unit: string;
};

export type Entry =
  | {
      type: string;
      name: string;
      entries?: Entry[];
      items?: string[];
    }
  | string;
