import { Selector } from "testcafe";


export default class Page {
  constructor ( ) {

    this.categoryButtons = Selector( ".sf-menu > li" );

  }
}
