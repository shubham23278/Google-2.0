import { useRouter } from "next/router";
import Image from "next/image";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon, UserIcon } from "@heroicons/react/solid";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="dark:bg-gray-800 stick top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt = "google"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border dark:border-gray-900 dark:hover:border-gray-200 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full dark:bg-gray-800 dark:text-gray-200 focus:outline-none"
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cusrsor-pointer transition-duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        
        <UserIcon
              loading="lazy"
              className="ml-auto h-8 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
            />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
