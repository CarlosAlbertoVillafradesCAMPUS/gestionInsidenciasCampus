CREATE DATABASE db_gestion_insidencias;
USE db_gestion_insidencias;
/* Creacion de tablas */

CREATE TABLE categoria_insidencia (
    cat_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cat_nombre VARCHAR(20) NOT NULL
);
CREATE TABLE tipo_insidencia (
    tip_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tip_nombre VARCHAR(20) NOT NULL
);
CREATE TABLE trainer (
    trai_id INT NOT NULL PRIMARY KEY,
    trai_nombre VARCHAR(70) NOT NULL,
    trai_emailPersonal VARCHAR(100) NOT NULL UNIQUE,
    trai_emailCorporativo VARCHAR(100) NOT NULL UNIQUE,
    trai_telMovil VARCHAR(13) NOT NULL,
    trai_telResidencial VARCHAR(18) NOT NULL,
    trai_telEmpresa VARCHAR(18) NOT NULL,
    trai_telMovilEmpresa VARCHAR(13) NOT NULL
);
CREATE TABLE tipo_area (
    tip_area_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tip_area_nombre VARCHAR(20) NOT NULL
);
CREATE TABLE monitor (
    id INT NOT NULL PRIMARY KEY,
    mon_estado VARCHAR(200) NOT NULL 
);
CREATE TABLE teclado (
    id INT NOT NULL PRIMARY KEY,
    tcl_estado VARCHAR(200) NOT NULL 
);
CREATE TABLE mouse (
    id INT NOT NULL PRIMARY KEY,
    mou_estado VARCHAR(200) NOT NULL 
);
CREATE TABLE diadema (
    id INT NOT NULL PRIMARY KEY,
    diad_estado VARCHAR(200) NOT NULL 
);
CREATE TABLE computador (
    comp_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    comp_monitor_fk INT NOT NULL UNIQUE,
    comp_teclado_fk INT NOT NULL UNIQUE,
    comp_mouse_fk INT NOT NULL UNIQUE,
    comp_diadema_fk INT NOT NULL UNIQUE
);

CREATE TABLE area (
    area_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    area_tipo_fk INT NOT NULL,
    area_nombre VARCHAR(40) NOT NULL
);
CREATE TABLE inventario (
    inv_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    inv_computador_fk INT NOT NULL UNIQUE,
    inv_area_fk INT NOT NULL
);
CREATE TABLE insidencia (
    insi_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    insi_trainer_fk INT NOT NULL,
    insi_categoria_fk INT NOT NULL,
    insi_tipo_fk INT NOT NULL,
    insi_area_fk INT NOT NULL,
    insi_computador_fk INT NOT NULL,
    insi_descripcion TEXT NOT NULL,
    insi_fecha DATETIME NOT NULL DEFAULT NOW()
);

/* Forein keys y relaciones */

