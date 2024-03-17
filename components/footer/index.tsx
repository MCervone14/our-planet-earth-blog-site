"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  // console.log(errors);

  return (
    <footer className="p-4 mt-16 flex flex-col items-center lg:p-16 bg-[steelblue] rounded">
      <h3 className="font-medium text-center text-2xl lg:text-4xl px-4">
        Monthly articles on climate change, sustainability, and the environment!
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 text-xl">
        Subscribe to our newsletter to get the latest article every month.
      </p>
      <form
        onSubmit={() => {}}
        className="mt-6 flex w-full justify-center max-w-lg "
      >
        <input
          type="text"
          placeholder="Enter your Email"
          {...register("Email", {
            required: true,
            pattern: /^\S+@\S+$/i,
            maxLength: 80,
          })}
          className="focus:border-[steelblue] focus:ring-0 border-0 border-b mr-2 p-0 px-2 rounded w-3/4"
        />

        <Button type="submit" className="text-white p-0 px-3">
          Subscribe
        </Button>
      </form>
    </footer>
  );
};

export default Footer;
