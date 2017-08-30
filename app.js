var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var route = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);


/*
var fileUpload = require('express-fileupload');
app.use(fileUpload);*/

// catch 404 and forward to error handler

/*app.post(function (request, response) {
    console.log("POSTTTTTT");
    /!*
    if (request.method === 'POST') {
        var totalSize = 0;
        var bufferList = [];

        request.on('data', function (data) {
            bufferList.push(data);
            totalSize += data.length;
            if (totalSize > 1e6) {
                console.log('Request body too large');
                request.connection.destroy();
            }
        });

        request.on('end', function () {
            var buffer = Buffer.concat(bufferList, totalSize);
            tess.ocr(buffer, function (err, result) {
                if (err) {
                    response.writeHead(500, {'Content-Type': 'text/plain'});
                    response.end("Error " + err);
                } else {
                    response.writeHead(200, {'Content-Type': 'text/plain'});
                    response.end(result);
                }
            });
        });

    } else {
        request.connection.destroy();
    }*!/
});*/

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
