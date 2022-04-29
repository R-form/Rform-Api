import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["answer"];

  connect() {}

  add_answer(e) {
    e.preventDefault();
    fetch("/api/v1/answers/single")
      .then((resp) => {
        return resp.text();
      })
      .then((data) => {
        this.answerTarget.insertAdjacentHTML("beforebegin", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
