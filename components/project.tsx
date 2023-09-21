import React from "react";
import { siteConfig } from "@/config/site";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
export default function Project() {
  return (
    <div className=" flex-col  item-center justify-center">
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
  );
}
