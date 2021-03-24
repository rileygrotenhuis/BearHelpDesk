CREATE TABLE tickets (
    "ticket_id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255),
    "type" VARCHAR(255),
    "urgency" INTEGER,
    "description" VARCHAR(1000),
    "date_submitted" VARCHAR(255),
    "employee" VARCHAR(255),
    "status" VARCHAR(255),
    "date_completed" VARCHAR(255)
    CONSTRAINT "employee" FOREIGN KEY ("employee")
        REFERENCES public."employees" ("employee_id")
);