export interface FormElements extends HTMLFormControlsCollection {
  TCK: HTMLInputElement;
  DGMTAR: HTMLInputElement;
  CEPTEL: HTMLInputElement;
  EMAIL: HTMLInputElement;
}

export interface IFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export interface Credentials {
  [key: string]: string;
}
