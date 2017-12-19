# Pura Vida

## API Keys

### Unsplash
Obtain your unsplash API keys from: https://unsplash.com/developers

<br>

## Setup

### Environment file
Create a file in the root project directory called **config.js**

Put the following in the config file:

```javascript
let id       = "YOUR_UNSPLASH_ID_KEY"
let secret   = "YOUR_UNSPLASH_SECRET_KEY"
let callback = "YOUR_UNSPLASH_CALLBACK"

module.exports={
  id,
  secret,
  callback
}
```
<br>

### Chrome Extension
Navigate to: chrome://extensions/

1. Click **Pack extention...**
2. Select the **Extention** folder 
3. Click **Load unpacked extention...**
4. Select the **Extention** folder 

## Running The App

### Frontend
Client will run on port 8080

```bash
npm i
npm start
```

### Backend
Server will run on port 3000
```bash
npm i
npm start
```


