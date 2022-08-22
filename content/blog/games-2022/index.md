---
title: Game Engines, and Games I built
date: "2022-08-21"
description: Engines I used and game I built in Spring 2022.
---

## Background

In Spring 2022, I attended the _Game Design_ class in
NYU Tandon.

It was taught by professor [Julian Togelius](https://engineering.nyu.edu/faculty/julian-togelius).

In total I made 7 games. The first 6 were week-long projects with
randomly different classmates. The group size was about 3 people.
Because we didn't get restricted on what tools to build the game,
I ended up learning 4 game engines and 4 new programming languages,
with playable game prototypes all in the first 6 weeks.

1. Pico-8
   - It's a very cool 8-bit fantasy console. (2D only)
   - It provides basic APIs via **Lua** such as drawing shapes and re-rendering, and some limited sprite and sound support.
   - There are community-made libraries online. Its nature of limitation makes it unique.
     Also, if you are a retro-game fan, you'll like it.
2. Godot
   - It's an amazing full blown game engine. The best thing about is it's completely free and open source (MIT License)!
   - It supports both 2D and 3D.
   - It's scripted in **GdScript** or **C#**. GdScript is fast and easy-to-learn. It has a lot of syntax inspired by Python. GdScript is a great way to quickly iterate your game prototype.
   - It's easy to both practice **composition** and **inheritance** in Godot.
     - Everything is a "node" in Godot. You can freely compose these nodes to form a tree, an hance do it in the composition way.
     - Every "node" has its type, and is a class-like system. It supports inheritance so that you can make your own node type for custom objects.
   - P.S. Godot 4 is near, which has tons of new features and better 3D support. Check out the [Godot 4.0 alpha 14 pre-release](https://godotengine.org/article/dev-snapshot-godot-4-0-alpha-14).
3. Game Maker Studio 2
   - This is powerful and popular engine for 2D games.
   - The sprite and tile map system are easy to use.
   - However, it's close-source and requires a purchased license.
   - The scripting language is its own DSL "**GML**", which is not a pleasure to work with, especially compared to C#, or even Lua.
4. Unity
   - You all know this beast. It's scripted in **C#** and has tons of features.
   - Can't go wrong with Unity as an indie game developer.

## Games

### Zoo Tale

The player is playing as an alien rat who is trapped on a huge island.
The player is going to explore the island, build tools, combat enemies and finally
build a spaceship to go back to the space.

This is the final project, built in Unity. Ye, Yichen and I put a lot of effort into this.
It's a resource collecting, converting game in a sandbox.

W,A,S,D to navigate. Q to attack. E to interact. Left/Right click for items.
For more instructions, click on the itch.io icon
<svg style="display: inline" width="20" version="1.1" height="17" class="svgicon icon_itchio_new" viewBox="0 0 262.728 235.452" aria-hidden="" role="img"><path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z"></path></svg>
below.

<iframe frameborder="0" src="https://itch.io/embed-upload/5776813?color=333333" allowfullscreen="" width="900" height="600"><a href="https://yalexublue.itch.io/escape-death-isle">Play Zoo Tale on itch.io</a></iframe>

### Rescue Radish

A simple yet fun platformer game, with resources and upgrades.
The player is a radish, and the final goal is to rescue its peer.

This is one of the one-week prototypes we built together, other developers are Many and Yichen.

<iframe frameborder="0" src="https://itch.io/embed-upload/5319054?color=b8e2f2" allowfullscreen="" width="900" height="600"><a href="https://powerfulduck.itch.io/rescue-radish">Play Rescue Radish on itch.io</a></iframe>

### Parents not Home

This is a text-heavy RPG puzzle game built with Godot.
The player is a little girl who is very curious about a forbidden room
in the town. One day, her parents are not home...

I'm very proud of this game because I implemented a lot of mechanisms in this game,
including all-touch based navigation, combat system, collision system,
map system, game event conditions and etc.

However, this was a one-week prototype but I spent too much time
on building the mechanisms in Godot. As a result, the playing experience
can be a bit unpolished. Nevertheless, it's one of my favorites.

<iframe frameborder="0" src="https://itch.io/embed-upload/5364938?color=333333" allowfullscreen="" width="640" height="380"><a href="https://yuyueshihaoren.itch.io/parents-not-home">Play Parents Not Home (Touch friendly) on itch.io</a></iframe>
