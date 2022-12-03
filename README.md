# Ex/Int Project

This project was bootstrapped with Create React App. Made by Amaiya Brickhouse in November of 2022 as a finla project for Experience and Interaction.

## Details – Why

- What is the site of the intervention
  - Live streaming sites like Twitch or YouTube, also Instagram live and Tiktok
- Inspiration
  - This was a topic that I was interested in and intrigued by so I wanted to experiment with it
- Research
  - Not much research, I am already pretty familiar with twitch and how people interact with the platform
- How the website/intervention works
  - There is an associative array of users and messages that they sent (which I got from a text file of the chat from a live stream which I got through TwitchDownloader)
  - The messages are displayed randomly across the screen and, when you enter a word (ideally one that you read from the messages), it will get rid of messages that also use that word (case insensitive) and the pool of messages that it pulls from shrinks
  - In theory you could keep going until it hits zero and it has nothing left to show you because you’ve seen everything but, in actuality, it’s sort of functionally impossible to get everything before the screen gets so crowded that it’s hard to read anything at all (even though it’s only 300 out of some 175,000 total messages)
  - If I was a more advanced programmer, would figure out some way to link it to something that gets more data (so it’s not just the same bank of messages each time)
- How I imagine someone would use or experience the intervention
  - You see what people say and try to read what as many people say as possible
  - The idea is that on these live streaming platforms these messages are sort of being put out there with no real way to tell if anyone is actually receiving/hearing it
  - I think it might be fun just to read what people say as well. I found that amusing when I was making it
  - Think about (1) is anyone hearing what they are saying? Do they still have value and meaning if no one is reading it? does it encourage people to say things they wouldn’t otherwise because it’s going into the void or they are just repeating what they see from others… also acknowledge that a message can gain power through volume if a bunch of people all say the same thing
  - And (2) I got these messages in order, with time stamps but they aren’t displayed in order and are presented without context. How does this impact their meaning/value? Must they be in sequence to maintain their original intent?

### How

The app is hosted using hostinger and can be accessed at the URL: <a href="https://abrickhouse.github.io/twitchEXINT/">https://abrickhouse.github.io/twitchEXINT/</a>

### Artist Statement

I created a site where the user interacts with messages from a chatroom in a new, odd context which I coded using HTML, CSS, Javascript, and ReactJS and is currently being hosted online. The subject matter is based around the internet, so it seemed fitting to make the piece a web app. The web application I built populates the screen with chat messages from a chatlog I acquired using a TwitchDownloader Tool. The application is a single screen with text at the top asking the user what they see and a number, 0, out of 300. There is a text entry box at the bottom of the screen and, when the page loads, a few chat messages pop up. They are picked arbitrarily from an array, and, upon entering and submitting something using the text entry box, the user will see the number out of 300 increase depending on how many of the 300 messages contain the word they have entered. As the user enters more text, more messages will be displayed each time, until the screen is so covered in messages that it is nearly unreadable.

The media context that I wanted to look into was live streaming such as on Twitch. In particular, I was interested in how users on those sites interact through the chat. At times, there might be hundreds, thousands, or tens of thousands of people watching a particular stream, many of them choosing to participate in the chat at some point, but there is no guarantee that anyone will read or fully comprehend what anyone else has said. The intent of the project is to force the user to focus on these messages and acknowledge them enough to parrot them back. The project has the user confront the volume of these messages. 300 is a small subset of the chatlog I accessed, and it is still difficult to get to 300/300. The goal is to examine these chatrooms’ effectiveness as a site for connection, extracting takeaways that can extend to the internet as a whole– technically connecting to a lot of people, but, in practice, missing the mark on genuine communication.
