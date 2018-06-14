#!/usr/bin/env node

let processArgs = process.argv.splice( 2 );
let gitPath = "https://github.com/aklatzke/express-babel.git";
let exec = require("child_process").exec;
let rmRf = require('rimraf');

let handle = exec( 'git clone ' + gitPath + " " + processArgs[0] )

handle.on("close", function(response){
    if( response === 0 ){
        console.log("Express application generated in " + processArgs[0] + ".");
        console.log("------------------------------------------------");
        console.log("Removing .git from installed directory.")
        rmRf( process.cwd() +  "/" + processArgs[0] + "/.git", {  }, function(res){
            console.log("------------------------------------------------");
            console.log("From here: `cd " + arguments[0] + " && npm i`; \nHappy Coding!");
        })
    }
})


