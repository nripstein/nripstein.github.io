document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") {
    const mathTargets = [];

    document.querySelectorAll("pre>code.language-pseudocode").forEach((elem) => {
      const texData = elem.textContent;
      const parent = elem.parentElement.parentElement;
      /* create pseudocode node */
      let pseudoCodeElement = document.createElement("pre");
      pseudoCodeElement.classList.add("pseudocode");
      const text = document.createTextNode(texData);
      pseudoCodeElement.appendChild(text);
      /* add pseudocode node and remove the original code block */
      parent.appendChild(pseudoCodeElement);
      parent.removeChild(elem.parentElement);
      /* embed the visualization in the container */
      pseudocode.renderElement(pseudoCodeElement);
      mathTargets.push(parent);
    });

    if (mathTargets.length > 0 && window.requestMathTypeset) {
      window.requestMathTypeset(mathTargets);
    }
  }
});
