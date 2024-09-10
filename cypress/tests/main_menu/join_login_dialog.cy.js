import { MainHeader, JoinLoginDialog } from "../../pages/basePage"
import { HomePage } from "../../pages/homePage"


const main_header = new MainHeader
const join_login_dialog = new JoinLoginDialog
const home_page = new HomePage

describe('The Signup/Login Dialog', () => {
  // Basic tests for signup login dialog

  beforeEach(() => {
    // Load the landing page
    home_page.visit()
    // Click the Join or Login Button
    main_header.showJoinLoginDialog()
  })

  afterEach(() => {
    // Close the dialog
    join_login_dialog.closeDialog()
    main_header.joinLoginDialog().should('not.exist')
  })
    
  it('Has correct elements on signup form', () => {
    // Check signup form has correct elements
    join_login_dialog.title().should('have.text', "Welcome")
    join_login_dialog.subTitle().should('have.text', "Please sign up for a ComeHome account.")
    join_login_dialog.loginRow().should('have.text', "Already have an account?\u00a0Log in")
    join_login_dialog.firstNameField().should('exist')
    join_login_dialog.lastNameField().should('exist')
    join_login_dialog.emailField().should('exist')
    join_login_dialog.phoneField().should('exist')
    join_login_dialog.passwordField().should('exist')
    join_login_dialog.confirmRow().should('have.text', "Terms of Service AgreementBy registering, I agree to ComeHome\u00a0Terms of Use\u00a0and\u00a0Privacy Policy")
    join_login_dialog.signupButton().should('be.disabled').and('have.text', "Sign Up")
  })

  it('Has correct elements on login form', () => {
    // Check login form has correct elements
    join_login_dialog.loginLink().click()
    join_login_dialog.closeButton().should('exist')
    join_login_dialog.title().should('have.text', "Welcome")
    join_login_dialog.subTitle().should('have.text', "Please log in to your account")
    join_login_dialog.signupRow().should('have.text', "Don't have an account?\u00a0Sign up")
    join_login_dialog.firstNameField().should('not.exist')
    join_login_dialog.lastNameField().should('not.exist')
    join_login_dialog.emailField().should('exist')
    join_login_dialog.phoneField().should('not.exist')
    join_login_dialog.passwordField().should('exist')
    join_login_dialog.confirmRow().should('not.exist')
    join_login_dialog.loginButton().should('be.disabled').and('have.text', "Log In")
  })

  it('Shows correct messages for missing required fields on signup form', () => {
    // Focus into each field and verify required fields show error messages
    // NOTE: Tab not supported in basic cypress(https://github.com/cypress-io/cypress/issues/299)
    join_login_dialog.title().should('have.text', "Welcome")
    join_login_dialog.firstNameField().focus()
    join_login_dialog.lastNameField().focus()
    join_login_dialog.emailField().focus()
    join_login_dialog.phoneField().focus()
    join_login_dialog.passwordField().focus()
    join_login_dialog.firstNameField().focus()
    join_login_dialog.errorMessage().should('have.length', 5)
    const exp_errors = ['Please enter your first name', 'Please enter your last name', 'Please enter your email', '', 'Please enter your password']
    join_login_dialog.errorMessage().each(($el, index) => {
      if (index === 3) {  // Phone not a required field
        cy.wrap($el).should('not.be.visible')
      } else {
        cy.wrap($el).should('be.visible').and('have.text', exp_errors[index])
      }
    })
    join_login_dialog.signupButton().should('be.disabled')
  })

  it('Shows correct messages for invalid email/valid password on signup form', () => {
    // Enter required valid field info, with invalid email/valid password to verify correct error messages
    const index = 2
    join_login_dialog.fillJoinLoginDialogFields('First', 'Last', undefined, undefined, 'Password123', undefined)
    join_login_dialog.emailField().type('invalid_email')
    join_login_dialog.firstNameField().focus()  // NOTE: Cypress unable to press TAB
    join_login_dialog.errorMessage().eq(index).should('be.visible').and('have.text', 'Invalid email')
    join_login_dialog.signupButton().click()
    join_login_dialog.errorMessage().eq(index).should('be.visible').and('have.text', 'the given email is unsupported')
    join_login_dialog.emailField().type('invalid_email@gmail')
    join_login_dialog.firstNameField().focus()
    join_login_dialog.errorMessage().eq(index).should('be.visible').and('have.text', 'Invalid email')
    join_login_dialog.signupButton().click()
    join_login_dialog.errorMessage().eq(index).should('be.visible').and('have.text', 'the given email is unsupported')
    join_login_dialog.emailField().type('invalid_email@gmail.com')
    join_login_dialog.firstNameField().focus()
    join_login_dialog.errorMessage().eq(index).should('not.be.visible')
    join_login_dialog.signupButton().should('be.enabled')
  })

  it('Shows correct messages for valid email/invalid password on signup form', () => {
    // Enter required valid field info, with valid email/invalid password to verify correct error messages
    const index = 4
    join_login_dialog.fillJoinLoginDialogFields('First', 'Last', 'valid_email@gmail.com', undefined, undefined, undefined)
    join_login_dialog.passwordField().type('1234')
    join_login_dialog.firstNameField().focus()  // NOTE: Cypress unable to press TAB
    join_login_dialog.errorMessage().eq(index).should('be.visible').and('have.text', 'Password must be at least 8 characters')
    join_login_dialog.signupButton().click()
    join_login_dialog.errorMessage().eq(index).should('be.visible').and('have.text', 'password must be 8 or more characters and cannot be a common dictionary word')
    join_login_dialog.passwordField().type('12345678')
    join_login_dialog.firstNameField().focus()
    join_login_dialog.errorMessage().eq(index).should('not.be.visible')
    join_login_dialog.signupButton().should('be.enabled')
  })

  it('Shows correct messages for invalid email/valid password on login form', () => {
    // Enter valid password with invalid email to verify correct error messages
    const index = 0
    join_login_dialog.loginLink().click()
    join_login_dialog.fillJoinLoginDialogFields(undefined, undefined, undefined, undefined, 'Password123', undefined)
    join_login_dialog.emailField().type('invalid_email')
    join_login_dialog.passwordField().focus()  // NOTE: Cypress unable to press TAB
    join_login_dialog.errorMessage().eq(index).should('be.visible').and('have.text', 'Invalid email')
    join_login_dialog.emailField().type('invalid_email@gmail')
    join_login_dialog.passwordField().focus()
    join_login_dialog.errorMessage().eq(index).should('be.visible').and('have.text', 'Invalid email')
    join_login_dialog.emailField().type('invalid_email@gmail.com')
    join_login_dialog.passwordField().focus()
    join_login_dialog.errorMessage().eq(index).should('not.be.visible')
    join_login_dialog.loginButton().should('be.enabled')
  })

  it('Shows correct messages for valid email/invalid password on login form', () => {
    // Enter valid email with invalid password to verify correct error messages
    const index = 1
    join_login_dialog.loginLink().click()
    join_login_dialog.fillJoinLoginDialogFields(undefined, undefined, 'valid_email@gmail.com', undefined, undefined, undefined)
    join_login_dialog.passwordField().type('1234')
    join_login_dialog.emailField().focus()  // NOTE: Cypress unable to press TAB
    join_login_dialog.errorMessage().eq(index).should('be.visible').and('have.text', 'Password must be at least 8 characters')
    join_login_dialog.passwordField().type('12345678')
    join_login_dialog.emailField().focus()
    join_login_dialog.errorMessage().eq(index).should('not.be.visible')
    join_login_dialog.loginButton().should('be.enabled')
  })
})
