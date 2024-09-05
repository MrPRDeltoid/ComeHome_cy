import { AgentPage } from "../pages/agentPage"


const agent_page = new AgentPage

beforeEach(() => {
  // Load the Agent Page
  agent_page.goto()
})

describe('The Agent Page', () => {
  it('Has correct url, title and main sections', () => {
    cy.url().should('eq', agent_page.URL)
    // cy.title().should('eq', agent_page.TITLE)  // TODO: BUG - The title is not updated, shows title from previous loaded page
    agent_page.mainHeader().should('exist')
    agent_page.header().should('have.text', "ComeHome Concierge Team")
    agent_page.subheader().should('have.text', "Connected to thousands of the top real estate agents nationwide.")
    agent_page.connectAgentButton().should('be.enabled').and('have.text', "Connect with an agent")
    agent_page.headshotsImage().should('exist')
    const descriptions_exp = ['Full real estate agent support for buying and selling', 
                              'Guidance throughout the homeownership journey', 
                              'Assistance with contracts & negotiations']
    agent_page.descriptionText().each(($el, index) => {
      cy.wrap($el).should('have.text', descriptions_exp[index])
    })
    agent_page.secondaryHeader().should('have.text', "Buying, selling or both? Get paired with a top local expert.")
    agent_page.secondarySubheader().should('have.text', "With our experience and your individual needs, we’ll help connect you with the right agent to guide you through your transaction.")
    agent_page.getStartedButton().should('be.enabled').and('have.text', "Get started")
    agent_page.secondaryImage().should('exist')
    agent_page.footerSection().should('exist')
  })
})
