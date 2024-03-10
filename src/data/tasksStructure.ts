export default interface TaskStructure {
  id: string;
  slug: string;
  title: string;
  isCompleted: boolean;
}

export const availableSlugs: string[] = [
  "113525272554561",
  "119662688048467",
  "950710787996572",
  "708125813594422",
];

export interface TaskDetails {
  id: string;
  title: string;
  image: string;
}
