# OCR Web
This is a web app which uses the Tesseract API for Optical Image Recognition.
This app will be deployed [here](https://ocrweb.herokuapp.com)soon.

The basic functionality of the application is demonstrated in [this video](https://drive.google.com/open?id=0B2KDY9irUBbcbGlpc2tRRkJFR3c)

## Usage Instructions
### Prerequisites
* leptonica

* tesseract

* node

* npm

Instructions for contributing can be found -> [CONTRIBUTING.md](https://github.com/pvgupta24/OCR-Web-App/blob/master/CONTRIBUTING.md) file.

### Installing Dependencies
* Clone this repository .

* Run `npm install` in the root directory to install the dependencies.

* Change to `public` directory and build the Angular app.

* Run `npm start` from the root directory.

* The app is now available at `http://localhost:3000`

## Tools and Frameworks used
### Front end
* Bootstrap

* AngularJS

### Server side
* Nodejs (with Express)

* Node Tesseract : Used as a wrapper for using the tesseract API's for the Node Platform

* Fred's ImageMagicks textcleaner `Bash` scripts : To enhancing the image and reducing noisefor better read.

* Tesseract OCR Engine

* Multer : For managing the uploaded image files (Node)

## Limitations
* As of now, it is implemented to recognize only English characters.

* Though the Tesseract-OCR engine is powerful, there is a limitation to its performance.


## Future additions
- [x] Reduce noise in the uploaded image (Clean).
- [ ] Display the cleaned image in front-end.
- [ ] Use multipart formdata to upload files through Angular HTTP Request(and add other processing functionalities).
- [ ] Copy text to be implemented using ngClipboard angular directive.
- [ ] Retrieve text from multiple images in a single request.
