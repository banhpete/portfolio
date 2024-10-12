"use client";

import Button from "./components/Button";
import TextArea from "./components/TextArea";
import TextInput from "./components/TextInput";

export default function Contact() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center w-5/6">
        <h1 className="mt-12 text-3xl">
          <i>Leave me a note</i>
        </h1>
        <p className="mt-6 text-center">
          Want to collaborate? Have a question? Just want to say hi?
          <br />
          Fill out the form below and I'll get back to you!
        </p>
        <form
          className="flex flex-col mt-6"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="flex mt-4">
            <TextInput
              type="text"
              className="mr-2"
              label="Your name"
              placeHolder="Enter your name here..."
              id="name"
            />
            <TextInput
              type="email"
              className="ml-2"
              label="Your email"
              placeHolder="Enter your email here..."
              id="emailInput"
            />
          </div>
          <TextArea
            className="mt-4 flex-grow"
            label="Your message"
            placeHolder="Enter your message here..."
            id="message"
          />
          <Button type="submit" className="mt-6 flex-grow" disabled>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
