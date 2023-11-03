import { Dispatch, SetStateAction } from 'react';

export interface SearchInputProps {
  changeState: Dispatch<SetStateAction<Results>>;
  changeLoading: Dispatch<SetStateAction<boolean>>;
}

export default interface CardProps {
  name: string;
  height: number;
  mass: number;
}

export interface PresentationProps {
  items: CardProps[] | [];
}

export type Results = CardProps[];

export interface SelectorProps {
  pageNumber: number;
}
