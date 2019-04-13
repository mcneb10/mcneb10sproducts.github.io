/**
	WARNING:
	This will NOT work in certain browsers such as IE. Some elements may not work with: Microsoft Edge, Safari.
*/
function createTagWithJS(name, func) {
	document.createElement(name);
	var ti = document.getElementsByTagName(name);
	for(var i = 0; i < ti.length; i++) {
		func(ti[i]);
	}
}
function meme(element) {
	if(
		element.attributes.src &&
		element.attributes.text &&
		element.attributes.height &&
		element.attributes.width
	){
		var pos = (parseInt(element.attributes.width.value, 10) / 1.11).toString();
		var message = element.attributes.text.value;
		if (message.length > 30) {
			message = message.substring(0, 29);
		}
		var fontsize = (parseInt(element.attributes.width.value, 10)/(message.length / 1.5)).toString();
		element.style.fontfamily = "Impact,Charcoal,sans-serif";
		element.style.color = "white";
		element.innerHTML =
			"<img alt='this meme has died young' height="+
			element.attributes.height.value +
			" width=" +
			element.attributes.height.value +
			" src='" +
			element.attributes.src.value +
			"'></img><strong style='position: relative; right: " +
			pos +
			"px;font-size:" +
			fontsize +
			"px; text-align:left;'>" +
			message.toUpperCase() +
			"</strong>";
	}
}
createTagWithJS("meme", meme);
createTagWithJS("blinking", function(element){
	setInterval(function(){
		if(element.style.visibility == "")
		{
			element.style.visibility = "hidden";
    } else
    {
      element.style.visibility="";
    }
},parseInt(element.attributes.interval.value, 10));
});
createTagWithJS("ad", function(element) {
	if(element.attributes.ads) {
		var ads = element.attributes.ads.value.split(",");
		var ad = ads[Math.floor((Math.random * ads.length)+1)];
		element.innerHTML = '<iframe src="'+ad+'"></iframe>';
	}
});
createTagWithJS("accordion",function(element) {
	var text = element.innerHTML;
element.innerHTML = "<details style='border:solid black 1px;'><summary>"+element.attributes.ot.value+"</summary><p>"+text+"</p></details>";
});
createTagWithJS("overtext",function(element) {
	var text = element.innerHTML;
 var over = element.attributes.text.value;
	element.innerHTML="<ruby>"+text+"<rt>"+over+"</rt></ruby>";
});
