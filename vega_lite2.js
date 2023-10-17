var vg_2 = "vega_lite2.json";

vegaEmbed("#world_chart", vg_2)
  .then(function(result) {
    // Access the Vega view instance as result.view
    var view = result.view;
    
    // Now you can work with the Vega view
    // For example, you can update data or interact with the visualization here
    
    // Example: Update data
    var new_data = { /* your new data object */ };
    view.change("source_0", vega.changeset().insert(new_data)).run();
  })
.catch(console.error);