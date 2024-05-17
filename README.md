  SoundWaveApp Setup and User Guide

SoundWaveApp Setup and User Guide
=================================

* * *

Table of Contents
-----------------

1.  [Introduction](#introduction)
2.  [Prerequisites](#prerequisites)
3.  [Project Structure](#project-structure)
4.  [Setup Instructions](#setup-instructions)
5.  [Running the Application](#running-the-application)
6.  [Troubleshooting](#troubleshooting)

* * *

Introduction
------------

SoundWaveApp is a proof-of-concept application built using Python for the backend and React Native for the frontend. The app is designed to work on iOS devices and uses the device camera to scan for a pattern based on a soundwave.

* * *

Prerequisites
-------------

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (v14 or later)
*   [npm](https://www.npmjs.com/) (v6 or later)
*   [Python](https://www.python.org/) (v3.8 or later)
*   [Docker](https://www.docker.com/)
*   [CocoaPods](https://cocoapods.org/) (for iOS dependencies)
*   [Xcode](https://developer.apple.com/xcode/) (for iOS development)

* * *

Project Structure
-----------------
```
SoundWave/
├── SoundWaveApp/
│   ├── App.js
│   ├── ios/
│   ├── android/
│   ├── node\_modules/
│   ├── package.json
│   └── ...
├── app.py
├── docker-compose.yml
├── Dockerfile
├── requirements.txt
└── .gitignore
```
* * *

Setup Instructions
------------------

### 1\. Clone the Repository

    
    git clone <repository-url>
    cd SoundWave
    

### 2\. Set Up the Backend

1.  **Create and activate a virtual environment:**
    
        
        python -m venv venv
        source venv/bin/activate  # On Windows use `venv\Scripts\activate`
        
    
2.  **Install Python dependencies:**
    
        
        pip install -r requirements.txt
        
    
3.  **Build and run the Docker container:**
    
        
        docker-compose up --build
        
    

### 3\. Set Up the Frontend

1.  **Navigate to the React Native project directory:**
    
        
        cd SoundWaveApp
        
    
2.  **Install npm dependencies:**
    
        
        npm install
        
    
3.  **Install iOS dependencies:**
    
        
        cd ios
        pod install
        cd ..
        
    

* * *

Running the Application
-----------------------

### 1\. Start the Backend

Ensure your Docker container is running:

    `docker-compose up`
    
    

### 2\. Start the Frontend

Run the React Native app on iOS:

    `npx react-native run-ios`
    
    

* * *

Troubleshooting
---------------

### Common Issues and Solutions

#### 1\. CocoaPods Installation Issues

If you encounter issues with CocoaPods, ensure you have the latest version installed:

    `sudo gem install cocoapods     cd ios     pod install --repo-update`
    
    

#### 2\. Build Errors Related to Architectures

Ensure your Xcode build settings are correctly configured:

*   **Architectures**: `$(ARCHS_STANDARD)`
*   **Excluded Architectures**: `arm64` for `Any iOS Simulator SDK`

#### 3\. Derived Data Issues

If you encounter build errors related to derived data, clean the derived data folder:

1.  Open Xcode.
2.  Go to `Xcode` > `Preferences` > `Locations`.
3.  Click on the arrow next to `Derived Data` to open the folder in Finder.
4.  Delete the `DerivedData` folder.

#### 4\. Flipper Issues

If you encounter issues related to Flipper, try disabling it:

1.  Edit `Podfile`:

    `# Uncomment the next line to disable Flipper     # use_flipper!({ 'Flipper' => '0.75.1' })`
    
        

3.  Reinstall pods:

    `cd ios     pod install     cd ..`
    
        

#### 5\. General Clean and Rebuild

If you encounter persistent issues, try cleaning and rebuilding the project:

1.  **Clean the build folder:**

    `cd ios     xcodebuild clean     cd ..`
    
        

3.  **Rebuild the project:**

    `npx react-native run-ios`