

export class BasePage {
  // Common elements accross the app
  mainHeader() {return cy.getBySel("top-section")}
  footerSection() {return cy.getBySel("footer-section")}
}

export class MainHeader {
  // Main header elements
  logo() {return cy.getBySel("comehome-logo")}
  buyHomeButton() {return cy.getBySel("buy-home-button")}
  myHomeButton() {return cy.getBySel("my-home-button")}
  savedButton() {return cy.getBySel("saved-button")}
  alertsButton() {return cy.getBySel("alerts-button")}
  findAnAgentButton() {return cy.getBySel("find-an-agent-button")}
  joinLoginLink() {return cy.getBySel("join-login-link")}
  joinLoginDialog() {return cy.get('[class$="SlideInModal__ModalWithCloseIcon"]')}
  
  // Methods
  showJoinLoginDialog() {
    this.joinLoginLink().click()
  }
}

export class JoinLoginDialog {
  // Join/Login dialog elements
  header() {return cy.getBySel("modal-header")}
  closeButton() {return cy.getBySel("close-dialog-button")}
  title() {return cy.get('[class="AuthModal__Title"]')}
  subTitle() {return cy.get('[class="AuthModal__Subtitle"]')}
  loginRow() {return cy.getBySel("log-in-row")}
  loginLink() {return cy.get('[data-event-name="click_login_cta"]')}
  signupRow() {return cy.getBySel("sign-up-row")}
  signupLink() {return cy.get('[data-event-name="click_signup_cta"]')}
  loginButton() {return cy.get('[data-hc-name="log-in-row"] > button')}
  firstNameField() {return cy.get('[name="firstname"]')}
  lastNameField() {return cy.get('[name="lastname"]')}
  emailField() {return cy.get('[name="email"]')}
  phoneField() {return cy.get('[name="phone"]')}
  passwordField() {return cy.get('[name="password"]')}
  confirmRow() {return cy.getBySel("confirm-row")}
  signupButton() {return cy.getBySel("signup-button")}
  loginButton() {return cy.get('button[aria-label="log in"]')}
  
  // Methods
  closeDialog() {
    this.closeButton().click()
    cy.wait(500)
  }
}
