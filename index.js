const proxy     = require("node-global-proxy").default;
const path      = require('path');
const fs        = require('fs');
const tiny      = require('tinify');
require('dotenv').config();


tiny.key        = process.env.TINYKEY;
tiny.proxy      = process.env.PROXY;

const dir       = "E:/Bonjour Lab Dropbox/Production/Levis/DESIGN/_EXPORTS/LookSrcOptimized/";
const folder    = "flora";
const dst       = "_tinified";

const folderToRead  = dir+folder;
const folderToWrite = dir+folder+dst;

fs.readdir(folderToRead, (err, files) => {
    if(err) console.error(err)

    files.forEach(file =>{
        let fileurl = folderToRead+"/"+file;
        console.log(fileurl);
        fs.readFile(fileurl, (err, data) => {
            if(err) console.error(err)
            
            let newFileurl = folderToWrite+"/"+file;
            console.log(fileurl, newFileurl);
            const source = tiny.fromFile(fileurl);
            source.toFile(newFileurl);
        })
    })
})