-- Up
CREATE TABLE Profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(30) NOT NULL,
    author varchar(30) NOT NULL,
    startDate DATE NOT NULL,
    subscriptionLength SMALLINT
);

-- Down
DROP TABLE Profile;
