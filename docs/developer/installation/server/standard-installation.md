---
id: standard-installation
title: Standard Installation
sidebar_label: Standard Installation
sidebar_position: 2
---

# FASP Application Installation Guide

## Prerequisites
- Java Runtime Environment
- Node.js server with npm
- MySQL database server
- Git
- PM2 (Node.js process manager)
- Access to FASP repositories

## Pre-Installation Preparation

### 1. Record Current Git Commit Hash
Before pulling the latest code, record the current commit hash for both the API and UI repositories. This will allow you to revert to the previous state if needed.

1. Navigate to the API repository:
   ```bash
   cd /home/ubuntu/GitRepo/fasp-api
   git rev-parse HEAD > /backup/fasp/api_last_commit_$(date +%Y%m%d_%H%M%S).txt
   ```

2. Navigate to the UI repository:
   ```bash
   cd /home/ubuntu/GitRepo/fasp-core-ui
   git rev-parse HEAD > /backup/fasp/ui_last_commit_$(date +%Y%m%d_%H%M%S).txt
   ```

### 2. Backup Current Database
1. Connect to your MySQL database server
2. Back up your existing database:
   ```bash
   mysqldump -u [username] -p fasp > backup_$(date +%Y%m%d_%H%M%S).sql
   ```

## Installation Steps

### 1. Database Preparation
1. Connect to your MySQL database server
2. Execute all provided SQL scripts in sequential order:
   ```bash
   mysql -u [username] -p fasp < [script_name].sql
   ```


### 2. UI Installation
1. Navigate to the UI deployment directory:
   ```bash
   cd /home/ubuntu/GitRepo/fasp-core-ui
   ```

2. Stop the existing UI service:
   ```bash
   pm2 stop QAT-React
   ```

3. Get the latest code:
   ```bash
   git checkout master
   git pull
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Start the UI service:
   ```bash
   pm2 start QAT-React
   ```

6. Verify the service status:
   ```bash
   pm2 status
   ```

7. Check logs if needed:
   ```bash
   pm2 log
   ```

### 3. API Installation
1. Navigate to the API directory:
   ```bash
   cd /home/ubuntu/GitRepo/fasp-api
   ```

2. Build and deploy the API:
   ```bash
   run sh buildAndDeploy.sh
   ```

3. Check the API logs:
   ```bash
   tail -f /home/ubuntu/QAT/logs/qat/faspLogger.log
   ```

### 4. Post-Installation Verification
1. Verify API endpoints are accessible
2. Verify UI is accessible through the browser
3. Perform basic functionality testing:
   - User login
   - Basic navigation
   - Core features
4. Monitor logs for any errors:
   - UI logs: `pm2 log`
   - API logs: `tail -f faspLogger.log`

## Troubleshooting
- If services fail to start, check the log files for specific error messages
- Ensure database connectivity is established
- Confirm all required ports are open and accessible
- Verify file permissions are set correctly
- If build fails:
  - Check Git branch is correct
  - Verify all dependencies are installed
  - Check disk space availability
  - Review build logs for specific errors