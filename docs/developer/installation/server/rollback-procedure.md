---
id: rollback-procedure
title: Rollback Procedure
sidebar_label: Rollback Procedure
sidebar_position: 3
---

# QAT Application Rollback Procedure

## Prerequisites
Before starting rollback, ensure you have:
- Previous commit hashes (saved during installation)
- Database backup (taken before installation)
- Access to both API and UI repositories

## Rollback Steps

### 1. Database Rollback
1. Connect to your MySQL database server
2. Restore the previous database backup:
   ```bash
   mysql -u [username] -p fasp < backup_$(date +%Y%m%d_%H%M%S).sql
   ```

### 2. UI Rollback
1. Navigate to the UI directory:
   ```bash
   cd /home/ubuntu/GitRepo/fasp-core-ui
   ```

2. Stop the UI service:
   ```bash
   pm2 stop QAT-React
   ```

3. Revert to previous commit:
   ```bash
   git checkout $(cat /backup/fasp/ui_last_commit_$(date +%Y%m%d_%H%M%S).txt)
   ```

4. Clean and reinstall dependencies:
   ```bash
   rm -rf node_modules
   npm install
   ```

5. Start the UI service:
   ```bash
   pm2 start QAT-React
   ```

6. Verify the UI service status:
   ```bash
   pm2 status
   ```

### 3. API Rollback
1. Navigate to the API directory:
   ```bash
   cd /home/ubuntu/GitRepo/fasp-api
   ```

2. Stop the API service:
   ```bash
   pm2 stop fasp-api
   ```

3. Revert to previous commit:
   ```bash
   git checkout $(cat /backup/fasp/api_last_commit_$(date +%Y%m%d_%H%M%S).txt)
   ```

4. Rebuild and redeploy:
   ```bash
   run sh buildAndDeploy.sh
   ```

5. Check the API logs:
   ```bash
   tail -f /home/ubuntu/QAT/logs/qat/faspLogger.log
   ```

### 4. Post-Rollback Verification
1. Check service status:
   ```bash
   pm2 status
   ```

2. Verify API endpoints are accessible
3. Verify UI is accessible through the browser
4. Test core functionality:
   - User login
   - Basic navigation
   - Core features
5. Monitor logs for any errors:
   ```bash
   # UI logs
   pm2 log QAT-React
   
   # API logs
   tail -f /home/ubuntu/QAT/logs/qat/faspLogger.log
   ```

## Troubleshooting
- If services fail to start:
  - Check logs for specific error messages
  - Verify all dependencies are installed
  - Confirm database connectivity
  - Check file permissions

- If database restore fails:
  - Verify backup file exists and is not corrupted
  - Check MySQL connection
  - Ensure sufficient disk space
  - Review MySQL error logs

- If Git checkout fails:
  - Verify commit hash exists
  - Check for uncommitted changes
  - Ensure proper repository access