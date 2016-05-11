declare var System: any;
declare var esriSystem: any;

System.config({
  packages: {
    app: {
      defaultExtension: 'js'
    }
  }
});

// load Esri modules with the help of esri-system-js library
esriSystem.register([
  'esri/geometry/Point',
  'esri/geometry/geometryEngineAsync',

  'esri/Graphic',

  'esri/layers/FeatureLayer',
  'esri/layers/GraphicsLayer',
  'esri/layers/TileLayer',
  'esri/layers/WebTileLayer',
  'esri/geometry/SpatialReference',

  'esri/Map',
  'esri/geometry/Extent',

  'esri/symbols/SimpleLineSymbol',
  'esri/symbols/SimpleFillSymbol',

  'esri/views/MapView',
  'esri/views/SceneView'
], () => {
    System.import('app/main')
      .then(null, console.error.bind(console));
  },
  { outModuleName: 'esri-mods'}
);
