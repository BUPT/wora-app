# wora-app
An App that **Write Once, Run Anywhere**(_WORA_).

Supported Platforms:
1. Web
1. Android
1. Ios
1. Windows
1. Linux
1. Mac

## Install

Requirement: Node.js(v8.x is recommended)

```shell

npm install -g cordova ionic

git clone https://github.com/BUPT-CAD/wora-app.git
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
ionic run dist:linux
./dist/wora-app-linux-x64/wora-app
```

### Mac

```shell
ionic run dist:darwin
./dist/wora-app-darwin-x64/wora-app.app
```

### Win32

```shell
ionic run dist:win32
dist\wora-app-win32-x64\wora-app.exe
```

### Web

```shell
npm run ionic:serve
```

## Resources

1. [Get started with Ionic Framework](http://ionicframework.com/getting-started/)
