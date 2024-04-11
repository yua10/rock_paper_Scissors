
TRUNCATE country RESTART IDENTITY;

INSERT INTO country (name, capital, population, languages, fun_fact, map_image_url)
VALUES
    ('Brazil', 'Brasília', 212559417, 'Portuguese', 'Brazil is the fifth largest country in the world by both land area and population.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png'),
    ('South Africa', 'Pretoria', 57779622, 'Afrikaans, English, Zulu, Xhosa, and others', 'South Africa has 11 official languages.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1200px-Flag_of_South_Africa.svg.png'),
    ('Australia', 'Canberra', 24982688, 'English', 'Australia is the only country that is also a continent.', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Flag_of_Australia.svg/1200px-Flag_of_Australia.svg.png');
