import React, { Component } from "react";
import "./App.css";
import profileImage from "./profile.jpg";

function greetingGenerator() {
  const sayings = [
    "Hi Friend",
    "Hi ya",
    "Hello there",
    "Oh Hello",
    "hi",
    "hello",
    "Bonjour",
    "Hola",
  ];
  const greeting = sayings[Math.floor(Math.random() * sayings.length)];
  return greeting;
}

const profile = {
  greeting: greetingGenerator(),
  name: "Greg Rakozy",
  image: profileImage,
  occupation: "Software Engineer",
  location: "Salt Lake City, Utah",
  company: {
    name: "Solvvy",
    website: "https://www.solvvy.com",
  },
  contact: {
    email: "greg.rakozy@gmail.com",
    sms: "801-931-8431",
    instagram: "grakozy",
    linkedIn: "grakozy",
  },
};

export default class App extends Component {
  componentDidMount() {
    document.title = `${profile.name} | ${profile.occupation}`;
  }
  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="left">
            <img
              className="profile-image"
              src={profile.image}
              alt="profile"
            ></img>
          </div>
          <div id="right">
            <div className="text-block">
              <div className="greeting">{profile.greeting},</div>
              <div className="message">
                I'm {profile.name} – a {profile.occupation} in{" "}
                {profile.location} and working for {profile.company.name}.
              </div>
              <div className="call-to-action">
                Follow me:{" "}
                <a target="blank_" href="https://instagram.com/grakozy">
                  @{profile.contact.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
