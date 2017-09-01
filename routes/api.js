var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var multer = require('multer');
var exec = require('child_process').exec;

var imgName;
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './lib/')
    },
    filename: function (req, file, callback) {
        console.log(file);
        imgName = (file.originalname).replace(/\s/g, '') + '-image-' + Date.now() + path.extname(file.originalname);
        callback(null, imgName)
    }
});

//POST request receives image
router.route('/getText').post(function (req, res) {
    console.log('receiving Image');
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
            res.end("Error uploading file");

        else {
            console.log('File Uploaded');
            getText('./lib/' + imgName);
        }
    });

    //Tesseract implementaion
    var tesseract = require('../lib/node-tesseract');

    var options = {
        l: 'eng',
        psm: 1,
        binary: 'tesseract' /*'./lib/tesseract'*/,
        config: '--tessdata ./lib/tesseract-ocr/tessdata'
        //'tessdata-dir': './lib/tesseract-ocr/tessdata'
    };

    var getText = function (img) {

        /*Runs textcleaner bash script to enhance grayscale unrotate and padd image*/
        exec('./lib/textcleaner -g -e normalize -o 12 -t 5 -u -p 5 ' + img + ' ' + img, function (err) {
            if (err) {
                console.log('Error cleaning file' + err);
            }
            else
                console.log('Cleaned the image')
        });

        tesseract.process(img, options, function (err, text) {
            if (err) {
                console.error(err);
                res.end('Invalid File<br>Please upload again');
            } else {
                //Replaces consecutive \n repetitions by single\n
                console.log(text.replace(/\n\s*\n/g, '\n'));
                //Deletes the file after reading the Text
                fs.unlinkSync(img);
                //Replaces consecutive \n repetitions by single\n
                //Then replaces \n by <br> tags as it is rendered as HTML in front end
                res.send(text.replace(/\n\s*\n/g, '\n').replace(/\n/g, "<br>"));
            }
        });
    };


});

module.exports = router;
