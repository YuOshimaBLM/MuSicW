export interface InitialUserState {
  user: null | {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

export type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};
