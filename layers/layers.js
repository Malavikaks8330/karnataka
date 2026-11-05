var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_karnatakadistricts_1 = new ol.format.GeoJSON();
var features_karnatakadistricts_1 = format_karnatakadistricts_1.readFeatures(json_karnatakadistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_karnatakadistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_karnatakadistricts_1.addFeatures(features_karnatakadistricts_1);
var lyr_karnatakadistricts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_karnatakadistricts_1, 
                style: style_karnatakadistricts_1,
                popuplayertitle: 'karnataka — districts',
                interactive: true,
                title: '<img src="styles/legend/karnatakadistricts_1.png" /> karnataka — districts'
            });

lyr_OSMStandard_0.setVisible(true);lyr_karnatakadistricts_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_karnatakadistricts_1];
lyr_karnatakadistricts_1.set('fieldAliases', {'id': 'id', 'dt_code': 'dt_code', 'district': 'district', 'st_code': 'st_code', 'year': 'year', 'st_nm': 'st_nm', });
lyr_karnatakadistricts_1.set('fieldImages', {'id': '', 'dt_code': '', 'district': '', 'st_code': '', 'year': '', 'st_nm': '', });
lyr_karnatakadistricts_1.set('fieldLabels', {'id': 'no label', 'dt_code': 'no label', 'district': 'inline label - visible with data', 'st_code': 'no label', 'year': 'no label', 'st_nm': 'no label', });
lyr_karnatakadistricts_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});