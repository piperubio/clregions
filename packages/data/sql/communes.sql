
CREATE TABLE commune (
    id VARCHAR(5) PRIMARY KEY,
    name VARCHAR(255),
    province_id VARCHAR(3),
    FOREIGN KEY (province_id) REFERENCES province(id)
);

INSERT INTO commune (id, name, province_id) VALUES ('01101', 'Iquique', '011');
INSERT INTO commune (id, name, province_id) VALUES ('01107', 'Alto Hospicio', '011');
INSERT INTO commune (id, name, province_id) VALUES ('01401', 'Pozo Almonte', '014');
INSERT INTO commune (id, name, province_id) VALUES ('01402', 'Camiña', '014');
INSERT INTO commune (id, name, province_id) VALUES ('01403', 'Colchane', '014');
INSERT INTO commune (id, name, province_id) VALUES ('01404', 'Huara', '014');
INSERT INTO commune (id, name, province_id) VALUES ('01405', 'Pica', '014');
INSERT INTO commune (id, name, province_id) VALUES ('02101', 'Antofagasta', '021');
INSERT INTO commune (id, name, province_id) VALUES ('02102', 'Mejillones', '021');
INSERT INTO commune (id, name, province_id) VALUES ('02103', 'Sierra Gorda', '021');
INSERT INTO commune (id, name, province_id) VALUES ('02104', 'Taltal', '021');
INSERT INTO commune (id, name, province_id) VALUES ('02201', 'Calama', '022');
INSERT INTO commune (id, name, province_id) VALUES ('02202', 'Ollagüe', '022');
INSERT INTO commune (id, name, province_id) VALUES ('02203', 'San Pedro de Atacama', '022');
INSERT INTO commune (id, name, province_id) VALUES ('02301', 'Tocopilla', '023');
INSERT INTO commune (id, name, province_id) VALUES ('02302', 'María Elena', '023');
INSERT INTO commune (id, name, province_id) VALUES ('03101', 'Copiapó', '031');
INSERT INTO commune (id, name, province_id) VALUES ('03102', 'Caldera', '031');
INSERT INTO commune (id, name, province_id) VALUES ('03103', 'Tierra Amarilla', '031');
INSERT INTO commune (id, name, province_id) VALUES ('03201', 'Chañaral', '032');
INSERT INTO commune (id, name, province_id) VALUES ('03202', 'Diego de Almagro', '032');
INSERT INTO commune (id, name, province_id) VALUES ('03301', 'Vallenar', '033');
INSERT INTO commune (id, name, province_id) VALUES ('03302', 'Alto del Carmen', '033');
INSERT INTO commune (id, name, province_id) VALUES ('03303', 'Freirina', '033');
INSERT INTO commune (id, name, province_id) VALUES ('03304', 'Huasco', '033');
INSERT INTO commune (id, name, province_id) VALUES ('04101', 'La Serena', '041');
INSERT INTO commune (id, name, province_id) VALUES ('04102', 'Coquimbo', '041');
INSERT INTO commune (id, name, province_id) VALUES ('04103', 'Andacollo', '041');
INSERT INTO commune (id, name, province_id) VALUES ('04104', 'La Higuera', '041');
INSERT INTO commune (id, name, province_id) VALUES ('04105', 'Paiguano', '041');
INSERT INTO commune (id, name, province_id) VALUES ('04106', 'Vicuña', '041');
INSERT INTO commune (id, name, province_id) VALUES ('04201', 'Illapel', '042');
INSERT INTO commune (id, name, province_id) VALUES ('04202', 'Canela', '042');
INSERT INTO commune (id, name, province_id) VALUES ('04203', 'Los Vilos', '042');
INSERT INTO commune (id, name, province_id) VALUES ('04204', 'Salamanca', '042');
INSERT INTO commune (id, name, province_id) VALUES ('04301', 'Ovalle', '043');
INSERT INTO commune (id, name, province_id) VALUES ('04302', 'Combarbalá', '043');
INSERT INTO commune (id, name, province_id) VALUES ('04303', 'Monte Patria', '043');
INSERT INTO commune (id, name, province_id) VALUES ('04304', 'Punitaqui', '043');
INSERT INTO commune (id, name, province_id) VALUES ('04305', 'Río Hurtado', '043');
INSERT INTO commune (id, name, province_id) VALUES ('05101', 'Valparaíso', '051');
INSERT INTO commune (id, name, province_id) VALUES ('05102', 'Casablanca', '051');
INSERT INTO commune (id, name, province_id) VALUES ('05103', 'Concón', '051');
INSERT INTO commune (id, name, province_id) VALUES ('05104', 'Juan Fernández', '051');
INSERT INTO commune (id, name, province_id) VALUES ('05105', 'Puchuncaví', '051');
INSERT INTO commune (id, name, province_id) VALUES ('05107', 'Quintero', '051');
INSERT INTO commune (id, name, province_id) VALUES ('05109', 'Viña del Mar', '051');
INSERT INTO commune (id, name, province_id) VALUES ('05201', 'Isla de Pascua', '052');
INSERT INTO commune (id, name, province_id) VALUES ('05301', 'Los Andes', '053');
INSERT INTO commune (id, name, province_id) VALUES ('05302', 'Calle Larga', '053');
INSERT INTO commune (id, name, province_id) VALUES ('05303', 'Rinconada', '053');
INSERT INTO commune (id, name, province_id) VALUES ('05304', 'San Esteban', '053');
INSERT INTO commune (id, name, province_id) VALUES ('05401', 'La Ligua', '054');
INSERT INTO commune (id, name, province_id) VALUES ('05402', 'Cabildo', '054');
INSERT INTO commune (id, name, province_id) VALUES ('05403', 'Papudo', '054');
INSERT INTO commune (id, name, province_id) VALUES ('05404', 'Petorca', '054');
INSERT INTO commune (id, name, province_id) VALUES ('05405', 'Zapallar', '054');
INSERT INTO commune (id, name, province_id) VALUES ('05501', 'Quillota', '055');
INSERT INTO commune (id, name, province_id) VALUES ('05502', 'Calera', '055');
INSERT INTO commune (id, name, province_id) VALUES ('05503', 'Hijuelas', '055');
INSERT INTO commune (id, name, province_id) VALUES ('05504', 'La Cruz', '055');
INSERT INTO commune (id, name, province_id) VALUES ('05506', 'Nogales', '055');
INSERT INTO commune (id, name, province_id) VALUES ('05601', 'San Antonio', '056');
INSERT INTO commune (id, name, province_id) VALUES ('05602', 'Algarrobo', '056');
INSERT INTO commune (id, name, province_id) VALUES ('05603', 'Cartagena', '056');
INSERT INTO commune (id, name, province_id) VALUES ('05604', 'El Quisco', '056');
INSERT INTO commune (id, name, province_id) VALUES ('05605', 'El Tabo', '056');
INSERT INTO commune (id, name, province_id) VALUES ('05606', 'Santo Domingo', '056');
INSERT INTO commune (id, name, province_id) VALUES ('05701', 'San Felipe', '057');
INSERT INTO commune (id, name, province_id) VALUES ('05702', 'Catemu', '057');
INSERT INTO commune (id, name, province_id) VALUES ('05703', 'Llaillay', '057');
INSERT INTO commune (id, name, province_id) VALUES ('05704', 'Panquehue', '057');
INSERT INTO commune (id, name, province_id) VALUES ('05705', 'Putaendo', '057');
INSERT INTO commune (id, name, province_id) VALUES ('05706', 'Santa María', '057');
INSERT INTO commune (id, name, province_id) VALUES ('05801', 'Quilpué', '058');
INSERT INTO commune (id, name, province_id) VALUES ('05802', 'Limache', '058');
INSERT INTO commune (id, name, province_id) VALUES ('05803', 'Olmué', '058');
INSERT INTO commune (id, name, province_id) VALUES ('05804', 'Villa Alemana', '058');
INSERT INTO commune (id, name, province_id) VALUES ('06101', 'Rancagua', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06102', 'Codegua', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06103', 'Coinco', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06104', 'Coltauco', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06105', 'Doñihue', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06106', 'Graneros', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06107', 'Las Cabras', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06108', 'Machalí', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06109', 'Malloa', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06110', 'Mostazal', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06111', 'Olivar', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06112', 'Peumo', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06113', 'Pichidegua', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06114', 'Quinta de Tilcoco', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06115', 'Rengo', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06116', 'Requínoa', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06117', 'San Vicente', '061');
INSERT INTO commune (id, name, province_id) VALUES ('06201', 'Pichilemu', '062');
INSERT INTO commune (id, name, province_id) VALUES ('06202', 'La Estrella', '062');
INSERT INTO commune (id, name, province_id) VALUES ('06203', 'Litueche', '062');
INSERT INTO commune (id, name, province_id) VALUES ('06204', 'Marchihue', '062');
INSERT INTO commune (id, name, province_id) VALUES ('06205', 'Navidad', '062');
INSERT INTO commune (id, name, province_id) VALUES ('06206', 'Paredones', '062');
INSERT INTO commune (id, name, province_id) VALUES ('06301', 'San Fernando', '063');
INSERT INTO commune (id, name, province_id) VALUES ('06302', 'Chépica', '063');
INSERT INTO commune (id, name, province_id) VALUES ('06303', 'Chimbarongo', '063');
INSERT INTO commune (id, name, province_id) VALUES ('06304', 'Lolol', '063');
INSERT INTO commune (id, name, province_id) VALUES ('06305', 'Nancagua', '063');
INSERT INTO commune (id, name, province_id) VALUES ('06306', 'Palmilla', '063');
INSERT INTO commune (id, name, province_id) VALUES ('06307', 'Peralillo', '063');
INSERT INTO commune (id, name, province_id) VALUES ('06308', 'Placilla', '063');
INSERT INTO commune (id, name, province_id) VALUES ('06309', 'Pumanque', '063');
INSERT INTO commune (id, name, province_id) VALUES ('06310', 'Santa Cruz', '063');
INSERT INTO commune (id, name, province_id) VALUES ('07101', 'Talca', '071');
INSERT INTO commune (id, name, province_id) VALUES ('07102', 'Constitución', '071');
INSERT INTO commune (id, name, province_id) VALUES ('07103', 'Curepto', '071');
INSERT INTO commune (id, name, province_id) VALUES ('07104', 'Empedrado', '071');
INSERT INTO commune (id, name, province_id) VALUES ('07105', 'Maule', '071');
INSERT INTO commune (id, name, province_id) VALUES ('07106', 'Pelarco', '071');
INSERT INTO commune (id, name, province_id) VALUES ('07107', 'Pencahue', '071');
INSERT INTO commune (id, name, province_id) VALUES ('07108', 'Río Claro', '071');
INSERT INTO commune (id, name, province_id) VALUES ('07109', 'San Clemente', '071');
INSERT INTO commune (id, name, province_id) VALUES ('07110', 'San Rafael', '071');
INSERT INTO commune (id, name, province_id) VALUES ('07201', 'Cauquenes', '072');
INSERT INTO commune (id, name, province_id) VALUES ('07202', 'Chanco', '072');
INSERT INTO commune (id, name, province_id) VALUES ('07203', 'Pelluhue', '072');
INSERT INTO commune (id, name, province_id) VALUES ('07301', 'Curicó', '073');
INSERT INTO commune (id, name, province_id) VALUES ('07302', 'Hualañé', '073');
INSERT INTO commune (id, name, province_id) VALUES ('07303', 'Licantén', '073');
INSERT INTO commune (id, name, province_id) VALUES ('07304', 'Molina', '073');
INSERT INTO commune (id, name, province_id) VALUES ('07305', 'Rauco', '073');
INSERT INTO commune (id, name, province_id) VALUES ('07306', 'Romeral', '073');
INSERT INTO commune (id, name, province_id) VALUES ('07307', 'Sagrada Familia', '073');
INSERT INTO commune (id, name, province_id) VALUES ('07308', 'Teno', '073');
INSERT INTO commune (id, name, province_id) VALUES ('07309', 'Vichuquén', '073');
INSERT INTO commune (id, name, province_id) VALUES ('07401', 'Linares', '074');
INSERT INTO commune (id, name, province_id) VALUES ('07402', 'Colbún', '074');
INSERT INTO commune (id, name, province_id) VALUES ('07403', 'Longaví', '074');
INSERT INTO commune (id, name, province_id) VALUES ('07404', 'Parral', '074');
INSERT INTO commune (id, name, province_id) VALUES ('07405', 'Retiro', '074');
INSERT INTO commune (id, name, province_id) VALUES ('07406', 'San Javier', '074');
INSERT INTO commune (id, name, province_id) VALUES ('07407', 'Villa Alegre', '074');
INSERT INTO commune (id, name, province_id) VALUES ('07408', 'Yerbas Buenas', '074');
INSERT INTO commune (id, name, province_id) VALUES ('08101', 'Concepción', '081');
INSERT INTO commune (id, name, province_id) VALUES ('08102', 'Coronel', '081');
INSERT INTO commune (id, name, province_id) VALUES ('08103', 'Chiguayante', '081');
INSERT INTO commune (id, name, province_id) VALUES ('08104', 'Florida', '081');
INSERT INTO commune (id, name, province_id) VALUES ('08105', 'Hualqui', '081');
INSERT INTO commune (id, name, province_id) VALUES ('08106', 'Lota', '081');
INSERT INTO commune (id, name, province_id) VALUES ('08107', 'Penco', '081');
INSERT INTO commune (id, name, province_id) VALUES ('08108', 'San Pedro de la Paz', '081');
INSERT INTO commune (id, name, province_id) VALUES ('08109', 'Santa Juana', '081');
INSERT INTO commune (id, name, province_id) VALUES ('08110', 'Talcahuano', '081');
INSERT INTO commune (id, name, province_id) VALUES ('08111', 'Tomé', '081');
INSERT INTO commune (id, name, province_id) VALUES ('08112', 'Hualpén', '081');
INSERT INTO commune (id, name, province_id) VALUES ('08201', 'Lebu', '082');
INSERT INTO commune (id, name, province_id) VALUES ('08202', 'Arauco', '082');
INSERT INTO commune (id, name, province_id) VALUES ('08203', 'Cañete', '082');
INSERT INTO commune (id, name, province_id) VALUES ('08204', 'Contulmo', '082');
INSERT INTO commune (id, name, province_id) VALUES ('08205', 'Curanilahue', '082');
INSERT INTO commune (id, name, province_id) VALUES ('08206', 'Los Alamos', '082');
INSERT INTO commune (id, name, province_id) VALUES ('08207', 'Tirúa', '082');
INSERT INTO commune (id, name, province_id) VALUES ('08301', 'Los Angeles', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08302', 'Antuco', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08303', 'Cabrero', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08304', 'Laja', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08305', 'Mulchén', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08306', 'Nacimiento', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08307', 'Negrete', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08308', 'Quilaco', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08309', 'Quilleco', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08310', 'San Rosendo', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08311', 'Santa Bárbara', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08312', 'Tucapel', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08313', 'Yumbel', '083');
INSERT INTO commune (id, name, province_id) VALUES ('08314', 'Alto Biobío', '083');
INSERT INTO commune (id, name, province_id) VALUES ('09101', 'Temuco', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09102', 'Carahue', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09103', 'Cunco', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09104', 'Curarrehue', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09105', 'Freire', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09106', 'Galvarino', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09107', 'Gorbea', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09108', 'Lautaro', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09109', 'Loncoche', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09110', 'Melipeuco', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09111', 'Nueva Imperial', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09112', 'Padre Las Casas', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09113', 'Perquenco', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09114', 'Pitrufquén', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09115', 'Pucón', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09116', 'Saavedra', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09117', 'Teodoro Schmidt', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09118', 'Toltén', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09119', 'Vilcún', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09120', 'Villarrica', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09121', 'Cholchol', '091');
INSERT INTO commune (id, name, province_id) VALUES ('09201', 'Angol', '092');
INSERT INTO commune (id, name, province_id) VALUES ('09202', 'Collipulli', '092');
INSERT INTO commune (id, name, province_id) VALUES ('09203', 'Curacautín', '092');
INSERT INTO commune (id, name, province_id) VALUES ('09204', 'Ercilla', '092');
INSERT INTO commune (id, name, province_id) VALUES ('09205', 'Lonquimay', '092');
INSERT INTO commune (id, name, province_id) VALUES ('09206', 'Los Sauces', '092');
INSERT INTO commune (id, name, province_id) VALUES ('09207', 'Lumaco', '092');
INSERT INTO commune (id, name, province_id) VALUES ('09208', 'Purén', '092');
INSERT INTO commune (id, name, province_id) VALUES ('09209', 'Renaico', '092');
INSERT INTO commune (id, name, province_id) VALUES ('09210', 'Traiguén', '092');
INSERT INTO commune (id, name, province_id) VALUES ('09211', 'Victoria', '092');
INSERT INTO commune (id, name, province_id) VALUES ('10101', 'Puerto Montt', '101');
INSERT INTO commune (id, name, province_id) VALUES ('10102', 'Calbuco', '101');
INSERT INTO commune (id, name, province_id) VALUES ('10103', 'Cochamó', '101');
INSERT INTO commune (id, name, province_id) VALUES ('10104', 'Fresia', '101');
INSERT INTO commune (id, name, province_id) VALUES ('10105', 'Frutillar', '101');
INSERT INTO commune (id, name, province_id) VALUES ('10106', 'Los Muermos', '101');
INSERT INTO commune (id, name, province_id) VALUES ('10107', 'Llanquihue', '101');
INSERT INTO commune (id, name, province_id) VALUES ('10108', 'Maullín', '101');
INSERT INTO commune (id, name, province_id) VALUES ('10109', 'Puerto Varas', '101');
INSERT INTO commune (id, name, province_id) VALUES ('10201', 'Castro', '102');
INSERT INTO commune (id, name, province_id) VALUES ('10202', 'Ancud', '102');
INSERT INTO commune (id, name, province_id) VALUES ('10203', 'Chonchi', '102');
INSERT INTO commune (id, name, province_id) VALUES ('10204', 'Curaco de Vélez', '102');
INSERT INTO commune (id, name, province_id) VALUES ('10205', 'Dalcahue', '102');
INSERT INTO commune (id, name, province_id) VALUES ('10206', 'Puqueldón', '102');
INSERT INTO commune (id, name, province_id) VALUES ('10207', 'Queilén', '102');
INSERT INTO commune (id, name, province_id) VALUES ('10208', 'Quellón', '102');
INSERT INTO commune (id, name, province_id) VALUES ('10209', 'Quemchi', '102');
INSERT INTO commune (id, name, province_id) VALUES ('10210', 'Quinchao', '102');
INSERT INTO commune (id, name, province_id) VALUES ('10301', 'Osorno', '103');
INSERT INTO commune (id, name, province_id) VALUES ('10302', 'Puerto Octay', '103');
INSERT INTO commune (id, name, province_id) VALUES ('10303', 'Purranque', '103');
INSERT INTO commune (id, name, province_id) VALUES ('10304', 'Puyehue', '103');
INSERT INTO commune (id, name, province_id) VALUES ('10305', 'Río Negro', '103');
INSERT INTO commune (id, name, province_id) VALUES ('10306', 'San Juan de la Costa', '103');
INSERT INTO commune (id, name, province_id) VALUES ('10307', 'San Pablo', '103');
INSERT INTO commune (id, name, province_id) VALUES ('10401', 'Chaitén', '104');
INSERT INTO commune (id, name, province_id) VALUES ('10402', 'Futaleufú', '104');
INSERT INTO commune (id, name, province_id) VALUES ('10403', 'Hualaihué', '104');
INSERT INTO commune (id, name, province_id) VALUES ('10404', 'Palena', '104');
INSERT INTO commune (id, name, province_id) VALUES ('11101', 'Coyhaique', '111');
INSERT INTO commune (id, name, province_id) VALUES ('11102', 'Lago Verde', '111');
INSERT INTO commune (id, name, province_id) VALUES ('11201', 'Aysén', '112');
INSERT INTO commune (id, name, province_id) VALUES ('11202', 'Cisnes', '112');
INSERT INTO commune (id, name, province_id) VALUES ('11203', 'Guaitecas', '112');
INSERT INTO commune (id, name, province_id) VALUES ('11301', 'Cochrane', '113');
INSERT INTO commune (id, name, province_id) VALUES ('11302', 'O''Higgins', '113');
INSERT INTO commune (id, name, province_id) VALUES ('11303', 'Tortel', '113');
INSERT INTO commune (id, name, province_id) VALUES ('11401', 'Chile Chico', '114');
INSERT INTO commune (id, name, province_id) VALUES ('11402', 'Río Ibáñez', '114');
INSERT INTO commune (id, name, province_id) VALUES ('12101', 'Punta Arenas', '121');
INSERT INTO commune (id, name, province_id) VALUES ('12102', 'Laguna Blanca', '121');
INSERT INTO commune (id, name, province_id) VALUES ('12103', 'Río Verde', '121');
INSERT INTO commune (id, name, province_id) VALUES ('12104', 'San Gregorio', '121');
INSERT INTO commune (id, name, province_id) VALUES ('12201', 'Cabo de Hornos', '122');
INSERT INTO commune (id, name, province_id) VALUES ('12202', 'Antártica', '122');
INSERT INTO commune (id, name, province_id) VALUES ('12301', 'Porvenir', '123');
INSERT INTO commune (id, name, province_id) VALUES ('12302', 'Primavera', '123');
INSERT INTO commune (id, name, province_id) VALUES ('12303', 'Timaukel', '123');
INSERT INTO commune (id, name, province_id) VALUES ('12401', 'Natales', '124');
INSERT INTO commune (id, name, province_id) VALUES ('12402', 'Torres del Paine', '124');
INSERT INTO commune (id, name, province_id) VALUES ('13101', 'Santiago', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13102', 'Cerrillos', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13103', 'Cerro Navia', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13104', 'Conchalí', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13105', 'El Bosque', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13106', 'Estación Central', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13107', 'Huechuraba', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13108', 'Independencia', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13109', 'La Cisterna', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13110', 'La Florida', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13111', 'La Granja', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13112', 'La Pintana', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13113', 'La Reina', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13114', 'Las Condes', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13115', 'Lo Barnechea', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13116', 'Lo Espejo', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13117', 'Lo Prado', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13118', 'Macul', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13119', 'Maipú', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13120', 'Ñuñoa', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13121', 'Pedro Aguirre Cerda', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13122', 'Peñalolén', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13123', 'Providencia', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13124', 'Pudahuel', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13125', 'Quilicura', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13126', 'Quinta Normal', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13127', 'Recoleta', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13128', 'Renca', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13129', 'San Joaquín', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13130', 'San Miguel', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13131', 'San Ramón', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13132', 'Vitacura', '131');
INSERT INTO commune (id, name, province_id) VALUES ('13201', 'Puente Alto', '132');
INSERT INTO commune (id, name, province_id) VALUES ('13202', 'Pirque', '132');
INSERT INTO commune (id, name, province_id) VALUES ('13203', 'San José de Maipo', '132');
INSERT INTO commune (id, name, province_id) VALUES ('13301', 'Colina', '133');
INSERT INTO commune (id, name, province_id) VALUES ('13302', 'Lampa', '133');
INSERT INTO commune (id, name, province_id) VALUES ('13303', 'Tiltil', '133');
INSERT INTO commune (id, name, province_id) VALUES ('13401', 'San Bernardo', '134');
INSERT INTO commune (id, name, province_id) VALUES ('13402', 'Buin', '134');
INSERT INTO commune (id, name, province_id) VALUES ('13403', 'Calera de Tango', '134');
INSERT INTO commune (id, name, province_id) VALUES ('13404', 'Paine', '134');
INSERT INTO commune (id, name, province_id) VALUES ('13501', 'Melipilla', '135');
INSERT INTO commune (id, name, province_id) VALUES ('13502', 'Alhué', '135');
INSERT INTO commune (id, name, province_id) VALUES ('13503', 'Curacaví', '135');
INSERT INTO commune (id, name, province_id) VALUES ('13504', 'María Pinto', '135');
INSERT INTO commune (id, name, province_id) VALUES ('13505', 'San Pedro', '135');
INSERT INTO commune (id, name, province_id) VALUES ('13601', 'Talagante', '136');
INSERT INTO commune (id, name, province_id) VALUES ('13602', 'El Monte', '136');
INSERT INTO commune (id, name, province_id) VALUES ('13603', 'Isla de Maipo', '136');
INSERT INTO commune (id, name, province_id) VALUES ('13604', 'Padre Hurtado', '136');
INSERT INTO commune (id, name, province_id) VALUES ('13605', 'Peñaflor', '136');
INSERT INTO commune (id, name, province_id) VALUES ('14101', 'Valdivia', '141');
INSERT INTO commune (id, name, province_id) VALUES ('14102', 'Corral', '141');
INSERT INTO commune (id, name, province_id) VALUES ('14103', 'Lanco', '141');
INSERT INTO commune (id, name, province_id) VALUES ('14104', 'Los Lagos', '141');
INSERT INTO commune (id, name, province_id) VALUES ('14105', 'Máfil', '141');
INSERT INTO commune (id, name, province_id) VALUES ('14106', 'Mariquina', '141');
INSERT INTO commune (id, name, province_id) VALUES ('14107', 'Paillaco', '141');
INSERT INTO commune (id, name, province_id) VALUES ('14108', 'Panguipulli', '141');
INSERT INTO commune (id, name, province_id) VALUES ('14201', 'La Unión', '142');
INSERT INTO commune (id, name, province_id) VALUES ('14202', 'Futrono', '142');
INSERT INTO commune (id, name, province_id) VALUES ('14203', 'Lago Ranco', '142');
INSERT INTO commune (id, name, province_id) VALUES ('14204', 'Río Bueno', '142');
INSERT INTO commune (id, name, province_id) VALUES ('15101', 'Arica', '151');
INSERT INTO commune (id, name, province_id) VALUES ('15102', 'Camarones', '151');
INSERT INTO commune (id, name, province_id) VALUES ('15201', 'Putre', '152');
INSERT INTO commune (id, name, province_id) VALUES ('15202', 'General Lagos', '152');
INSERT INTO commune (id, name, province_id) VALUES ('16101', 'Chillán', '161');
INSERT INTO commune (id, name, province_id) VALUES ('16102', 'Bulnes', '161');
INSERT INTO commune (id, name, province_id) VALUES ('16103', 'Chillán Viejo', '161');
INSERT INTO commune (id, name, province_id) VALUES ('16104', 'El Carmen', '161');
INSERT INTO commune (id, name, province_id) VALUES ('16105', 'Pemuco', '161');
INSERT INTO commune (id, name, province_id) VALUES ('16106', 'Pinto', '161');
INSERT INTO commune (id, name, province_id) VALUES ('16107', 'Quillón', '161');
INSERT INTO commune (id, name, province_id) VALUES ('16108', 'San Ignacio', '161');
INSERT INTO commune (id, name, province_id) VALUES ('16109', 'Yungay', '161');
INSERT INTO commune (id, name, province_id) VALUES ('16201', 'Quirihue', '162');
INSERT INTO commune (id, name, province_id) VALUES ('16202', 'Cobquecura', '162');
INSERT INTO commune (id, name, province_id) VALUES ('16203', 'Coelemu', '162');
INSERT INTO commune (id, name, province_id) VALUES ('16204', 'Ninhue', '162');
INSERT INTO commune (id, name, province_id) VALUES ('16205', 'Portezuelo', '162');
INSERT INTO commune (id, name, province_id) VALUES ('16206', 'Ranquil', '162');
INSERT INTO commune (id, name, province_id) VALUES ('16207', 'Treguaco', '162');
INSERT INTO commune (id, name, province_id) VALUES ('16301', 'San Carlos', '163');
INSERT INTO commune (id, name, province_id) VALUES ('16302', 'Coihueco', '163');
INSERT INTO commune (id, name, province_id) VALUES ('16303', 'Ñiquén', '163');
INSERT INTO commune (id, name, province_id) VALUES ('16304', 'San Fabián', '163');
INSERT INTO commune (id, name, province_id) VALUES ('16305', 'San Nicolás', '163');
