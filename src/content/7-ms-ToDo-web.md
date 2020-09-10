---
title: Microsoft To-Do for Linux - only a web wrapper, but still..
author: Elias
date: September 10 2020
---

I've tried out Linux throughout the last couple of weeks and while I've found a replacement for pretty much every Windows-exclusive software, Microsoft To-Do is just really good. The closest thing to it is Todoist but I found it to be slow and unintuitive on all my devices. MS-Todo has a website version, but I've never been a big fan of using websites for everything, since you always lose some native functionalities like alt-tab and launching it from the start-menu.

<img src="/images/7-3.png" title="Natively integrated thanks to Electron's .deb build function">

I knew that you could make web-apps feel and behave like native applications with the Electron framework, so I just set up an Electron App to launch a window accessing the MS-Todo website. It was a bit tricky at first to find the right configuration for the metadata and the icons, but now I think it works quite well.

<img src="/images/7-1.png" title="Microsoft To-Do on Linux">

There are some drawbacks to this approach however. Since it's an Electron App, it bundles the full Chromium and NodeJS in addition to just the few lines I've written, making the application well over 100MB large. And since I've hardcoded the URL to MS-Todo, if Microsoft ever changes the URL, the app will become useless.

So, if you're on Linux and still want to use Microsoft To-Do, there's an App for that now!

[**Download on Github**](https://github.com/EliasVincent/ms-todo-electron-web-app)