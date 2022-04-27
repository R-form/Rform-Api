import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["select", "choice", "long"];

  connect() {
    this.selected();
  }

  selected() {
    this.hideFields();
    switch (this.selectTarget.value) {
      case "single_choice":
        this.choiceTarget.classList.remove("hidden");
        break;
      case "multiple_choice":
        this.choiceTarget.classList.remove("hidden");
        break;
<<<<<<< HEAD
<<<<<<< HEAD
      case "satisfaction":
        this.choiceTarget.classList.remove("hidden");
        break;
      case "drop_down_menu":
        this.choiceTarget.classList.remove("hidden");
        break;
=======
      // case "long_answer":

      // break;
=======
>>>>>>> 4b98f4d (issues#22 add Robocop to new_form branch)
      case "satisfaction":
        this.choiceTarget.classList.remove("hidden");
        break;
      case "drop_down_menu":
        this.choiceTarget.classList.remove("hidden");
        break;
<<<<<<< HEAD
      // case "range":

      // break;
      // case "file":

      // break;
>>>>>>> b2838ed (issues 18 fix answer hidden issues 20 add soft delete)
=======
>>>>>>> 4b98f4d (issues#22 add Robocop to new_form branch)
      case "image":
        this.imageTarget.classList.remove("hidden");
        break;
    }
  }

  hideFields() {
    this.choiceTarget.classList.add("hidden");
  }
}
