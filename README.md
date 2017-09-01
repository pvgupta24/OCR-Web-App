# OCR Web
This is a web app which uses the Tesseract API for Optical Image Recognition.

Demo of this app can be found [here](https://ocrweb.herokuapp.com) soon.

The basic functionality of the application is demonstrated in [this video]()

## How to USE
### Prerequisites
> `leptonica`
> `tesseract`
> `node`
> `npm`

Instructions for contributing can be found -> [CONTRIBUTING.md]() file.
### Installing Dependencies
> Clone this repository .
> Run `npm install` in the root directory to install the dependencies.
> Change to `public` directory and build the Angular app.
> Run `npm start` from the root directory.
> The app is now available at `http://localhost:3000`

## Tools and Frameworks used
### Front end
> Bootstrap
> AngularJS

### Server side
> Nodejs (with Express)
> Node Tesseract : Used as a wrapper for using the tesseract API's for the Node Platform
> Fred's ImageMagicks textcleaner `Bash` scripts : To enhancing the image and reducing noisefor better read.
> Tesseract OCR Engine
> Multer : For managing the uploaded image files

## Limitations
> As of now, it is implemented only to recognize English characters.
> Though the Tesseract-OCR engine is powerful, there is a limitation to its performance.
The accuracy of the application is limited by the underlying Tesseract Engine.
 Even though Tesseract is one of the most accurate OCR engines, it is not perfect.
 For example, if the image contains text in a font that is unrecognisable to Tesseract,
  the application fails to load a result. The application might also fail to produce an accurate
  result if the image contains text in different orientations. The prediction is also affected by the
  lighting and contrast in the image.

## Future additions
- [x] Reduce noise in the uploaded image (Clean).
- [ ] Display the cleaned image in front-end.
- [ ] Use multipart formdata to upload files through Angular HTTP Request(and add other processing functionalities).
- [ ] Copy text to be implemented using ngClipboard angular directive.
- [ ] Retrieve text from multiple images in a single request.