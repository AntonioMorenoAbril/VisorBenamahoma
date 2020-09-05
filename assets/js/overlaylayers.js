// OVERLAYS LAYERS

// My_Interest_Zones

// Style Function
function stylePolygon(feature) {
    return {
        weight: 1.3, // grosor de línea
        color: 'yellow', // color de línea
        opacity: 0.5, // tansparencia de línea
        fillColor: 'yellow', // color de relleno
        fillOpacity: 0.5 // transparencia de relleno
    };
};

// Layer My_Interest_Zones: Cargar archivo .geojson

var My_Interest_Zones = L.geoJson(null, {
    style: stylePolygon
});

$.getJSON("./data/myinterestzones.geojson", function (data) {
    My_Interest_Zones.addData(data);
});

My_Interest_Zones.addTo(map);

//controlLayers.addOverlay(My_Interest_Zones, "Zonas de Interes")



// My_Interest_Ptos

// Style Function
function stylePoint(feature) {
    return {
        color: "green"

    };
};

// Icon Variables
var myIcon1 = L.icon({
    iconUrl: './assets/img/icon/marker-icon1.png',
    iconSize: [12, 18]
});

var myIcon2 = L.icon({
    iconUrl: './assets/img/icon/marker-icon2.png',
    iconSize: [12, 18]
});

var myIcon3 = L.icon({
    iconUrl: './assets/img/icon/marker-icon3.png',
    iconSize: [12, 18]
});

var myIcon4 = L.icon({
    iconUrl: './assets/img/icon/marker-icon4.png',
    iconSize: [12, 18]
});

var myIcon5 = L.icon({
    iconUrl: './assets/img/icon/marker-icon5.png',
    iconSize: [12, 18]
});

var myIcon6 = L.icon({
    iconUrl: './assets/img/icon/marker-icon6.png',
    iconSize: [12, 18]
});

// PointToLayer Conditional Symbol Function
function PointToLayer(feature, latlng) {
    var Type = feature.properties.Tipo
    if (Type == "Natural")
        return L.marker(latlng, {
            icon: myIcon1
        });

    else if (Type == "Paisajístico")
        return L.marker(latlng, {
            icon: myIcon2
        });

    else if (Type == "Etnográfico")
        return L.marker(latlng, {
            icon: myIcon3
        });

    else if (Type == "Sendero")
        return L.marker(latlng, {
            icon: myIcon4
        });

    else if (Type == "Arqueológico")
        return L.marker(latlng, {
            icon: myIcon5
        });

    else if (Type == "Infraestructura")
        return L.marker(latlng, {
            icon: myIcon6
        });
    else
        return new L.CircleMarker(latlng, {
            color: "blue",
            fillColor: "blue",
            radius: 10,
            fillOpacity: 0.85,
            weight: 2,
            opacity: 1,
        });
};


//Poup Function Leaflet Default
function PopupInfo(feature, layer) {
    if (feature.properties && feature.properties.ID) {

        var PopupContent =
            `<div class= 'window1'>

            <header class='header1'> INFORMACIÓN: </header>
                
            <div class='text1'> 
                <p> <b> Tipo: </b> ${feature.properties.Tipo} </p>
                <p> <b> Subtipo: </b> ${feature.properties.Subtipo} </p>
                <p> <b> Nombre: </b> ${feature.properties.Nombre} </p>
                <p> <b> Descripción: </b> ${feature.properties.Descripcio} </p>
                
            </div>
            <!--Images Side by Side -->
            <div class='row1'>
                <div class='column1'>
                    <a href='https://www.grazalema.es/'><img src='./assets/img/map/1.jpg' alt='Cabreriza' style='width:100%'></a> 
                </div>
                <div class='column1'>
                    <img id='myImg1' src='./assets/img/map/2.jpg' alt='Snow' style='width:100%' onclick = "myFunction1()">
                </div>
            </div>
                <p> Web: <a href='https://www.grazalema.es/' title= 'Web Ayto. Grazalema' target= '_blank'> Web Ayuntamiento Grazalema </a> </p>
                <p> Pdf Content: <a href='./assets/pdf/arboles_espiral.pdf' download> <button class='btn1'><i class='fa fa-download'></i> Download</button> </p>
    </div>
    `
    }
    layer.bindPopup(PopupContent);
}
// Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function myFunction1() {
    modal.style.display = "block";
    modalImg.src = "./assets/img/map/2.jpg";
    captionText.innerHTML = "Arbol";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


// Layer My_Interest_Ptos: Cargar archivo .geojson 

// Layer My_Interest_Ptos_Natural: Cargar archivo .geojson 
var My_Interest_Ptos_Natural = L.geoJson(null, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Natural";
    },
});

$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos_Natural.addData(data);
});

My_Interest_Ptos_Natural.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Natural, "Pto. Interés Natural")

// Layer My_Interest_Ptos_Paisajistico: Cargar archivo .geojson 
var My_Interest_Ptos_Paisajistico = L.geoJson(null, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Paisajístico";
    },
});

$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos_Paisajistico.addData(data);
});

My_Interest_Ptos_Paisajistico.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Paisajistico, "Pto. Interés Paisajístico")

// Layer My_Interest_Ptos_Etnografico: Cargar archivo .geojson 
var My_Interest_Ptos_Etnografico = L.geoJson(null, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Etnográfico";
    },
});

$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos_Etnografico.addData(data);
});

My_Interest_Ptos_Etnografico.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Etnografico, "Pto. Interés Etnográfico")

/* // Layer My_Interest_Ptos_Sendero: Cargar archivo .geojson 
var My_Interest_Ptos_Sendero = L.geoJson(geojsonSenderoPto, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Sendero";
    },
});

$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos_Sendero.addData(data);
});

My_Interest_Ptos_Sendero.addTo(map);
controlLayers.addOverlay(My_Interest_Ptos_Sendero, "Pto. Interés Sendero") */

// Layer My_Interest_Ptos_Arqueologico: Cargar archivo .geojson 
var My_Interest_Ptos_Arqueologico = L.geoJson(null, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Arqueológico";
    },
});

$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos_Arqueologico.addData(data);
});

My_Interest_Ptos_Arqueologico.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Arqueologico, "Pto. Interés Arqueólogico")

// Layer My_Interest_Ptos_Infraestructura: Cargar archivo .geojson 
var My_Interest_Ptos_Infraestructura = L.geoJson(null, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Infraestructura";
    },
});

$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos_Infraestructura.addData(data);
});

My_Interest_Ptos_Infraestructura.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Infraestructura, "Pto. Interés Infraestructrua")

// Layer Sendero Interest Pto: Create geojson 

var geojsonSenderoPto = 

