import { atom } from 'recoil';
import userData from './assets/data/userData';
import postData from './assets/data/postData';
import commentData from './assets/data/CommentData';

const isDialogOnAtom = atom({
  key: 'isDialogOn',
  default: false,
});

const openSideAtom = atom({
  key: 'openSide',
  default: false,
});

const userDataAtom = atom({
  key: 'userData',
  default: userData,
});

const currentUserAtom = atom({
  key: 'currentUser',
  default: null,
});

const postDataAtom = atom({
  key: 'postData',
  default: postData,
});

const commentDataAtom = atom({
  key: 'commentData',
  default: commentData,
});

const pageAtom = atom({
  key: 'page',
  default: 1,
});

export {
  isDialogOnAtom,
  openSideAtom,
  userDataAtom,
  currentUserAtom,
  postDataAtom,
  commentDataAtom,
  pageAtom,
};
