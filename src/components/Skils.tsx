const Skils = (props: { skilsColor: string }) => {
  return (
    <div
      className={` left-0 flex h-[820px] w-full gap-20 font-secondaryFont text-4xl font-medium ${props.skilsColor}`}
    >
      <div className="flex h-full w-full flex-col items-center">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
          className="hover:text-html absolute mt-20 transition-all  duration-150"
        >
          <span>HTML</span>
        </a>

        <a
          href="https://www.javascript.com/"
          target="_blank"
          className="hover:text-javaScript absolute mr-10 mt-64 transition-all duration-150"
        >
          <span>JavaScript</span>
        </a>

        <a
          href="https://react.dev/"
          target="_blank"
          className="hover:text-react absolute mr-5 mt-[500px] transition-all duration-150"
        >
          <span>React</span>
        </a>

        <a
          href="https://reactnative.dev/"
          target="_blank"
          className="hover:text-reactNative absolute ml-12 mt-[700px] transition-all duration-150"
        >
          <span>React Native</span>
        </a>
      </div>

      <div className="flex h-full w-full flex-col items-center">
        <a
          className="hover:text-vsCode absolute mr-12 mt-4 transition-all duration-150"
          href="https://code.visualstudio.com/"
          target="_blank"
        >
          <span>VS Code</span>
        </a>

        <a
          className="hover:text-css absolute mr-80 mt-40 transition-all duration-150"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
        >
          <span>CSS</span>
        </a>

        <a
          className="hover:text-typeScript absolute mr-36 mt-[360px] transition-all duration-150"
          href="https://www.typescriptlang.org/"
          target="_blank"
        >
          <span>TypeScript</span>
        </a>

        <a
          className="hover:text-illustrator absolute mr-80 mt-[560px] transition-all duration-150"
          href="https://www.adobe.com/products/illustrator.html"
          target="_blank"
        >
          <span>Illustrator</span>
        </a>

        <a
          className="hover:text-inDesign absolute mt-[660px] transition-all duration-150"
          href="https://www.adobe.com/products/indesign.html"
          target="_blank"
        >
          <span>InDesign</span>
        </a>
      </div>

      <div className="flex h-full w-full flex-col items-center">
        <a
          className="hover:text-nodeJs absolute  mt-[120px] transition-all duration-150"
          href="https://nodejs.org/en"
          target="_blank"
        >
          <span>Node.Js</span>
        </a>

        <a
          className="hover:text-figma absolute mr-[420px] mt-[240px] transition-all duration-150"
          href="https://www.figma.com/"
          target="_blank"
        >
          <span>Figma</span>
        </a>

        <a
          className="hover:text-photoshop absolute mr-36 mt-[400px] transition-all duration-150"
          href="https://www.adobe.com/products/photoshop.html"
          target="_blank"
        >
          <span>Photoshop</span>
        </a>

        <a
          className="hover:text-lightroom absolute mr-96 mt-[560px] transition-all duration-150"
          href="https://www.adobe.com/products/photoshop-lightroom.html"
          target="_blank"
        >
          <span>Lightroom</span>
        </a>

        <a
          className="hover:text-audition absolute mr-20 mt-[720px] transition-all duration-150 "
          href="https://www.adobe.com/products/audition.html"
          target="_blank"
        >
          <span>Audition</span>
        </a>
      </div>

      <div className="flex h-full w-full flex-col items-center">
        <a
          className="hover:text-afterEffects absolute mr-56 mt-11 transition-all duration-150"
          href="https://www.adobe.com/products/aftereffects.html"
          target="_blank"
        >
          <span>After Effects</span>
        </a>

        <a
          className="hover:text-premierePro absolute mt-[200px] transition-all duration-150"
          href="https://www.adobe.com/products/premiere/free-trial-download.html"
          target="_blank"
        >
          <span>Premiere Pro</span>
        </a>

        <a
          className="hover:text-github absolute mr-[400px] mt-[320px] transition-all duration-150"
          href="https://github.com"
          target="_blank"
        >
          <span>Github</span>
        </a>

        <a
          className="hover:text-blender absolute mt-[460px] transition-all duration-150"
          href="https://www.blender.org/"
          target="_blank"
        >
          <span>Blender</span>
        </a>

        <a
          className="hover:text-behance absolute mr-[500px] mt-[600px] transition-all duration-150"
          href="https://www.behance.net/"
          target="_blank"
        >
          <span>Bēhance</span>
        </a>
        <a
          className="hover:text-dribbble absolute mt-[700px] transition-all duration-150 "
          href="https://dribbble.com/shots"
          target="_blank"
        >
          <span>dribbble</span>
        </a>
      </div>
    </div>
  );
};
export default Skils;
