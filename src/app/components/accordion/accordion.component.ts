import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent implements OnInit {
  /**
   * The name of the technology that will be displayed as the title for the accordion header
   * @public
   * @property name
   * @type {string}
   */
  @Input()
  question: string;

  /**
   * The description of the technology that will be displayed within the accordion body (when activated
   * by the user)
   * @public
   * @property description
   * @type {string}
   */
  @Input()
  answer: string;

  /**
   * Determines and stores the accordion state (I.e. opened or closed)
   * @public
   * @property isMenuOpen
   * @type {boolean}
   */
  public isMenuOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  /**
   * Allows the accordion state to be toggled (I.e. opened/closed)
   * @public
   * @method toggleAccordion
   * @returns {none}
   */
  public toggleAccordion(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
