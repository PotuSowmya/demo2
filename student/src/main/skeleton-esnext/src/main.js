import 'bootstrap';
import 'babel-polyfill';



export function configure(aurelia) {
	aurelia.use
    .standardConfiguration()
    .plugin('aurelia-validation')
    .developmentLogging()
    .plugin('aurelia-configuration')
    .plugin('aurelia-dialog');
    
   

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

    aurelia.start().then(a => { 
    	/*	  $('[data-toggle="tooltip"]').tooltip();*/
    		  let start = a.host.attributes.start.value;
    		    a.setRoot(start);
    	  });
}
