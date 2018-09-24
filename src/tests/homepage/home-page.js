import Page from "../../support/page-model.js";
import { Selector } from "testcafe";

export const homePage = new Page( );

homePage.expectDropdownsToOpenOnHover = async function( t ) {
  const nrOfCategoryButtons = await this.categoryButtons.count;

  for( let i = 0; i < nrOfCategoryButtons; i++ ) {
    const subcategoryExists = await this.categoryButtons.nth( i ).find( "ul" ).exists;

    if( subcategoryExists ){
      const contentDisplay = await this.categoryButtons.nth( i ).find( "ul" ).getStyleProperty( "display" );

      await t
        .expect( contentDisplay ).eql( "none" )
        .hover( this.categoryButtons.nth( i ) )

      const contentDisplayAfterHover = await this.categoryButtons.nth( i ).find( "ul" ).getStyleProperty( "display" );

      await t.expect( contentDisplayAfterHover ).eql( "block" )
    }
  }
};
