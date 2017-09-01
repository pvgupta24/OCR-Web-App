var express = require('express');
var router = express.Router();

var path = require('path');
var fs = require('fs');
var multer = require('multer');
var imgName;

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './lib/')
    },
    filename: function (req, file, callback) {
        console.log(file);
        imgName = file.originalname + '-' + Date.now() + path.extname(file.originalname);
        callback(null, imgName)
    }
});

router.route('/getText').post(function (req, res) {
    console.log(req.files);
    /* if (!req.file) {
         res.send("No files uploaded");
     }
     else {
         var file=   req.files.file;
         var ext = path.extname(file.name);
         file.mv(__dirname+"/"+file.name,function (err) {
             if(err)
                 res.send("ERROR");
         });
     }*/

    var upload = multer({
        storage: storage,
        fileFilter: function (req, file, callback) {
            var ext = path.extname(file.originalname);
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                return callback(res.end('Only images are allowed'), null)
            }
            callback(null, true)
        }
    }).single('image');
    upload(req, res, function (err) {
        if (err)
            res.end("Error uploading file");/*
        res.end('File is uploaded')*/
        console.log('File Uploaded');
         getText('./lib/'+imgName);
    });

//Tesseract
    var tesseract = require('../lib/node-tesseract');

    var options = {
        l: 'eng',
        psm: 6,
        binary: './'+'./lib/tesseract-ocr/tesseract',
        config: '--tessdata ./lib/tesseract-ocr/tessdata'
        //'tessdata-dir': './lib/tesseract-ocr/tessdata'
    };

    var getText=function (img) {

        tesseract.process(img, options, function (err, text) {
            if (err) {
                console.error(err);
                res.end('Tesseract Error');
            } else {
                console.log(text);
                //delete the file after read
                fs.unlinkSync(img);
                res.send('\n'+text);
            }
        });
    };


});

module.exports = router;
