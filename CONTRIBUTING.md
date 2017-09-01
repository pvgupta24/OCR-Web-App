# Contributing to the OCR Web Project


## Basic Setup

### 1. Clone this repository
```
git clone https://github.com/pvgupta24/OCR-Web-App.gitx
```

### 2. Setup Leptonica and tesseract
* Clone [Leptonica](https://github.com/DanBloomberg/leptonica) in the lib folder of the root directory.
```
git clone https://github.com/DanBloomberg/leptonica.git
```
* Build and install the package from the root of the cloned leptonica directory
```bash
./autobuild
./configure
make
sudo make install
```
* Clone [Tesseract-OCR](git clone https://github.com/tesseract-ocr/tesseract) in the lib folder of the root directory.
```
git clone https://github.com/tesseract-ocr/tesseract.git
```
* Check and install the required dependencies
```bash
sudo apt-get install g++ # or clang++ (presumably)
sudo apt-get install autoconf automake libtool
sudo apt-get install autoconf-archive
sudo apt-get install pkg-config
sudo apt-get install libpng12-dev
sudo apt-get install libjpeg8-dev
sudo apt-get install libtiff5-dev
sudo apt-get install zlib1g-dev
```
* Build and install the package from the root of the cloned tesseract-ocr directory
```bash
./autobuild
./configure
make
sudo make install
```

This completes building Tesseract-OCR but we need a Node wrapper to make it compatible with our Node Platform.

### 3. Clone [node tesseract](https://github.com/desmondmorris/node-tesseract) in the lib folder of the root directory.
   ```
   git clone https://github.com/desmondmorris/node-tesseract.git
   ```

### 4. Now we need TessData for our Tesseract OCR engine to work with..
So, download it in the `root directory/tesseract-ocr/tessdata/` by
```
wget https://github.com/tesseract-ocr/tessdata/raw/master/eng.traineddata
```
### 5. Fred's Imagemagick Bash Tool textcleaner for reducing the noise and cleaning the image is already present in the lib folder.
### 6. Install the dependencies from the root folder
```
npm install
```


# Contribute to the project by creating an issue
> Fork this repository.
> Make changes to your local branch.
> Avoid conflicts by merging(pull) changes first
> Push Additions/Fixes to the main branch with a proper desciption of what is implemented through the changes.

Feel free to contribute and keep adding . ;)