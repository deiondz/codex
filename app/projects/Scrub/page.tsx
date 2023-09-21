import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

export default function Project() {
  return (
    <div suppressHydrationWarning className=" mb-14">
      <div>
        <h1 className=" flex items-center gap-9 text-6xl font-semibold tracking-tighter">
          <Image
            width={100}
            isZoomed
            alt="NextUI Fruit Image with Zoom"
            src="/Srub.svg"
          />
          Project - Scrub
        </h1>
        <div className="mx-auto p-5">
          <Image
            isZoomed
            alt="NextUI Fruit Image with Zoom"
            src="/imageNew.png"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6 space-y-4">
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/kakhil1/Srub/releases/tag/v2.0.0"
        >
          {" "}
          Download the APK here
        </Link>
        <p className="text-2xl font-semibold">
          Srub is built using the Flutter framework, which is a cross-platform
          mobile development framework. It is an online texting app designed to
          help students communicate with their fellow students.
        </p>

        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-xl font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside">
            <li className="text-lg">User registration and sign-in</li>
            <li className="text-lg">User search and filtering</li>
            <li className="text-lg">
              User password retrieval (Forgot password)
            </li>
            <li className="text-lg">
              User data synchronization between new devices (Synced via
              Firebase)
            </li>
            <li className="text-lg">Private messaging</li>
          </ul>
        </div>

        <p className="mt-4 text-xl">
          <strong>Tech Stack and Tools Used:</strong> Flutter, Dart, Firebase
          (for backend), GitHub, Visual Studio Code, Flutter Runtime, Android
          Studio.
        </p>

        <p className="mt-4 text-xl">
          <strong>About Flutter:</strong> Flutter is an open-source UI
          development kit with which we can create native iOS and Android apps.
          It was developed by Google and launched in 2017. It uses the Dart
          programming language.
        </p>

        <p className="mt-4 text-xl">
          Flutter uses widgets, and the written code results can be immediately
          seen with an emulator, which updates Dart code in real-time. A tree of
          widgets is used to arrange and develop the interface.
        </p>
      </div>
    </div>
  );
}
