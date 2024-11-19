"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76897],{52104:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"developer/installation/api","title":"API","description":"Prerequisites","source":"@site/docs/developer/installation/api.md","sourceDirName":"developer/installation","slug":"/developer/installation/api","permalink":"/fasp-documentation/docs/developer/installation/api","draft":false,"unlisted":false,"editUrl":"https://github.com/timler/fasp-documentation/tree/main/docs/developer/installation/api.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"api","title":"API","sidebar_label":"fasp-api","sidebar_position":1},"sidebar":"developerSidebar","previous":{"title":"Database","permalink":"/fasp-documentation/docs/developer/database"},"next":{"title":"fasp-core-ui","permalink":"/fasp-documentation/docs/developer/installation/core-ui"}}');var i=s(74848),a=s(28453);const l={id:"api",title:"API",sidebar_label:"fasp-api",sidebar_position:1},t="Backend Setup",o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"Verify the API is running",id:"verify-the-api-is-running",level:2},{value:"Swagger / OpenAPI",id:"swagger--openapi",level:2},{value:"Authenticate",id:"authenticate",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"backend-setup",children:"Backend Setup"})}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before proceeding, ensure you have the following installed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MySQL 8"}),"\n",(0,i.jsx)(n.li,{children:"Git"}),"\n",(0,i.jsx)(n.li,{children:"Java 17"}),"\n",(0,i.jsx)(n.li,{children:"jenv (Optional: for managing multiple Java versions)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Clone the Repository"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/FASP-QAT/fasp-api.git\ncd fasp-api\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Set up Application Directory Structure"})}),"\n",(0,i.jsx)(n.p,{children:"2.1. Extract the required folder structure to your desired location.\nSet temporary variables to specify the location of your code and application home folder:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'QAT_CODE="$HOME/Code/QAT"\nQAT_HOME="$HOME/Code/QAT/home"\n'})}),"\n",(0,i.jsx)(n.p,{children:"2.2. Create application home folder:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir -p $QAT_HOME\n"})}),"\n",(0,i.jsx)(n.p,{children:"2.3. Extract the required folder structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'7zz x docs/QATFolders.7z -o"$QAT_HOME"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["2.4. Configure application home path:\nEdit ",(0,i.jsx)(n.code,{children:"src/main/resources/application.properties"})," and set ",(0,i.jsx)(n.code,{children:"qat.homeFolder"})," to the path of your application home folder (i.e. ",(0,i.jsx)(n.code,{children:"QAT_HOME"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Setup MySQL Database"})}),"\n",(0,i.jsx)(n.p,{children:"You can either use Docker to run MySQL 8, or install MySQL 8 locally."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"3A. Using Docker"})})}),"\n",(0,i.jsxs)(n.p,{children:["3.1. ",(0,i.jsx)(n.strong,{children:"Create a Docker network"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker network create qat-network\n"})}),"\n",(0,i.jsxs)(n.p,{children:["3.2. ",(0,i.jsx)(n.strong,{children:"Start MySQL container"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run --name qat-mysql \\\n--network qat-network \\\n-e MYSQL_ROOT_PASSWORD=root \\\n-e MYSQL_DATABASE=fasp \\\n-p 3306:3306 \\\n-d mysql:8\n"})}),"\n",(0,i.jsxs)(n.p,{children:["3.3. ",(0,i.jsx)(n.strong,{children:"Create database and user"})," (",(0,i.jsx)(n.strong,{children:"Optional"}),")"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker exec -it qat-mysql mysql -uroot -proot\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then create the database and user:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE  IF NOT EXISTS `fasp` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;\nCREATE USER 'faspUser'@'%' IDENTIFIED BY 'faspP@ssw0rd';\nGRANT ALL PRIVILEGES ON fasp.* TO 'faspUser'@'%';\nGRANT CREATE VIEW, CREATE ROUTINE ON fasp.* TO 'faspUser'@'%';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["3.4. ",(0,i.jsx)(n.strong,{children:"Import database dumps"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'cd src/main/resources\n7zz x fasp-db.7z -o"$QAT_CODE"\ndocker exec -i qat-mysql mysql -uroot -proot < "$QAT_CODE/fasp-db.sql"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"3B Locally"})})}),"\n",(0,i.jsx)(n.p,{children:"Navigate to the project's resource directory and extract the database dump:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'cd src/main/resources\n7zz x fasp-db.7z -o"$QAT_CODE"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Set up the database and user:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mysql -u root -p\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then run the following SQL commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE  IF NOT EXISTS `fasp` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;\nCREATE USER 'faspUser'@'%' IDENTIFIED BY 'faspP@ssw0rd';\nGRANT ALL PRIVILEGES ON fasp.* TO 'faspUser'@'%';\nGRANT CREATE VIEW, CREATE ROUTINE ON fasp.* TO 'faspUser'@'%';\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then import the database dumps:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Import main database structure\nmysql -u root -p fasp < "$QAT_CODE/fasp-db.sql"\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"FIXME:",type:"warning",children:(0,i.jsx)(n.p,{children:"Currently it's unclear which scripts need to be executed after the database dump is imported."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Update the QAT properties"}),(0,i.jsx)(n.br,{}),"\n","Edit ",(0,i.jsx)(n.code,{children:"qat.properties"})," and add the database connection properties:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vi $QAT_HOME/QAT/properties/qat.properties\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-properties",children:"spring.datasource.url=jdbc:mysql://localhost:3306/fasp?allowPublicKeyRetrieval=true&useSSL=false\nspring.datasource.username=root\nspring.datasource.password=root\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"FIXME:",type:"warning",children:(0,i.jsx)(n.p,{children:"Additional forecastStats properties are currently needed for the application to function correctly. Defaults should be included in the properties file"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configure Java Version (Optional)"}),(0,i.jsx)(n.br,{}),"\n","If you're using jenv to manage Java versions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"jenv add <path-to-java-17-installation>\njenv local 17\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Build and Run the Application"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./mvnw clean spring-boot:run\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"Logs",type:"info",children:[(0,i.jsx)(n.p,{children:"To monitor the application logs:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'tail -f "$QAT_HOME/QAT/logs/qat/faspLogger.log"\n'})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"FIXME:",type:"warning",children:(0,i.jsx)(n.p,{children:"Add information on how to add new accounts to the application, or provide a script to do so."})}),"\n",(0,i.jsx)(n.h2,{id:"verify-the-api-is-running",children:"Verify the API is running"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open the following URLs in your browser:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://localhost:8084/actuator/health",children:"http://localhost:8084/actuator/health"})}),"\n",(0,i.jsx)(n.p,{children:"You should see a response similar to the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "status": "UP"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"swagger--openapi",children:"Swagger / OpenAPI"}),"\n",(0,i.jsx)(n.p,{children:"Access the Swagger UI at:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://localhost:8084/swagger-ui/index.html",children:"http://localhost:8084/swagger-ui/index.html"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Access the OpenAPI spec at:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://localhost:8084/v3/api-docs",children:"http://localhost:8084/v3/api-docs"})," (JSON)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://localhost:8084/v3api-docs.yaml",children:"http://localhost:8084/v3api-docs.yaml"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"authenticate",children:"Authenticate"}),"\n",(0,i.jsx)(n.p,{children:"To use the API, you need to authenticate. To do so, follow these steps:"}),"\n",(0,i.jsx)(n.p,{children:"To get an access token:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Scroll to ",(0,i.jsx)(n.code,{children:"jwt-authentication-rest-controller"})]}),"\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.code,{children:"Post"})," ",(0,i.jsx)(n.code,{children:"/authenticate"})," endpoint"]}),"\n",(0,i.jsx)(n.li,{children:'Click "Try it out"'}),"\n",(0,i.jsx)(n.li,{children:"Enter your login details"}),"\n",(0,i.jsx)(n.li,{children:'Click "Execute"'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To use the token to authenticate your requests:"}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:'Scroll to the top, click "Authorize" button'}),"\n",(0,i.jsx)(n.li,{children:"Enter token"}),"\n",(0,i.jsx)(n.li,{children:'Click "Authorise"'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now you can use the Swagger API endpoints"}),"\n",(0,i.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.p,{children:"If you encounter any issues during the setup process, please check the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ensure all prerequisites are correctly installed"}),"\n",(0,i.jsx)(n.li,{children:"Verify that the ports 3306 (MySQL) are not already in use"}),"\n",(0,i.jsx)(n.li,{children:"Check the application logs for detailed error messages"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);