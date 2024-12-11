---
id: fasp-api
title: API
sidebar_label: fasp-api
sidebar_position: 1
---

# Backend Setup

## Prerequisites
Before proceeding, ensure you have the following installed:
- MySQL 8
- Git
- Java 17
- jenv (Optional: for managing multiple Java versions)

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone git@github.com:FASP-QAT/fasp-api.git
   cd fasp-api
   ```

   Please make sure that you have:
    - An SSH key generated on your local machine
    - The SSH key added to your GitHub account
    - An SSH agent running on your local machine

2. **Set up Application Directory Structure**  

   Set temporary variables to specify the location of your code and application home folder:

   ```bash
   QAT_CODE="$HOME/Code/QAT"
   QAT_HOME="$HOME/Code/QAT/home"
   ```

   Note: these variables are temporary and are only used to set up the application
   so it's not necessary to export them.

   Create application home folder:
   ```bash
   mkdir -p $QAT_HOME
   ```

   Extract the required folder structure:
   ```bash
   7zz x docs/QATFolders.7z -o"$QAT_HOME"
   ```

   Configure application home path:
   Edit `src/main/resources/application.properties` and set `qat.homeFolder` to the path of your application home folder (i.e. `QAT_HOME`).


3. **Setup MySQL Database**

   You can either use Docker to run MySQL 8, or run MySQL 8 as a service on your local machine.

   Depending on your choice, follow the instructions under 3a or 3b below.

   ***3a) Using Docker***

       **Create a Docker network**
       ```bash
       docker network create qat-network
      ```

      **Start MySQL container**
      ```bash
      docker run --name qat-mysql \
      --network qat-network \
      -e MYSQL_ROOT_PASSWORD=root \
      -e MYSQL_DATABASE=fasp \
      -p 3306:3306 \
      -d mysql:8
      ```

      **Create database and user** (__Optional__)
      ```bash
      docker exec -it qat-mysql mysql -uroot -proot
      ```
      Then create the database and user:
      ```sql
      CREATE DATABASE  IF NOT EXISTS `fasp` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
      CREATE USER 'faspUser'@'%' IDENTIFIED BY 'faspP@ssw0rd';
      GRANT ALL PRIVILEGES ON fasp.* TO 'faspUser'@'%';
      GRANT CREATE VIEW, CREATE ROUTINE ON fasp.* TO 'faspUser'@'%';
      ```

      :::warning FIXME:
      Run this command to set MySQL config to allow group by without an alias:
      ```bash
      docker exec -i qat-mysql mysql -uroot -proot fasp -e "SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));"
      ```
      Note: This is command will need to be run every time the container is restarted.The config should be added to the MySQL config file, but the default MySQL container does not have a config file. Once we are using docker compose we should be able to add this to the startup script, so it's not needed to be run manually.
      :::

      **Import database dumps**
      ```bash
      cd src/main/resources
      7zz x fasp-db.7z -o"$QAT_CODE"
      docker exec -i qat-mysql mysql -uroot -proot < "$QAT_CODE/fasp-db.sql"
      ```

   ***3b) Locally***

      Navigate to the project's resource directory and extract the database dump:
      ```bash
      cd src/main/resources
      7zz x fasp-db.7z -o"$QAT_CODE"
      ```

      Set up the database and user:
      ```bash
      mysql -u root -p
      ```
      Then run the following SQL commands:
      ```sql
      CREATE DATABASE  IF NOT EXISTS `fasp` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
      CREATE USER 'faspUser'@'%' IDENTIFIED BY 'faspP@ssw0rd';
      GRANT ALL PRIVILEGES ON fasp.* TO 'faspUser'@'%';
      GRANT CREATE VIEW, CREATE ROUTINE ON fasp.* TO 'faspUser'@'%';
      ```

      Then import the database dumps:
      ```bash
      # Import main database structure
      mysql -u root -p fasp < "$QAT_CODE/fasp-db.sql"
      ```

      Then add this line to my.conf, to allow group by without an alias, and restart MySQL:
      ```
      sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
      ```

   :::warning FIXME: 
   Currently it's unclear which scripts need to be executed after the database dump is imported.
   :::

4. **Update the QAT properties**  
   Edit `qat.properties` and add the database connection properties:

   ```bash
   vi $QAT_HOME/QAT/properties/qat.properties
   ```

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/fasp?allowPublicKeyRetrieval=true&useSSL=false
   spring.datasource.username=root
   spring.datasource.password=root
   ```

   :::warning FIXME: 
   Additional forecastStats properties are currently needed for the application to function correctly. Defaults should be included in the properties file
   :::

5. **Configure Java Version (Optional)**  
   If you're using jenv to manage Java versions:
   ```bash
   jenv add <path-to-java-17-installation>
   jenv local 17
   ```

6. **Build and Run the Application**
   ```bash
   ./mvnw clean spring-boot:run
   ```

   :::info Logs
   To monitor the application logs:
   ```bash
   tail -f "$QAT_HOME/QAT/logs/qat/faspLogger.log"
   ```
   :::

:::warning FIXME:
Add information on how to add new accounts to the application, or provide a script to do so.
:::

## Verify the API is running

1. Open the following URLs in your browser:

   http://localhost:8084/actuator/health

   You should see a response similar to the following:

   ```json
   {
      "status": "UP"
   }
   ```

## Swagger / OpenAPI

Access the Swagger UI at:

* http://localhost:8084/swagger-ui/index.html

Access the OpenAPI spec at:

* http://localhost:8084/v3/api-docs (JSON)
* http://localhost:8084/v3/api-docs.yaml

### Authenticate

To use the API, you need to authenticate. To do so, follow these steps:

To get an access token:

1. Scroll to `jwt-authentication-rest-controller`
2. Open the `Post` `/authenticate` endpoint
3. Click "Try it out"
4. Enter your login details
5. Click "Execute"

To use the token to authenticate your requests:

6. Scroll to the top, click "Authorize" button
7. Enter token
8. Click "Authorise"

Now you can use the Swagger API endpoints

# Troubleshooting

If you encounter any issues during the setup process, please check the following:
- Ensure all prerequisites are correctly installed
- Verify that the ports 3306 (MySQL) are not already in use
- Check the application logs for detailed error messages