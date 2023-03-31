import React from "react";
import { FaEnvelope, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-10 md:px-20 lg:px-40 md:py-12 my-20" id="contact">
      <div className="text-center">
        <h6 className="capitalize text-xs">My Recent Works</h6>
        <h3 className="text-3xl text-rose-500 font-bold mt-3 capitalize">
          Portfolio
        </h3>
      </div>

      <div className="flex justify-center gap-12 mt-12">
        <div className="basis-1/4">

          <div className="bg-rose-500 hover:bg-transparent border border-rose-500 transition-all duration-200 ease-linear cursor-pointer py-8 px-8 rounded-xl flex flex-col items-center justify-center">
            <span className="text-2xl mb-4"><FaFacebookMessenger/></span>
            <p className-="text-lg">Messenger</p>
            <h4 className="mb-3 text-md">Rubayed Ahmed</h4>
            <a className="text-sm" href="https://m.me/rubayed.05" target="_blank" rel="noreferrer">Send A Message</a>
          </div>

          <div className="bg-rose-500 hover:bg-transparent border border-rose-500 transition-all duration-200 ease-linear cursor-pointer py-8 px-8 rounded-xl flex flex-col items-center justify-center my-6">
            <span className="text-2xl mb-4"><FaEnvelope/></span>
            <p className-="text-lg">Email</p>
            <h4 className="mb-3 text-md">rubayedahmed04@gmail.com</h4>
            <a href="mailto:rubayedahmed04@gmail.com" target="_blank" rel="noreferrer" className="text-sm ">Send A Message</a>
          </div>

          <div className="bg-rose-500 hover:bg-transparent border border-rose-500 transition-all duration-200 ease-linear cursor-pointer py-8 px-8 rounded-xl flex flex-col items-center justify-center">
            <span className="text-2xl mb-4"><FaWhatsapp/></span>
            <p className-="text-lg">Whatsapp</p>
            <h4 className="mb-3 text-md">+880 123 456 789</h4>
            <a href="https://api.whatsapp.com/send?phone+01327057302" target="_blank" rel="noreferrer" className="text-sm">Send A Message</a>
          </div>

        </div>

        <div className="basis-2/4">
          <form>
            <input type="text" className="bg-transparent border border-rose-500 rounded w-full p-3" placeholder="Name"/>
            <input type="text" className="bg-transparent border border-rose-500 rounded w-full p-3 my-6" placeholder="Email"/>
            <textarea placeholder="Subject" cols="30" rows="10" className="bg-transparent border border-rose-500 rounded w-full p-3"></textarea>
            <input type="submit" value="Send Message" className="bg-rose-500 hover:bg-transparent border border-rose-500 transition-all 
              duration-300 ease-linear py-2 px-6 rounded cursor-pointer mt-3"/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
