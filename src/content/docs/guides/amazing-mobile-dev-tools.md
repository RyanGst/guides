---
title: Amazing Mobile Dev Tools
giscus: true
description: Handy tools for everyday usage
---
## Tophat:
>Easily install and test mobile applications with a single click.

Tophat allows us to manage android/ios simulators on MacOs with ease. 

![[Pasted image 20251124150802.png]]

It also allow us to install APKs/IPAs from remote sources using it's app schema:

```
tophat://install/http?url=<full_public_url>
```

The type of build downloaded will be interpreted by Tophat automatically!

### Installation:

Install and extract the application from repo's latest release:

https://github.com/Shopify/tophat/releases


Dependencies: 
- `JAVA_HOME` variable,
- `cmdline-tools` (android)
- `scrcpy` (optional)


## SCRPY

>Display and control your Android device


Amazing for testing with real android devices, via USB or TCP/IP. 

It does not require _root_ access or an app installed on the device. It works on _Linux_, _Windows_, and _macOS_!!


### Installation:

https://github.com/Genymobile/scrcpy/releases


## Maestro
Maestro is the ultimate mobile testing tool. 

>Maestro is built on learnings from its predecessors (Appium, Espresso, UIAutomator, XCTest, Selenium, Playwright) and allows you to easily define and test your Flows.


https://docs.maestro.dev/




## Part 2, maybe:
https://proxyman.com/

https://github.com/skylot/jadx