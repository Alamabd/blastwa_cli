# BlastWA 🚀

software tool designed to send WhatsApp messages automatically with just one line command. The purpose of using this tool can be used for marketing, business purposes, mass communications where it can send mass messages in large quantities.

![](https://badges-md.vercel.app/txt?tl=version&wl=55&tr=v%201.0.0&wr=50)

## Feature 🔥
- Support file json, txt, and xlsx ☑️
- Support message interval ☑️
- Support message text and media ☑️

## Installation

windows

```bash
  git clone https://github.com/Alamabd/blastwa.git
  cd blastwa
  npm install
  npm install -g .
```

linux

```bash
  git clone https://github.com/Alamabd/blastwa.git
  cd blastwa
  npm install
  sudo npm install -g .
```

## Usage

To check the installation and see the start line of the program
```bash
  blast
```

to start
```bash
  blast start
```
thing requested:
- number file ✅
  
   with json
  ```json
  [
    "628xxx",
    "628xxx",
    "628xxx",
    "628xxx",
  ]
  ```

  with excel (xlsx)
  when using an xlsx file the second argument is a sheet page, by default it is 1
  ```bash
  Enter file number: test1.xlsx 2
  1 is sheet
  ```

  |1 |number |
  |--|---|
  |2 |628xxx|
  |3 |628xxx|
  |4 |628xxx|

- message file ✅

  send media
  ```json
  {
    "image": {"url": "./example.jpeg"},
    "caption": "Example media message\n@alam blast"
  }
  ```

  send text
  ```json
  {
    "text": "Example text message\n@alam blast"
  }
  ```
- duration in miliseccons (ms) ✅
  


## Disclaimer 🔒
It is important to remember that use of these tools requires security and compliance considerations, especially when it comes to user privacy. I am not responsible for misuse of this tool or violations of laws or regulations by users.

