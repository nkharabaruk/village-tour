INSERT INTO village_tour.village (name) VALUES ('с.Матвіївка');
INSERT INTO village_tour.village (name) VALUES ('Буковецький перевал');
INSERT INTO village_tour.village (name) VALUES ('с.Трипілля');
INSERT INTO village_tour.village (name) VALUES ('с.Підгірці');
INSERT INTO village_tour.village (name) VALUES ('с.Унів');
INSERT INTO village_tour.village (name) VALUES ('с.Звенигород');
INSERT INTO village_tour.village (name) VALUES ('с.Криворівня');
INSERT INTO village_tour.village (name) VALUES ('с.Брюховичі');

INSERT INTO village_tour.place (description, name, photo) VALUES ('Для любителів гір.', 'Перевал', '1.jpg');
INSERT INTO village_tour.place (description, name, photo) VALUES ('Для любителів провести час у невеликих містах.', 'Містечко', '2.jpg');
INSERT INTO village_tour.place (description, name, photo) VALUES ('Тури селищами України.', 'Селище', '3.jpg');
INSERT INTO village_tour.place (description, name, photo) VALUES ('Оглядові тури сілької місцини та звичаїв.', 'Село', '4.jpg');
INSERT INTO village_tour.place (description, name, photo) VALUES ('Місця для відпочинку на березі річки.', 'Місцевість біля річки', '5.jpg');
INSERT INTO village_tour.place (description, name, photo) VALUES ('Місця для відпочинку біля озера та на воді.', 'Місцевість біля озера', '6.jpg');

INSERT INTO village_tour.house (address, description, name, photo, type, village_id)
VALUES ('Миколаївська область, с.Матвіївка', 'Ви хочете побути поблизу природи? Вам сюди! Тут ви зможете покататись на конях, посмакувати шашликом, прийняти баню та багато іншого.',
'Ферма *Зелена долина*', '1.jpg', 2, 1);
INSERT INTO village_tour.house (address, description, name, photo, type, village_id)
VALUES ('с.Брюховичі Львівської області', 'Якщо активний відпочинок - це для вас, тоді запрошуємо провести гарно час біля озера. Тут є все, щоб провести активні вихідні компанією та наодинці.',
 'с.Брюховичі', '2.jpg', 1, 8);

INSERT INTO village_tour.room (photo, place_count, price, type, house_id) VALUES ('1.jpg', 2, 1500, 1, 1);
INSERT INTO village_tour.room (photo, place_count, price, type, house_id) VALUES ('2.jpg', 3, 1000, 2, 2);
INSERT INTO village_tour.room (photo, place_count, price, type, house_id) VALUES ('3.jpg', 4, 450, 4, 1);
INSERT INTO village_tour.room (photo, place_count, price, type, house_id) VALUES ('4.jpg', 6, 200, 5, 2);

