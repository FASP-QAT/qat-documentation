---
id: fasp-core-ui
title: Core UI
sidebar_label: fasp-core-ui
sidebar_position: 2
---

# Frontend Setup

## Prerequisites

Before you begin, ensure you have the following installed:
- Git
- Node.js 16
- npm (Node Package Manager)
- nvm (Optional: for managing multiple Node.js versions)

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone git@github.com:FASP-QAT/fasp-core-ui.git
   cd fasp-core-ui
   ```

   Please make sure that you have:
    - An SSH key generated on your local machine
    - The SSH key added to your GitHub account
    - An SSH agent running on your local machine

2. **Configure Node Version (Optional)**  
   If you're using nvm to manage Node.js versions:
   ```bash
   nvm install 16
   nvm use 16
   ```

3. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

5. **Configuration (Optional)**  
   To connect to a different backend server, modify the `API_URL` in `Constants.js`. The application is set up to connect to the live backend server by default.

:::tip Login
To login to the application, you will need to create a new user in the backend. 

The instructions for creating a user are available in the [fasp-api](/docs/developer/installation/developer/fasp-api) installation guide, if you are running your own backend server. 

If you are connecting to the demo QAT server, you, you will need to request a new user account from the FASP team.
:::

## Verify the application is running

The application will be available at:
http://localhost:4202/
