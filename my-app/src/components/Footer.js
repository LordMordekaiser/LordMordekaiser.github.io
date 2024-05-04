import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="mt-8 flex place-content-center">
        <img
          className="lg:size-[23%] md:size-[30%] size-[40%]"
          src="/Morde.png"
        />
        <div className="md:ml-32 ml-8 mt-[6%]">
          <p className="md:text-8xl text-6xl font-Inter font-bold tracking-tight">
            //CONTACT
          </p>
          <div className="flex list-none font-IBM font-semibold text-xl mt-4">
            <a
              href="https://www.linkedin.com/in/emircan-karakoc/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="hover:text-red-600 transition duration-500">
                LinkedIn
              </li>
            </a>
            <a
              className="ml-4"
              href="https://www.pixiv.net/en/users/67332929"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="hover:text-blue-600 transition duration-500">
                Pixiv
              </li>
            </a>
            <a href="mailto:krkc.emircan@gmail.com">
              <li className="ml-4 hover:text-amber-300 transition duration-500">
                Email
              </li>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
