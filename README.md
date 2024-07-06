# dl-course-app
## Tech Stack
- Frontend: **ReactJs**
- Backend: **Java-SpringBoot**
- DataBase: **MySQL**

# Manual Deployment Process
## Server setup:
    Server type: T2.medium server
    Database: mysql 
    Backend: java-17
    Frontend: node-20
    Ports: 22,80,8080,3306
## Database setup:
    Install mysql db: sudo apt install mysql-server -y
    Mysql secure installations: sudo mysql_secure_installation
        Choose option: y/n
    Check status: sudo service mysql status
    Restart service: sudo service mysql restart
### MySQL Password setup:
    sudo mysql -u root -p
    Enter password: empty+enter
    Password setup query:
    ```
        ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
        FLUSH PRIVILEGES;
        EXIT;
    ```
## Backend Setup
### backend folder: CRUD
- Update your database details in this file
  - backend/src/main/resources/**application.properties**
### Install java: 
- sudo apt install openjdk-17* -y
- Java --version
### build backend:
- Change to backend directory: cd backend/
- chmod +x mvnw
- ./mvnw clean package
- you will get target folder
- For manually running the application:
  - java -jar target/CRUD-0.0.1-SNAPSHOT.jar
- Browser pub-ip:8080/api
  - you will get message: **Successfully connected to Backend!**
### Backend service setup:
- backend service file to run the application in background
- sudo vi /etc/systemd/system/course.service
```
[Unit]
Description=Your Spring Boot Application
[Service]
User=ubuntu
ExecStart=/usr/bin/java -jar /home/ubuntu/dl-course-app/backend/target/CRUD-0.0.1-SNAPSHOT.jar
SuccessExitStatus=143
[Install]
WantedBy=multi-user.target
```
- sudo systemctl daemon-reload
- sudo systemctl start course
- sudo systemctl enable course
##### Check backend in browser: http://pub-ip:8080/api
 
## Frontend Setup 
### frontend folder: course_store
- **frontend/src/Services/BaseURL.jsx**
  - In **Line-1**: insted of **localhost** give backend **pub-ip**

### Install Node-20
```
curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
sudo apt-get install -y nodejs
node -v
```
- cd frontend/
- build tool is **npm**:
  - npm install
  - npm run build
- Output folder **dist**
### install nginx
- sudo apt install nginx -y
- sudo rm -rf /var/www/html/*
- sudo cp -rf dist/* /var/www/html/
- sudo systemctl restart nginx





