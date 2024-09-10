

export class BasePage {
  // Common elements accross the app
  mainHeader() {return cy.getBySel("top-section")}
  brokerageSection() {return cy.get(".BrokerageAttribution__BrokerageAttribution")}
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
  joinLoginDialog() {return cy.get('[class$=SlideInModal__ModalWithCloseIcon]')}
  
  // Methods
  showJoinLoginDialog() {
    this.joinLoginLink().click()
  }
}

export class BrokerageSection {
  // HC Brokerage Attribution
  logo() {return cy.getBySel("comehome-logo")}
  contactLink() {return cy.get(".BrokerageAttribution__Link")}
  text() {return cy.get(".BrokerageAttribution__BrokerageSection")}
}

export class JoinLoginDialog {
  // Join/Login dialog elements
  header() {return cy.getBySel("modal-header")}
  closeButton() {return cy.getBySel("close-dialog-button")}
  title() {return cy.get('[class=AuthModal__Title]')}
  subTitle() {return cy.get('[class=AuthModal__Subtitle]')}
  loginRow() {return cy.getBySel("log-in-row")}
  loginLink() {return cy.get('[data-event-name=click_login_cta]')}
  signupRow() {return cy.getBySel("sign-up-row")}
  signupLink() {return cy.get('[data-event-name=click_signup_cta]')}
  firstNameField() {return cy.get('[name="firstname"]')}
  lastNameField() {return cy.get('[name="lastname"]')}
  emailField() {return cy.get('[name="email"]')}
  phoneField() {return cy.get('[name="phone"]')}
  passwordField() {return cy.get('[name="password"]')}
  errorMessage() {return cy.getBySel("error-message")}
  confirmRow() {return cy.getBySel("confirm-row")}
  confirmCheck() {return cy.get('input[type="checkbox"]')}
  signupButton() {return cy.get('button[aria-label="Sign Up"]')}
  loginButton() {return cy.get('button[aria-label="log in"]')}
  
  // Methods
  fillJoinLoginDialogFields(first_name, last_name, email, phone, password, check=true) {
    this.subTitle().invoke('text').then((dialog_header) => {
      if (dialog_header === "Please sign up for a ComeHome account.") {
        this.firstNameField().type(first_name)
        this.lastNameField().type(last_name)
        if (phone != undefined) {  // NOTE: Workaround, cypress does not allow typing enpty strings('')
          this.phoneField().type(phone)
        }
        if (check) {
          this.confirmCheck().check()
        }
      }
      if (email != undefined) {
        this.emailField().type(email)
      }
      if (password != undefined) {
        this.passwordField().type(password)
      }
    })
  }

  closeDialog() {
    this.closeButton().click()
    cy.wait(500)
  }
}
