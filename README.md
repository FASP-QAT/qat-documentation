# FASP QAT Documentation

This repository contains the documentation website for the FASP Quantification Analytics Tool (QAT), built using [Docusaurus](https://docusaurus.io/).

## For Documentation Readers

### Accessing the Documentation

You can read the documentation at [insert-documentation-url-here]. The documentation is organized into:
- User guides
- Technical references
- API documentation
- Tutorials

### Contributing to Documentation

There are several ways to contribute to our documentation:

1. **Direct Editing**: Each page has an "Edit this page" link at the bottom. Clicking this will take you to GitHub where you can suggest changes.

2. **Visual Editor**: We provide a user-friendly editor for non-technical users (coming soon).

3. **File Creation**: Documentation pages are written in Markdown (.md) or MDX (.mdx) format:
   - Markdown (.md) files are simple text files with basic formatting
   - MDX (.mdx) files allow for more advanced features like interactive React components

If you're new to Markdown, don't worry! It's a simple way to format text:
- Use `#` for headings
- Use `*` or `-` for bullet points
- Use `**text**` for bold
- Use `[text](url)` for links

Find more details in the [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features) page.

## For Documentation Maintainers

The following sections are for technical users who maintain and deploy the documentation.

### About the Platform

This documentation website is built using [Docusaurus](https://docusaurus.io/), a modern documentation platform that provides:
- Markdown-based content
- Versioning
- Internationalization (i18n)
- Search functionality
- Plugin system
- React-based customization

### Requirements

- Node.js 18.0 or higher
- npm (Node Package Manager)

### Getting Started

#### Check out the project

```bash
git clone [repository-url]
cd fasp-qat-documentation
```

#### Installation

```bash
npm install
```

#### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Documentation Management

#### Versioning Documentation

To create a new version for all documentation:

```bash
npm run docusaurus docs:version 1.0
```

This will:
- Create a snapshot of your current docs
- Create a new version dropdown
- Copy the current docs to a new version directory

#### API Documentation

##### Adding a New API Version

1. Add the new OpenAPI/Swagger JSON file under `static/api/`
2. Update the `docusaurus-plugin-openapi-docs` configuration in `docusaurus.config.js` to include the new version
3. Generate the API documentation:
```bash
npm run gen-api-docs:all
```
4. Update the sidebar configuration in `sidebars.js` to include the new API version sidebar

##### Updating API Documentation

To regenerate API documentation:
```bash
# Generate API docs
npm run gen-api-docs:all

# If needed, clean existing API docs first
npm run clean-api-docs:all
```

### Building and Deployment

#### Local Build

```bash
# Build the website
npm run build

# Test the build locally
npm run serve
```

The `build` command generates static content into the `build` directory.

#### Deploying to GitHub Pages

1. Update `docusaurus.config.js` with your GitHub Pages settings:
```javascript
module.exports = {
  url: 'https://username.github.io',
  baseUrl: '/repository-name/',
  organizationName: 'username',
  projectName: 'repository-name',
  deploymentBranch: 'gh-pages',  // The branch to deploy to
}
```

2. Deploy using the following command:
```bash
GIT_USER=<GITHUB_USERNAME> npm run deploy
```

This will build the website and push it to the `gh-pages` branch of your repository.

### Plugins

#### OpenAPI Documentation

This project uses [docusaurus-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs) for API documentation.

Key features:
- Automatic API documentation generation from OpenAPI/Swagger specifications
- Interactive API playground
- Support for multiple API versions

A demo and documentation can be found at [docusaurus-openapi.tryingpan.dev](https://docusaurus-openapi.tryingpan.dev/).

#### Search

Local search functionality is provided by [docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local).

Features:
- Offline search capability
- Multiple language support
- Customizable search settings