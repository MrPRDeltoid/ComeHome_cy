import { BasePage } from "./basePage"


export class AgentPage extends BasePage {
  URL = `${Cypress.config('baseUrl')}concierge-team`
  TITLE = "Agents | ComeHome"

  // Agent Page elements
  header() {return cy.getBySel("top-module-header-text")}
  subheader() {return cy.getBySel("top-module-sub-header-text")}
  connectAgentButton() {return cy.getBySel("connect-with-an-agent-cta")}
  descriptionText() {return cy.getBySel("description-section")}
  headshotsImage() {return cy.getBySel("concierge-team-headshots")}
  secondaryHeader() {return cy.getBySel("sub-module-header-text")}
  secondarySubheader() {return cy.getBySel("sub-module-sub-header-text")}
  getStartedButton() {return cy.getBySel("get-started")}
  secondaryImage() {return cy.get('.ConciergeTeamPage__SubModuleImage')}

  // Methods
  goto() {
    cy.visit(this.URL)
  }
}
