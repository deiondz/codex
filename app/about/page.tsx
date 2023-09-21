import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
export default function AboutPage() {
  return (
    <div className=" w-full">
      <h1 className={title()}>Our Team</h1>

      <div className=" w-full flex flex-col md:flex-row  items-center justify-center gap-5 py-12">
        <div className=" flex flex-col gap-3">
          <Image
            width={300}
            radius="lg"
            className="  w-[300px] h-[300px] object-cover"
            src="john.jpg"
            alt="Johnathan"
          />
          <div className=" w-full ">
            <Card>
              <CardHeader>
                <h1 className=" text-xl">Jonathan Correa ☀️</h1>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Python - C developer</p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <Image
            width={300}
            radius="lg"
            className="  w-[300px] h-[300px] object-cover"
            src="Deion.jpg"
            alt="Deion"
          />
          <div>
            <Card>
              <CardHeader>
                <h1 className=" text-xl">Deion Dsouza</h1>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Frontend Developer - React & NextJS</p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <Image
            width={300}
            radius="lg"
            className="  w-[300px] h-[300px] object-cover"
            src="Akilesh.jpg"
            alt="Akilesh"
          />
          <div>
            <Card>
              <CardHeader>
                <h1 className=" text-xl"> Akhilesh </h1>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Rust & Flutter Development</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div>
        <h1 className={title()}>Vision Statement</h1>
        <p className=" py-6 text-left text-lg max-w-4xl mx-auto p-2 font-semibold">
          {" "}
          CodeX envisions a future where innovation in computer science and game
          development knows no bounds. We are dedicated to pushing the
          boundaries of technology, fostering creativity, and creating immersive
          digital experiences that captivate and inspire.
        </p>
      </div>
    </div>
  );
}
