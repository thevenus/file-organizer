#!/usr/bin/env node
const fs = require('fs');

const path = require("path");

const progress = require("cli-progress");

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const bar = new progress.Bar({}, progress.Presets.shades_grey);

function countFiles(dir){
    let result = 0;
    fs.readdirSync(dir).forEach(file => {
        if (fs.statSync(path.join(dir,file)).isFile()){
            result++;
        }
    });
    return result;
}

var dir = process.argv[2];

if (!dir){
    console.log("organize: Missing directory");
}

else if (!(fs.existsSync(dir))){
    console.log("organize: Given directory does not exist");
}

else {
    bar.start(countFiles(dir), 0);
    bar.hideCursor = true;
    fs.readdirSync(dir).forEach((file) => {

        var source = path.join(dir, file);
        var month = monthNames[fs.statSync(source).mtime.getMonth()];
        var year = String(fs.statSync(source).mtime.getFullYear());
    
        var target = path.join(dir, year, month); 

        if (fs.statSync(source).isFile()){
            if (!fs.existsSync(target)){
                fs.mkdirSync(target, {recursive: true});
            }
            fs.renameSync(source, path.join(target, file));
            bar.increment(1);
        }
    });
    bar.stop();
}
