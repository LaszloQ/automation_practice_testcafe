import { homePage } from "./home-page.js";
import { baseUrl } from "../../support/helpers.js";


  fixture `Homepage`
    .page( baseUrl )


    test( "categories' subcategory should be displayed, when the navbar buttons are hovered", async t => {
      await homePage.expectDropdownsToOpenOnHover( t );
    });