{
    "type": "FeatureCollection",
    "name": "myinterestptos",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "ID": 1, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Encina", "Descripcio": "Encina con crecimiento peculiar, raíces ancladas en la roca caliza", "Foto_ID": "1,27,29", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.462657197189746, 36.75602258436264 ] } },
    { "type": "Feature", "properties": { "ID": 2, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas al pueblo de Benamahoma", "Foto_ID": "2,30", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.464082784418236, 36.756202464297921 ] } },
    { "type": "Feature", "properties": { "ID": 3, "Tipo": "Etnográfico", "Subtipo": "Carboneo", "Nombre": "Esplanada de carboneo", "Descripcio": "Esplanada de carboneo de poca entidad", "Foto_ID": "3", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.4669567, 36.7562606 ] } },
    { "type": "Feature", "properties": { "ID": 4, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Encina", "Descripcio": "Encina centenaria con vistas a la Sierra del Labradillo", "Foto_ID": "4", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.46860854801699, 36.756907094939869 ] } },
    { "type": "Feature", "properties": { "ID": 5, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Algarrobos y Acebuches", "Descripcio": "Ejemplares de algarrobos y acebuches", "Foto_ID": "51", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.468879577938933, 36.756227831875812 ] } },
    { "type": "Feature", "properties": { "ID": 6, "Tipo": "Natural", "Subtipo": "Geología", "Nombre": "Vetas de calcita", "Descripcio": "Zona rica en vetas hidrotermales de calcita, variedad falsa ágata", "Foto_ID": "5, 23", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.4713764, 36.7567099 ] } },
    { "type": "Feature", "properties": { "ID": 7, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Quejigos", "Descripcio": "Quejigos centenarios", "Foto_ID": "6", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.471178438307337, 36.756349777836959 ] } },
    { "type": "Feature", "properties": { "ID": 8, "Tipo": "Natural", "Subtipo": "Geológico", "Nombre": "Hardground", "Descripcio": "Nivel hardground rico en óxidos de hierro", "Foto_ID": null, "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": "Falta tomar foto", "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.471629527367114, 36.754944672109552 ] } },
    { "type": "Feature", "properties": { "ID": 9, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas al Pico Albarracín (derecha) y Cerro Ponce (izquierda)", "Foto_ID": "12", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.472317711701123, 36.755266336310264 ] } },
    { "type": "Feature", "properties": { "ID": 10, "Tipo": "Natural", "Subtipo": "Paleontología", "Nombre": "Fósiles", "Descripcio": "Capa estratigráfica rica en fósiles tipo ammonites", "Foto_ID": "13", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.473117199782732, 36.755877666458247 ] } },
    { "type": "Feature", "properties": { "ID": 11, "Tipo": "Natural", "Subtipo": "Paleontología", "Nombre": "Fósiles", "Descripcio": "Zona rica en fósiles tipo terebratula", "Foto_ID": null, "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": "Falta foto tomar foto colección fósiles Jesús", "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.471543646177714, 36.75594614448665 ] } },
    { "type": "Feature", "properties": { "ID": 12, "Tipo": "Etnográfico", "Subtipo": "Agricultura", "Nombre": "Majanos", "Descripcio": "Majanos de piedra caliza retirados de los llanos colindantes", "Foto_ID": "49", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.473570674313804, 36.755783210366715 ] } },
    { "type": "Feature", "properties": { "ID": 13, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a la Sierra del Labradillo (izquierda), Sierra del Hinojal y Sierra Blanquilla (centro) y Sierra del Pinar (derecha)", "Foto_ID": "16", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.478908667605017, 36.753465364817629 ] } },
    { "type": "Feature", "properties": { "ID": 14, "Tipo": "Paisajístico", "Subtipo": "Panorámica", "Nombre": "Vista panorámica", "Descripcio": "Panorámica desde el pico Albarracin. Visible Benamahoma, Sierra del Labradillo, Sierra del Hinojal, Sierra del Blanquillo, Sierra del Pinar, Sierra del Hendrinal, Sierra de La Silla, Pantano de Los Hurones, El Bosque y Prado del Rey", "Foto_ID": "17,18,19", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": "Disponible video y fotos adicionales de la panoramica offline", "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.4819599, 36.7545188 ] } },
    { "type": "Feature", "properties": { "ID": 15, "Tipo": "Natural", "Subtipo": "Curiosidad", "Nombre": "Rayo", "Descripcio": "Vertice geodesico Albarracin afectado por rayo. Las barillas de hierro de la estructura del vértice están fundidas y las rocas de la base rajadas por la descarga", "Foto_ID": "20", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.481986991985674, 36.754493547435089 ] } },
    { "type": "Feature", "properties": { "ID": 16, "Tipo": "Etnográfico", "Subtipo": "Pozo", "Nombre": "Pozo", "Descripcio": "Pozo artesanal", "Foto_ID": "48", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.470530144818701, 36.755128671959973 ] } },
    { "type": "Feature", "properties": { "ID": 17, "Tipo": "Etnográfico", "Subtipo": "Fuente", "Nombre": "Fuente", "Descripcio": "Fuente", "Foto_ID": "47", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.470551523458886, 36.755149521184883 ] } },
    { "type": "Feature", "properties": { "ID": 18, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Eucaliptos", "Descripcio": "Gran ejemplar de eucalipto. Abundantes agujeros de pájaro pico picapinos en el tronco", "Foto_ID": "9, 45, 46", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.470477560128072, 36.755175128541076 ] } },
    { "type": "Feature", "properties": { "ID": 19, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Pinsapo", "Descripcio": "Pinsapo centenario emblemático. Punto de referencia visble desde Benamahoma", "Foto_ID": "22", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.481064445761171, 36.75486412784791 ] } },
    { "type": "Feature", "properties": { "ID": 20, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Almendro", "Descripcio": "Almendro con crecimiento en espiral", "Foto_ID": "7,42,43", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.470206570209104, 36.755457123214647 ] } },
    { "type": "Feature", "properties": { "ID": 21, "Tipo": "Natural", "Subtipo": "Fauna", "Nombre": "Araña Lobo", "Descripcio": "Araña lobo", "Foto_ID": "2", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.472585610450968, 36.755525780439555 ] } },
    { "type": "Feature", "properties": { "ID": 22, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "28", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.462053458831676, 36.756525812690036 ] } },
    { "type": "Feature", "properties": { "ID": 23, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Algarrobos", "Descripcio": "Bonitos ejemplares de algarrobos", "Foto_ID": "31", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.462216098175252, 36.756318578601643 ] } },
    { "type": "Feature", "properties": { "ID": 24, "Tipo": "Paisajístico", "Subtipo": "Panorámica", "Nombre": "Vista panorámica", "Descripcio": "Vista panorámica de la Sierra del Pinar", "Foto_ID": "34", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.4638629, 36.7557423 ] } },
    { "type": "Feature", "properties": { "ID": 25, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Algarrobo", "Descripcio": "Bonito ejemplar de algarrobo", "Foto_ID": "35,36", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.46400493123193, 36.755675930034052 ] } },
    { "type": "Feature", "properties": { "ID": 26, "Tipo": "Natural", "Subtipo": "Geomorfología", "Nombre": "Cueva", "Descripcio": "Pequeña cueva", "Foto_ID": "37", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.464847994424281, 36.756049495534135 ] } },
    { "type": "Feature", "properties": { "ID": 27, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Acebuches", "Descripcio": "Ejemplares de acebuches", "Foto_ID": "38", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.468109011195895, 36.757024003452678 ] } },
    { "type": "Feature", "properties": { "ID": 28, "Tipo": "Paisajístico", "Subtipo": "Panorámica", "Nombre": "Vistas panorámica", "Descripcio": "Vistas panorámicas a la Sierra del Pinar (izquierda) y Pico del Granadillo (derecha)", "Foto_ID": "39", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.469172549959728, 36.756535663424863 ] } },
    { "type": "Feature", "properties": { "ID": 29, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "53", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.473645798382249, 36.766702972896809 ] } },
    { "type": "Feature", "properties": { "ID": 30, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Tronco quejigo", "Descripcio": "Tronco de quejigo centenario", "Foto_ID": "54", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.473626889237571, 36.766492819984542 ] } },
    { "type": "Feature", "properties": { "ID": 31, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vista a la Sierra del Labradillo (derecha), Sierra Hinojal y Sierra Blanquilla (centro), Sierra del Pinar (derecha) y Benamahoma", "Foto_ID": "56", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.473715551930413, 36.765356911108213 ] } },
    { "type": "Feature", "properties": { "ID": 32, "Tipo": "Etnográfico", "Subtipo": "Agricultura", "Nombre": "Muro de piedra", "Descripcio": "Muro de piedra artesanal", "Foto_ID": "57", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.474032099498075, 36.765159266147798 ] } },
    { "type": "Feature", "properties": { "ID": 33, "Tipo": "Natural", "Subtipo": "Geología", "Nombre": "Brecha", "Descripcio": "Brecha de falla desarrollada en roca carbonatada", "Foto_ID": "58", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.475937556144019, 36.765601994577914 ] } },
    { "type": "Feature", "properties": { "ID": 34, "Tipo": "Paisajístico", "Subtipo": "Panorámica", "Nombre": "Vista panorámica", "Descripcio": "Vista panorámica a la Sierra Hinojal y Sierra Blanquilla (izquierda), Sierra del Pinar (centro), Sierra del Hendrinal (izquierda) y Benamahoma", "Foto_ID": "59", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.47597838855573, 36.765486748966147 ] } },
    { "type": "Feature", "properties": { "ID": 35, "Tipo": "Etnográfico", "Subtipo": "Curiosidad", "Nombre": "Piedra tallada", "Descripcio": "Piedra de calcita maciza tallada en forma de poliedro regular", "Foto_ID": "61", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.477807878958195, 36.765112344357817 ] } },
    { "type": "Feature", "properties": { "ID": 36, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero a través de encinas y algarrobos", "Foto_ID": "62", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.479407326790111, 36.765467671727322 ] } },
    { "type": "Feature", "properties": { "ID": 37, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Bosque de algarrobos y encinas", "Descripcio": "Bosque de algarrobos y encinas", "Foto_ID": "63", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.479600897204189, 36.76461669671572 ] } },
    { "type": "Feature", "properties": { "ID": 38, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección cortafuegos\/El Bosque o dirección llanos de la Sierra Albarracín", "Foto_ID": "64,65", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.480724622402517, 36.762330160949496 ] } },
    { "type": "Feature", "properties": { "ID": 39, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Bosque de algarrobos y encinas", "Descripcio": "Bosque de algarrobos y encinas", "Foto_ID": "66", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.479962983426228, 36.761712050086025 ] } },
    { "type": "Feature", "properties": { "ID": 40, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a Benamahoma", "Foto_ID": "69", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.479101200452487, 36.760005131316149 ] } },
    { "type": "Feature", "properties": { "ID": 41, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas al pico Albarracín", "Foto_ID": "68", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.479337755770276, 36.759997098216132 ] } },
    { "type": "Feature", "properties": { "ID": 42, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a la Sierra del Pinar", "Foto_ID": "70", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.479917308690273, 36.759483327302945 ] } },
    { "type": "Feature", "properties": { "ID": 43, "Tipo": "Natural", "Subtipo": "Geomorfología", "Nombre": "Roca desprendida", "Descripcio": "Enormes rocas desprendidas del pico Albarracín", "Foto_ID": "71", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.479365692489356, 36.757460521774561 ] } },
    { "type": "Feature", "properties": { "ID": 44, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Encina", "Descripcio": "Encina centenaria", "Foto_ID": "72,73", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.476427495143271, 36.754938889707347 ] } },
    { "type": "Feature", "properties": { "ID": 45, "Tipo": "Etnográfico", "Subtipo": "Asentamiento", "Nombre": "Muro de piedra", "Descripcio": "Muro de piedra artesanal", "Foto_ID": "74", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.469866048198628, 36.755048005353459 ] } },
    { "type": "Feature", "properties": { "ID": 46, "Tipo": "Etnográfico", "Subtipo": "Pozo", "Nombre": "Pozo", "Descripcio": "Pozo artesanal y pilón tallado en piedra", "Foto_ID": "75,76", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.470112814363699, 36.754682450645134 ] } },
    { "type": "Feature", "properties": { "ID": 47, "Tipo": "Etnográfico", "Subtipo": "Asentamiento", "Nombre": "Muro de piedra", "Descripcio": "Muro de piedra artesanal", "Foto_ID": "77", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.469620057112992, 36.754319591824569 ] } },
    { "type": "Feature", "properties": { "ID": 48, "Tipo": "Natural", "Subtipo": "Paleontología", "Nombre": "Fósiles", "Descripcio": "Capa estratigráfica muy rica en belemnites y bivalvos (conchas). Esporádicos ammonites", "Foto_ID": "80,81,82", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.467746139892294, 36.752532108578421 ] } },
    { "type": "Feature", "properties": { "ID": 49, "Tipo": "Etnográfico", "Subtipo": "Pozo", "Nombre": "Pozo", "Descripcio": "Pozo artesanal", "Foto_ID": "83,84", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.467565435463414, 36.752950553042673 ] } },
    { "type": "Feature", "properties": { "ID": 50, "Tipo": "Natural", "Subtipo": "Geología", "Nombre": "Sílex", "Descripcio": "Caliza con sílex", "Foto_ID": "86", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.467925223513434, 36.753537137183478 ] } },
    { "type": "Feature", "properties": { "ID": 51, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a Benamahoma y relieves colindantes", "Foto_ID": "90", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.468409875920644, 36.75464260681494 ] } },
    { "type": "Feature", "properties": { "ID": 52, "Tipo": "Natural", "Subtipo": "Geomorfología", "Nombre": "Lapiaz", "Descripcio": "Grietas, surcos y orificios en roca caliza. Geoformas características de un lapiaz", "Foto_ID": "91", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.468800249009842, 36.754387759861935 ] } },
    { "type": "Feature", "properties": { "ID": 53, "Tipo": "Etnográfico", "Subtipo": "Asentamiento", "Nombre": "Edificación", "Descripcio": "Edificación escavada en roca de naturaleza desconocida", "Foto_ID": "93", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": "¿Utilidad de la edificación?", "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.466958951201701, 36.753859222202429 ] } },
    { "type": "Feature", "properties": { "ID": 54, "Tipo": "Paisajístico", "Subtipo": "Panorámica", "Nombre": "Vista panorámica", "Descripcio": "Vista panorámica de la Sierra del Labradillo (izquierda) y Sierra del Pinar (derecha)", "Foto_ID": "94", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.466104985970082, 36.754604032725794 ] } },
    { "type": "Feature", "properties": { "ID": 55, "Tipo": "Natural", "Subtipo": "Geoformología", "Nombre": "Cubeta disolución", "Descripcio": "Cubetas de agua generadas por la disolución de la roca carbonatada. Geoforma de lapiaz. En un futuro podrían acabar generando una cueva o sima", "Foto_ID": "95", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.466020317502191, 36.754749549396386 ] } },
    { "type": "Feature", "properties": { "ID": 56, "Tipo": "Natural", "Subtipo": "Geomorfología", "Nombre": "Cueva", "Descripcio": "Pequeña cueva", "Foto_ID": "96", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.466430773317129, 36.754370576364671 ] } },
    { "type": "Feature", "properties": { "ID": 57, "Tipo": "Paisajístico", "Subtipo": "Panorámica", "Nombre": "Vista panorámica", "Descripcio": "Vista panorámica a Benamahoma y relieves colindantes", "Foto_ID": "97", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.465316915181267, 36.755153946987917 ] } },
    { "type": "Feature", "properties": { "ID": 58, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Inicio del sendero", "Foto_ID": "140", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto" }, "geometry": { "type": "Point", "coordinates": [ -5.464154743962383, 36.758750497156981 ] } },
    { "type": "Feature", "properties": { "ID": 59, "Tipo": "Arqueológico", "Subtipo": "Calzada", "Nombre": "Calzada romana", "Descripcio": "Calzada romana", "Foto_ID": "141", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto" }, "geometry": { "type": "Point", "coordinates": [ -5.463852541132691, 36.758215264441546 ] } },
    { "type": "Feature", "properties": { "ID": 60, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "142", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto" }, "geometry": { "type": "Point", "coordinates": [ -5.463357906960073, 36.757685629510313 ] } },
    { "type": "Feature", "properties": { "ID": 61, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección A-372 o dirección Molino del Susto", "Foto_ID": "143,144", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto" }, "geometry": { "type": "Point", "coordinates": [ -5.463171539755757, 36.757485211195167 ] } },
    { "type": "Feature", "properties": { "ID": 62, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero hacia la cascada que hay justo encima del molino", "Foto_ID": "153", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto" }, "geometry": { "type": "Point", "coordinates": [ -5.463112826567355, 36.757282677281168 ] } },
    { "type": "Feature", "properties": { "ID": 63, "Tipo": "Natural", "Subtipo": "Cascada", "Nombre": "Cascada", "Descripcio": "Pequeña cascada en Arroyo del Descansadero", "Foto_ID": "154", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto" }, "geometry": { "type": "Point", "coordinates": [ -5.463061543257978, 36.757183419696197 ] } },
    { "type": "Feature", "properties": { "ID": 64, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a la Sierra del Albarracín", "Foto_ID": "155", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto" }, "geometry": { "type": "Point", "coordinates": [ -5.463102366174438, 36.757101230132378 ] } },
    { "type": "Feature", "properties": { "ID": 65, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero entre vegetación", "Foto_ID": "156", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto" }, "geometry": { "type": "Point", "coordinates": [ -5.462837476578263, 36.757414231633547 ] } },
    { "type": "Feature", "properties": { "ID": 66, "Tipo": "Etnográfico", "Subtipo": "Curiosidad", "Nombre": "Canalización agua", "Descripcio": "Barrera de piedra diseñada para canalizar el agua frente avenias y así evitar el destrozo del camino", "Foto_ID": "157", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto" }, "geometry": { "type": "Point", "coordinates": [ -5.462636863457975, 36.757297083860713 ] } },
    { "type": "Feature", "properties": { "ID": 67, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifuración sendero", "Descripcio": "Bifuración del sendero: dirección A-372 o dirección poza Arroyo del Descansadero", "Foto_ID": "158", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto" }, "geometry": { "type": "Point", "coordinates": [ -5.462437932103912, 36.757177046735826 ] } },
    { "type": "Feature", "properties": { "ID": 68, "Tipo": "Natural", "Subtipo": "Poza", "Nombre": "Poza", "Descripcio": "Poza y cascada en Arroyo del Descansadero", "Foto_ID": "159,160", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": "Disponible video", "Paraje": "Molino del Susto" }, "geometry": { "type": "Point", "coordinates": [ -5.462650504976608, 36.756948869465461 ] } },
    { "type": "Feature", "properties": { "ID": 69, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Encina", "Descripcio": "Bonito ejemplar encina centenaria", "Foto_ID": "161", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto" }, "geometry": { "type": "Point", "coordinates": [ -5.462425155384969, 36.757155058267998 ] } },
    { "type": "Feature", "properties": { "ID": 70, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "98", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.455778480239943, 36.757127353876143 ] } },
    { "type": "Feature", "properties": { "ID": 71, "Tipo": "Etnográfico", "Subtipo": "Fuente", "Nombre": "Fuente", "Descripcio": "Fuente", "Foto_ID": "99,100", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.455636652900606, 36.755877400435772 ] } },
    { "type": "Feature", "properties": { "ID": 72, "Tipo": "Etnográfico", "Subtipo": "Cantera", "Nombre": "Cantera \"grea\"", "Descripcio": "Pequeña cantera de \"grea\" (caliza triturada)", "Foto_ID": "101", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.456533998566022, 36.756197751375545 ] } },
    { "type": "Feature", "properties": { "ID": 73, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a la Sierra del Pinar", "Foto_ID": "102", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.456251945170894, 36.755919647356912 ] } },
    { "type": "Feature", "properties": { "ID": 74, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Quejigo", "Descripcio": "Bonito quejigo centenario", "Foto_ID": "103", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.455657551072354, 36.755484275024067 ] } },
    { "type": "Feature", "properties": { "ID": 75, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Llanos del Berral o dirección carretera A-372", "Foto_ID": "139", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.456222955159554, 36.754698659192677 ] } },
    { "type": "Feature", "properties": { "ID": 76, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "104", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.456244599292075, 36.754351313466657 ] } },
    { "type": "Feature", "properties": { "ID": 77, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Pinsapo", "Descripcio": "Gran ejemplar de pinsapo", "Foto_ID": "105", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.455916424800277, 36.75494655976425 ] } },
    { "type": "Feature", "properties": { "ID": 78, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "107", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.456364925891008, 36.752726532801745 ] } },
    { "type": "Feature", "properties": { "ID": 79, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a los Llanos del Berral", "Foto_ID": "108", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.45679318141169, 36.751701032514838 ] } },
    { "type": "Feature", "properties": { "ID": 80, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Encina", "Descripcio": "Bonito ejemplar de encina centenaria", "Foto_ID": "109", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.45757082342119, 36.750746163006752 ] } },
    { "type": "Feature", "properties": { "ID": 81, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas al Castillo de Tavíznar", "Foto_ID": "110", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.46011998881527, 36.748731132739429 ] } },
    { "type": "Feature", "properties": { "ID": 82, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a la Sierra del Pinar y el Puerto del Boyar", "Foto_ID": "111", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.461188089120121, 36.748409074558928 ] } },
    { "type": "Feature", "properties": { "ID": 83, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero entre calizas trituradas", "Foto_ID": "112", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.461631506194479, 36.748216716427848 ] } },
    { "type": "Feature", "properties": { "ID": 84, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas", "Foto_ID": "113", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.461984369359151, 36.748039969881177 ] } },
    { "type": "Feature", "properties": { "ID": 85, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero entre piedras calizas", "Foto_ID": "114", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.462649388041815, 36.747837295885475 ] } },
    { "type": "Feature", "properties": { "ID": 86, "Tipo": "Paisajístico", "Subtipo": "Panorámica", "Nombre": "Vista panorámica", "Descripcio": "Vista panorámica de la Sierra del Pinar y el Puerto del Boyar", "Foto_ID": "115", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.462903202303521, 36.747677481084118 ] } },
    { "type": "Feature", "properties": { "ID": 87, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifuración sendero", "Descripcio": "Bifurcación del sendero: dirección Llanos de la Sierra del Albarracín o dirección Pico del Granadillo", "Foto_ID": "116,117", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.464115619414009, 36.748354177493773 ] } },
    { "type": "Feature", "properties": { "ID": 88, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "118", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.463850710961469, 36.74870084001757 ] } },
    { "type": "Feature", "properties": { "ID": 89, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a las cumbres de la Sierra del Albarracín (al frente) y al embalse de los Hurones (al fondo)", "Foto_ID": "119", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.463585496196985, 36.748949048709164 ] } },
    { "type": "Feature", "properties": { "ID": 90, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Encina \"andante\"", "Descripcio": "Encina con raices al aire", "Foto_ID": "120", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.463480647714269, 36.748918019139111 ] } },
    { "type": "Feature", "properties": { "ID": 91, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas al Embalse de los Hurones", "Foto_ID": "121", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.46266003807783, 36.749816571892268 ] } },
    { "type": "Feature", "properties": { "ID": 92, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "122", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.462138004720366, 36.750576131971727 ] } },
    { "type": "Feature", "properties": { "ID": 93, "Tipo": "Natural", "Subtipo": "Perezoso", "Nombre": "Perezoso", "Descripcio": "Perezoso del pico del Granadillo", "Foto_ID": "123", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.461478135360433, 36.751118726037831 ] } },
    { "type": "Feature", "properties": { "ID": 94, "Tipo": "Natural", "Subtipo": "Perezoso", "Nombre": "Perezoso", "Descripcio": "Perezoso", "Foto_ID": "67", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.47942737862504, 36.760052499984333 ] } },
    { "type": "Feature", "properties": { "ID": 94, "Tipo": "Natural", "Subtipo": "Geomorfología", "Nombre": "Lapiaz", "Descripcio": "Grietas, surcos y orificios en roca caliza. Geoformas características de un lapiaz", "Foto_ID": "125,126", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.461092302510615, 36.752971987883193 ] } },
    { "type": "Feature", "properties": { "ID": 95, "Tipo": "Natural", "Subtipo": "Pico", "Nombre": "Pico del Granadillo", "Descripcio": "Pico del Granadillo", "Foto_ID": "134", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.461032278048425, 36.753200123111036 ] } },
    { "type": "Feature", "properties": { "ID": 98, "Tipo": "Natural", "Subtipo": "Pico", "Nombre": "Pico del Albarracín", "Descripcio": "Pico del Albarracín", "Foto_ID": "20", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.482007621977378, 36.754498927973003 ] } },
    { "type": "Feature", "properties": { "ID": 96, "Tipo": "Paisajístico", "Subtipo": "Panorámica", "Nombre": "Vista panorámica", "Descripcio": "Vista panorámica desde el pico del Granadillo", "Foto_ID": "127,128,129,130,131,132,133,134,135", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.460996066391569, 36.75320632338039 ] } },
    { "type": "Feature", "properties": { "ID": 97, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "136", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.464393758831247, 36.748408684645895 ] } },
    { "type": "Feature", "properties": { "ID": 98, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "137", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.467601611059782, 36.750541597568521 ] } },
    { "type": "Feature", "properties": { "ID": 99, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "138", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.469471447686996, 36.753825092541312 ] } },
    { "type": "Feature", "properties": { "ID": 103, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "162", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464586519405441, 36.766655926433238 ] } },
    { "type": "Feature", "properties": { "ID": 104, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección El Nacimiento o dirección plaza de toros", "Foto_ID": "163", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464236166022412, 36.766892124394637 ] } },
    { "type": "Feature", "properties": { "ID": 105, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "164", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463975301737565, 36.767050154773557 ] } },
    { "type": "Feature", "properties": { "ID": 106, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "165", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463455364366422, 36.767475194141589 ] } },
    { "type": "Feature", "properties": { "ID": 107, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "166", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463130610663851, 36.767648173543122 ] } },
    { "type": "Feature", "properties": { "ID": 108, "Tipo": "Etnográfico", "Subtipo": "Fuente", "Nombre": "Fuente El Nacimiento", "Descripcio": "Fuente El Nacimiento", "Foto_ID": "167,168", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462948978401285, 36.767688729378499 ] } },
    { "type": "Feature", "properties": { "ID": 109, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Pinos", "Descripcio": "Pinos", "Foto_ID": "169", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462242578701503, 36.767791936268701 ] } },
    { "type": "Feature", "properties": { "ID": 110, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a las piscinas de la picifactoría", "Foto_ID": "170", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461942333496726, 36.767884004600795 ] } },
    { "type": "Feature", "properties": { "ID": 111, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección cementerio o dirección El Pinsapar", "Foto_ID": "171", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461061013842179, 36.768343770163135 ] } },
    { "type": "Feature", "properties": { "ID": 112, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas al cementerio y a la Sierra del Labradillo", "Foto_ID": "172", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.460403519043219, 36.768440503112217 ] } },
    { "type": "Feature", "properties": { "ID": 113, "Tipo": "Natural", "Subtipo": "Fauna", "Nombre": "Serpiente", "Descripcio": "Serpiente (culebra)", "Foto_ID": "173", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.460021153727088, 36.768560157560096 ] } },
    { "type": "Feature", "properties": { "ID": 114, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Quejigo", "Descripcio": "Bonito ejemplar de quejigo centenario. Rostro de una mujer en el perfil de su tronco", "Foto_ID": "174,175,176", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.45974319803434, 36.768501860234188 ] } },
    { "type": "Feature", "properties": { "ID": 115, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso a El Pinsapar", "Foto_ID": "177", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.459484513197245, 36.768940555848275 ] } },
    { "type": "Feature", "properties": { "ID": 116, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "178", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.459456259406386, 36.768957492896277 ] } },
    { "type": "Feature", "properties": { "ID": 117, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a la Sierra del Pinar", "Foto_ID": "179", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.458816821341777, 36.768612322851432 ] } },
    { "type": "Feature", "properties": { "ID": 118, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a la Sierra del Pinar. Bonito ejemplar de quejigo centenario", "Foto_ID": "180", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.45805255720331, 36.768177064942364 ] } },
    { "type": "Feature", "properties": { "ID": 119, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección El Pinsapar o dirección Cerro La Atalaya", "Foto_ID": "181", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.456170470293988, 36.767585018971467 ] } },
    { "type": "Feature", "properties": { "ID": 120, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "182", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.45619450408833, 36.767329693944397 ] } },
    { "type": "Feature", "properties": { "ID": 121, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Quejigo", "Descripcio": "Ejemplar centenario de quejigo", "Foto_ID": "183", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.456207606314129, 36.767209503964892 ] } },
    { "type": "Feature", "properties": { "ID": 122, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "184", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.457045669576855, 36.765871713855546 ] } },
    { "type": "Feature", "properties": { "ID": 123, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas al valle entre la Sierra del Labradillo y la Sierra del Hinojal", "Foto_ID": "185", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.4573944360113, 36.765036765236793 ] } },
    { "type": "Feature", "properties": { "ID": 124, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Quejigo", "Descripcio": "Bonito ejemplar de quejigo centenario", "Foto_ID": "186", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.458233135562123, 36.764206170850962 ] } },
    { "type": "Feature", "properties": { "ID": 125, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección a Cruz de La Atalaya, dirección ruinas de La Atalaya o dirección Sierra del Pinar", "Foto_ID": "187", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": "La foto es confusa por la orientación", "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.458359305780189, 36.764129357930734 ] } },
    { "type": "Feature", "properties": { "ID": 126, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "190", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.460181250884356, 36.765151539309414 ] } },
    { "type": "Feature", "properties": { "ID": 127, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección a Cruz de La Atalaya o dirección ruinas de La Atalaya", "Foto_ID": "191", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461284067889, 36.76504288781662 ] } },
    { "type": "Feature", "properties": { "ID": 128, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "192", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462250856043642, 36.765128409777688 ] } },
    { "type": "Feature", "properties": { "ID": 129, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Cruz de La Ataya, dirección plaza de toros o dirección El Pinsapar", "Foto_ID": "193", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462696320472684, 36.76573302026577 ] } },
    { "type": "Feature", "properties": { "ID": 130, "Tipo": "Etnográfico", "Subtipo": "Curiosidad", "Nombre": "Cruz de La Atalaya", "Descripcio": "Cruz de La Atalaya. Cruz en honor a la visita de unos misioneros", "Foto_ID": "194", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462903308106799, 36.76586733089313 ] } },
    { "type": "Feature", "properties": { "ID": 131, "Tipo": "Paisajístico", "Subtipo": "Panorámica", "Nombre": "Vista panorámica", "Descripcio": "Vista panorámica: Sierra del Albarracín, Benamahoma, Castillo de Matrera (Torre árabe Pajarete), Sierra del Labradillo, Sierra del Hinojal, Sierra Blanquilla y Sierra del Pinar", "Foto_ID": "195,196,197,198,199", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462917983736134, 36.765877973974284 ] } },
    { "type": "Feature", "properties": { "ID": 132, "Tipo": "Arqueológico", "Subtipo": "Asentamiento", "Nombre": "Asentamiento árabe", "Descripcio": "Ruinas de asentamiento árabe", "Foto_ID": "201", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462353279505187, 36.764246650331089 ] } },
    { "type": "Feature", "properties": { "ID": 133, "Tipo": "Arqueológico", "Subtipo": "Asentamiento", "Nombre": "Asentamiento árabe", "Descripcio": "Ruinas de asentamiento árabe", "Foto_ID": "202", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462497610618607, 36.764189225273874 ] } },
    { "type": "Feature", "properties": { "ID": 134, "Tipo": "Arqueológico", "Subtipo": "Asentamiento", "Nombre": "Asentamiento árabe", "Descripcio": "Ruinas de asentamiento árabe", "Foto_ID": "203", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462500469123786, 36.764158866720543 ] } },
    { "type": "Feature", "properties": { "ID": 135, "Tipo": "Arqueológico", "Subtipo": "Asentamiento", "Nombre": "Asetamiento árabe", "Descripcio": "Ruinas de asentamiento árabe", "Foto_ID": "204", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462522603984933, 36.764072645735681 ] } },
    { "type": "Feature", "properties": { "ID": 136, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero. Discurre sobre las ruinas", "Foto_ID": "205", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462292886882896, 36.764276491430017 ] } },
    { "type": "Feature", "properties": { "ID": 137, "Tipo": "Paisajístico", "Subtipo": "Panorámica", "Nombre": "Vsita panorámica", "Descripcio": "Vista panorámica: Sierra del Albarracín y Benamahoma", "Foto_ID": "206", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462624805298429, 36.764013183292434 ] } },
    { "type": "Feature", "properties": { "ID": 138, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero. Discurre sobre las ruinas", "Foto_ID": "207", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462179348691149, 36.76423731919401 ] } },
    { "type": "Feature", "properties": { "ID": 139, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero. Discurre sobre las ruinas", "Foto_ID": "208", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461954058616457, 36.764149398268003 ] } },
    { "type": "Feature", "properties": { "ID": 140, "Tipo": "Sendero", "Subtipo": "Trazo sendero", "Nombre": "Trazo del sendero", "Descripcio": "Trazo del sendero. Discurre sobre las ruinas", "Foto_ID": "209", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461734201246461, 36.764056875426107 ] } },
    { "type": "Feature", "properties": { "ID": 141, "Tipo": "Arqueológico", "Subtipo": "Asentamiento", "Nombre": "Asentamiento árabe", "Descripcio": "Ruinas de asentamiento árabe", "Foto_ID": "210", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461425867362154, 36.763862246901525 ] } },
    { "type": "Feature", "properties": { "ID": 142, "Tipo": "Arqueológico", "Subtipo": "Asentamiento", "Nombre": "Asentamiento árabe", "Descripcio": "Ruinas de asentamiento árabe", "Foto_ID": "211", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461192509886326, 36.763792228081797 ] } },
    { "type": "Feature", "properties": { "ID": 143, "Tipo": "Paisajístico", "Subtipo": "Panorámica", "Nombre": "Vista panorámica", "Descripcio": "Vista panorámica desde La Atalaya: Sierra del Albarracín, Benamahoma, Torre Pajarete (Prado del Rey), Sierra del Labradillo, Sierra del Hinojal, Sierra Blanquilla y Sierra del Pinar", "Foto_ID": "213,214,215", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.460722776964411, 36.764121547069117 ] } },
    { "type": "Feature", "properties": { "ID": 144, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "217", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.460632834556679, 36.763800199849406 ] } },
    { "type": "Feature", "properties": { "ID": 145, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Encina", "Descripcio": "Bonito ejemplar de encina centenaria. Punto de referencia", "Foto_ID": "218", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462189816821655, 36.764206654312687 ] } },
    { "type": "Feature", "properties": { "ID": 146, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "219", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.460685194036174, 36.763894730295981 ] } },
    { "type": "Feature", "properties": { "ID": 147, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas: Sierra del Albarracín (pico El Granadillo), Llano \"La Capellanía\"", "Foto_ID": "220", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.460344936889715, 36.763803251207484 ] } },
    { "type": "Feature", "properties": { "ID": 148, "Tipo": "Arqueológico", "Subtipo": "Asentamiento", "Nombre": "Asentamiento árabe", "Descripcio": "Ruinas de asentamiento árabe", "Foto_ID": "221", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.460400575814366, 36.763823767567814 ] } },
    { "type": "Feature", "properties": { "ID": 149, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "222", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.460330874691385, 36.763705586514149 ] } },
    { "type": "Feature", "properties": { "ID": 150, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Encina", "Descripcio": "Bonita encina con vistas a Sierra del Pinar. Punto de referencia", "Foto_ID": "223,224", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.459635047552544, 36.763631505795892 ] } },
    { "type": "Feature", "properties": { "ID": 151, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "225", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.465539188867371, 36.764776875425376 ] } },
    { "type": "Feature", "properties": { "ID": 152, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "226", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.465449533739188, 36.764850508275629 ] } },
    { "type": "Feature", "properties": { "ID": 153, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "227", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.465236645294143, 36.764991698828972 ] } },
    { "type": "Feature", "properties": { "ID": 154, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "228", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": "Pendiente recorrer alternativa de la derecha", "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.465186634351388, 36.765041999103367 ] } },
    { "type": "Feature", "properties": { "ID": 155, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "229", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.465068945723228, 36.765122007459276 ] } },
    { "type": "Feature", "properties": { "ID": 156, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "230", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464912119168145, 36.765229833240234 ] } },
    { "type": "Feature", "properties": { "ID": 157, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "231", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464833368000177, 36.764978225815483 ] } },
    { "type": "Feature", "properties": { "ID": 158, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "232,251", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464786911456134, 36.764753936196442 ] } },
    { "type": "Feature", "properties": { "ID": 159, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "233", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464798976500367, 36.764867892340284 ] } },
    { "type": "Feature", "properties": { "ID": 160, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "234", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464560567681542, 36.764880141231842 ] } },
    { "type": "Feature", "properties": { "ID": 161, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Perrera", "Descripcio": "Perrera abandonada", "Foto_ID": "235", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464502101221635, 36.76480641930614 ] } },
    { "type": "Feature", "properties": { "ID": 162, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "236", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464577497172384, 36.764743013686292 ] } },
    { "type": "Feature", "properties": { "ID": 163, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "237", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464344520948058, 36.764624833658104 ] } },
    { "type": "Feature", "properties": { "ID": 164, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "238", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464287496522126, 36.764703491006784 ] } },
    { "type": "Feature", "properties": { "ID": 165, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "239", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464321016052558, 36.764924604370414 ] } },
    { "type": "Feature", "properties": { "ID": 166, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "240", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464437325267189, 36.764647342710035 ] } },
    { "type": "Feature", "properties": { "ID": 167, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "241", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma" }, "geometry": { "type": "Point", "coordinates": [ -5.464376585944311, 36.765098429734621 ] } },
    { "type": "Feature", "properties": { "ID": 168, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "242", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma" }, "geometry": { "type": "Point", "coordinates": [ -5.464170654961808, 36.764309122081933 ] } },
    { "type": "Feature", "properties": { "ID": 169, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección las canteras o dirección Cruz de La Atalaya", "Foto_ID": "243", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma" }, "geometry": { "type": "Point", "coordinates": [ -5.463947733032582, 36.763882759639131 ] } },
    { "type": "Feature", "properties": { "ID": 170, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "244", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma" }, "geometry": { "type": "Point", "coordinates": [ -5.463845845595534, 36.76459087326419 ] } },
    { "type": "Feature", "properties": { "ID": 171, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Cruz de La Atalaya o dirección El Nacimiento", "Foto_ID": "245", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma" }, "geometry": { "type": "Point", "coordinates": [ -5.463817737729948, 36.764887128022629 ] } },
    { "type": "Feature", "properties": { "ID": 172, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "246", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma" }, "geometry": { "type": "Point", "coordinates": [ -5.46378285509973, 36.763665888842333 ] } },
    { "type": "Feature", "properties": { "ID": 173, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "247", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.465581013356259, 36.764745523910612 ] } },
    { "type": "Feature", "properties": { "ID": 174, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "248", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.465519328832655, 36.764827537872826 ] } },
    { "type": "Feature", "properties": { "ID": 175, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "249", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.465382578243476, 36.764878492135296 ] } },
    { "type": "Feature", "properties": { "ID": 176, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "250", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.465310196051196, 36.764868718173133 ] } },
    { "type": "Feature", "properties": { "ID": 177, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "252", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463638245109014, 36.763417011662291 ] } },
    { "type": "Feature", "properties": { "ID": 178, "Tipo": "Etnográfico", "Subtipo": "Pozo", "Nombre": "Pozo", "Descripcio": "Pozo artesanal", "Foto_ID": "253", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463287777726037, 36.762758027211575 ] } },
    { "type": "Feature", "properties": { "ID": 179, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a Sierra del Albarracín y Benamahoma", "Foto_ID": "255", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463383529950379, 36.762759214604124 ] } },
    { "type": "Feature", "properties": { "ID": 180, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "256", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463111698940575, 36.762557370885808 ] } },
    { "type": "Feature", "properties": { "ID": 181, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "257", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462981627951115, 36.762351684306346 ] } },
    { "type": "Feature", "properties": { "ID": 182, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas hacia Pico del Granadillo", "Foto_ID": "258", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462569718237892, 36.762182638794194 ] } },
    { "type": "Feature", "properties": { "ID": 183, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección La Atalaya o dirección las canteras", "Foto_ID": "259,260", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462504272105578, 36.762175462604347 ] } },
    { "type": "Feature", "properties": { "ID": 184, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "261", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462460169263911, 36.762137342262577 ] } },
    { "type": "Feature", "properties": { "ID": 185, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "262", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462340918153214, 36.762070351444926 ] } },
    { "type": "Feature", "properties": { "ID": 186, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero al borde de cantera", "Foto_ID": "263", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462287776923234, 36.762051821780929 ] } },
    { "type": "Feature", "properties": { "ID": 187, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Llanos del Campo o dirección Benamahoma", "Foto_ID": "264", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462182246811914, 36.761970805616286 ] } },
    { "type": "Feature", "properties": { "ID": 188, "Tipo": "Natural", "Subtipo": "Geología", "Nombre": "Brecha", "Descripcio": "Brecha de falla desarrollada en roca carbonatada", "Foto_ID": "266", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.46256985177759, 36.761699887027504 ] } },
    { "type": "Feature", "properties": { "ID": 189, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a Cerro del Granadillo y carretera A-372", "Foto_ID": "267", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462415450065246, 36.761730868626671 ] } },
    { "type": "Feature", "properties": { "ID": 190, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "268", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462645273650927, 36.761687453008889 ] } },
    { "type": "Feature", "properties": { "ID": 191, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "269", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463032860450408, 36.761882370227767 ] } },
    { "type": "Feature", "properties": { "ID": 192, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "270", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463071081284534, 36.762326124321824 ] } },
    { "type": "Feature", "properties": { "ID": 193, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero al borde de una cantera", "Foto_ID": "271", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462525534689607, 36.761558260205682 ] } },
    { "type": "Feature", "properties": { "ID": 194, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "272", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461887057363766, 36.761170423027572 ] } },
    { "type": "Feature", "properties": { "ID": 195, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección las canteras, dirección Benamahoma o dirección carrtera A-372", "Foto_ID": "273", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461693628338461, 36.76068518536718 ] } },
    { "type": "Feature", "properties": { "ID": 196, "Tipo": "Etnográfico", "Subtipo": "Cantera", "Nombre": "Cantera", "Descripcio": "Cantera en materiales carbonatados triturados", "Foto_ID": "265", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462406153357358, 36.761893536087811 ] } },
    { "type": "Feature", "properties": { "ID": 197, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección A-372 o dirección Benamahoma", "Foto_ID": "274", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462489839191986, 36.760556742642223 ] } },
    { "type": "Feature", "properties": { "ID": 198, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "275", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463015486498982, 36.760432178408806 ] } },
    { "type": "Feature", "properties": { "ID": 199, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "276", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463856502847735, 36.760411883492353 ] } },
    { "type": "Feature", "properties": { "ID": 200, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "277", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464328141100912, 36.760292974933463 ] } },
    { "type": "Feature", "properties": { "ID": 201, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "278", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463456559471425, 36.760451187063097 ] } },
    { "type": "Feature", "properties": { "ID": 202, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "279", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463427454804165, 36.760857888077489 ] } },
    { "type": "Feature", "properties": { "ID": 203, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "280", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463974896239874, 36.760966020098721 ] } },
    { "type": "Feature", "properties": { "ID": 204, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "281", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462925374305567, 36.760772938623909 ] } },
    { "type": "Feature", "properties": { "ID": 205, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "282", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461642740831133, 36.760456008970131 ] } },
    { "type": "Feature", "properties": { "ID": 206, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "283", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462506196180934, 36.762197219411448 ] } },
    { "type": "Feature", "properties": { "ID": 207, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "284", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462520964232098, 36.762469177334538 ] } },
    { "type": "Feature", "properties": { "ID": 208, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "285", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462209350342327, 36.763239289842311 ] } },
    { "type": "Feature", "properties": { "ID": 209, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "286", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462258649661237, 36.76399934375678 ] } },
    { "type": "Feature", "properties": { "ID": 210, "Tipo": "Arqueológico", "Subtipo": "Asentamiento", "Nombre": "Asentamiento árabe", "Descripcio": "Ruinas de asentamiento árabe", "Foto_ID": "287", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.46223309192515, 36.764137728029738 ] } },
    { "type": "Feature", "properties": { "ID": 211, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "288", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462206217124247, 36.764123350231863 ] } },
    { "type": "Feature", "properties": { "ID": 212, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "289", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463677472414771, 36.765346207502937 ] } },
    { "type": "Feature", "properties": { "ID": 213, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "290", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463477313290984, 36.76623032879494 ] } },
    { "type": "Feature", "properties": { "ID": 214, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "291", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.46354747848652, 36.766950316019454 ] } },
    { "type": "Feature", "properties": { "ID": 215, "Tipo": "Paisajístico", "Subtipo": "Panorámica", "Nombre": "Vistas panorámica", "Descripcio": "Vista panorámica: Benamahoma, Sierra del Labradillo y Cerro La Atalaya", "Foto_ID": "292,293,294", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464081794885752, 36.766825514079102 ] } },
    { "type": "Feature", "properties": { "ID": 216, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "295", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.464179274043108, 36.76688208229379 ] } },
    { "type": "Feature", "properties": { "ID": 217, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Edificación de piedra", "Descripcio": "Edificación de piedra con roca superpuesta", "Foto_ID": "296", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.463886501422415, 36.766924910713918 ] } },
    { "type": "Feature", "properties": { "ID": 218, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a la Sierra del Labradillo", "Foto_ID": "297", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma" }, "geometry": { "type": "Point", "coordinates": [ -5.464689747486431, 36.767043892512383 ] } },
    { "type": "Feature", "properties": { "ID": 219, "Tipo": "Natural", "Subtipo": "Río", "Nombre": "Río Majaceite", "Descripcio": "Río Majaceite", "Foto_ID": "298", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Rio Majaceite" }, "geometry": { "type": "Point", "coordinates": [ -5.464967303277345, 36.767870905827778 ] } },
    { "type": "Feature", "properties": { "ID": 220, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "299", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma" }, "geometry": { "type": "Point", "coordinates": [ -5.464213514875419, 36.767809932115185 ] } },
    { "type": "Feature", "properties": { "ID": 221, "Tipo": "Infraestructura", "Subtipo": "Mesas", "Nombre": "Mesa piedra", "Descripcio": "Mesa de piedra", "Foto_ID": "300", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma" }, "geometry": { "type": "Point", "coordinates": [ -5.464122013958443, 36.767946308795445 ] } },
    { "type": "Feature", "properties": { "ID": 222, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Protuberancia tronco chopo", "Descripcio": "Protuberancia del tronco de un chopo anclada a muro", "Foto_ID": "301", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Rio Majaceite" }, "geometry": { "type": "Point", "coordinates": [ -5.463478198732211, 36.768379296027241 ] } },
    { "type": "Feature", "properties": { "ID": 223, "Tipo": "Infraestructura", "Subtipo": "Museo", "Nombre": "Museo del agua", "Descripcio": "Museo del agua", "Foto_ID": "302", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Rio Majaceite" }, "geometry": { "type": "Point", "coordinates": [ -5.463388208605381, 36.768255329389362 ] } },
    { "type": "Feature", "properties": { "ID": 224, "Tipo": "Etnográfico", "Subtipo": "Fuente", "Nombre": "Fuente", "Descripcio": "Fuente del museo del agua", "Foto_ID": "303", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Rio Majaceite" }, "geometry": { "type": "Point", "coordinates": [ -5.463334523271241, 36.768092861222165 ] } },
    { "type": "Feature", "properties": { "ID": 225, "Tipo": "Etnográfico", "Subtipo": "Molino", "Nombre": "Canalizaciones Molino del Agua", "Descripcio": "Canalizaciones de agua del Molino del Agua", "Foto_ID": "304,308,309", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Rio Majaceite" }, "geometry": { "type": "Point", "coordinates": [ -5.463162794800308, 36.76810271040096 ] } },
    { "type": "Feature", "properties": { "ID": 226, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero: escaleras", "Foto_ID": "305", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Rio Majaceite" }, "geometry": { "type": "Point", "coordinates": [ -5.463209403599292, 36.767799750256493 ] } },
    { "type": "Feature", "properties": { "ID": 227, "Tipo": "Natural", "Subtipo": "Río", "Nombre": "Río Majaceite", "Descripcio": "Río Majaceite", "Foto_ID": "306,310,311", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Rio Majaceite" }, "geometry": { "type": "Point", "coordinates": [ -5.463304216186321, 36.767732353901884 ] } },
    { "type": "Feature", "properties": { "ID": 228, "Tipo": "Etnográfico", "Subtipo": "Picifactoría", "Nombre": "Picifactoría", "Descripcio": "Picifactoría", "Foto_ID": "307,313", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": "Tomar fotos del interior", "Paraje": "Rio Majaceite" }, "geometry": { "type": "Point", "coordinates": [ -5.462562204269624, 36.767809381056466 ] } },
    { "type": "Feature", "properties": { "ID": 229, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero: puente", "Foto_ID": "312", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Rio Majaceite" }, "geometry": { "type": "Point", "coordinates": [ -5.463111583744325, 36.768457356599541 ] } },
    { "type": "Feature", "properties": { "ID": 230, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo sendero", "Foto_ID": "314", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.459405739151014, 36.763347304383956 ] } },
    { "type": "Feature", "properties": { "ID": 231, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "315", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.459465667639781, 36.762579752432266 ] } },
    { "type": "Feature", "properties": { "ID": 232, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "316", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.459623512378543, 36.762013392580123 ] } },
    { "type": "Feature", "properties": { "ID": 233, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a la Sierra del Albarracín", "Foto_ID": "317", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.459057946574549, 36.761443749218813 ] } },
    { "type": "Feature", "properties": { "ID": 234, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "318", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.458835326838571, 36.760741180754813 ] } },
    { "type": "Feature", "properties": { "ID": 235, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Quejigos y encinas", "Descripcio": "Bonitos ejemplares de quejigos y encinas centenarias", "Foto_ID": "319", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.458477042109801, 36.760295595960685 ] } },
    { "type": "Feature", "properties": { "ID": 236, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "320", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.458592623915925, 36.76016863325475 ] } },
    { "type": "Feature", "properties": { "ID": 237, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "321", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.458910548860469, 36.760256433010063 ] } },
    { "type": "Feature", "properties": { "ID": 238, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "322", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.459759531033094, 36.760690608776407 ] } },
    { "type": "Feature", "properties": { "ID": 239, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "323", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462056307309795, 36.761944171215717 ] } },
    { "type": "Feature", "properties": { "ID": 240, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas a la Sierra del Albarracín y a la carretera A-372", "Foto_ID": "324", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461472655804461, 36.761787640568322 ] } },
    { "type": "Feature", "properties": { "ID": 241, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "325", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.46121496259371, 36.761602969434129 ] } },
    { "type": "Feature", "properties": { "ID": 242, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "326", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.4606590802721, 36.761385460931031 ] } },
    { "type": "Feature", "properties": { "ID": 243, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "327", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.457298294773467, 36.759524706096428 ] } },
    { "type": "Feature", "properties": { "ID": 244, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "328", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.456863426534871, 36.759521108563234 ] } },
    { "type": "Feature", "properties": { "ID": 245, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "329", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.456681880845283, 36.76005586783841 ] } },
    { "type": "Feature", "properties": { "ID": 246, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Quejigos", "Descripcio": "Bonitos ejemplares de quejigos centenarios", "Foto_ID": "330", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.454629428848153, 36.760231634237229 ] } },
    { "type": "Feature", "properties": { "ID": 247, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Quejigos y encinas", "Descripcio": "Bonitos ejemplares de quejigos y encinas centenarias", "Foto_ID": "332", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.454735769354207, 36.760587114940762 ] } },
    { "type": "Feature", "properties": { "ID": 348, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "333", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.454399468457953, 36.76014358023744 ] } },
    { "type": "Feature", "properties": { "ID": 349, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "334", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.453257548998633, 36.759152942571568 ] } },
    { "type": "Feature", "properties": { "ID": 350, "Tipo": "Etnográfico", "Subtipo": "Curiosidad", "Nombre": "Canalización agua", "Descripcio": "Barrera de piedra diseñada para canalizar el agua frente avenias y así evitar el destrozo del camino", "Foto_ID": "336", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.456108386536468, 36.7591997924116 ] } },
    { "type": "Feature", "properties": { "ID": 351, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Tronco", "Descripcio": "Tronco seco de quejigo", "Foto_ID": "337", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.45590245208076, 36.758528960071693 ] } },
    { "type": "Feature", "properties": { "ID": 352, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas", "Foto_ID": "338", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.455671959552824, 36.758607960692764 ] } },
    { "type": "Feature", "properties": { "ID": 353, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "340", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.456110030419933, 36.758663087416309 ] } },
    { "type": "Feature", "properties": { "ID": 354, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo de sendero", "Foto_ID": "341", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.462121335240209, 36.757163340629404 ] } },
    { "type": "Feature", "properties": { "ID": 355, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "342", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461995354707374, 36.756959706308933 ] } },
    { "type": "Feature", "properties": { "ID": 356, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "343", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.461044663022679, 36.756982007034317 ] } },
    { "type": "Feature", "properties": { "ID": 357, "Tipo": "Etnográfico", "Subtipo": "Calera", "Nombre": "Calera", "Descripcio": "Calera", "Foto_ID": "344,345", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.460920743094335, 36.757046619166594 ] } },
    { "type": "Feature", "properties": { "ID": 358, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "346", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.460598613914711, 36.757060276353279 ] } },
    { "type": "Feature", "properties": { "ID": 359, "Tipo": "Etnográfico", "Subtipo": "Fuente", "Nombre": "Fuente Descansadero", "Descripcio": "Fuente El Descansadero", "Foto_ID": "347,348,349", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.460044241948654, 36.757045528785 ] } },
    { "type": "Feature", "properties": { "ID": 360, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "350", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.459283433109802, 36.757096221795528 ] } },
    { "type": "Feature", "properties": { "ID": 361, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "351", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.458726044113913, 36.75732709921359 ] } },
    { "type": "Feature", "properties": { "ID": 362, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "352", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.458407117747933, 36.757407101429571 ] } },
    { "type": "Feature", "properties": { "ID": 363, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "353", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.45782900439207, 36.75739720391848 ] } },
    { "type": "Feature", "properties": { "ID": 364, "Tipo": "Paisajístico", "Subtipo": "Vistas", "Nombre": "Vistas", "Descripcio": "Vistas", "Foto_ID": "354", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.457742911744671, 36.757388059429523 ] } },
    { "type": "Feature", "properties": { "ID": 365, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "355", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.457094498650006, 36.757353393955526 ] } },
    { "type": "Feature", "properties": { "ID": 366, "Tipo": "Natural", "Subtipo": "Geología", "Nombre": "Brecha", "Descripcio": "Brecha de falla desarrollada en roca carbonatada", "Foto_ID": "358", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.456510050481012, 36.757425768493761 ] } },
    { "type": "Feature", "properties": { "ID": 367, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "359", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.455851626699642, 36.757656097944846 ] } },
    { "type": "Feature", "properties": { "ID": 368, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Quejigo", "Descripcio": "Quejigo centenario", "Foto_ID": "360", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.455879068574903, 36.757699226740336 ] } },
    { "type": "Feature", "properties": { "ID": 369, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "361", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.455840245260274, 36.757690852464073 ] } },
    { "type": "Feature", "properties": { "ID": 370, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Arroyo El Descansadero o dirección El Tesorillo", "Foto_ID": "362", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.455835222317297, 36.757703627901662 ] } },
    { "type": "Feature", "properties": { "ID": 371, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Arroyo El Descansadero o dirección Llanos del Campo", "Foto_ID": "363", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.455750163957001, 36.757795014950837 ] } },
    { "type": "Feature", "properties": { "ID": 372, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "364", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.455657640302653, 36.757958817587962 ] } },
    { "type": "Feature", "properties": { "ID": 373, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "365", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.454924630902192, 36.758541120401617 ] } },
    { "type": "Feature", "properties": { "ID": 374, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Benamahoma o dirección El Tesorillo", "Foto_ID": "366", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.453447431220428, 36.758623167958795 ] } },
    { "type": "Feature", "properties": { "ID": 375, "Tipo": "Infraestructura", "Subtipo": "Asientos", "Nombre": "Asiento piedra", "Descripcio": "Asiento de piedra con vistas", "Foto_ID": "367,368", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.451851408770692, 36.758504025884136 ] } },
    { "type": "Feature", "properties": { "ID": 376, "Tipo": "Arqueológico", "Subtipo": "Calzada", "Nombre": "Calzada romana", "Descripcio": "Calzada romana", "Foto_ID": "369", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.451446421489559, 36.75842279954346 ] } },
    { "type": "Feature", "properties": { "ID": 377, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero entre encinas centenarias", "Foto_ID": "370", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.450898451245048, 36.758063556306155 ] } },
    { "type": "Feature", "properties": { "ID": 378, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección El Tesorillo o dirección fuente", "Foto_ID": "371", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.450265497856187, 36.757576285668776 ] } },
    { "type": "Feature", "properties": { "ID": 379, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "372", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.450099140257465, 36.757638702395148 ] } },
    { "type": "Feature", "properties": { "ID": 380, "Tipo": "Etnográfico", "Subtipo": "Fuente", "Nombre": "Fuente", "Descripcio": "Fuente", "Foto_ID": "373,374", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.44960444136752, 36.75798054347888 ] } },
    { "type": "Feature", "properties": { "ID": 381, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero: dirección El Tesorillo, dirección carretera A-372 o dirección Arroyo El Descansadero", "Foto_ID": "375", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.450254018007385, 36.757573900475826 ] } },
    { "type": "Feature", "properties": { "ID": 382, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero entre quejigos centenarios", "Foto_ID": "376", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.450437311856734, 36.75746350635638 ] } },
    { "type": "Feature", "properties": { "ID": 383, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Quejigos", "Descripcio": "Quejigos centenarios", "Foto_ID": "379", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.450817844652613, 36.757538301917805 ] } },
    { "type": "Feature", "properties": { "ID": 384, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Quejigo", "Descripcio": "Quejigo centenario", "Foto_ID": "380,381,385", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.450866259840181, 36.757183740377187 ] } },
    { "type": "Feature", "properties": { "ID": 385, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "382", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.454348537961565, 36.75862225028726 ] } },
    { "type": "Feature", "properties": { "ID": 386, "Tipo": "Natural", "Subtipo": "Flora", "Nombre": "Quejigo", "Descripcio": "Quejigo centenario con rocas incorporadas en las raices", "Foto_ID": "383", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.453468433796147, 36.758610147788218 ] } },
    { "type": "Feature", "properties": { "ID": 387, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "384", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.450726263824262, 36.757934105414193 ] } },
    { "type": "Feature", "properties": { "ID": 388, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "385", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.452215571432045, 36.757101159466899 ] } },
    { "type": "Feature", "properties": { "ID": 389, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "386", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.452557513037363, 36.757077774576892 ] } },
    { "type": "Feature", "properties": { "ID": 390, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "387", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.452838508384752, 36.756902883309273 ] } },
    { "type": "Feature", "properties": { "ID": 391, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "388", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.452761772774591, 36.757005346990105 ] } },
    { "type": "Feature", "properties": { "ID": 392, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso a área de descanso Llanos del Campo", "Foto_ID": "389", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.453368553034169, 36.756637344947023 ] } },
    { "type": "Feature", "properties": { "ID": 393, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso a área de descanso Llanos del Campo", "Foto_ID": "399", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.454545300762788, 36.755589841251606 ] } },
    { "type": "Feature", "properties": { "ID": 394, "Tipo": "Infraestructura", "Subtipo": "Servicios", "Nombre": "Baños", "Descripcio": "Servicios", "Foto_ID": "400", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.454088326527105, 36.755412883132635 ] } },
    { "type": "Feature", "properties": { "ID": 395, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "401", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.455515307964429, 36.757177184138882 ] } },
    { "type": "Feature", "properties": { "ID": 396, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "404", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya" }, "geometry": { "type": "Point", "coordinates": [ -5.455713889668845, 36.757638096085351 ] } },
    { "type": "Feature", "properties": { "ID": 397, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso a Llanos del Berral", "Foto_ID": "406,407", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.45510510213472, 36.755263332745336 ] } },
    { "type": "Feature", "properties": { "ID": 398, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "408", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.455509846875579, 36.755262662145704 ] } },
    { "type": "Feature", "properties": { "ID": 399, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "409", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.45606367962475, 36.755182049478115 ] } },
    { "type": "Feature", "properties": { "ID": 400, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "410", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.456125898768732, 36.754855848292564 ] } },
    { "type": "Feature", "properties": { "ID": 401, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación sendero: dirección a área de descanso Llanos del Campo o dirección Benamahoma", "Foto_ID": "411", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.456246192493566, 36.754652738554647 ] } },
    { "type": "Feature", "properties": { "ID": 402, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Llanos del Berral o dirección Pico Granadillo", "Foto_ID": "412", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín" }, "geometry": { "type": "Point", "coordinates": [ -5.456177410422547, 36.754517729840344 ] } }
    ]
    }
    
    var My_Interest_Ptos_Sendero = L.geoJson(geojsonSenderoPto, {
        onEachFeature: popUpInfoOficina,
        pointToLayer: PointToLayer,
        filter: function (feature, layer) {
            return feature.properties.Tipo == "Sendero";
        },

}) 

//My_Interest_Ptos_Sendero.addTo(map)




// Touristic Info Pto

//Popup Function
function popUpInfoOficina(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.info) {
        layer.bindPopup(feature.properties.info);
    }
}
// Icon Variable
var infoIcon = L.icon({
    iconUrl: './assets/img/icon/info-icon.png',
    iconSize: [18, 18]
});

// Style Function
function estiloinfoIcon(feature, latlng) {
    return L.marker(latlng, {
        icon: infoIcon
        //title: feature.properties.nombre
    })
};

// Layer Touristic Info Pto: Create geojson 

var geojsonInfoPto = {
   
            "type": "Feature",
            "properties": {
                "info": "<b>Punto de Información Turístico de Benamahoma</b>" +
                    "<br>Calle Cuesta de la Venta, s/n." +
                    "11679, Benamahoma (Cádiz)</br>" +
                    "Telf.: 673300323<br>" +
                    "<a target='_blank' href='https://www.grazalema.es/departamentos-del-ayuntamiento/benamahoma/punto-de-informacion-turistica-de-benamahoma'>Visitar web</a></p>"

            },
            "geometry": {
                "type": "Point",
                "coordinates": [-5.46942, 36.76564]
            }
        };


var InfoPto = L.geoJson(geojsonInfoPto, {
    onEachFeature: popUpInfoOficina,
    pointToLayer: estiloinfoIcon
}) 
InfoPto.addTo(map);


// My_Tracks

// Style Function
function styleLine(feature) {
    return {
        weight: 2, // grosor de línea
        color: 'black', // color de línea
        opacity: 1, // tansparencia de línea
    };
};
// Layer My_Tracks: Cargar archivo .geojson 
var My_Tracks = L.geoJson(null, {
    style: styleLine,

});

$.getJSON("./data/mytracks.geojson", function (data) {
    My_Tracks.addData(data);
});

My_Tracks.addTo(map);


// Plugins 

// Plugin Load Layer Control 
var style1 = {
    color: 'red',
    opacity: 1.0,
    fillOpacity: 1.0,
    weight: 2,
    clickable: false
};
L.Control.FileLayerLoad.LABEL = '<img class="icon" src="./assets/plugins/Leaflet.FileLayer-master/docs/folder.svg" alt="file icon"/>';
control = L.Control.fileLayerLoad({
    fitBounds: true,
    layerOptions: {
        style: style1,
        pointToLayer: function (data, latlng) {
            return L.circleMarker(
                latlng, {
                    style: style1
                }
            );
        }
    }
});
control.addTo(map);


// Plugin MousePosition

L.control.mousePosition().addTo(map);

// Plugin Leaflet.markercluster

    // Markercluster My_Interest_Ptos_Sendero

var markers1 = L.markerClusterGroup({
    showCoverageOnHover:false,
    zoomToBoundsOnClick:false,
    disableClusteringAtZoom:16,
    maxClusterRadius: 100,
    iconCreateFunction: function (cluster) {
        var markers = cluster.getAllChildMarkers();
        var n = 0;
        for (var i = 0; i < markers.length; i++) {
          n += markers[i].number;
        }
        return L.divIcon({
          html: i,
          className: 'mycluster',
          iconSize: L.point(22, 22)
        
        });
      },

});
markers1.addLayer(My_Interest_Ptos_Sendero);
map.addLayer(markers1);
//controlLayers.addOverlay((My_Interest_Ptos_Sendero,markers1), "Punto de información turístico")


// Plugin Group Layer Control

var basemaps = {
        "Fotografía aérea": PNOA,
        "OpenCycleMap_3": OCM3
};


var patrimonio = {
    "Puntos de interes": {
        "<img src='assets/img/icon/marker-icon1.png' class='layercontrol1'>  Pto. Interés Paisajístico": My_Interest_Ptos_Natural,
        "<img src='assets/img/icon/marker-icon2.png' class='layercontrol1'>  Pto. Interés Paisajístico": My_Interest_Ptos_Paisajistico,
        "<img src='assets/img/icon/marker-icon3.png' class='layercontrol1'>  Pto. Interés Etnográfico": My_Interest_Ptos_Etnografico,
        "<img src='assets/img/icon/marker-icon4.png' class='layercontrol1'>  Pto. Interés Sendero": My_Interest_Ptos_Sendero,
        "<img src='assets/img/icon/marker-icon4.png' class='layercontrol1'>  Pto. Interés Sendero": markers1,
        "<img src='assets/img/icon/marker-icon5.png' class='layercontrol1'>  Pto. Interés Arqueológico": My_Interest_Ptos_Arqueologico,
        "<img src='assets/img/icon/marker-icon6.png' class='layercontrol1'>  Pto. Interés Infraestructura": My_Interest_Ptos_Infraestructura
    }
};

var controlCapas = L.control.groupedLayers(basemaps, patrimonio, {
    position: "bottomright", // 'topleft', 'bottomleft', 'bottomright'
    collapsed: true // false = open by default
    }

);
controlCapas.addTo(map);







// DUDAS:



/* TASKS

1. Añadir pdf rutas sierra grazalema: Torreon, pinsapar, berral
2. 

*/