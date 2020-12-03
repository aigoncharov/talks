# talks

Source code and other accessory materials for my talks.

## History

| Date | Event | Location | Laguage | Talk | Video | Photo |
|------|-------|----------|---------|------|-------|-------|
| 2020-12-05 | DevFest Siberia 2020 | Online | RU | How to display a gazillion of metrics and keep your sanity |  |  |
| 2020-12-02 | React Finland 2020 - Online Mini-Conference #5 - Performance | Online | EN | React: Lifting state up is killing your app |  |  |
| 2020-09-03 | International JavaScript Conference | Online | EN | React: Lifting state up is killing your app |  |  |
| 2020-06-25 | React Vienna | Online | EN | React: Lifting state up is killing your app |  |  |
| 2020-06-02 | JNation 2020 | Online | EN | React: Lifting state up is killing your app | [Video](https://www.youtube.com/watch?v=Jj7-i5lhMpg) |  |
| 2020-05-01 | Byteconf React 2020 | Online | EN | React: Lifting state up is killing your app | [Video](https://youtu.be/gKtr7I1PNIg) |  |
| 2020-04-28 | Node.js SPb MeetUP11 | Online | RU | Strict mode in TypeScript or help your compiler help you | [Video](https://youtu.be/WQpnlpxYhaU?t=4597) |  |
| 2020-04-20 | International JavaScript Conference (Online Edition) | Online | EN | Strict mode in TypeScript or help your compiler help you |  |  |
| 2020-02-29 | Panda Meetup #39 Frontend | Innopolis, Russia | RU | Strict mode in TypeScript or help your compiler help you | [Video](https://www.youtube.com/watch?v=NnOwgRgdBII&t=4512s) | [Photo](https://photos.app.goo.gl/P1zNxZsYMunqDaUx7) |
| 2020-02-05 | BeerJS Voronezh #2 | Voronezh, Russia | RU | Strict mode in TypeScript or help your compiler help you |  |  |
| 2020-01-24 | AgentConf 2020 | Dornbirn, Austria | EN | React: Lifting state up is killing your app | [Video](https://www.youtube.com/watch?v=3JEQlKGcbHQ) | [Photo](https://photos.app.goo.gl/Rp2MCaHCBTGZgszA6) |
| 2019-12-21 | BeerJS Voronezh #1 | Voronezh, Russia | RU | React: Form management in 2020 |  |  |
| 2019-11-26 | ок.tech: Frontend Meetup #2 | Saint Petersburg, Russia | RU | React: Lifting state up is killing your app | [Video](https://ok.ru/video/2423294659179) | [Photo](https://photos.app.goo.gl/zzvaURZeAcqC1RHv7) |
| 2019-11-20 | Panda Meetup #31 Frontend | Moscow, Russia | RU | React: Lifting state up is killing your app | [Video](https://youtu.be/xFQf7ULcaT8) | [Photo](https://photos.app.goo.gl/H47RKdFeU7TNQpRD7) |
| 2019-10-26 | Frontdays 2019 | Tolyatti, Russia | RU | React: Lifting state up is killing your app |  | [Photo](https://photos.app.goo.gl/rX4KQbFhumkKNRMS6)  |
| 2019-10-18 | RIF VRN 2019 | Voronezh, Russia | RU | NodeJS logging made right | [Video](https://youtu.be/gZw-iGUzKII) | [Photo](https://photos.app.goo.gl/sF9SuJ6sz6Z8jQ6y8) |
| 2019-09-14 | meta/conf frontend meetup 2019 | Voronezh, Russia | RU | React: Lifting state up is killing your app | [Video](https://youtu.be/8mt-_FBrd4E) | [Photo](https://photos.app.goo.gl/Q2VC1o2AjrwnQdRJA)  |

## Talks
### How to display a gazillion of metrics and keep your sanity

Say, you have a distributed cluster of 100 nodes. Say, every node collects 100 metrics. Now, imagine a chart with all the metrics from all the nodes. Have you managed it? At Hazelcast, we have not ;)
We will talk about what to do when you want to display all the data at once, but your users have a limited number of monitors and only one pair of eyes. We will speculate about what users actually want to see when they look at a chart of a monitoring web app. We will go over different approaches to filter the data and how an average, a median, and a definite integral can help us with that. 

- [Related article](https://blog.goncharov.page/how-to-display-a-gazillion-of-metrics-and-keep-your-sanity)

### React: Lifting state up is killing your app

Have you heard about “lifting state up”? Is it possible that one of the 12 main concepts listed in React official documentation might lead to poor performance? Can well-known best practices lie? We're going to build a simple data grid with React. We will see which pitfalls it hides and when O(1) can still be slow.

- [Slides](https://docs.google.com/presentation/d/1m15mIS0eqShoOGgf3a0OOPUXPNTo0K4JdkG9urouFoI/edit?usp=sharing)
- [Related article](https://blog.goncharov.page/react-lifting-state-up-is-killing-your-app)
- [Source code](https://github.com/aigoncharov/talks/tree/talk/lifting-state-up-is-killing-your-app/lifting-state-up-is-killing-your-app)

### React: Form management in 2020

- [Slides](https://docs.google.com/presentation/d/1kzytCQSF-1V1ExIFHH_xSRJO_8LqyA6WS6492c0WfRw/edit?usp=sharing)

### Logging made right or a long journey to the standard CLS API

How do you do logging in your applications? How do you analyze your logs later?
In this session, we're going to talk about trace IDs, why they are important. We'll overview the challenges we face with the context management in asynchronous environments. We'll cover how CLS (continuation-local storage) can help us with that and its evolution from the userland library to the standard API which just recently landed in master.

- [Related article](https://blog.goncharov.page/nodejs-logging-made-right)

### Strict mode in TypeScript or help your compiler help you

TypeScript compiler has over 90 compiler options. 7 of them are known as strict. 1 option to rule them all.
We will overview each one of the 7, examine what they do in theory and how it applies to real-world applications. We will go over what covariance/contravariance is, how it applies to TypeScript and why `null` is its worst enemy. 

- [Slides](https://docs.google.com/presentation/d/1xOup_X0gWIgfQZm54nABcSP8BqdLF44b3yv3uwh8Hg0/edit?usp=sharing)

## Bio

Andrey is a full-stack TypeScript and JavaScript developer. He came from working in two software consultancies on a variety of projects: from small startups to well-established enterprises. Now he is happy to be a part of a family at Hazelcast. Big lover of open-source. Author of a small technical blog. Runs BeerJS Voronezh.
