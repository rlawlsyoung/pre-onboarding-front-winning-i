import { atom } from 'recoil';
import userData from './assets/data/userData';

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

export { isDialogOnAtom, openSideAtom, userDataAtom, currentUserAtom };
