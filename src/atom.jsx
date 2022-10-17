import { atom } from 'recoil';

const isLoginAtom = atom({
  key: 'isLogin',
  default: false,
});

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
  default: [],
});

export { isLoginAtom, isDialogOnAtom, openSideAtom, userDataAtom };
