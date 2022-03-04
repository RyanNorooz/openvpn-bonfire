-- Up
CREATE TABLE Profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(30) NOT NULL,
    startDate DATE NOT NULL,
    subscriptionLength SMALLINT
);


INSERT INTO Profile (name, startDate, subscriptionLength) values('test-1', '2022-3-1', 1);
INSERT INTO Profile (name, startDate, subscriptionLength) values('test-2', '2022-3-2', 2);
INSERT INTO Profile (name, startDate, subscriptionLength) values('test-3', '2022-3-3', 3);

-- Down
DROP TABLE Profile;
