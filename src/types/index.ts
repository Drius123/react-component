export interface SearchInputProps {
  request: (request: string) => Promise<void>;
  changeState: () => void;
  changeLoading: () => void;
}

export default interface CardProps {
  name: string;
  height: number;
  mass: number;
}

export interface PresentationProps {
  items: CardProps[] | [];
}
