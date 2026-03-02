import React from "react";
import {
  FaCode,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLongArrowAltUp,
  FaTwitter,
} from "react-icons/fa";
import { SiCssdesignawards, SiSocialblade } from "react-icons/si";
import { TiLocationArrowOutline } from "react-icons/ti";
import { HiOutlineBars3 } from "react-icons/hi2";

const MyPortfolio = () => {
  return (
    <div>
      {/* header section */}
      <header className="lg:w-7xl w-90 mx-auto px-20 py-4 sticky top-0 z-50 flex justify-between items-center bg-zinc-900">
        <div className="w-full flex justify-start items-center gap-3">
          <a href="/">
            <img
              src="./zisan.jpg"
              alt="Logo"
              className="w-7 h-7 object-cover rounded-full"
            />
          </a>
          <h4 className="text-white font-bold text-2xl hidden lg:block">
            Zisan.
          </h4>
        </div>
        {/* menu ber  */}
        <div className="flex justify-between items-center gap-10 text-white ">
          <nav className="hidden lg:block">
            <ul className="flex justify-center items-center gap-8">
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold hover:text-amber-400 hover:transition-all duration-300 ">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold hover:text-amber-400 hover:transition-all duration-300 ">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold hover:text-amber-400 hover:transition-all duration-300 ">
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold hover:text-amber-400 hover:transition-all duration-300 ">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold hover:text-amber-400 hover:transition-all duration-300 ">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="bg-amber-400 hidden lg:block py-1 px-8 rounded-full text-white font-semibold cursor-pointer hover:bg-amber-500 active:bg-amber-800 hover:transition-all duration-300">
            Register
          </button>
          <button className="text-3xl text-white font-bold lg:hidden">
            <HiOutlineBars3 />
          </button>
        </div>
      </header>

      <main>
        {/* hero section */}
        <section>
          <div className="lg:min-h-screen lg:w-7xl w-90 mx-auto px-20 bg-zinc-900 flex justify-between items-center gap-10">
            <div className="text-white py-20">
              <p className="font-bold lg:text-2xl">Hello, It's Me</p>
              <h2 className="font-bold lg:text-5xl py-1 text-2xl">
                Md Zisan Uddin
              </h2>
              <p className="font-bold text-xl lg:text-2xl">
                And I'm a <span>Developer</span>
              </p>
              <p className="text-zinc-100 text-sm pt-5">
                Dipisicing lorem ipsum dolor sit amet consectetur adipisicing
                elit. Mollitia ut officiis incid elit.
              </p>
              <p className="text-zinc-100 text-sm pb-5">
                Ad, sunt.lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
              <div className="flex items-center gap-5 pb-5">
                <a
                  href=""
                  className="border-2 p-2 border-amber-400 rounded-full text-sm text-amber-400 hover:bg-amber-400 hover:text-white hover:transition-all duration-700">
                  <FaFacebookF />
                </a>
                <a
                  href=""
                  className="border-2 p-2 border-amber-400 rounded-full text-sm text-amber-400 hover:bg-amber-400 hover:text-white hover:transition-all duration-700">
                  <FaTwitter />
                </a>
                <a
                  href=""
                  className="border-2 p-2 border-amber-400 rounded-full text-sm text-amber-400 hover:bg-amber-400 hover:text-white hover:transition-all duration-700">
                  <FaInstagram />
                </a>
                <a
                  href=""
                  className="border-2 p-2 border-amber-400 rounded-full text-sm text-amber-400 hover:bg-amber-400 hover:text-white hover:transition-all duration-700">
                  <FaLinkedinIn />
                </a>
              </div>
              <button className="bg-amber-400 py-1 px-8 rounded-full text-white font-semibold cursor-pointer hover:bg-amber-500 active:bg-amber-800 hover:transition-all duration-300">
                Download cv
              </button>
            </div>
            {/* hero logo */}
            <div className="hidden lg:block">
              <img
                src="./zisan.jpg"
                alt="hero-Image"
                className="w-80 h-80 rounded-full animate-pulse"
              />
            </div>
          </div>
        </section>
        {/* about section  */}
        <section>
          <div className="lg:w-7xl w-90 mx-auto px-20 py-20 lg:flex lg:justify-between lg:items-center lg:gap-10 bg-zinc-800">
            <div className="border-5 border-amber-400 rounded-full">
              {/* [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] */}
              <img
                src="./zisan.jpg"
                alt="about-image"
                className=" lg:w-80 lg:h-80 rounded-full object-cover"
              />
            </div>
            <div className="lg:w-3xl pt-15 -sm:flex -sm:flex-col -sm:justify-center items-center">
              <h2 className="text-4xl font-bold text-white">
                About <span className="text-amber-400">Me</span>
              </h2>
              <p className="font-bold text-2xl py-2 text-white">
                Web Developer!
              </p>
              <p className="text-zinc-100 text-md lg:text-sm pb-5 -sm:text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                quo velit cum soluta, itaque sunt eum, at repudiandae unde
                suscipit{" "}
                <span className="hidden lg:block">
                  iste porro officiis. Facere distinctio asperiores optio
                  commodi eos placeat?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Eius cum neque dolorem delectus quos ipsam
                  omnis earum mollitia rerum vel aliquid placeat officia
                  corporis numquam, tempore dolorum quaerat cupiditate et?
                </span>
              </p>
              <button className="bg-amber-400 py-1 px-8 rounded-full text-white font-semibold cursor-pointer hover:bg-amber-500 active:bg-amber-800 hover:transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
        </section>
        {/* service section  */}
        <section>
          <div className="lg:w-7xl w-90 mx-auto px-20 bg-zinc-800 pb-20">
            <div className="text-center">
              <h3 className="text-white text-3xl font-bold pb-4 inline relative after:content-[''] after:absolute after:w-20 after:h-0.5 after:bg-amber-400 after:bottom-0 after:right-0">
                My <span className="text-amber-400">Services</span>
              </h3>
            </div>
            <div className="lg:flex lg:justify-between lg:items-center lg:gap-5 pt-20">
              {/* start single service */}
              <div className="border-2  border-amber-400 mb-10 bg-zinc-900 p-5 lg:w-87.5 text-center rounded-xl transition-all duration-300 ease-in-out hover: -translate-y-2 hover:scale-105">
                <i className="inline-block text-amber-400 text-3xl">
                  <FaCode />
                </i>
                <h4 className="lg:text-3xl text-xl font-bold text-white">
                  Web Development
                </h4>
                <p className="text-zinc-50 text-sm py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  mollitia{" "}
                  <span className="hidden lg:block">
                    laudantium modi tenetur reiciendis quos suscipit impedit
                    assumenda blanditiis vitae?
                  </span>
                </p>
                <button className="bg-amber-400 py-1 px-8 rounded-full text-white font-semibold cursor-pointer hover:bg-amber-500 active:bg-amber-800 hover:transition-all duration-300">
                  Read More
                </button>
              </div>
              <div className="border-2 border-amber-400 mb-10 bg-zinc-900 p-5 lg:w-87.5 text-center rounded-xl transition-all duration-300 ease-in-out hover: -translate-y-2 hover:scale-105">
                <i className="inline-block text-amber-400 text-3xl">
                  <SiCssdesignawards />
                </i>
                <h4 className="lg:text-3xl text-xl font-bold text-white">
                  Responsive Design
                </h4>
                <p className="text-zinc-50 text-sm py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  mollitia{" "}
                  <span className="hidden lg:block">
                    laudantium modi tenetur reiciendis quos suscipit impedit
                    assumenda blanditiis vitae?
                  </span>
                </p>
                <button className="bg-amber-400 py-1 px-8 rounded-full text-white font-semibold cursor-pointer hover:bg-amber-500 active:bg-amber-800 hover:transition-all duration-300">
                  Read More
                </button>
              </div>
              <div className="border-2 border-amber-400 mb-10 bg-zinc-900 p-5 lg:w-87.5 text-center rounded-xl transition-all duration-300 ease-in-out hover: -translate-y-2 hover:scale-105">
                <i className="inline-block text-amber-400 text-3xl">
                  <SiSocialblade />
                </i>
                <h4 className="lg:text-3xl text-xl font-bold text-white">
                  React Node Deve
                </h4>
                <p className="text-zinc-50 text-sm py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  mollitia{" "}
                  <span className="hidden lg:block">
                    laudantium modi tenetur reiciendis quos suscipit impedit
                    assumenda blanditiis vitae?
                  </span>
                </p>
                <button className="bg-amber-400 py-1 px-8 rounded-full text-white font-semibold cursor-pointer hover:bg-amber-500 active:bg-amber-800 hover:transition-all duration-300">
                  Read More
                </button>
              </div>
              {/* end single service */}
            </div>
          </div>
        </section>
        {/* project section  */}
        <section>
          <div className="lg:w-7xl w-90 mx-auto px-20 bg-zinc-800 pb-20">
            <div className="text-center">
              <h3 className="text-white text-3xl font-bold pb-4 inline relative after:content-[''] after:absolute after:w-20 after:h-0.5 after:bg-amber-400 after:bottom-0 after:right-0">
                Latest <span className="text-amber-400">Project</span>
              </h3>
            </div>
            <div className="lg:flex lg:justify-between lg:items-center lg:gap-10 pt-20">
              <div className="lg:w-87.5 mb-10 h-50 rounded-xl group cursor-pointer overflow-hidden border border-amber-300">
                <div className="relative">
                  <img
                    src="./code.jpeg"
                    alt="E-commerce"
                    className="w-full h-50 object-cover"
                  />
                  <div className="absolute top-6 lg:bottom-0 lg:left-0 w-full bg-linear-to-t from-amber-400 text-shadow-transparent text-white p-5 lg:translate-y-35 lg:group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="lg:text-2xl font-semibold text-center text-white bg-amber-400 rounded-full">
                      E-commerce
                    </h3>
                    <p className="text-zinc-50 text-sm py-5 text-center">
                      Lorem, ipsum dolor sit amet consectetur adipisi{" "}
                      <span className="hidden lg:block">
                        cing elit. Vel eligendi eos labore nisi Lorem, ipsum
                        dolor Lorem, ipsum.
                      </span>
                    </p>
                    <div className="flex justify-center items-center">
                      <a
                        href="https://e-commerce-website-logic-build.netlify.app/"
                        target="_blank"
                        className="p-2 rounded-full bg-amber-50 text-amber-400 font-bold">
                        <TiLocationArrowOutline />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* second project  */}
              <div className="lg:w-87.5 mb-10 h-50 rounded-xl group cursor-pointer overflow-hidden border border-amber-300">
                <div className="relative">
                  <img
                    src="./movie.jpeg"
                    alt="E-commerce"
                    className="w-full h-50 object-cover"
                  />
                  <div className="absolute top-6 lg:bottom-0 lg:left-0 w-full bg-linear-to-t from-amber-400 text-shadow-transparent text-white p-5 lg:translate-y-35 lg:group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="lg:text-2xl font-semibold text-center text-white">
                      Landing Page
                    </h3>
                    <p className="text-zinc-50 text-sm py-5 text-center">
                      Lorem, ipsum dolor sit amet consectetur adipisi{" "}
                      <span className="hidden lg:block">
                        cing elit. Vel eligendi eos labore nisi Lorem, ipsum
                        dolor Lorem, ipsum.
                      </span>
                    </p>
                    <div className="flex justify-center items-center">
                      <a
                        href="https://react-tailwind-landing-page2.netlify.app/"
                        target="_blank"
                        className="p-2 rounded-full bg-amber-50 text-amber-400 font-bold">
                        <TiLocationArrowOutline />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3Rd project  */}
              <div className="lg:w-87.5 mb-10 h-50 rounded-xl group cursor-pointer overflow-hidden border border-amber-300">
                <div className="relative">
                  <img
                    src="./web.jpeg"
                    alt="E-commerce"
                    className="w-full h-50 object-cover"
                  />
                  <div className="absolute top-6 lg:bottom-0 lg:left-0 w-full bg-linear-to-t from-amber-400 text-shadow-transparent text-white p-5 lg:translate-y-35 lg:group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="lg:text-2xl font-semibold text-center text-white bg-amber-400 rounded-full">
                      Calculator
                    </h3>
                    <p className="text-zinc-50 text-sm py-5 text-center">
                      Lorem, ipsum dolor sit amet consectetur adipisi
                      <span className="hidden lg:block">
                        cing elit. Vel eligendi eos labore nisi Lorem, ipsum
                        dolor Lorem, ipsum.
                      </span>
                    </p>
                    <div className="flex justify-center items-center">
                      <a
                        href="https://js-calculator-interface.netlify.app/"
                        target="_blank"
                        className="p-2 rounded-full bg-amber-50 text-amber-400 font-bold">
                        <TiLocationArrowOutline />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* second div  */}
            <div className="lg:flex lg:justify-between lg:items-center lg:gap-10 hidden lg:block pt-10">
              <div className="w-87.5 h-50 rounded-xl group cursor-pointer overflow-hidden border border-amber-300">
                <div className="relative">
                  <img
                    src="./movie.jpeg"
                    alt="E-commerce"
                    className="w-full h-50 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-amber-400 text-shadow-transparent text-white p-5 translate-y-35 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-center text-white">
                      Responsive web
                    </h3>
                    <p className="text-zinc-50 text-sm py-5 text-center">
                      Lorem, ipsum dolor sit amet consectetur adipisi cing elit.
                      Vel eligendi eos labore nisi Lorem, ipsum dolor Lorem,
                      ipsum.
                    </p>
                    <div className="flex justify-center items-center">
                      <a
                        href="https://multipages-website.netlify.app/"
                        target="_blank"
                        className="p-2 rounded-full bg-amber-50 text-amber-400 font-bold">
                        <TiLocationArrowOutline />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* second project  */}
              <div className="w-87.5 h-50 rounded-xl group cursor-pointer overflow-hidden border border-amber-300">
                <div className="relative">
                  <img
                    src="./code.jpeg"
                    alt="E-commerce"
                    className="w-full h-50 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-amber-400 text-shadow-transparent text-white p-5 translate-y-35 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-center text-amber-500 bg-white rounded-full">
                      Todo App
                    </h3>
                    <p className="text-zinc-50 text-sm py-5 text-center">
                      Lorem, ipsum dolor sit amet consectetur adipisi cing elit.
                      Vel eligendi eos labore nisi Lorem, ipsum dolor Lorem,
                      ipsum.
                    </p>
                    <div className="flex justify-center items-center">
                      <a
                        href="https://md-zisan-todo-app.netlify.app/"
                        target="_blank"
                        className="p-2 rounded-full bg-amber-50 text-amber-400 font-bold">
                        <TiLocationArrowOutline />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3Rd project  */}
              <div className="w-87.5 h-50 rounded-xl group cursor-pointer overflow-hidden border border-amber-300">
                <div className="relative">
                  <img
                    src="./movie.jpeg"
                    alt="E-commerce"
                    className="w-full h-50 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-amber-400 text-shadow-transparent text-white p-5 translate-y-35 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-center text-white rounded-full">
                      Figma Convert
                    </h3>
                    <p className="text-zinc-50 text-sm py-5 text-center">
                      Lorem, ipsum dolor sit amet consectetur adipisi cing elit.
                      Vel eligendi eos labore nisi Lorem, ipsum dolor Lorem,
                      ipsum.
                    </p>
                    <div className="flex justify-center items-center">
                      <a
                        href="https://landing-page-of-perfume.netlify.app/"
                        target="_blank"
                        className="p-2 rounded-full bg-amber-50 text-amber-400 font-bold">
                        <TiLocationArrowOutline />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skill section  */}
        <section>
          <div className="lg:w-7xl w-90 mx-auto px-20 bg-zinc-800 pb-20">
            <div className="text-center">
              <h3 className="text-white text-3xl font-bold pb-4 inline relative after:content-[''] after:absolute after:w-20 after:h-0.5 after:bg-amber-400 after:bottom-0 after:right-0">
                My <span className="text-amber-400">Skills</span>
              </h3>
            </div>
            {/* skills  */}
            <div className="flex justify-between items-center gap-10">
              <div className="lg:w-1/2 pt-20">
                <div className="lg:w-130 pb-5">
                  <div className="lg:w-110.5 lg:flex justify-between items-center text-white font-bold pb-1">
                    <h4>HTML5</h4>
                    <span>85%</span>
                  </div>
                  <div className="w-full h-1 bg-white rounded-md hidden lg:block">
                    <p className="w-110.5 h-1 bg-amber-400 rounded-md"></p>
                  </div>
                </div>
                <div className="lg:w-130 pb-5">
                  <div className="lg:w-91 lg:flex justify-between items-center text-white font-bold pb-1">
                    <h4>CSS3</h4>
                    <span>70%</span>
                  </div>
                  <div className="w-full h-1 bg-white rounded-md hidden lg:block">
                    <p className="w-91 h-1 bg-amber-400 rounded-md"></p>
                  </div>
                </div>
                <div className="lg:w-130 pb-5">
                  <div className="lg:w-71.5 lg:flex justify-between items-center text-white font-bold pb-1">
                    <h4>Java Script</h4>
                    <span>55%</span>
                  </div>
                  <div className="w-full h-1 bg-white rounded-md hidden lg:block">
                    <p className="w-71.5 h-1 bg-amber-400 rounded-md"></p>
                  </div>
                </div>
                <div className="lg:w-130 pb-5">
                  <div className="lg:w-91 lg:flex justify-between items-center text-white font-bold pb-1">
                    <h4>Tailwind</h4>
                    <span>70%</span>
                  </div>
                  <div className="w-full h-1 bg-white rounded-md hidden lg:block">
                    <p className="w-91 h-1 bg-amber-400 rounded-md"></p>
                  </div>
                </div>
              </div>
              {/* second div  */}
              <div className="lg:w-1/2 pt-20">
                <div className="lg:w-130 pb-5">
                  <div className="lg:w-85.5 lg:flex justify-between items-center text-white font-bold pb-1">
                    <h4>React</h4>
                    <span>65%</span>
                  </div>
                  <div className="w-full h-1 bg-white rounded-md hidden lg:block">
                    <p className="w-84.5 h-1 bg-amber-400 rounded-md"></p>
                  </div>
                </div>
                <div className="lg:w-130 pb-5">
                  <div className="lg:w-91 lg:flex justify-between items-center text-white font-bold pb-1">
                    <h4>Node Js</h4>
                    <span>70%</span>
                  </div>
                  <div className="w-full h-1 bg-white rounded-md hidden lg:block">
                    <p className="w-91 h-1 bg-amber-400 rounded-md"></p>
                  </div>
                </div>
                <div className="lg:w-130 pb-5">
                  <div className="lg:w-78 lg:flex justify-between items-center text-white font-bold pb-1">
                    <h4>Next Js</h4>
                    <span>60%</span>
                  </div>
                  <div className="w-full h-1 bg-white rounded-md hidden lg:block">
                    <p className="w-78 h-1 bg-amber-400 rounded-md"></p>
                  </div>
                </div>
                <div className="lg:w-130 pb-5">
                  <div className="lg:w-100 lg:flex justify-between items-center text-white font-bold pb-1">
                    <h4>Mongo DB</h4>
                    <span>77%</span>
                  </div>
                  <div className="w-full h-1 bg-white rounded-md hidden lg:block">
                    <p className="w-100 h-1 bg-amber-400 rounded-md"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact section  */}
        <section>
          <div className="lg:w-7xl w-90 mx-auto px-20 bg-zinc-800 pb-20">
            <div className="text-center">
              <h3 className="text-white text-3xl font-bold pb-4 inline relative after:content-[''] after:absolute after:w-13 after:h-0.5 after:bg-amber-400 after:bottom-0 after:right-0">
                Contact <span className="text-amber-400">Me!</span>
              </h3>
            </div>
            <div className="flex justify-center items-center pt-20">
              <form action="#" className="lg:w-2xl w-75 p-5">
                <div className="lg:flex justify-between items-center flex flex-col gap-y-5 lg:gap-x-5 w-full pb-5">
                  <input
                    type="text"
                    name="fname"
                    required
                    placeholder="First-Name"
                    className="w-full bg-zinc-900 text-zinc-50 outline-none px-2 py-1 rounded-lg"
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Last-Name"
                    className="w-full bg-zinc-900 text-zinc-50 outline-none px-2 py-1 rounded-lg"
                  />
                </div>
                <div className="lg:flex justify-between items-center flex flex-col gap-y-5 gap-5 w-full pb-5">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full bg-zinc-900 text-zinc-50 outline-none px-2 py-1 rounded-lg"
                  />
                  <input
                    type="password"
                    name="password"
                    required
                    min={8}
                    placeholder="Password"
                    className="w-full bg-zinc-900 text-zinc-50 outline-none px-2 py-1 rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-10">
                  <textarea
                    name="message"
                    required
                    placeholder="Say something..."
                    className="w-full h-50 bg-zinc-900 text-zinc-50 outline-none px-3 py-2 rounded-lg"></textarea>
                  <button className="bg-amber-400 py-1 px-8 rounded-full text-white font-semibold cursor-pointer hover:bg-amber-500 active:bg-amber-800 hover:transition-all duration-300">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* footer section  */}
        <section>
          <footer>
            <div className="lg:w-7xl w-90 mx-auto px-20 bg-zinc-900 text-white py-5 flex gap-x-5 justify-between items-center">
              <p className="text-zinc-100 text-sm">
                Copyright © 2024 by Zisan | All Rights Reserved.
              </p>
              <a
                href="/"
                className="bg-amber-400 p-2 rounded-full text-zinc-900 font-bold">
                <FaLongArrowAltUp />
              </a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default MyPortfolio;
