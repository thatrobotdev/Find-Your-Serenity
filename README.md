# [Find Your Serenity - A PWA designed to help decrease anxiety.](https://findyourserenity.tech/)

[Find Your Serenity](https://findyourserenity.tech/) recommends positive coping strategies for anxiety and panic attacks, personalized to the user's current mood.

Initially built as part of the 24-hour hackathon [TeenHacksLI](https://teenhacksli.com/) in the fall of 2019. We were awarded the [Empowerly & BestFit Equitable Education Hack award](https://devpost.com/software/serenity-xj6bhw). [Empowerly](https://www.empowerly.com/) & [BestFit](https://best-fit.app/) are companies that provide college counseling and planning.

## Authors

* **Anthony Becker** - [BestBeck42](https://github.com/BestBeck42)
* **James Kerrane** - [thatrobotdev](https://github.com/thatrobotdev)
* **Laszlo Goch** - [Yayo49](https://github.com/Yayo49)

See also the list of [contributors](https://github.com/thatrobotdev/find-your-serenity/contributors) who participated in this project.

## Download Instructions
1. [Navigate to the **Find Your Serenity** homepage with an iOS device.](https://serenity.stoopidscience.repl.co/)(Android is also supported, but there may be different download instructions.)
2. Click the “Share” button, then click “Add to Home Screen”. 
3. Click “Add” when the **FYS** install screen pops up.

![Our awesome PWA!!!](https://i.imgur.com/9tnFslV.png)

## Inspiration
A startling 31.1% of U.S adults experience any anxiety disorder at some time in their lives [according to the National Institute of Mental Health.](https://www.nimh.nih.gov/health/statistics/any-anxiety-disorder.shtml) Being the most common disorder in the United States Even though anxiety disorders are highly treatable, only [36.9% of those suffering receive treatment](https://adaa.org/about-adaa/press-room/facts-statistics). We wanted to create an app that can help build healthy coping habits.

## What it does

The app uses sliders to analyze the user's mood and suggests activities and coping skills based on these emotions. These coping skills are separated into 4 categories.
* **Tension releasing**. Acting on strong emotions in ways that are safe for the person.
* **Diversions**. Activities that help you to stop thinking about the stress-inducing situation.
* **Social/Interpersonal**. Activities that involve interactions with others.
* **Cognitive coping** Activities to find ways of thinking that improve mental responses to situations.

Each emotion slider corresponds with a different coping category. We have created an algorithm that takes the top 5 most relevant activities to a user’s mood, to help them most effectively.

## How we built it

We used the web technologies HTML, CSS, and JS to build the app. We used the CSS framework Bulma. 

The app uses the Euclidean distance formula to measure the distance between the user’s choice (as a vector of slider values) and the choices that the coping skills are most relevant to.


## Challenges we ran into

Initially, we were planning on creating a virtual reality app for our calm space, but we ran into many issues like driver errors, slow wifi, and ultimately our laptops not being powerful enough to develop VR apps. We lost a lot of time debugging these issues, but we overcame them by switching our idea to a Progressive Web App, an app that fits our idea better because of its accessibility.

## Accomplishments that we're proud of

Yesterday, we all came together in the same room, not knowing who we were going to partner with. In the beginning, we were complete strangers launched into working together on a project for the next 24 hours. This weekend, we’re proud that we were brought together by this event, and we collaborated with each other effectively. Now we are good friends.

## What we learned

We’ve learned the basics of web VR development, as well as effectively collaborating with each other as a group. Before this, members of our team had never programmed collaboratively before, especially in person. We finally got to learn what it feels like to work together on a coding project with peers.

## What's next for Find Your Serenity

After this hackathon, we believe that we can take Serenity to the next level. We are planning on doing a complete refactor of the code, and we want to experiment with taking it to VR using the web VR framework A-Frame. We also want to add more coping skills and improve our algorithm for recommending activities. Ultimately, we want to connect with other professionals in the mental health field to get advice about how to develop this app to be more effective for people who suffer from anxiety and other mental health disorders.
