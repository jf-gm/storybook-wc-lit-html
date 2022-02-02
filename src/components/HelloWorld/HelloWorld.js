import { html } from "lit-element";

export const HelloWorld = ({ name }) => {
  return html` <p>Hello <b>${name}</b>!</p>`;
};
