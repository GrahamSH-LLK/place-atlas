/*
	========================================================================
	Judicial Branch Collage
	
	An Collage of Reddit's /r/place, with information to each
	artwork	of the canvas provided by the community.
	
	Copyright (C) 2017 Roland Rytz <roland@draemm.li>
	Licensed under the GNU Affero General Public License Version 3
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as
	published by the Free Software Foundation, either version 3 of the
	License, or (at your option) any later version.
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
	For more information, see:
	https://draemm.li/various/place-collage/license.txt
	
	========================================================================
*/

window.addEventListener("error", function (e) {
  console.log(e);
  var errorMessage = '<p class="error">An error has occurred:</p>';
  errorMessage += '<p class="errorBody">' + e.message + "</p>";
  errorMessage += '<p class="errorBody">on line ' + e.lineno + "</p>";
  errorMessage +=
    '<p class="error">If this keeps happening, feel free to send me a <a href="mailto:roland.rytz@gmail.com">mail</a>.</p>';
  document.getElementById("loadingContent").innerHTML = errorMessage;
});

var collage = [
  {
    id: 0,
    name: "Gavel",
    description: "Represents judges in the Judicial branch",
    website: "",
    subreddit: "",
    center: [101.5, 204.5],
    path: [
      [204.5, 273.5],
      [203.5, 136.5],
      [-0.5, 136.5],
      [-2.5, 272.5],
    ],
  },
  {
	"id": 0,
	"name": "Supreme Court Building",
	"description": "The building the Supreme Court meet in",
	"website": "",
	"subreddit": "",
	"center": [
		296.5,
		205.5
	],
	"path": [
		[
			205.5,
			137.5
		],
		[
			205.5,
			273.5
		],
		[
			386.5,
			273.5
		],
		[
			386.5,
			136.5
		]
	]
}
];

//console.log("There are "+collage.length+" entries in the Collage.");

/*
collage.sort(function(a, b){
	if (a.id < b.id) {
		return -1;
	}
	if (a.id > b.id) {
		return 1;
	}
		// a must be equal to b
	return 0;
});

for(var i = 0; i < collage.length; i++){
	if(collage[i-1]){
		if(collage[i-1].id == collage[i].id){
			console.log(collage[i-1].id + ": "+ collage[i-1].name);
			console.log(collage[i  ].id + ": "+ collage[i  ].name);
		}
	}
}

console.log("biggest id: "+collage[collage.length-1].id + ", " + collage[collage.length-1].name);
*/

/*
for(var i = 0; i < collage.length; i++){
	if(typeof collage[i].website == "undefined"){
		console.log(collage[i].name);
	} else if(collage[i].website.trim() != ""){
		if(collage[i].website.trim().substring(0, 4) != "http"){
			console.log(collage[i].name + ": " + collage[i].website);
		}
	}
}
*/

// sort by center.y, so that lines will overlap less
collage.sort(function (a, b) {
  if (a.center[1] < b.center[1]) {
    return -1;
  }
  if (a.center[1] > b.center[1]) {
    return 1;
  }
  // a must be equal to b
  return 0;
});

/*

// Populate with test data

for(var i = 0; i < 10000; i++){
	var x = ~~(Math.random() * 1000)+0.5;
	var y = ~~(Math.random() * 1000)+0.5;
	var w = ~~(Math.random()*100);
	var h = ~~(Math.random()*100);
	collage.push({
		"id": 5,
    	"name": "test"+(i+3),
    	"website": "",
    	"subreddit": "",
    	"center": [0, 0],
    	"path":[
			[x, y],
			[x+w, y],
			[x+w, y+h],
			[x, y+h]
    	]
	});
}

*/
