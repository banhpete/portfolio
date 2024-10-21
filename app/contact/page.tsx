"use client";

import { useRef, useState } from "react";
import Button from "../components/Button";
import TextArea from "./components/TextArea";
import TextInput from "./components/TextInput";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null!);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY) {
      console.log("Did not send - In local environment");
      setIsSuccess(true);
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm("service_pgnqjbb", "contact_form", formRef.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsLoading(false);
          setIsSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
          setIsSuccess(false);
        }
      );
  };

  return (
    <div className="h-[675px] flex flex-grow justify-center">
      <div className="flex flex-col items-center w-5/6">
        <h1 className="mt-16 text-3xl">
          <i>Leave me a note</i>
        </h1>
        <p className="mt-6 text-center">
          Want to collaborate? Have a question? Just want to say hi?
          <br />
          Fill out the form below and I&apos;ll get back to you!
        </p>
        <form ref={formRef} className="flex flex-col mt-6" onSubmit={onSubmit}>
          <div className="flex mt-4">
            <TextInput
              type="text"
              className="mr-2"
              label="Your name"
              placeHolder="Enter your name here..."
              id="name"
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <TextInput
              type="email"
              className="ml-2"
              label="Your email"
              placeHolder="Enter your email here..."
              id="emailInput"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <TextArea
            className="mt-4 flex-grow"
            label="Your message"
            placeHolder="Enter your message here..."
            id="message"
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
          <Button
            type="submit"
            className="mt-8 flex-grow"
            disabled={!name || !email || !message || isLoading}
          >
            Submit
          </Button>
          <div className="flex justify-center">
            <p className="mt-6">
              {isSuccess !== null
                ? isSuccess
                  ? "Thanks for sending a message! I'll get back to you as soon as I can!"
                  : "Failed to send message. Please try again."
                : ""}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
