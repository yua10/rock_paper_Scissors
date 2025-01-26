DROP TABLE IF EXISTS country;

CREATE TABLE country (
    country_id INT GENERATED ALWAYS AS IDENTITY,
    name text NOT NULL,
    continent text NOT NULL,
    population integer NOT NULL, 
    capital text NOT NULL,
    CONSTRAINT country_continent_check CHECK (
        continent IN ('Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'Antarctica', 'South America')
    )
);

INSERT INTO country (name, continent, population, capital) VALUES
('United_Kingdom', 'Europe', 67220000, 'London'),
('Japan', 'Asia', 126300000, 'Tokyo'),
('Germany', 'Europe', 83149300, 'Berlin'),
('United_States', 'North America', 331893745, 'Washington, D.C.'),
('Nigeria', 'Africa', 206139589, 'Abuja'),
('Australia', 'Oceania', 25687041, 'Canberra');
