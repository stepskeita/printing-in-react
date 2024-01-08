import React, { useRef } from "react";
/**
 * First we import the useReactToPrint hook from react-to-print
 * This hook is how we configure our print Document/Template
 */
import { useReactToPrint } from "react-to-print";
import Portrait from "./components/Portrait";
import Landscape from "./components/Landscape";

const App = () => {
  /**
   * We are using refs to target our prints/tempates
   *
   * What we currently have is two refs for portriat and landscape printingf
   * We are doing this because what we wnat is when the user clicks on either portrait or landscape to amke their wish come through
   *
   */
  const portraitComponentRef = useRef();
  const landscapeComponentRef = useRef();

  /**
   * The useReactToPrint hook comes equipped with alot of properities you can pass to it.
   * However, we are just going to explore 2 for this article.
   * content -  Is the ref value to the component we are printing. In this case Portrait.jsx and landscape.jsx
   * documentTitle - Is the default title of the document incase you decide to save the print instead of printing.
   */
  const handlePrintForPortrait = useReactToPrint({
    content: () => portraitComponentRef.current,
    documentTitle: "portrait-print",
  });

  const handlePrintForLandscape = useReactToPrint({
    content: () => landscapeComponentRef.current,
    documentTitle: "landscape-print",
  });
  return (
    /**
     * For our styling we are using tailwind css. Is just two cards with cursor of pointer and a full height screen and a gray background with some text labels.
     */
    <div className="flex flex-col gap-3 items-center justify-center h-screen">
      <h3 className="text-3xl mb-3">Choose your printing?</h3>
      <div className="bg-gray-50  flex items-stretch gap-3">
        <div
          /**
           * First let me help you with the differnce between onClick={() => handlePrintForPortrait()} and onClick={handlePrintForPortrait}
           * I asked ChatGPT for help and this is what it has to say:
           * onClick={handlePrintForPortrait} directly passes a reference to the handlePrintForPortrait function, which is invoked only when the click event occurs.
           * onClick={() => handlePrintForPortrait()} wraps the handlePrintForPortrait function in an arrow function, immediately executing it. This approach is useful when you need to pass arguments or manipulate the context (this).
           * The first approach is concise and often more performant, while the second provides more control over function invocation.
           *
           * This also applied to handlePrintForLandscape
           */
          onClick={handlePrintForPortrait}
          className="bg-white shadow-xl rounded-2xl w-96 h-96 cursor-pointer hover:shadow-2xl flex items-center justify-center"
        >
          <h3 className="text-2xl font-bold">Portrait</h3>
        </div>
        <div
          onClick={handlePrintForLandscape}
          className="bg-white shadow-xl rounded-2xl w-96 h-96 cursor-pointer hover:shadow-2xl flex items-center justify-center"
        >
          <h3 className="text-2xl font-bold">Landscape</h3>
        </div>
      </div>

      {/* Our Component refs */}

      {/**
       * We are wrapping our prints/component refs with a div of className hidden
       * Tailwind 'hidden' class is  the same as disply: none; in CSS
       *
       * Why are we doing this?
       * If we do not do this the component refs or prints will appear in our DOM and we definately do not want that.
       *
       */}
      <div className="hidden">
        {/* Portraits print component starts here */}

        <div ref={portraitComponentRef}>
          <Portrait />
          {/* This part is optional but it is required if you want to change the orientation of your page */}
          <style type="text/css" media="print">
            {
              "\
  @page { size: portrait; }\
"
            }
          </style>
        </div>
        {/* Portraits print component ends here */}
        {/* 

////////////////////////////////////////////////////////////////////////////////////
*/}
        {/* Landscape print component starts here */}
        <div ref={landscapeComponentRef}>
          <Landscape />

          {/* This part is optional but it is required if you want to change the orientation of your page */}

          <style type="text/css" media="print">
            {
              "\
  @page { size: landscape; }\
"
            }
          </style>
        </div>

        {/* Landscape print component ends here */}
      </div>
    </div>
  );
};

export default App;
