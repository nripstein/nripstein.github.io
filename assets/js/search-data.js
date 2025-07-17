// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-bio",
    title: "bio",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a concise overview of my experience. A full CV is available upon request.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-automating-repetetive-work-with-computer-vision",
      
        title: "Automating Repetetive Work With Computer Vision",
      
      description: "My journey towards automating 250 hours of video labelling for my undergrad thesis lab (And don&#39;t worry, there&#39;s a 1 minute TLDR overview)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/ug-thesis/";
        
      },
    },{id: "post-2048-game-ai",
      
        title: "2048 Game AI",
      
      description: "I developed a Python clone of the 2014 viral game &quot;2048,&quot; and designed a probabilistic AI to play it. My algorithm achieves a 97% win-rate by formalizing the game as a Markov Decision Process and using a hybrid of Monte Carlo tree search and expectimax to select moves.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2048-AI/";
        
      },
    },{id: "post-what-bird-is-that-computer-vision-website",
      
        title: "What Bird is That? - Computer Vision Website",
      
      description: "A simple website which identifies the species of bird in user-uploaded photos. After identifying the species, it provides the user with some information about the bird. Built to teach myself the basics of computer vision",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/bird/";
        
      },
    },{id: "news-i-presented-my-undergraduate-thesis-at-neuroxchange-my-thesis-involved-bayesian-modeling-of-human-sensory-perception-and-learning-and-also-designing-a-computer-vision-program-to-automatically-analyze-video-of-participants-performing-an-experiment-read-more-here",
          title: '🧠 I presented my undergraduate thesis at NeuroXChange! My thesis involved Bayesian modeling...',
          description: "",
          section: "News",},{id: "news-i-was-honoured-with-the-top-academic-prize-for-mcmaster-s-interdisciplinary-artsci-program-at-my-graduation-laura-dodson-prize",
          title: '🎉 I was honoured with the top academic prize for McMaster’s interdisciplinary Artsci...',
          description: "",
          section: "News",},{id: "news-the-patent-pending-multimodal-ml-product-i-built-at-rbc-amplify-was-awarded-the-industry-disruptor-award-by-chief-executives-watch-me-in-the-amplify-promotional-video-here",
          title: '🎉 The patent-pending multimodal ML product I built at RBC Amplify was awarded...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%6F%61%68.%68.%72%69%70%73%74%65%69%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nripstein", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/noah-ripstein", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
