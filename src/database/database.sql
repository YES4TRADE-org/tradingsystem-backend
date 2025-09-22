/* Create all needed tables for database */
CREATE TABLE users (
	student_id int PRIMARY KEY,
	first_name VARCHAR(225),
	last_name VARCHAR(225),
	grade_level VARCHAR(225),
	college VARCHAR(225),
	email VARCHAR(225),
	passwords VARCHAR
);

CREATE TABLE trading_books (
	books_id BIGSERIAL PRIMARY KEY,
	title VARCHAR(225),
	requirements VARCHAR(225),
	methods VARCHAR(225),
	image BYTEA
);

CREATE TABLE trading_notes (
	notes_id BIGSERIAL PRIMARY KEY,
	title VARCHAR(225),
	requirements VARCHAR(225),
	methods VARCHAR(225),
	image BYTEA
);

CREATE TABLE trading_uniform (
	uniform_id BIGSERIAL PRIMARY KEY,
	title VARCHAR(225),
	requirements VARCHAR(225),
	methods VARCHAR(225),
	image BYTEA
);