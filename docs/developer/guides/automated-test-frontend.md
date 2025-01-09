# Automated Testing - Frontend

This document serves as a guide for setting up, writing, and running automated tests for our frontend project. It explains the frameworks, tools, and conventions used to ensure consistency and efficiency.

## Overview
Automated tests are crucial for ensuring our React application's reliability and maintainability. We implement three levels of testing.

- **Unit Tests**: Vitest for component and unit testing
- **E2E Tests**: Cypress for integration and end-to-end testing
- **CI Pipeline**: GitHub Actions for automated testing

## Test Structure

### Directory Layout
```
├── src/
│   ├── __tests__/          # Unit tests
│   │   ├── components/     # Component tests
│   │   └── unit/          # Utility function tests
├── cypress/
│   ├── e2e/               # unit tests
│   ├── fixtures/          # Test data
│   └── support/           # Custom commands & utilities
```

## Writing Tests

### Unit Tests (Vitest)

#### Component Test Example
```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import LoginForm from '../components/LoginForm'

describe('LoginForm', () => {
  it('should handle successful login', async () => {
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)
    
    // Fill form
    await fireEvent.change(screen.getByLabelText('Username'), {
      target: { value: 'testuser' }
    })
    await fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' }
    })
    
    // Submit form
    await fireEvent.click(screen.getByRole('button', { name: /login/i }))
    
    // Assertions
    expect(onSubmit).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'password123'
    })
  })

  it('should show validation errors', async () => {
    render(<LoginForm />)
    
    // Submit empty form
    await fireEvent.click(screen.getByRole('button', { name: /login/i }))
    
    // Check error messages
    expect(screen.getByText('Username is required')).toBeInTheDocument()
  })
})
```

#### Utility Test Example
```javascript
describe('RealmService', () => {
    let service;

    beforeEach(() => {
        service = new RealmService();
    });

    test('should construct URL correctly', () => {
        expect(service.getUrl()).toBe(`${API_URL}/api/realm`);
    });
});
```

### E2E Tests (Cypress)

#### Login Flow Example
```javascript
describe('Login Flow', () => {
  beforeEach(() => {
    cy.mockRealApiCalls();
  })

  it('should login successfully', () => {
    cy.login('correctuser@qat.info', 'password');
    cy.url().should('include', '/#/ApplicationDashboard');
  })

  it('should handle login errors', () => {
    cy.intercept('POST', `${API_URL}/authenticate`, {
      statusCode: 401,
      body: { messageCode: 'static.message.login.invalidCredentials' }
    }).as('loginRequest');

    cy.login('wrong@email.com', 'wrongpass');
    cy.contains('Incorrect login or password').should('be.visible');
    cy.url().should('include', '/#/login');
  })
})
```

## Testing Standards

### Unit Tests
1. **Naming Convention**
   - Test files: `*.test.{js,jsx}`
   - Test suites: Describe the component/function
   - Test cases: Start with "should" and describe expected behavior

2. **Component Testing**
   - Test user interactions
   - Test rendering logic
   - Test prop changes
   - Test error states
   - Use React Testing Library queries in this order:
     1. getByRole
     2. getByLabelText
     3. getByText
     4. getByTestId (last resort)

3. **Mocking**
   - Mock external dependencies
   - Use `vi.mock()` for module mocks
   - Use `vi.fn()` for function mocks
   - Reset mocks between tests

### E2E Tests
1. **Structure**
   - Group related tests in a single spec file
   - Use descriptive test names
   - Setup test data in `beforeEach`
   - Clean up after tests

2. **Best Practices**
   - Mock API responses for consistent tests
   - Use custom commands for common operations
   - Add data-testid for stable selectors
   - Test the happy path first, then edge cases

3. **Custom Commands**
   ```javascript
   // cypress/support/commands.js
    Cypress.Commands.add('login', (email = 'test@example.com', password = 'password123') => {
    cy.visit('/#/login', {
        onBeforeLoad: (win) => {
        win.WebSocket = undefined;
        }
    });
    cy.window().then((win) => {
        win.localStorage.setItem('loginOnline', 'true');
        win.localStorage.setItem('sessionTimedOut', '0');
        win.localStorage.setItem('sessionChanged', '0');
        win.localStorage.setItem('lastLoggedInUsersLanguageChanged', 'false');
    });
    // Fill in the login form and submit
    cy.get('#emailId').should('be.visible').type(email);
    cy.get('#password').should('be.visible').type(password);
    cy.get('button[type="submit"]').should('be.visible').click();
    });
   ```

## Running Tests

### Unit Tests
```bash
npm test              # Run tests in watch mode
npm run test:coverage # Run tests with coverage
npm run test:ui       # Run tests with UI
```

### E2E Tests
```bash
npm run cypress:open  # Open Cypress UI
npm run cypress:run   # Run Cypress headless
npm run test:e2e     # Start dev server and run Cypress
```

### All Tests
```bash
npm run test:all     # Run both unit and E2E tests
```

## CI/CD Pipeline
- Runs on every push (excluding documentation changes)
- Sequential execution: unit tests → E2E tests → coverage reporting
- Artifacts: test videos and screenshots available on failure
- Coverage reports sent to Code Climate

### Coverage Requirements
- Minimum overall coverage: 80%
- Minimum function coverage: 80%
- Minimum branch coverage: 75%

## Debugging Tests

### Unit Tests
- Use `test.only()` to run specific tests
- Use `console.log()` or `debug()` from Testing Library
- Check test coverage with `npm run test:coverage`

### E2E Tests
- Use `cy.pause()` to pause test execution
- Use `.debug()` to inspect elements
- Check screenshots and videos in `cypress/screenshots` and `cypress/videos`
- Use Cypress UI for step-by-step debugging

## Common Issues & Solutions

### Unit Tests
1. **Async Updates**
   ```javascript
   // Wrong
   fireEvent.click(button)
   expect(result).toBe('updated')

   // Correct
   await fireEvent.click(button)
   await waitFor(() => {
     expect(result).toBe('updated')
   })
   ```

2. **Component Re-renders**
   ```javascript
   // Wrong
   const { rerender } = render(<Component prop={value} />)
   rerender()

   // Correct
   const { rerender } = render(<Component prop={value} />)
   rerender(<Component prop={newValue} />)
   ```

### E2E Tests
1. **Race Conditions**
   ```javascript
   // Wrong
   cy.get('.loading').should('not.exist')
   cy.get('.content')

   // Correct
   cy.get('.loading', { timeout: 10000 }).should('not.exist')
   cy.get('.content').should('be.visible')
   ```

## Contributing
1. Write tests for new features
2. Update tests for modified features
3. Ensure all tests pass locally before pushing
4. Follow the testing standards outlined above
5. Include updated test coverage reports 

## References
- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://docs.cypress.io/app/get-started/why-cypress)

Feel free to extend this documentation as our testing strategy evolves!
