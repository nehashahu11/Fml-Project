import React, { useState } from "react";

function HamlParser() {
  const [hamlInput, setHamlInput] = useState(`.body
  %span
    %span
    %span
    %span
    %span
  .base
    %span
    .face
.longfazers
  %span
  %span
  %span
  %span
%h1 Redirecting`
);

  const [htmlOutput, setHtmlOutput] = useState("");

  const parseHamlToHtml = () => {
    // Assuming the haml.js library is loaded globally in the browser
    const html = HAML.render(hamlInput); // HAML is the global object provided by the library
    setHtmlOutput(html);
  };

  return (
    <div>
      <h1>HAML to HTML Parser</h1>
      <textarea
        value={hamlInput}
        onChange={(e) => setHamlInput(e.target.value)}
        placeholder="Enter HAML code"
        rows="10"
        cols="30"
      />
      <button onClick={parseHamlToHtml}>Parse HAML</button>
      
      <div
        dangerouslySetInnerHTML={{ __html: htmlOutput }}
      />
    </div>
  );
}

export default HamlParser;
