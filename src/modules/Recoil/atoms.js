import { atom } from "recoil";

const likeBtnState = atom({
  key: 'likeBtn',
  default: false
})

export { likeBtnState };