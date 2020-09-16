# talks

Source code and other accessory materials for my talks.

## History

| Date | Event | Location | Talk | Video | Photo |
|------|-------|----------|------|-------|-------|
| 2020-11-21 | DevFest Siberia 2020 | Online | React: Lifting state up is killing your app | How to display a gazillion of metrics and keep your sanity |  |
| 2020-09-03 | International JavaScript Conference | Online | React: Lifting state up is killing your app |  |  |
| 2020-06-25 | React Vienna | Online | React: Lifting state up is killing your app |  |  |
| 2020-06-02 | JNation 2020 | Online | React: Lifting state up is killing your app |  |  |
| 2020-05-01 | Byteconf React 2020 | Online | React: Lifting state up is killing your app | [Video](https://youtu.be/gKtr7I1PNIg) |  |
| 2020-04-28 | Node.js SPb MeetUP11 | Online | Strict mode in TypeScript or help your compiler help you | [Video](https://youtu.be/WQpnlpxYhaU?t=4597) |  |
| 2020-04-20 | International JavaScript Conference (Online Edition) | Online | Strict mode in TypeScript or help your compiler help you |  |  |
| 2020-02-29 | Panda Meetup Innopolis | Innopolis, Russia | Strict mode in TypeScript or help your compiler help you | [Video](https://www.youtube.com/watch?v=NnOwgRgdBII&t=4512s) | [Photo](https://photos.app.goo.gl/P1zNxZsYMunqDaUx7) |
| 2020-02-05 | BeerJS Voronezh #2 | Voronezh, Russia | Strict mode in TypeScript or help your compiler help you |  |  |
| 2020-01-24 | AgentConf 2020 | Dornbirn, Austria | React: Lifting state up is killing your app | [Video](https://www.youtube.com/watch?v=3JEQlKGcbHQ) | |
| 2019-12-21 | BeerJS Voronezh #1 | Voronezh, Russia | React: Form management in 2020 |  |  |
| 2019-11-26 | ок.tech: Frontend Meetup #2 | Saint Petersburg, Russia | React: Lifting state up is killing your app | [Video](https://ok.ru/video/2423294659179) | |
| 2019-11-20 | Panda Meetup #31 Frontend | Moscow, Russia | React: Lifting state up is killing your app | [Video](https://youtu.be/xFQf7ULcaT8) | |
| 2019-10-26 | Frontdays 2019 | Tolyatti, Russia | React: Lifting state up is killing your app |  |  |
| 2019-10-18 | RIF VRN 2019 | Voronezh, Russia | NodeJS logging made right | [Video](https://youtu.be/gZw-iGUzKII) |  |
| 2019-09-14 | meta/conf frontend meetup 2019 | Voronezh, Russia | React: Lifting state up is killing your app | [Video](https://youtu.be/8mt-_FBrd4E) |  |

## Talks
### How to display a gazillion of metrics and keep your sanity

Imagine a distributed cluster of 100 nodes. Next, imagine that every node collects 100 metrics. Now, imagine a chart with all the metrics from all nodes. Have you managed it? At Hazelcast, we have not ;)
We will talk about what to do when you want to display all the data at once, but your users have a limited number of monitors and only one pair of eyes. We will speculate about what users actually want to see when they look at a chart of a monitoring web app. We will go over different approaches to filter the data and how an average, a median and a definitive integral can help us with that.

### React: Lifting state up is killing your app

Have you heard about “lifting state up”? Is it possible that one of the 12 main concepts listed in React official documentation might lead to poor performance? Can well-known best practices lie? We're going to build a simple data grid with React. We will see which pitfalls it hides and when O(1) can still be slow.

- [Slides](https://docs.google.com/presentation/d/1m15mIS0eqShoOGgf3a0OOPUXPNTo0K4JdkG9urouFoI/edit?usp=sharing)
- [Related article](https://itnext.io/react-lifting-state-up-is-killing-your-app-3ad6f0e1213d)
- [Source code](https://github.com/aigoncharov/talks/tree/talk/lifting-state-up-is-killing-your-app/lifting-state-up-is-killing-your-app)

### React: Form management in 2020

- [Slides](https://docs.google.com/presentation/d/1kzytCQSF-1V1ExIFHH_xSRJO_8LqyA6WS6492c0WfRw/edit?usp=sharing)

### Logging made right or a long journey to the standard CLS API

How do you do logging in your applications? How do you analyze your logs later?
In this session, we're going to talk about trace IDs, why they are important. We'll overview the challenges we face with the context management in asynchronous environments. We'll cover how CLS (continuation-local storage) can help us with that and its evolution from the userland library to the standard API which just recently landed in master.

- [Related article](https://itnext.io/nodejs-logging-made-right-117a19e8b4ce)

### Strict mode in TypeScript or help your compiler help you

TypeScript compiler has over 90 compiler options. 7 of them are known as strict. 1 option to rule them all.
We will overview each one of the 7, examine what they do in theory and how it applies to real-world applications. We will go over what covariance/contravariance is, how it applies to TypeScript and why `null` is its worst enemy. 

- [Slides](https://docs.google.com/presentation/d/1xOup_X0gWIgfQZm54nABcSP8BqdLF44b3yv3uwh8Hg0/edit?usp=sharing)
