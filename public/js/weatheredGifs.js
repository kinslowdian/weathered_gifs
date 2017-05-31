// DEBUG
var trace = function(msg){ console.log(msg); };

// VARS
var main_weather;
var main_gif;




// LOADER
function load_JSON_data(file, callback)
{
	var xobj = new XMLHttpRequest();

	xobj.overrideMimeType("application/json");
	xobj.open('GET', file, true);
	xobj.onreadystatechange = function()
	{
		if(xobj.readyState == 4 && xobj.status == "200")
		{
			callback(xobj.responseText);
		}
	};

	xobj.send();	
}




// ENTRY
function pageLoad_init()
{
	trace("pageLoad_init();");

	weather_build();
}




// WEATHER
function weather_build()
{
	// 1a67481da557ef3b
	main_weather = {};
	main_weather.url = "http://api.wunderground.com/api/1a67481da557ef3b/conditions/q/UK/London.json";

	load_JSON_data(main_weather.url, weather_data_found);
}

function weather_data_found(data)
{
	main_weather.data = JSON.parse(data);

	trace(main_weather.data);

	weather_define();
}

function weather_define()
{
	var w = main_weather.data.current_observation.weather;
	var ws = {};

	main_weather.weatherType = w.toLowerCase();

	ws = weatherTypeCreate(main_weather.weatherType);

	main_weather.weatherUseSearch 	= ws.dataWeatherType;
	main_weather.weatherUseDisplay 	= ws.dataDisplay;

	trace(main_weather);

	gif_build();
}




// GIF
function gif_build()
{
	main_gif = {};
	main_gif.url = "https://api.giphy.com/v1/gifs/search?q=" + main_weather.weatherUseSearch + "&api_key=dc6zaTOxFJmzC";
	main_gif.target = document.querySelector("#display-wrapper .display-gif");

	load_JSON_data(main_gif.url, gif_data_found);
}

function gif_data_found(data)
{
	main_gif.data = JSON.parse(data);

	trace(main_gif.data);

	gif_define();
}

function gif_define()
{
	var gifSelect;
	var gifFile;

	gifSelect = Math.floor(Math.random() * main_gif.data.data.length);
	gifFile = main_gif.data.data[gifSelect].images.downsized_large.url;

	gif_insert(gifFile);
}

function gif_insert(file)
{
	main_gif.target.style.backgroundImage = "url(" + file + ")";
}
