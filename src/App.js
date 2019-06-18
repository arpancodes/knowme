import React from "react";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Let's connect ❤</h1>
      <div className="button-container">
        <Button
          icon="twitter"
          color="#3498db"
          link="twitter.com"
          username="arpancodes"
        >
          Twitter
        </Button>
        <Button
          icon="instagram"
          color="#8e44ad"
          link="instagram.com"
          username="arpancodes"
        >
          Instagram
        </Button>
        <Button
          icon="facebook"
          color="#3b5998"
          link="fb.com"
          username="arpancodes"
        >
          Facebook
        </Button>
        <Button
          icon="youtube"
          color="#c0392b"
          link="youtube.com"
          username="channel/UCK-Tw8Dzu9e9ZxgQqoZzKAg"
        >
          Youtube
        </Button>
        <Button
          icon="github"
          color="#7f8c8d"
          link="github.com"
          username="arpancodes"
        >
          Github
        </Button>
        <Button
          icon="codepen"
          color="#2c3e50"
          link="codepen.io"
          username="arpancodes"
        >
          Codepen
        </Button>
        <Button
          icon="linkedin"
          color="#2980b9"
          link="linkedin.com"
          username="in/arpan-abhishek-1578a6165"
        >
          LinkedIn
        </Button>
        <Button
          icon=""
          color="#2ecc71"
          link="upwork.com"
          username="freelancers/~01f994f6b8bd6e7528"
        >
          upwork
        </Button>
      </div>
    </div>
  );
}

export default App;
