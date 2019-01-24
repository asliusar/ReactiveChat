CREATE TABLE USER (
    ID bigint auto_increment primary key,
    NAME varchar
);

CREATE TABLE MESSAGE (
    ID bigint auto_increment primary key,
    TEXT varchar,
    DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    OWNER_ID int NOT NULL,
    foreign key (OWNER_ID)
    references USER(ID)
);