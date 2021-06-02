window.onload = function () {

var remaining = new CanvasJS.Chart("reminingSMS", {
	animationEnabled: true,
	title:{
		text: "SMS Remaining",
		horizontalAlign: "center"
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		//innerRadius: 60,
		indexLabelFontSize: 17,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
    { y: 67, label: "Cote d'ivoire" },
    { y: 28, label: "Rwanda" },
    { y: 10, label: "Somalia" },
    { y: 7, label: "kenya"},
    { y: 15, label: "Tanzania"},
    { y: 6, label: "Egypt"}
		]
	}]
});
var sent = new CanvasJS.Chart("sentSMS", {
	animationEnabled: true,
	title:{
		text: "SMS Remaining",
		horizontalAlign: "center"
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		//innerRadius: 60,
		indexLabelFontSize: 17,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
    { y: 67, label: "Cote d'ivoire" },
    { y: 28, label: "Rwanda" },
    { y: 10, label: "Somalia" },
    { y: 7, label: "kenya"},
    { y: 15, label: "Tanzania"},
    { y: 6, label: "Egypt"}
		]
	}]
});

var derivered = new CanvasJS.Chart("deliveredSMS", {
	animationEnabled: true,
	title:{
		text: "SMS Remaining",
		horizontalAlign: "center"
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		//innerRadius: 60,
		indexLabelFontSize: 17,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 67, label: "Delivered" },
			{ y: 28, label: "Error" },
			{ y: 10, label: "sending" },
			{ y: 15, label: "Accepted"},
		]
	}]
});

remaining.render();
sent.render();
derivered.render();
}
