export default function() {
    this.namespace = '/api';

    let projects = [{
            type: 'project',
            id: 'cofia',
            attributes: {
                title: 'Cofia',
                designer: 'María Granda',
                image: '/assets/images/cofia/cofia_0.jpg',
                number: 1,
                description: 'Work in progress',
                video: ''
            }
        }, {
            type: 'project',
            id: 'van-gogh',
            attributes: {
                title: 'Van Gogh',
                designer: 'María Granda',
                image: '/assets/images/van-gogh/van-gogh_0.jpg',
                number: 1,
                description: 'Work in progress',
                video: ''
            }
        }, {
            type: 'project',
            id: 'frida',
            attributes: {
                title: 'Frida',
                designer: 'María Granda',
                image: '/assets/images/frida/frida_19.jpg',
                number: 25,
                description: '<b>La butaca Frida</b> está inspirada en la pintora mexicana <b>Frida Kahlo</b>, una mujer fuerte la cual tuvo muchos infortunios en su vida. Padeciendo de una enfermedad compleja en su niñez y teniendo un accidente muy grave en su juventud, el cual la dejaría postrada durante muchos meses y, por consiguiente, tuvo que someterse a más de 32 intervenciones quirúrgicas.'
                +
                '<br><br>'
                +
                'La butaca tiene dos características importantes de Frida Kahlo, es una butaca que <b>formalmente es fuerte</b> y además tiene unas <b>costuras</b> en el respaldo, detalle que es fundamental puesto que representa las <b>cicatrices</b> que la pintora tenía en todo su cuerpo como consecuencia de todas las operaciones a las que fue sometida.'
                +
                '<br><br>'
                +
                'Para representar esa fuerza, Frida toma como referente formal butacas antiguas e intenta rescatar elementos como las orejas, combinando líneas rectas y curvas para generar un aire de contemporaneidad en su diseño.',
                video: '108664613'
            }
        }, {
            type: 'project',
            id: 'cube-light',
            attributes: {
                title: 'Cube Light',
                designer: 'María Granda',
                image: '/assets/images/cube-light/cube-light_1.jpg',
                number: 4,
                description: '<b>Cube Light</b> es una lámpara de luz de ambiente inspirada en la infancia de la diseñadora. Su estructura esta compuesta por un cubo fabricado en madera, alrededor del cual se teje con hilos de colores llamativos. El tejido crea un interesante efecto visual sobre todo cuando la lámpara esta encendida.',
                video: ''
            }
        }, {
            type: 'project',
            id: 'light-box',
            attributes: {
                title: 'Light Box',
                designer: 'María Granda, Cristina Nacher, Jordi Pedemonte, Xavi Grados y Mentxu del Río',
                image: '/assets/images/light-box/light-box_4.jpg',
                number: 5,
                description: '<b>Light Box</b> es el diseño de un aparador el cual tenía que representar a la escuela Llotja y a la vez la colección de la diseñadora María Secas, por lo tanto, intentamos crear una conexión a través de un elemento tan básico y tradicional como una percha haciendo un diálogo entre el pasado (inspiración de la colección en el Greco) y el futuro (escuela Llotja).'
                +
                '<br><br>'
                +
                'La elección del negro como color predominante en la composición surgió del uso que hacía el Greco en sus obras, contrarrestado con el metal de las perchas, el conjunto crea una ilusión de futurismo en un contexto de arte contemporáneo.'
                +
                '<br><br>'
                +
                'El equipo tenía presente en todo momento el concepto de instalación artística, de ahí que el espacio evolucionara en este recorrido hecho por perchas, que hace alusión al concepto de aglomeración del Greco. La luz toma toda la importancia siguiendo el montaje escénico y dándole a las piezas de indumentaria el punto de luz necesario. Con él creamos un camino marcado que nos genera una escenografía elegante y visualmente potente.'
                +
                '<br><br>'
                +
                'En cuanto a la distribución en el espacio, se ha tenido en cuenta que al crear la historia que pretendemos explicar, incluir las cuatro especialidades que se realizan en la escuela. De esta manera, si hacemos una lectura del escaparate de izquierda a derecha encontramos la caja colocada en la parte superior donde se puede observar la imagen gráfica de la escuela que representa la rama de diseño gráfico. A continuación, aparece una pieza de indumentaria depositada encima de una pila de percha, esta pieza simboliza el diseño de moda, y es una pieza del conjunto expuesto. Siguiendo por el recorrido de las perchas se puede observar que finalizan en un mobiliario fabricado a partir de la revolución de este elemento, que es el que identifica el diseño de producto, y el conjunto escenográfico el diseño de interiores.'
                +
                '<br><br>'
                +
                'En todo momento el equipo ha querido plasmar el espíritu de la Lotja que mezcla modernidad y tradición. Por eso el concepto de instalación artística se ha escogido para recordar el pasado de la escuela destinado a las bellas artes.',
                video: ''
            }
        }, {
            type: 'project',
            id: 'sweet-cylinder',
            attributes: {
                title: 'Sweet Cylinder',
                designer: 'María Granda',
                image: '/assets/images/sweet-cylinder/sweet-cylinder_7.jpg',
                number: 9,
                description: '<b>Sweet Cylinder</b> es un proyecto universitario. El packaging es un cilindro de cartón con una tapa del mismo material y dos cierres en la parte inferior y superior de plástico, es un producto reutilizable como portalápices, además está diseñado para su fácil reciclaje puesto que las tapas de plástico no son enganchadas con ningún tipo de cola al cilindro de cartón, con lo cual la separación de estos materiales para el reciclaje es fácil. Por tanto, Sweet Cylinder es un producto respetuoso con el medio ambiente.'
                +
                '<br><br>'
                +
                'Sweet Cylinder ha sido diseñado teniendo en cuenta que se pretende dar a conocer la marca Custo Growing y que mejor que diseñar un producto en donde la marca persista en el tiempo.'
                +
                '<br><br>'
                +
                'El diseño de los caramelos es una abstracción de un pulpo de la publicidad Custo Growing. Se presentan en diferentes colores llamativos lo que hace que este personaje despierte simpatía, ternura y sea apetecible de comer.'
                +
                '<br><br>'
                +
                'Los pulpitos (caramelos), el contenedor y la gráfica están diseñados en conjunto donde se desarrolla un concepto referente al mar haciendo analogía a las olas por medio de trazos ondulados, al tiempo que se añaden características como colores que representan dicha marca.',
                video: ''
            }
        }, {
            type: 'project',
            id: 'perchero-ornamental',
            attributes: {
                title: 'Ornamental',
                designer: 'María Granda',
                image: '/assets/images/perchero-ornamental/perchero-ornamental_2.jpg',
                number: 7,
                description: '<b>Ornamental</b> es un perchero de pared en donde se repiten piezas creando visualmente una sucesión de planos, sus formas se basan en las curvilíneas generando formas orgánicas. Su construcción crea un juego estético que le permite al objeto ser percibido como algo diferente a un perchero.'
                +
                '<br><br>'
                +
                'A todos nos ha pasado esa situación molesta de descolgar las prendas de algún perchero y que terminen en el piso bufandas o bolsos (accesorios) Ornamental soluciona este problema haciendo dos particiones, una donde se puede colgar las prendas más pesadas y otra donde se puede colgar accesorios.'
                +
                '<br><br>'
                +
                'Ornamental está fabricado en madera de pino el anclaje a la pared se hace por medio de tornillos y una lámina de metal. Los elementos son fáciles de separar puesto que no utiliza ningún tipo de cola para engancharlos lo cual facilita su reciclaje cuando finalice su vida útil.',
                video: ''
            }
        }, {
            type: 'project',
            id: 'curve',
            attributes: {
                title: 'Curve',
                designer: 'María Granda',
                image: '/assets/images/curve/curve_0.jpg',
                number: 4,
                description: 'La familia de accesorios de baño <b>Curve</b> está compuesta por 5 productos (toallero, perchero, portarrollos sencillo, portarrollos doble y estantería) que ayudan a mantener orden en el baño, generando así comodidad dentro de dicho espacio.'
                +
                '<br><br>'
                +
                'La forma de estos accesorios de baño es generada mediante la torsión de una chapa de acero inoxidable. Dicha torsión permite crear líneas rectas y curvas en una sola pieza, en donde además se pueden apreciar diferentes planos.Se ha buscado la pureza y coherencia geométrica en cada uno de los productos.'
                +
                '<br><br>'
                +
                'Los 5 productos se han trabajado pensando en la percepción que el usuario tendrá sobre ellos, logrando que el material y la estructura continúen siendo compactas, pero sean percibidos de manera más amigable y estética.'
                +
                '<br><br>'
                +
                'El juego de planos, curvaturas y el modo de anclaje a la pared permiten brindar una sensación de suspensión en el aire de cada accesorio.'
                +
                '<br><br>'
                +
                'Son accesorios de fácil anclaje a la pared, puesto que se enganchan mediante un pegamento especial.',
                video: ''
            }
        }, {
            type: 'project',
            id: 'camilla-silla-de-ruedas',
            attributes: {
                title: 'Bend Kids',
                designer: 'María Granda',
                image: '/assets/images/camilla-silla-de-ruedas/camilla-silla-de-ruedas_0.jpg',
                number: 4,
                description: 'Las camillas y sillas de ruedas son productos indispensables en los hospitales. Este proyecto quiere incorporar los dos productos en uno solo. Bend Kids es una camilla y silla de ruedas diseñada para hospitales infantiles, razón por la cual hace uso de elementos que buscan que este producto sea más llamativo.'
                +
                '<br><br>'
                +
                'Bend Kids consta de diferentes partes plegables, que le permiten convertirse rápidamente de silla de ruedas a camilla y viceversa.'
                +
                '<br><br>'
                +
                'La transformación de un producto a otro es sencilla se hace mediante un riel ubicado a los lados por donde se sube el asiento hasta el punto de encaje. Para un mejor equilibrio se debe extender las ruedas delanteras y por último fijar el asiento que se encontrara en horizontal con las barras aseguradoras.'
                +
                '<br><br>'
                +
                '<b>Bend Kids recibió accésit en el concurso Innova del Hospital Sant Joan de Déu.</b>',
                video: ''
            }
        }, {
            type: 'project',
            id: 'sistema-de-recogida-selectiva',
            attributes: {
                title: 'Sistema de Recogida Selectiva',
                designer: 'María Granda, Anna Velarde y Georgina Tomás',
                image: '/assets/images/sistema-de-recogida-selectiva/sistema-de-recogida-selectiva_1.jpg',
                number: 3,
                description: 'El <b>sistema de recogida selectiva</b> nace a partir de la necesidad de tener un producto que facilite el reciclaje al público infantil, proporcionando además valores de concienciación social y educación al reciclaje desde edades muy tempranas.'
                +
                '<br><br>'
                +
                'Respeta la ergonomía del usuario con lo cual sus medidas son especiales para facilitar que los niños puedan lanzar los desechos sin ningún problema. Es un producto intuitivo, los contenedores tienen el color estándar de los recipientes de reciclaje.'
                +
                '<br><br>'
                +
                'Es un producto atemporal y de uso cotidiano.'
                +
                '<br><br>'
                +
                'Para ser coherentes con lo que queremos expresar mediante este producto su fabricación se hace con materiales reciclados a ciclo cerrado (tetrabrik 100% reciclado). Además, toda la información necesaria del producto se encuentra impresa en relieve en el mismo producto.',
                video: ''
            }
        }, {
            type: 'project',
            id: 'playing-pro',
            attributes: {
                title: 'Playing Pro',
                designer: 'María Granda',
                image: '/assets/images/playing-pro/playing-pro_10.jpg',
                number: 11,
                description: '<b>Playing Pro</b> es un mando de videojuegos inspirado en 3 características: formas orgánicas, ligereza y sensibilidad.',
                video: ''
            }
        }, {
            type: 'project',
            id: 'gps-m-44',
            attributes: {
                title: 'GPS M-44',
                designer: 'María Granda',
                image: '/assets/images/gps-m-44/gps-m-44_1.jpg',
                number: 5,
                description: 'El M-44 está diseñado para jóvenes deportistas más concretamente para los apasionados por el ciclomontañismo. Su uso es fácil e intuitivo, se ha intentado que la forma de este producto sea sencilla, dándole prioridad al tamaño de la pantalla.',
                video: ''
            }
        }, {
            type: 'project',
            id: 'taller-de-luz',
            attributes: {
                title: 'Taller De Luz',
                designer: 'María Granda',
                image: '/assets/images/taller-de-luz/taller-de-luz_6.jpg',
                number: 8,
                description: '',
                video: '108064158'
            }
        }];

    this.get('/projects', function(db, request) {
        if(request.queryParams.title !== undefined) {
            let filteredProjects = projects.filter(function(i) {
                return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
            });
            return { data: filteredProjects };
        } else {
            return { data: projects };
        }
    });

    // Find and return the provided project from our project list above
    this.get('/projects/:id', function (db, request) {
        return { data: projects.find((project) => request.params.id === project.id) };
    });
}