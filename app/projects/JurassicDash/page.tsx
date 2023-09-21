"use client";
import { title } from "@/components/primitives";
import Iframe from "react-iframe";

export default function Project() {
  return (
    <div suppressHydrationWarning className=" mb-14">
      <div>
        <h1 className=" text-6xl font-semibold tracking-tighter">
          Project - JurassicDash
        </h1>
        <div>
          <img className=" rounded-3xl my-8" src="/Gameplay.png" alt="" />
        </div>
        <div className=" w-full flex flex-col items-center justify-center p-5">
          <Iframe
            url="https://itch.io/embed-upload/8734779?color=193d3f"
            width="500px"
            height="320px"
            id=""
            className=""
            display="block"
            position="relative"
          />
          <a href="https://jsc-games.itch.io/jurassicdash">
            Play Jurassic Dash on itch.io
          </a>
        </div>
      </div>
      <div>
        <h1 className=" text-4xl font-bold p-3">What is the project about?</h1>
        <p className=" p-3  text-xl font-light">
          This game is an endless platformer designed to evoke a nostalgic retro
          aesthetic, where the platforms come to life through the magic of
          algorithmic randomness, ensuring that every playthrough offers a
          unique and thrilling experience to players.
        </p>
      </div>
      <div>
        <h1 className=" text-4xl font-bold p-3">Features of the Game</h1>
        <p className=" p-3  text-xl font-light">
          <span className=" font-medium">User Authentication: </span>Players
          have the option to log in or create an account, allowing for a
          personalized gaming experience. This feature ensures that players can
          track their progress and maintain a consistent identity within the
          game.
        </p>
        <p className=" p-3  text-xl font-light">
          <span className=" font-medium">
            Leaderboard System (Connected to Your Account):{" "}
          </span>
          The game includes a robust leaderboard system that is seamlessly
          integrated with the player's account. This allows players to compete
          with others on a global scale, showcasing their high scores and
          achievements. By connecting the leaderboard to user accounts, players
          can easily compare their performance with friends and rivals,
          fostering healthy competition and a sense of community.
        </p>

        <p className=" p-3  text-xl font-light">
          <span className=" font-medium">
            Endlessly Generating Platforms: {""}
          </span>
          The heart of the game lies in its endlessly generating platforms.
          Utilizing advanced algorithms, the game dynamically creates a
          never-ending series of platforms, ensuring that no two playthroughs
          are alike. This feature challenges players to adapt to constantly
          changing obstacles and keeps the gameplay fresh and exciting, making
          each run a unique and exhilarating experience.
        </p>
      </div>
      <div>
        <h1 className=" text-4xl font-bold p-3">Language/Engine used</h1>
        <p className=" p-3 text-xl font-light">
          The game has been crafted using the GDevelop game engine, an
          incredibly versatile and user-friendly platform for game development.
          GDevelop is renowned for its accessibility, making it an ideal choice
          for both experienced developers and newcomers to the world of game
          creation. With its intuitive interface and robust set of features,
          GDevelop empowers game designers to bring their creative visions to
          life, allowing for the seamless integration of gameplay elements,
          stunning visuals, and captivating storytelling. In essence, GDevelop
          serves as the driving force behind this game's creation, enabling
          developers to harness its capabilities and deliver an engaging and
          immersive gaming experience to players.
        </p>
      </div>
    </div>
  );
}
