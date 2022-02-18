#!/bin/bash

touch combined.js;
cat ./web/js/collage.js > combined.js;
cat ./web/js/view.js >> combined.js;
cat ./web/js/draw.js >> combined.js;
cat ./web/js/main.js >> combined.js;