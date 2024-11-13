---
id: api
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
   git clone https://github.com/FASP-QAT/fasp-api.git
   cd fasp-api
   ```

2. **Set up Application Directory Structure**  

   2.1. Extract the required folder structure to your desired location.
   Set temporary variables to specify the location of your code and application home folder:
   ```bash
   QAT_CODE="$HOME/Code/QAT"
   QAT_HOME="$HOME/Code/QAT/home"
   ```

   2.2. Create application home folder:
   ```bash
   mkdir -p $QAT_HOME
   ```

   2.3. Extract the required folder structure:
   ```bash
   7zz x docs/QATFolders.7z -o"$QAT_HOME"
   ```

   2.4. Configure application home path:
   Edit `src/main/resources/application.properties` and set `qat.homeFolder` to the path of your application home folder (i.e. `QAT_HOME`).


3. **Setup MySQL Database**

   You can either use Docker to run MySQL 8, or install MySQL 8 locally.

   ***3A. Using Docker***

       3.1. **Create a Docker network**
       ```bash
       docker network create qat-network
      ```

      3.2. **Start MySQL container**
      ```bash
      docker run --name qat-mysql \
      --network qat-network \
      -e MYSQL_ROOT_PASSWORD=root \
      -e MYSQL_DATABASE=fasp \
      -p 3306:3306 \
      -d mysql:8
      ```

      3.3. **Import database dumps**
      ```bash
      cd src/main/resources
      7zz x fasp-db.7z -o"$QAT_CODE"
      docker exec -i qat-mysql mysql -uroot -proot < "$QAT_CODE/fasp-db.sql"
      docker exec -i qat-mysql mysql -uroot -proot fasp < "$QAT_CODE/fasp-api/src/main/resources/mod2scripts/completeScript.sql"
      ```

   ***3B Locally***

      Navigate to the project's resource directory and extract the database dump:
      ```bash
      cd src/main/resources
      7zz x fasp-db.7z -o"$QAT_CODE"
      ```

      Then import the database dumps:
      ```bash
      # Import main database structure
      mysql -u root -p fasp < "$QAT_CODE/fasp-db.sql"
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

# Troubleshooting

If you encounter any issues during the setup process, please check the following:
- Ensure all prerequisites are correctly installed
- Verify that the ports 3306 (MySQL) are not already in use
- Check the application logs for detailed error messages