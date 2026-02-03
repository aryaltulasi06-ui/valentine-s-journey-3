export enum Page {
  INTRO = 'INTRO',
  PUNISHMENT = 'PUNISHMENT',
  AFFIRMATION = 'AFFIRMATION',
  PROPOSAL = 'PROPOSAL',
  GIFT = 'GIFT',
  LETTER = 'LETTER',
}

export interface SceneProps {
  onNext: () => void;
  onBack?: () => void;
  setPage: (page: Page) => void;
}
