Plotly.d3.json("/chord", function(error, response) {

  // List of titles from JSON data     
  const titles = ['Atlantic', 'MotherJones', 'NewRepublic', 'NYTimes', 'Politico', 'Slate', 'DailyBeast', 'Guardian', 'Intercept', 'WashPost', 'AmerCons', 'Breitbart', 'DailyWire', 'Economist', 'FiscalTimes', 'FoxNews', 'NYPost', 'Reason', 'Hill', 'WashTimes'];
  
  // List of site names to show in chord diagram
  const fullNames = ['Atlantic', 'Mother \n Jones', 'New \n Republic', 'NY Times', 'Politico', 'Slate', 'Daily Beast', 'Guardian', 'Intercept', 'Washington \n Post', 'American \n Cons.', 'Breitbart', 'Daily Wire', 'Economist', 'Fiscal \n Times', 'Fox News', 'NY Post', 'Reason', 'The Hill', 'WashTimes'];
  
  // Blank list used for chord diagram
  let seriesList = [];

  // Empty dictionary to contain {'text': 'BBC', 'values': [3,6,5,7,etc]}
  let chordObj = {};

  for (let i = 0; i < titles.length; i++) {

    // 'text' is key and item from fullNames list is value
    chordObj['text'] = fullNames[i];

    // 'values' is key and list from JSON is value
    chordObj['values'] = response[0][titles[i]];

    // Add dictionary to list
    seriesList.push(chordObj);

    // Clear out dictionary
    chordObj = {};
  }

  const myConfig = {
    "type": "chord",
    "sort-objects": false,
    "options": {
      "angle-padding": 1,
      "band-width": 10,
      "band-space": 1,
      "radius": 235,
      "color-type": "palette",
      "palette": [
        "#1F45FC",
        "#7AA9DD",
        "#151B8D",
        "#C3E4ED",
        "#00B2EE",
        "#446689",
        "#3090C7",
        "#000080",
        "#0276FD",
        "#98F5FF",
        "#CC1100",
        "#EE799F",
        "#E35152",
        "#E41B17",
        "#AF1E2D",
        "#FF0066",
        "#FBBBB9",
        "#FA1D2F",
        "#FA8072",
        "#551011"
      ],
      "style": {
        "chord": { "border-width": 0 },
        "band": { "border-width": 0 },
        "tick": { "visible": false },
        "item": { "visible": false },
        "label": {
          "bold": false,
          "font-size": "13px",
          "font-family": "arial",
          "angle": 90
        }
      }
    },
    "tooltip": { },

    "series": seriesList
  };

  zingchart.render({
    id: 'chordChart',
    data: myConfig,
    height: 690, 
    width: 700 
  });

}); 
