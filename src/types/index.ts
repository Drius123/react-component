export interface PresentationProps {
  name: string | number;
  height: number;
  mass: number;
}

export interface SearchInputProps {
  request: (request: string) => Promise<void>;
  changeState: () => void;
  changeLoading: () => void;
}

export default interface HomePageState {
  name: string | number;
  height: number;
  mass: number;
  loading: boolean;
}
