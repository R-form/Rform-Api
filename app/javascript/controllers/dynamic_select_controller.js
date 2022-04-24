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
      case "long_answer":
        this.longTarget.classList.remove("hidden");
        break;
      case "satisfaction":
        this.choiceTarget.classList.remove("hidden");
        break;
      case "date":
        this.dateTarget.classList.remove("hidden");
        break;
      case "time":
        this.timeTarget.classList.remove("hidden");
        break;
      case "drop_down_menu":
        this.choiceTarget.classList.remove("hidden");
        break;
      case "range":
        this.rangeTarget.classList.remove("hidden");
        break;
      case "file":
        this.fileTarget.classList.remove("hidden");
        break;
      // case "image":
      //   this.imageTarget.classList.remove("hidden");
      //   break;
    }
  }

  hideFields() {
    this.choiceTarget.classList.add("hidden");
    this.longTarget.classList.add("hidden");
    this.dateTarget.classList.add("hidden");
    this.timeTarget.classList.add("hidden");
    this.rangeTarget.classList.add("hidden");
    this.fileTarget.classList.add("hidden");
    // this.imageTarget.classList.add("hidden");
  }
}