ALTER TABLE computador ADD CONSTRAINT computador_monitor_fk FOREIGN KEY(comp_monitor_fk) REFERENCES monitor(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE computador ADD CONSTRAINT computador_teclado_fk FOREIGN KEY(comp_teclado_fk) REFERENCES teclado(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE computador ADD CONSTRAINT computador_mouse_fk FOREIGN KEY(comp_mouse_fk) REFERENCES mouse(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE computador ADD CONSTRAINT computador_diadema_fk FOREIGN KEY(comp_diadema_fk) REFERENCES diadema(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE area ADD CONSTRAINT area_tipo_area_fk FOREIGN KEY(area_tipo_fk) REFERENCES tipo_area(tip_area_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE inventario ADD CONSTRAINT inventario_computadors_fk FOREIGN KEY(inv_computador_fk) REFERENCES computador(comp_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE inventario ADD CONSTRAINT inventario_area_fk FOREIGN KEY(inv_area_fk) REFERENCES area(area_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE insidencia ADD CONSTRAINT insidencia_categoria_fk FOREIGN KEY(insi_categoria_fk) REFERENCES categoria_insidencia(cat_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE insidencia ADD CONSTRAINT insidencia_trainer_fk FOREIGN KEY(insi_trainer_fk) REFERENCES trainer(trai_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE insidencia ADD CONSTRAINT insidencia_tipo_fk FOREIGN KEY(insi_tipo_fk) REFERENCES tipo_insidencia(tip_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE insidencia ADD CONSTRAINT insidencia_area_fk FOREIGN KEY(insi_area_fk) REFERENCES area(area_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE insidencia ADD CONSTRAINT insidencia_computador_fk FOREIGN KEY(insi_computador_fk) REFERENCES inventario(inv_computador_fk) ON UPDATE CASCADE ON DELETE CASCADE;


/* Agreggar registro */

/* MONITOR */
INSERT INTO monitor(id, mon_estado) VALUES(123,"buen estado"),(456,"buen estado"),(789,"buen estado"),(654,"buen estado"),(987,'buen estado');

/* TECLADO */
INSERT INTO teclado(id, tcl_estado) VALUES(741,"buen estado"),(852,"buen estado"),(963,"buen estado"),(456,"buen estado"),(789,"buen estado");

/* MAUSE */
INSERT INTO mouse(id, mou_estado) VALUES(147,"buen estado"),(258,"buen estado"),(369,"buen estado"),(852,"buen estado"),(963,"buen estado");

/* DIADEMA */
INSERT INTO diadema(id, diad_estado) VALUES(321,"buen estado"),(654,"buen estado"),(987,"buen estado"),(258,"buen estado"),(369,"buen estado");

/* COMPUTADOR */
INSERT INTO computador(comp_monitor_fk, comp_teclado_fk, comp_mouse_fk, comp_diadema_fk) VALUES
(123, 741, 147, 321),
(456, 852, 258, 654),
(789, 963, 369, 987),
(654, 456, 852, 258),
(987, 789, 963, 369);

/* TIPO_AREA */
INSERT INTO tipo_area(tip_area_nombre) VALUES
("TRAINING"),("REVIEW");

/* AREA */
INSERT INTO area(area_tipo_fk, area_nombre) VALUES
(1, "SPUTNIK"),
(1, "APOLO"),
(1, "ARTEMIS"),
(2, "CORVUS"),
(2, "ENDOR");

/* INVENTARIO */
INSERT INTO inventario(inv_computador_fk, inv_area_fk) VALUES
(1, 1),
(2, 1),
(3, 3),
(4, 4),
(5, 5);

/* TIPO_INDIENCIA */
INSERT INTO tipo_insidencia(tip_nombre) VALUES
("LEVE"),("MODERADA"), ("CRITICA");

/* CATEGORIA INSIDENCIA */
INSERT INTO categoria_insidencia(cat_nombre) VALUES
("HARDWARE"),("SOFTWARE");

/* TRAINER */
INSERT INTO trainer(trai_id, trai_nombre, trai_emailPersonal, trai_emailCorporativo, trai_telMovil, trai_telResidencial, trai_telEmpresa, trai_telMovilEmpresa) VALUES
(12345, "Miguel", "miguelito@gmail.com", "miguelSerio@gmail.com", "3175845475", "5748951", "6523574", "3185487264"),
(56789, "Jholver", "jholversito@gmail.com", "jholverSerio@gmail.com", "3175845475", "5748951", "6523574", "3185487264"),
(98745, "Vermen", "vermensito@gmail.com", "vermenSerio@gmail.com", "3175845475", "5748951", "6523574", "3185487264");

/* INSIDENCIAS */
INSERT INTO insidencia(insi_trainer_fk, insi_categoria_fk, insi_tipo_fk, insi_area_fk, insi_computador_fk, insi_descripcion) VALUES
(12345, 1, 3, 2, 2, "se le daño la pantalla");
INSERT INTO insidencia(insi_trainer_fk, insi_categoria_fk, insi_tipo_fk, insi_area_fk, insi_computador_fk, insi_descripcion) VALUES
(56789, 2, 2, 4, 4, "se borro visal estudio");
INSERT INTO insidencia(insi_trainer_fk, insi_categoria_fk, insi_tipo_fk, insi_area_fk, insi_computador_fk, insi_descripcion) VALUES
(12345, 1, 1, 1, 1, "se le daño el mause");


SELECT * from computador WHERE comp_id = 1234;
UPDATE monitor SET id = 1234567 WHERE id = 123;
DELETE FROM monitor WHERE id = 1234567;

UPDATE computador SET comp_monitor_fk=789 WHERE comp_id = 4;
SELECT * FROM insidencia;
SELECT insi_id, insi_trainer_fk, trai_nombre, insi_categoria_fk, cat_nombre, insi_tipo_fk, tip_nombre, insi_area_fk, area_nombre,insi_computador_fk, insi_descripcion, insi_fecha  FROM insidencia INNER JOIN trainer ON insi_trainer_fk = trai_id  INNER JOIN categoria_insidencia ON insi_categoria_fk = cat_id INNER JOIN tipo_insidencia ON insi_tipo_fk = tip_id INNER JOIN area ON insi_area_fk = area_id;