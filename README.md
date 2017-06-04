# wora-app
Full Stack Dev Starter: An App that **Write Once, Run Anywhere**(_WORA_).

![Write Once Run Anywhrere](https://bupt.github.io/wora-app/images/one-does-not-simply-write-once-run-anywhere.jpg "Write Once Run Anywhere")

Supported Platforms:
1. Android
1. Ios
1. Linux
1. Mac
1. Win32
1. Web

Google Slide: [ROAD TO SUCCESS - TO BECAME A FULL STACK DEV](https://docs.google.com/presentation/d/15ZrF5rrqN9ax4LOIEYLHQLitqDBpSIC52Sz5c195K9k/edit?usp=sharing)

## Install

Requirement: Node.js(v8.x is recommended)

```shell

npm install -g cordova ionic

git clone https://github.com/BUPT/wora-app.git
cd wora-app
npm install
```

## Run

### Android

```shell
ionic cordova platform add android
ionic cordova run android
```

### Ios

```shell
ionic cordova platform add ios
ionic cordova run ios
```

### Linux

```shell
npm run dist:linux
./dist/wora-app-linux-x64/wora-app
```

### Mac

```shell
npm run dist:darwin
./dist/wora-app-darwin-x64/wora-app.app
```

### Win32

```shell
npm run dist:win32
dist\wora-app-win32-x64\wora-app.exe
```

### Web

```shell
npm run ionic:serve
```

## Resources

1. [Get started with Ionic Framework](http://ionicframework.com/getting-started/)

# Copyright & License

* Code & Docs © 2017 Huan LI \<zixia@zixia.net\>
* Code released under the Apache-2.0 License
* Docs released under Creative Commons

