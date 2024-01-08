import React from "react";

const Landscape = () => {
  return (
    <div>
      Landscape
      <style type="text/css" media="print">
        {
          "\
  @page { size: landscape; }\
"
        }
      </style>
    </div>
  );
};

export default Landscape;
