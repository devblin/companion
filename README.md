# Companion
This app detects the users's emotion by asking various questions and helps them learn about their emotions and understand them through articles, videos and biblical phrases, which may help the user to gain peace, and have control over their emotions.

![](https://i.imgur.com/GUoOaeO.png)
![](https://i.imgur.com/9HjI3vW.png)

## Install Dependencies:
```
$ npm i
```
## ENV:
Create .env in root dir:
```
REACT_APP_PARALLELDOTS_API = XXXX
```
## Run App (Local):
```
$ npm start
```
By default app will run at port 3000.

## Production Build:
```
$ npm run build
```

## To Deploy Using Netlify:
> Make sure you have `netlify-cli` installed:
> ```
> $ netlify -v
> netlify-cli/3.24.3 linux-x64 node-v12.22.1
> ```
> To install `netlify-cli`:
> ```
> $ npm i -g netlify-cli
> ```
To get draft URL:
```
$ netlify deploy
```
To deploy in production:
```
$ netlify deploy --prod
```