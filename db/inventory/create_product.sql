CREATE TABLE product (
  product_id SERIAL PRIMARY KEY NOT NULL,
  name varchar(40) NOT NULL,
  price integer NOT NULL,
  image_url text NOT NULL
  );
  
INSERT INTO product (name, price, image_url) VALUES (name, price, image_url)