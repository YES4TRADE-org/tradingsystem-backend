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

INSERT INTO users VALUES (2422313, 'rapha', 'san juan', '2ndyear', 'cen', 'raphaelsa@gmail.com', 'asdawda');

CREATE TABLE trading_products (
	product_id BIGSERIAL PRIMARY KEY,
	title VARCHAR(225),
	requirements VARCHAR(225),
	url VARCHAR(225),
	price Decimal(10,2),
	methods INT References methods(method_id),
	student_id INT References users(student_id),
	program INT References programs(program_id),
	type INT References types(type_id),
);

CREATE TABLE methods (
	method_id BIGSERIAL PRIMARY KEY,
	methods VARCHAR(225)
);

CREATE TABLE programs(
	program_id BIGSERIAL PRIMARY KEY,
	programs VARCHAR(225)
);

CREATE TABLE types(
	type_id BIGSERIAL PRIMARY KEY,
	types VARCHAR(225)
);

/* Example insert of books value */
INSERT INTO trading_books (
	title, 
	requirements, 
	methods, 
	url)
VALUES ('calculus', 'fildis', 'trade', 'https://res.cloudinary.com/dkacxbbwh/image/upload/t_media_lib_thumb/cld-sample.jpg');

INSERT INTO methods (methods) VALUES ('Trade'), ('Sell');

INSERT INTO programs (programs) VALUES ('CIT'), ('CABHA'), ('CEN'), ('CAS'), ('CAM'), ('CAG'), ('CTE');

INSERT INTO types (types) VALUES ('Book'), ('Notes'), ('Uniforms');