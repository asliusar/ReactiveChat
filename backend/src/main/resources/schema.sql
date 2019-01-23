CREATE TABLE USERS (
    ID bigint auto_increment primary key,
    NAME varchar
);

CREATE TABLE MESSAGES (
    ID bigint auto_increment primary key,
    TEXT varchar,
    DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    OWNER_ID int,
    foreign key (OWNER_ID)
    references USERS(ID)
);