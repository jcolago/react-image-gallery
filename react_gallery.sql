--Query text used for database

CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	path varchar(250) NOT NULL,
	description varchar(400) NOT NULL,
	likes int 
	);
	
	INSERT INTO images (path, description, likes)
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0 ),('images/me2.jpg', 'I took a dapper selfie.', 0), ('images/lake.jpg', 'I love being out on the lake.', 0), ('images/flex.png', 'GO JOE!', 0);

SELECT * FROM "images" ORDER BY "id" ASC;

UPDATE "images" SET "likes" = "likes" + 1 WHERE "id" = '4';

DELETE FROM "images" WHERE "id" = '1';