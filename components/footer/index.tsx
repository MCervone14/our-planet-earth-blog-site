import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <footer className="w-full mt-16 flex flex-col items-center lg:p-16 bg-[steelblue]">
      <h3 className="font-medium text-center text-2xl lg:text-4xl p-10">
        Monthly articles on climate change, sustainability, and the environment!
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 text-xl">
        Subscribe to our newsletter to get the latest article every month.
      </p>
      <NewsletterForm />
    </footer>
  );
};

export default Footer;
