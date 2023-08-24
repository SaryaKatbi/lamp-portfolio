const Contacts = () => {
  return (
    <section className="font-secondaryFont">
      <h2 className="mt-24 text-6xl font-medium">Let's Chat!</h2>
      <div className="w-fit font-light">
        <p className="my-16 w-[800px] text-2xl leading-relaxed tracking-wide ">
          Looking forward to meet you and learn more about your business and the
          design challenges it's facing. Feel free to get in touch for inquiries
          or a virtual coffee.
        </p>

        <div className="flex h-full w-full justify-between font-extralight">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-4">
              <h4 className="">Send me an email</h4>
              <a
                className="w-fit border-b-[1px] border-white border-opacity-0 text-2xl transition-all hover:border-opacity-100"
                target="_blank"
                href="https://mail.google.com/mail/u/0/#inbox"
              >
                m.sarya.katby@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4>Chat on Whatsapp</h4>
              <a
                className="w-fit border-b-[1px] border-white border-opacity-0 text-2xl transition-all hover:border-opacity-100"
                target="_blank"
                href="https://web.whatsapp.com/"
              >
                +00 (123) 123 12 12
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-4">
              <h4>Follow me on Twitter</h4>
              <a
                className="w-fit border-b-[1px] border-white border-opacity-0 text-2xl transition-all hover:border-opacity-100"
                target="_blank"
                href="https://twitter.com/KatbySarya"
              >
                twitter.com/KatbySarya
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4>Connect on LinkedIn</h4>
              <a
                className="w-fit border-b-[1px] border-white border-opacity-0 text-2xl transition-all hover:border-opacity-100"
                target="_blank"
                href="https://www.linkedin.com/in/sarya-katby-8aa5b2214/"
              >
                linkedin.com/saryakatby
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
