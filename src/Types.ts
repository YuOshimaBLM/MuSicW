export interface InitialUserState {
  user: null | {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

export interface InitialReviewState {
  createdAt: string | null;
  genre: string | null;
  mainText: string | null;
  photoURL: string | null;
  titleName: string | null;
  uid: string | null;
}
