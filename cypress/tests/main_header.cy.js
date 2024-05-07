import { MainHeader } from "../pages/basePage"
import { FindHomePage } from "../pages/findHomePage"
import { HomePage } from "../pages/homePage"


const main_header = new MainHeader
const home_page = new HomePage
const find_home_page = new FindHomePage

beforeEach(() => {
  // Load the landing page
  home_page.visit()
})

describe('The Main Header', () => {
  // Tests for the main top header

  it('Has correct main header elements', () => {
    // Check header has correct elements
    home_page.mainHeader().within(() =>{
      main_header.logo().should('exist')
    })
    main_header.buyHomeButton().should('contain.text', "Find a home")
    main_header.myHomeButton().should('contain.text', "My home")
    main_header.savedButton().should('contain.text', "Saved")
    main_header.alertsButton().should('contain.text', "Alerts")
    main_header.findAnAgentButton().should('contain.text', "Find an agent")
    main_header.joinLoginLink().should('have.text', "Join or Log in")
  })
})

describe('The Main Header Options', () => {
  // Tests clicking on each main header item

  it('Can click Find a home to show correct page', () => {
    main_header.buyHomeButton().click()
    cy.title().should('eq', "Real estate and homes for sale | ComeHome")


  })
})
