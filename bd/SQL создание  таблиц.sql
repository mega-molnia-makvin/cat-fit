	
DROP TABLE Занятия, Связь_Карта_Тренировки, Карты, Тренировки, Тренера, Клиенты;

CREATE TABLE Карты
(
    Id_Карты SERIAL PRIMARY KEY,
    Начало_действия DATE NOT NULL,
    Окончание_действия DATE NOT NULL
);

CREATE TABLE Клиенты
(
    Id_Клиента SERIAL PRIMARY KEY,
    Имя CHARACTER VARYING(30) NOT NULL,
    Фамилия CHARACTER VARYING(30) NOT NULL,
	Отчество CHARACTER VARYING(30),   
    Id_Карты INTEGER,
    Телефон CHARACTER VARYING(30) NOT NULL UNIQUE,
    Пароль CHARACTER VARYING(30),
	FOREIGN KEY (Id_Карты) REFERENCES Карты (Id_Карты)
);

CREATE TABLE Тренера
(
	Id_Тренера SERIAL PRIMARY KEY,
    Имя CHARACTER VARYING(30) NOT NULL,
    Фамилия CHARACTER VARYING(30) NOT NULL,
	Отчество CHARACTER VARYING(30),
    Телефон CHARACTER VARYING(30) NOT NULL UNIQUE,
    Пароль CHARACTER VARYING(30)
);

CREATE TABLE Тренировки
(
    Название CHARACTER VARYING(30) NOT NULL PRIMARY KEY,
	Количество_свободных_мест INTEGER NOT NULL,
    Id_тренера INTEGER NOT NULL,
	FOREIGN KEY (Id_тренера) REFERENCES Тренера (Id_Тренера)
);

CREATE TABLE Связь_Карта_Тренировки
(
    Id_Карты INTEGER NOT NULL,
	Название_Тренировки CHARACTER VARYING(30) NOT NULL,
    Начало_действия DATE NOT NULL,
    Окончание_действия DATE NOT NULL,
	FOREIGN KEY (Id_Карты) REFERENCES Карты (Id_Карты),
	FOREIGN KEY (Название_Тренировки) REFERENCES Тренировки (Название)
);
 
CREATE TABLE Занятия
(
    Id_Занятия SERIAL PRIMARY KEY,
	Id_Тренера INTEGER NOT NULL,
	Название_Тренировки CHARACTER VARYING(30) NOT NULL,
    Время_Начала TIME NOT NULL,
    Время_Окончания TIME NOT NULL,
	День_Недели CHARACTER VARYING(30) NOT NULL,
	FOREIGN KEY (Id_Тренера) REFERENCES Тренера (Id_Тренера),
	FOREIGN KEY (Название_Тренировки) REFERENCES Тренировки (Название)
);




INSERT INTO Карты (Начало_действия, Окончание_действия) 
VALUES 
('2023-03-20', '2024-03-20'),
('2023-03-25', '2023-04-25'),
('2023-03-15', '2023-04-15');

INSERT INTO Клиенты (Имя, Фамилия, Отчество, Телефон, Id_Карты, Пароль) 
VALUES 
('Зайка', 'Уткина', 'Алексеевна', '89004783567',1,'Edinorogs_rulyat'),
('Мила', 'Чиж', 'Алексеевна', '89004568734',2,'Edinorogs_not_rulyat'),
('Единорог', 'Спорткин', 'Алексеевич', '89586543267',3,'IAmEdinorog');

INSERT INTO Тренера (Имя, Фамилия, Отчество, Телефон, Пароль) 
VALUES 
('Котик', 'Спорткин', 'Лапкович', '89005674356','Edinorogs67'),
('Лапка', 'Здоровин', 'Иванович', '84564546734','Edinorogs45');

INSERT INTO Тренировки (Название, Количество_свободных_мест, Id_тренера) 
VALUES 
('Йога', 20, 1),
('Бассейн', 10, 1),
('Что-то еще', 999, 1),
('Хула', 15, 2),
('Велосипед', 5, 2);

INSERT INTO Связь_Карта_Тренировки ( Id_Карты, Название_Тренировки, Начало_действия, Окончание_действия) 
VALUES 
(1,'Йога','2023-03-20', '2024-03-20'),
(1,'Бассейн','2023-03-20', '2024-03-20'),
(1,'Что-то еще','2023-03-20', '2024-03-20'),
(2,'Бассейн','2023-03-25', '2023-04-25'),
(2,'Велосипед','2023-03-25', '2023-04-25'),
(3,'Что-то еще','2023-03-15', '2023-04-15'),
(3,'Хула','2023-03-15', '2023-04-15');

INSERT INTO Занятия (Id_Тренера, Название_Тренировки, Время_Начала, Время_Окончания,День_Недели) 
VALUES 
(1, 'Йога', '19:30', '19:30','Понедельник'),
(1, 'Йога', '19:30', '20:00','Среда'),
(1,'Бассейн', '10:00', '12:00', 'Суббота'),
(1,'Что-то еще', '23:00', '24:00', 'Воскресенье'),
(2,'Хула', '18:30', '19:30','Понедельник'),
(2,'Хула', '18:30', '19:30','Четверг'),
(2,'Велосипед', '16:00', '16:30','Вторник'),
(2,'Велосипед', '16:00', '16:30','Пятница');


