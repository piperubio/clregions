
CREATE TABLE province (
  id VARCHAR(3) PRIMARY KEY,
  name VARCHAR(255),
  region_id VARCHAR(2),
  FOREIGN KEY (region_id) REFERENCES region(id)
);

INSERT INTO province (id, name, region_id) VALUES ('011', 'Iquique', '01');
INSERT INTO province (id, name, region_id) VALUES ('014', 'Tamarugal', '01');
INSERT INTO province (id, name, region_id) VALUES ('021', 'Antofagasta', '02');
INSERT INTO province (id, name, region_id) VALUES ('022', 'El Loa', '02');
INSERT INTO province (id, name, region_id) VALUES ('023', 'Tocopilla', '02');
INSERT INTO province (id, name, region_id) VALUES ('031', 'Copiapó', '03');
INSERT INTO province (id, name, region_id) VALUES ('032', 'Chañaral', '03');
INSERT INTO province (id, name, region_id) VALUES ('033', 'Huasco', '03');
INSERT INTO province (id, name, region_id) VALUES ('041', 'Elqui', '04');
INSERT INTO province (id, name, region_id) VALUES ('042', 'Choapa', '04');
INSERT INTO province (id, name, region_id) VALUES ('043', 'Limarí', '04');
INSERT INTO province (id, name, region_id) VALUES ('051', 'Valparaíso', '05');
INSERT INTO province (id, name, region_id) VALUES ('052', 'Isla de Pascua', '05');
INSERT INTO province (id, name, region_id) VALUES ('053', 'Los Andes', '05');
INSERT INTO province (id, name, region_id) VALUES ('054', 'Petorca', '05');
INSERT INTO province (id, name, region_id) VALUES ('055', 'Quillota', '05');
INSERT INTO province (id, name, region_id) VALUES ('056', 'San Antonio', '05');
INSERT INTO province (id, name, region_id) VALUES ('057', 'San Felipe de Aconcagua', '05');
INSERT INTO province (id, name, region_id) VALUES ('058', 'Marga Marga', '05');
INSERT INTO province (id, name, region_id) VALUES ('061', 'Cachapoal', '06');
INSERT INTO province (id, name, region_id) VALUES ('062', 'Cardenal Caro', '06');
INSERT INTO province (id, name, region_id) VALUES ('063', 'Colchagua', '06');
INSERT INTO province (id, name, region_id) VALUES ('071', 'Talca', '07');
INSERT INTO province (id, name, region_id) VALUES ('072', 'Cauquenes', '07');
INSERT INTO province (id, name, region_id) VALUES ('073', 'Curicó', '07');
INSERT INTO province (id, name, region_id) VALUES ('074', 'Linares', '07');
INSERT INTO province (id, name, region_id) VALUES ('081', 'Concepción', '08');
INSERT INTO province (id, name, region_id) VALUES ('082', 'Arauco', '08');
INSERT INTO province (id, name, region_id) VALUES ('083', 'Biobío', '08');
INSERT INTO province (id, name, region_id) VALUES ('091', 'Cautín', '09');
INSERT INTO province (id, name, region_id) VALUES ('092', 'Malleco', '09');
INSERT INTO province (id, name, region_id) VALUES ('101', 'Llanquihue', '10');
INSERT INTO province (id, name, region_id) VALUES ('102', 'Chiloé', '10');
INSERT INTO province (id, name, region_id) VALUES ('103', 'Osorno', '10');
INSERT INTO province (id, name, region_id) VALUES ('104', 'Palena', '10');
INSERT INTO province (id, name, region_id) VALUES ('111', 'Coyhaique', '11');
INSERT INTO province (id, name, region_id) VALUES ('112', 'Aysén', '11');
INSERT INTO province (id, name, region_id) VALUES ('113', 'Capitán Prat', '11');
INSERT INTO province (id, name, region_id) VALUES ('114', 'General Carrera', '11');
INSERT INTO province (id, name, region_id) VALUES ('121', 'Magallanes', '12');
INSERT INTO province (id, name, region_id) VALUES ('122', 'Antártica Chilena', '12');
INSERT INTO province (id, name, region_id) VALUES ('123', 'Tierra del Fuego', '12');
INSERT INTO province (id, name, region_id) VALUES ('124', 'Última Esperanza', '12');
INSERT INTO province (id, name, region_id) VALUES ('131', 'Santiago', '13');
INSERT INTO province (id, name, region_id) VALUES ('132', 'Cordillera', '13');
INSERT INTO province (id, name, region_id) VALUES ('133', 'Chacabuco', '13');
INSERT INTO province (id, name, region_id) VALUES ('134', 'Maipo', '13');
INSERT INTO province (id, name, region_id) VALUES ('135', 'Melipilla', '13');
INSERT INTO province (id, name, region_id) VALUES ('136', 'Talagante', '13');
INSERT INTO province (id, name, region_id) VALUES ('141', 'Valdivia', '14');
INSERT INTO province (id, name, region_id) VALUES ('142', 'Ranco', '14');
INSERT INTO province (id, name, region_id) VALUES ('151', 'Arica', '15');
INSERT INTO province (id, name, region_id) VALUES ('152', 'Parinacota', '15');
INSERT INTO province (id, name, region_id) VALUES ('161', 'Diguillín', '16');
INSERT INTO province (id, name, region_id) VALUES ('162', 'Itata', '16');
INSERT INTO province (id, name, region_id) VALUES ('163', 'Punilla', '16');
