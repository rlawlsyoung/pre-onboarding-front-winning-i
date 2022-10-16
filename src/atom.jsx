import { atom } from 'recoil';

const isDialogOnAtom = atom({
  key: 'isDialogOn',
  default: false,
});
const openSideAtom = atom({
  key: 'openSide',
  default: false,
});

export { isDialogOnAtom, openSideAtom };
