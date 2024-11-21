# FASP QAT Documentation

This repository contains the documentation website for the FASP Quantification Analytics Tool (QAT), built using [Docusaurus](https://docusaurus.io/).

## For Documentation Readers

### Accessing the Documentation

You can read the documentation at [https://timler.github.io/fasp-documentation/](https://timler.github.io/fasp-documentation/). 

The documentation is organized into:
- User guides
- Technical references
- API documentation
- Tutorials

### Sections

- **About (Product)**: This section contains product information about the FASP QAT project.
   The following types of content can be found here:
   - Application overview
   - Value proposition, benefits, and use cases, etc
   - Brochureware
- **User**: This section is aimed at users of the FASP QAT. Both end-users and more technical users will find useful information here.
   The following types of content can be found here:
   - Getting started (for end-users)
   - User guide
   - Cheatsheets
   - Troubleshooting and support
   - Configuration and customization (for more technical users)
   - Dashboard integration API documentation (for more technical users)
- **Developer**: This section is aimed at developers who are interested in contributing to the FASP QAT.
   The following types of content can be found here:
   - Getting started (for developers to install the FASP QAT on their own systems)
   - Software architecture
   - Database schema and other documentation
   - System design
   - Server setup and configuration
   - External system integrations
   - Data flow
   - Code documentation (high level)
   - Developer tutorials (or links to external tutorials)
- **Community**: This section contains information for the FASP community.
   The following types of content can be found here:
   - Contributing to the FASP QAT
   - Development process
   - Code of conduct
   - Security policy
   - Community meetings and events
   - Release notes
   - Roadmap
- **API documentation** contains generated API documentation for the FASP QAT APIs.

### Contributing to Documentation

There are several ways to contribute to our documentation:

1. **Direct Editing**: Each page has an "Edit this page" link at the bottom. Clicking this will take you to GitHub where you can suggest changes.

2. **Visual Editor**: We provide a user-friendly editor for non-technical users:
   - Go to [/admin](/admin) to login to the Decap CMS editor
   - Go to [/cms](/cms) to login to the Sveltia CMS editor

Note: you will need to have a GitHub account and authenticate with GitHub.

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
git clone git@github.com:timler/fasp-documentation.git
cd fasp-documentation
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
- Create a snapshot of your current docs as a new version
- Set the current version as the latest version
- Create a new version dropdown

The following files will be updated/created:
- The current docs will be copied to a new version directory (under `versioned_docs`)
- The current sidebar will be copied to a new version sidebar (under `versioned_sidebars`)
- The `versions.json` file will be updated to include the new version

**Note:**
If using the API documentation version, you will need to manually exclude the 
`api` folder from the `versioned_docs` folder. You also need to update the
sidebar under `versioned_sidebars` to exclude all the API sidebars.

**Important:**
The [Docusaurus documentation on versioning](https://docusaurus.io/docs/versioning)
has more details on how versioning works in Docusaurus. Including information on
when it is appropriate to create a new version and how to manage versions.

#### API Documentation

##### Adding a New API Version

1. Add the new OpenAPI/Swagger JSON or YAML file under `static/api/`
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

Deploy using the following command:
```bash
USE_SSH=true npm run deploy
```

This will build the website and push it to the `gh-pages` branch of the repository.

Note: before you deploy, you need to generate the API docs and run a build:

```bash
npm run gen-api-docs:all
npm run build
```

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

### Editors

To allow for non-technical users to edit the documentation, there are various 
options for CMS (Content Management Systems). 

These usually take the form of a hosted 3rd-party service that integrates 
with your Git repository, such as:
- [Holocron CMS](https://holocron.so/docusaurus-editor)
- [Dhub](https://dhub.io/)

Or a self-hosted option, such as:
- [Decap CMS](https://decapcms.org/)
- [Sveltia CMS](https://sveltia.com/)

The main difference between the two is that Decap CMS uses a traditional 
CMS editor with a sidebar tree view, while Sveltia CMS uses a more modern, 
React-based editor with a sidebar tree view. Sveltia CMS was built to be a drop
-in replacement for Decap CMS, with some additional features.

Docusaurus has a feature-request issue for a built-in CMS editor, but it is not
currently supported. [Read more](https://docusaurus.io/feature-requests/p/make-content-editing-easier).

#### Authentication

Embedded CMS require an OAuth2 backend to handle authentication. There are a
few off-the-shelf solutions for this such as [Sveltia CMS Auth](https://github.com/sveltia/sveltia-cms-auth).

It can be deployed as a Cloudflare worker and hooked up to a Github OAuth application.
Set `baseUrl` in the CMS `config.yml` to the base URL of the OAuth application.

#### Nested folders

Decap CMS supports [nested folders (beta)](https://decapcms.org/docs/collection-nested/), which 
allows for more complex content organization, however the directory structure is
limited to a single level of folders.

Sveltia CMS does not support nested folders yet.

Any new folders added under `/docs` will need to be added to collections in
`/admin/config.yml` and `/cms/config.yml`.