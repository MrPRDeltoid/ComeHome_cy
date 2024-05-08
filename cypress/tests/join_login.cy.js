import { MainHeader, JoinLoginDialog } from "../pages/basePage"
import { HomePage } from "../pages/homePage"


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
    join_login_dialog.signupButton().should('have.text', "Sign Up")
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
    join_login_dialog.loginButton().should('have.text', "Log In")
  })
})
