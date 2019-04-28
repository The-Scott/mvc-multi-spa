# The Multi SPA Experiment
I had an idea. I like Multi-Page Apps (MPA), and I also like single-page apps (SPA).  I _should_ be able to have the best of both worlds right?  All the bells and whistles, plus the power of JS Frameworks, all running on demand.

## Why bother?
Well, I was getting sick of the amout of bootstrap code I needed to write for basic stuff. A 'About Me' can be served quicked from static HTML, without loading and entire SPA Framework.

At the same time, SPA's do all sorts of wicked things that are useful and have their place.

Enough of that, if you just want to know how to run it, skip down to the 'Run, Run, You Horror You' section

## Preface: Wait, Where is V1?
V1 was a full on lovecraftian horror, where I attempted to use and modofy some of the pre-done templates and 'do it myself' in an effort to learn all the things I had been putting off (like webpack).  Needless to say, it sorta worked... ish. It also fell from the ugly tree and smacked every branch on the way down. So it will forever languish in privacy, as a monument to excellent lessons learned.

## Technologies
There are quite a few things smashed into this semi-lovecraftian horror. But its also much more _usable_. With minimal config.

- .NET Core 2.2


The base is built on .NET Core 2.2, with Razor Pages.
I wanted a MPA, so a MPA-based core was needed. SPA on demand, remember? Why C#? I know more C# than I do Typescript.

-  Aurelia

I was hunting around for different templates, and this on looked interesting. There is one for angular, but I wanted to try something a bit 'lighter'.

- Angular

That's not to say I _left out_ Angular. Both of these frameworks are running
on-demand within this proof of concept.

# How in the world I do it?
Well, in list form:

- Bootstrap a Razor .NET 2.2 Web App
- Switch out the Razor Pages to Razor Views
- Bootstrap an Aurelia App, with Webpack, Typescript & SASS
- Reconfigure the build-pipeline to:
  - Output the files to wwwroot/Aurelia
  - Have the correct base href for routing purposes
  - Turn the .ejs HTML Template base into somethin that is injectable into a Razor Partial View
- Bootstrap the Angular App, Webpack, Typescript & SASS
  - Fix up the Angular JSON to do the same as Aurelia
- Make sure the Razor bypassess the Routes for /Angular and /Aurelia for static files
- Create the Partial Views to inject that precompiled HTML file from webpack on demand
- Touch up some help scripts
- Run it!

# Lessons Learned: V1 & V2
The key things that I would have as a takeaway would be this.

- Use. The. CLI. Tools. For. The. Frameworks.

I cannot stress that enough. They optimise things. Doing it yourself
(unless deliberately, to teach yourself) is plain crazy, and creates all sorts of pain.

- Ignore the .NET SPA Templates.

Yes its harder to bootstrap things yourself. They are excellent for a starting point, but they tend to lag behind the
faster-moving frameworks. For example, the current Aurelia SPA template has a webpack version of 2.

# Well, How to do it Yourself?
I spent 95% of my time with this making the build pipelines for the SPA's play nice with not-being the master-of-all-things.  SPA's really, really want to be the only thing ever running at any given point. They do not like being told to sit there and be good until you ask for them!

## .NET Core / Razor / MVC
.NET Core has an awesome bypass for SPA's built in. It's called when setting up your static/manual routing table, and is invoked:

    routes.MapSpaFallbackRoute(
                    name: "aurelia-spa",
                    defaults: new {controller = "Aurelia",
                    action = "Aurelia"});`

This allows us to stick our SPA _anywhere_ inside Razor that we can route to.
Just specify it here (and configure the SPA base href). This is half of the image - without setting the staticfile bypass, this wont actulaly do much.

    app.UseStaticFiles();
    app.UseDefaultFiles();

Those two methods create a default handler for index.html if needed, and coupled with the MapSpaFallbackRoute(), will allow anything that has a .js or .html that _matches_ that route to pass right through without the MVC router putting its sticky fingers all over it.

The 'Full Horror' of V1 used the WebpackDevMiddleware for .NET Core - which is great is you are only ever running a SPA, but using MVC to route the rest of it. A SPA. Singular! Much easier to just ignore the routing for our SPA routes, and use the toolchains built for the frameworks!

## Aurelia
Aurelia has its own CLI au. Package JSON has a basic watched script that will build the CLI app and recompile on the fly.

## Angular
Angular has the Angular CLI ng. If you look at the package JSON, there is
a basic watcher angular, to recompile our Angular SPA on the fly.

## Build Pipeline
Both SPA's are completely _decoupled_ from the actual .NET Build.
If you build the solution, you will only get the Razor component - the semi static HTML part.

# Run, Run, You Horror You

1.) Build & Run the .NET Project

2.) Kick off the Builders/Watchers for the SPA's

3.) Done - navigate the either SPA and it'll load up.

