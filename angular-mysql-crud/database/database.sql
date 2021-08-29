CREATE DATABASE bd_FabricaTazas;
USE bd_FabricaTazas;

CREATE TABLE tipoTaza(
    tipoTaza_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL
);


CREATE TABLE almacen(
    taza_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    color VARCHAR(180) NOT NULL,
    dimensiones INT(8) NOT NULL,
    capacidad INT(8) NOT NULL,
    modelo VARCHAR(180),
    material VARCHAR(180),
    create_at TIMESTAMP DEFAULT  CURRENT_TIMESTAMP,
    tipoTaza_id INT NOT NULL,
    FOREIGN KEY (tipoTaza_id) REFERENCES tipoTaza(tipoTaza_id)
);



CREATE TABLE pedido (
    pedido_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cantidadPiezas INT(11) NOT NULL,
    create_at TIMESTAMP DEFAULT  CURRENT_TIMESTAMP,
    tipoTaza_id INT NOT NULL,
    FOREIGN KEY (tipoTaza_id) REFERENCES tipoTaza(tipoTaza_id)
);


