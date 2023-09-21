"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { GithubIcon } from "@/components/icons";
import { Typewriter } from "react-simple-typewriter";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-8 md:py-10">
      <div className="inline-block max-w-lg absolute top-36 text-center justify-center ">
        <h1 className={title()}>Codex:&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Crafting&nbsp;</h1>
        <br />
        <h1 className={title()}>
          {
            <Typewriter
              words={[
                "Digital Excellence with Web and Flutter Apps",
                "Your Imagination, Our Code",
              ]}
              loop={3}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          }
        </h1>
      </div>
      <div className=" absolute top-80 p-6 flex-col  item-center justify-center">
        <h1 className={" font-bold text-center text-3xl"}>
          Check Out Our Projects
        </h1>
        <div className=" py-8 flex flex-col md:flex-row gap-10">
          {siteConfig.project.map((item, key) => (
            <Card key={key} className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <Image
                  radius="lg"
                  isBlurred
                  isZoomed
                  className="   object-cover"
                  src={item.img}
                  alt={item.img}
                />
                <div className="flex flex-col">
                  <p className="text-md">{item.title}</p>
                  <p className="text-small text-default-500">{item.url}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{item.description}</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link isExternal showAnchorIcon href={item.more}>
                  Visit Documentation
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
