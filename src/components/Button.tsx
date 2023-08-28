const Button = () => {
  return (
    <a href="/about">
      <div
        className="h-fit w-fit cursor-pointer border px-8 py-4 text-center font-secondaryFont text-sm text-white transition-all duration-200 hover:bg-white hover:text-primmaryDark
      lg:px-12 lg:py-4 lg:text-base "
      >
        ABOUT ME
      </div>
    </a>
  );
};

export default Button;
