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
      [204, 273],
      [204, 136.5],
      [-0.5, 136.5],
      [-2.5, 273],
    ],
  },
  {
    id: 1,
    name: "Supreme Court Building",
    description: "The building the Supreme Court meets in",
    website: "",
    subreddit: "",
    center: [296.5, 205.5],
    path: [
      [205.5, 137],
      [205.5, 273.5],
      [386.5, 273.5],
      [386.5, 137],
    ],
  },
  {
    id: 2,
    name: 'Newspaper With "Unconstitutional"',
    description:
      "Represents the Supreme Court's power to declare things Unconstitutional",
    website: "",
    subreddit: "",
    center: [90.5, 68.5],
    path: [
      [-0.5, 0.5],
      [0.5, 135.5],
      [181.5, 136.5],
      [181.5, 0.5],
    ],
  },
  {
    id: 3,
    name: "Supreme Court Justices",
    description: "Shows all of the Supreme Court Justices together",
    website: "",
    subreddit: "",
    center: [284.5, 68.5],
    path: [
      [181.5, 0.5],
      [181.5, 135.5],
      [387.5, 136.5],
      [387.5, 0.5],
    ],
  },
  {
    id: 4,
    name: "Scale on Gavel",
    description: "Represents the decisions made by courts",
    website: "",
    subreddit: "",
    center: [449.5, 67.5],
    path: [
      [512.5, 135.5],
      [512.5, 0.5],
      [387.5, 0.5],
      [387.5, 135.5],
    ],
  },
  {
    id: 5,
    name: "Judge in Courtroom",
    description: "Represents judges in the federal courts",
    website: "",
    subreddit: "",
    center: [596.5, 67.5],
    path: [
      [678.5, 136.5],
      [678.5, -1.5],
      [513.5, 0.5],
      [513.5, 136.5],
    ],
  },
  {
    id: 6,
    name: "Constitution",
    description:
      "The Judicial branch interprets the Constitution and other laws",
    website: "",
    subreddit: "",
    center: [781.5, 68.5],
    path: [
      [884.5, 137.5],
      [678.5, 136.5],
      [678.5, 0.5],
      [883.5, 0.5],
    ],
  },
  {
    id: 7,
    name: "Courtroom",
    description: "Represents the courtrooms in the Judicial Branch",
    website: "",
    subreddit: "",
    center: [941.5, 67.5],
    path: [
      [999.5, 134.5],
      [883.5, 134.5],
      [883.5, 0.5],
      [999.5, 0.5],
    ],
  },
  {
    id: 8,
    name: "Judicial Branch Building",
    description: "Represents the judicial branch as a whole",
    website: "",
    subreddit: "",
    center: [489.5, 204.5],
    path: [
      [591.5, 273.5],
      [591.5, 135.5],
      [386.5, 135.5],
      [387.5, 273.5],
    ],
  },
  {
    id: 9,
    name: "Court Structure",
    description: "Shows the structure of the federal courts",
    website: "",
    subreddit: "",
    center: [716.5, 205.5],
    path: [
      [591.5, 273.5],
      [591.5, 136.5],
      [841.5, 136.5],
      [841.5, 273.5],
    ],
  },
  {
    id: 10,
    name: "Amy Coney Barrett",
    description: "Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [920.5, 204.5],
    path: [
      [1000.5, 273.5],
      [999.5, 136.5],
      [840.5, 135.5],
      [840.5, 272.5],
    ],
  },
  {
    id: 11,
    name: "Jury",
    description: "A picture of a jury for a trial in the Judicial branch",
    website: "",
    subreddit: "",
    center: [102.5, 340.5],
    path: [
      [-0.5, 408.5],
      [-0.5, 272.5],
      [205.5, 272.5],
      [203.5, 409.5],
    ],
  },
  {
    id: 12,
    name: "Courtroom ",
    description: "A courtroom with lawyers and a judge",
    website: "",
    subreddit: "",
    center: [307.5, 341.5],
    path: [
      [411.5, 410.5],
      [410.5, 272.5],
      [204.5, 273.5],
      [203.5, 409.5],
    ],
  },
  {
    id: 13,
    name: "John G. Roberts",
    description: "Supreme Court Chief Justice",
    website: "",
    subreddit: "",
    center: [62.5, 483.5],
    path: [
      [124.5, 558.5],
      [124.5, 408.5],
      [1.5, 408.5],
      [0.5, 558.5],
    ],
  },
  {
    id: 14,
    name: "Clarence Thomas",
    description: "Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [187.5, 484.5],
    path: [
      [249.5, 558.5],
      [249.5, 409.5],
      [124.5, 409.5],
      [124.5, 558.5],
    ],
  },
  {
    id: 15,
    name: "Supreme Court Seal",
    description: "The seal of the Supreme Court",
    website: "",
    subreddit: "",
    center: [485.5, 343.5],
    path: [
      [554.5, 412.5],
      [554.5, 273.5],
      [415.5, 273.5],
      [415.5, 412.5],
    ],
  },
  {
    id: 16,
    name: "Washington DC",
    description: "The supreme court operates in Washington DC",
    website: "",
    subreddit: "",
    center: [687.5, 342.5],
    path: [
      [829.5, 410.5],
      [829.5, 273.5],
      [544.5, 273.5],
      [544.5, 410.5],
    ],
  },
  {
    id: 17,
    name: "Stephen G. Breyer",
    description: "Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [311.5, 483.5],
    path: [
      [374.5, 559.5],
      [374.5, 409.5],
      [248.5, 409.5],
      [248.5, 559.5],
    ],
  },
  {
    id: 18,
    name: "Samuel A. Alito, Jr",
    description: "Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [437.5, 485.5],
    path: [
      [500.5, 559.5],
      [500.5, 411.5],
      [373.5, 411.5],
      [373.5, 559.5],
    ],
  },
  {
    id: 19,
    name: "Sonia Sotomayor",
    description: "Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [561.5, 484.5],
    path: [
      [625.5, 558.5],
      [625.5, 410.5],
      [497.5, 410.5],
      [497.5, 560.5],
    ],
  },
  {
    id: 20,
    name: "Elena Kagan",
    description: "Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [686.5, 484.5],
    path: [
      [749.5, 559.5],
      [749.5, 409.5],
      [623.5, 409.5],
      [623.5, 559.5],
    ],
  },
  {
    id: 21,
    name: "Neil M. Gorsuch",
    description: "Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [812.5, 485.5],
    path: [
      [875.5, 559.5],
      [875.5, 410.5],
      [750.5, 410.5],
      [748.5, 559.5],
    ],
  },
  {
    id: 22,
    name: "Brett M. Kavanaugh",
    description: "Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [938.5, 485.5],
    path: [
      [1001.5, 560.5],
      [1000.5, 409.5],
      [875.5, 409.5],
      [874.5, 560.5],
    ],
  },
  {
    id: 23,
    name: "Scale",
    description: "Represents decisions/balance",
    website: "",
    subreddit: "",
    center: [913.5, 341.5],
    path: [
      [997.5, 409.5],
      [997.5, 272.5],
      [829.5, 272.5],
      [829.5, 411.5],
    ],
  },
  {
    id: 24,
    name: "United States Courts",
    description: "Logo of the US Courts",
    website: "",
    subreddit: "",
    center: [102.5, 612.5],
    path: [
      [205.5, 667.5],
      [205.5, 557.5],
      [-0.5, 557.5],
      [1.5, 667.5],
    ],
  },
  {
    id: 25,
    name: "Law Books",
    description: "Represents the law that the Judicial Branch interprets",
    website: "",
    subreddit: "",
    center: [288.5, 613.5],
    path: [
      [372.5, 667.5],
      [372.5, 558.5],
      [203.5, 558.5],
      [204.5, 668.5],
    ],
  },
  {
    id: 26,
    name: "Circuits",
    description: "Shows the circuits of the federal court system\n",
    website: "",
    subreddit: "",
    center: [456.5, 613.5],
    path: [
      [539.5, 667.5],
      [539.5, 559.5],
      [372.5, 559.5],
      [372.5, 667.5],
    ],
  },
  {
    id: 27,
    name: "US Flag",
    description:
      "Represents the US, where the Judicial Branch has jurisdiction",
    website: "",
    subreddit: "",
    center: [642.5, 612.5],
    path: [
      [743.5, 668.5],
      [743.5, 558.5],
      [540.5, 558.5],
      [540.5, 665.5],
    ],
  },
  {
    id: 28,
    name: "Federal Court",
    description: "The judicial branch only contains the federal courts",
    website: "",
    subreddit: "",
    center: [826.5, 614.5],
    path: [
      [910.5, 669.5],
      [910.5, 559.5],
      [743.5, 559.5],
      [743.5, 669.5],
    ],
  },
  {
    id: 29,
    name: "Judge's Robes",
    description: "Robes of judges, not specifically in the Judicial branch",
    website: "",
    subreddit: "",
    center: [955.5, 611.5],
    path: [
      [1000.5, 663.5],
      [1000.5, 558.5],
      [909.5, 558.5],
      [909.5, 663.5],
    ],
  },
  {
    id: 30,
    name: "Stenographer",
    description: "Takes records of court cases",
    website: "",
    subreddit: "",
    center: [85.5, 722.5],
    path: [
      [169.5, 777.5],
      [169.5, 666.5],
      [0.5, 666.5],
      [0.5, 777.5],
    ],
  },
  {
    id: 31,
    name: "Ruth Bader Ginsburg",
    description: "Past Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [213.5, 722.5],
    path: [
      [258.5, 777.5],
      [258.5, 666.5],
      [168.5, 666.5],
      [168.5, 777.5],
    ],
  },
  {
    id: 32,
    name: "Sandra Day O'Connor",
    description: "First Female Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [295.5, 722.5],
    path: [
      [332.5, 777.5],
      [332.5, 666.5],
      [259.5, 666.5],
      [257.5, 777.5],
    ],
  },
  {
    id: 33,
    name: "Thurgood Marshall",
    description: "First African American Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [370.5, 722.5],
    path: [
      [409.5, 777.5],
      [409.5, 666.5],
      [331.5, 666.5],
      [331.5, 777.5],
    ],
  },
  {
    id: 34,
    name: "Appeals Process",
    description: "Represents the appeal process",
    website: "",
    subreddit: "",
    center: [511.5, 722.5],
    path: [
      [613.5, 777.5],
      [613.5, 666.5],
      [409.5, 666.5],
      [409.5, 777.5],
    ],
  },
  {
    id: 35,
    name: "Dissenting Opinon",
    description: "A statement of dissent that Supreme Court justices can write",
    website: "",
    subreddit: "",
    center: [659.5, 722.5],
    path: [
      [705.5, 778.5],
      [705.5, 667.5],
      [613.5, 666.5],
      [614.5, 778.5],
    ],
  },
  {
    id: 36,
    name: "US Court of Appeals Seal",
    description: "Represents the court of appeals and appeal process",
    website: "",
    subreddit: "",
    center: [761.5, 723.5],
    path: [
      [818.5, 778.5],
      [818.5, 668.5],
      [705.5, 667.5],
      [705.5, 778.5],
    ],
  },
  {
    id: 37,
    name: "Court of Appeals Building",
    description: "Represents the appellate courts",
    website: "",
    subreddit: "",
    center: [909.5, 722.5],
    path: [
      [1000.5, 781.5],
      [1000.5, 663.5],
      [817.5, 664.5],
      [818.5, 781.5],
    ],
  },
  {
    id: 38,
    name: "John Jay",
    description: "First Chief Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [62.5, 854.5],
    path: [
      [122.5, 932.5],
      [122.5, 776.5],
      [2.5, 776.5],
      [2.5, 932.5],
    ],
  },
  {
    id: 39,
    name: "William Howard Taft",
    description:
      "The only person to be both a president and a Supreme Court Justice",
    website: "",
    subreddit: "",
    center: [185.5, 855.5],
    path: [
      [248.5, 932.5],
      [248.5, 777.5],
      [121.5, 777.5],
      [121.5, 932.5],
    ],
  },
  {
    id: 40,
    name: "The Judicial Branch",
    description:
      "The judicial Branch is the most powerful branch in the US Government. It is tasked with interpreting laws and contains the federal courts. The three courts contained in it are the district courts, the lowest courts, the appellate courts, and the Supreme Court, the highest court. It is the most powerful for many reasons. First of all, it has the power to declare anything unconstitutional, which can override any branch. In addition, it oversees impeachment and treason cases, which are some of the most important cases in our country. These three powers, among others, make the judicial branch the most important.",
    website: "",
    subreddit: "",
    center: [703.5, 884.5],
    path: [
      [516.5, 864.5],
      [889.5, 864.5],
      [889.5, 904.5],
      [516.5, 904.5],
    ],
  },
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
