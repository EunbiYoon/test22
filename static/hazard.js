// get chart canvas
var ctx = document.getElementById("areachart").getContext("2d");

for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
}
  // create the chart using the chart canvas
var something=[
    {
        data: JSON.parse(Ajinja1MValues),
        label: jinja1MLegend,
    },
    {
        data: JSON.parse(Ajinja2MValues),
        label: jinja2MLegend,
    },
    {
        data: JSON.parse(Ajinja0MValues),
        label: jinja0MLegend,
    }
]

var areachart = new Chart(ctx, {
type: 'line',
data: {labels: JSON.parse(jinjaLabels),
    datasets: something}
});
  