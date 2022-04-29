import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["remove", "value", "template"];

  connect() {}

  setanswer(word) {
    this.element.innerHTML = `<div>
      <input type="radio" name="radio" >
      <label for="radio" data-answer-list-target="value">${word}</label>
      </div>`;
  }

  remove_answer(e) {
    e.preventDefault();
    this.removeTarget.remove();
  }

  answer_look() {
    const inputValue = document
      .querySelectorAll(".inputValue")
      .forEach((word, index) => {
        return word.value, index;
      });
  }
}
