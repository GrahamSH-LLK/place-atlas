#!/bin/bash

touch combined.js;
cat ./web/_js/collage.js > combined.js;
cat ./web/_js/view.js >> combined.js;
cat ./web/_js/draw.js >> combined.js;
cat ./web/_js/main.js >> combined.js;