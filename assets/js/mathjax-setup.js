function getMathTargets(elements = []) {
  const scopedTargets = elements.filter(Boolean);
  if (scopedTargets.length > 0) {
    return scopedTargets;
  }

  const markdownContent = document.getElementById("markdown-content");
  return markdownContent ? [markdownContent] : [document.body];
}

window.requestMathTypeset = (elements = []) => {
  if (!window.MathJax?.startup?.promise || !window.MathJax?.typesetPromise) {
    return Promise.resolve();
  }

  return window.MathJax.startup.promise.then(() => window.MathJax.typesetPromise(getMathTargets(elements)));
};

window.MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
    processEnvironments: true,
    processRefs: true,
    tags: "ams",
  },
  startup: {
    pageReady: () =>
      window.MathJax.startup
        .defaultPageReady()
        .then(() => window.MathJax.typesetPromise(getMathTargets())),
  },
};
