# Bear Help Desk

Bear Help Desk is an IT Support Ticket Management System where users can submit IT Support Tickets and employees can access and work with those tickets. 

## Requirements
 
---

You will need the latest versions of [Node](https://nodejs.org/en/download/) and [NPM](https://www.npmjs.com/get-npm) to run Bear Help Desk correctly. To check whether you have the correct version, run the following commands:
```bash
node -v
```

```bash
npm -v
```

You will also need the latest version of PostgreSQL to run the database that is needed for this application. You can download the most recent version of PostgreSQL using this [link](https://www.postgresql.org/download/)

## Setup

---

You can utilize this repository by one of the two ways:

1. Downloading the source code directly from this [link](https://github.com/rileygrotenhuis/BearHelpDesk/archive/refs/heads/master.zip)
2. Cloning the repository using your preferred Command Line Interface and running the following comand:

    ```bash
    git clone https://github.com/rileygrotenhuis/BearHelpDesk.git
    ```
    
> Note: Whether you chose to download, or clone, this repository, it is preferred that you do so inside of your `documents/` directory.

> Note: If you download the source code directly from GitHub into a `.zip` file, you will need to rename the folder from `BearHelpDesk-master` to just `BearHelpDesk`.

3. You will now need to setup the database for this project, for there is no public database:

    1. Open PostgreSQL in your Command Line Interface under the `Postgres` user

          ```bash
          psql -U postgres
          ```
    2. Then you will need to create a new database called `bearhelpdesk` and connect to that database

          ```bash
          CREATE DATABASE bearhelpdesk
          ```
          
          ```bash
          \c bearhelpdesk
          ```
          
    3. Then you will need to create the tables necessary for the `bearhelpdesk` database

          ```sql
            CREATE TABLE employees (
              "employee_email" VARCHAR(255) PRIMARY KEY,
              "employee_password" VARCHAR(255),
              "first_name" VARCHAR(255),
              "last_name" VARCHAR(255)
            );

            CREATE TABLE tickets (
              "ticket_id" SERIAL PRIMARY KEY,
              "title" VARCHAR(255),
              "type" VARCHAR(255),
              "urgency" INTEGER,
              "description" VARCHAR(1000),
              "date_submitted" VARCHAR(255),
              "employee" VARCHAR(255),
              "status" VARCHAR(255),
              "date_completed" VARCHAR(255),
              "client_name" VARCHAR(255),
              "client_email" VARCHAR(255),
              CONSTRAINT "employee" FOREIGN KEY ("employee")
                  REFERENCES public."employees" ("employee_email")
            );
          ```
          
## Usage

--- 

1. Open your preferred Command Line Interface (Terminal, Command Prompt, iTask2, PowerShell, etc.) in two separate windows and change your directory until you are in the project folder for both windows

    ```bash
    cd documents
    cd BearHelpDesk
    ```

2. Once you are in the project's folder, you will need to create a `.env` file in the root directory and include the following environment variable inside of that file:

    ```env
    SESSION_SECRET=[ENTER YOUR SECRET CODE HERE]
    ```

3. At this point, you can now run the following commands in your Command Line Interface to run the Bear Help Desk web application in two separate terminals

    ```bash
    cd client
    npm install
    npm start
    ```

    ```bash
    cd server
    npm install
    node server.js
    ```

> Note: Once you run this application, you can access it at http://localhost:3000/

## Files & Directories

---

- *client/*
  - *public/*
    - `index.html`
  - *src/*
    - *Components/*
      - `ContactForm.js`
      - `EmployeeInfo.js`
      - `LoginForm.js`
      - `Navbar.js`
      - `Navbar2.js`
      - `NoTicketsCard.js`
      - `NoTicketsCard2.js`
      - `NoTicketrsCard3.js`
      - `SubmitTicketForm.js`
      - `TicketAction.js`
      - `TicketCard.js`
      - `TicketCard2.js`
      - `TicketCard3.js`
      - `TicketCard4.js`
    - *Pages/*
      - `BoardPage.js`
      - `DashboardPage.js`
      - `HomePage.js`
      - `LoginPage.js`
      - `ProfilePage.js`
      - `SubmitPage.js`
      - `TicketPage.js`
    - `App.js`
    - `App.min.css`
    - `index.js`
- *db/*
  - `Employees.sql`
  - `Tickets.sql`
- *server/*
  - *config/*
    - `db.config.js`
    - `passport.config.js`
  - *controllers/*
    - `board.controller.js`
    - `contact.controller.js`
    - `dashboard.controller.js`
    - `profile.controller.js`
    - `submit.controller.js`
  - *routes/*
    - `board.routes.js`
    - `contact.routes.js`
    - `dashboard.routes.js`
    - `login.routes.js`
    - `profile.routes.js`
    - `submit.routes.js`
  - `server.js`

## Notes

This project currently does not have a list site to where you can test it. I am hoping to change this in the future as I am hoping to include a testing site for all of my personal projects that will be connected to my [Personal Portfolio Website](http://rileygrotenhuis.com), but as of now you must run this project locally.

## Contributors

---

- ### Riley Grotenhuis (rg1050@live.missouristate.edu)
