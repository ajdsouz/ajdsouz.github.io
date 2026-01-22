// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
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
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is my cv.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-devlog-01-the-big-decisions",
        
          title: "Devlog 01: The Big Decisions",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/devlog01/";
          
        },
      },{id: "post-through-a-neural-microscope",
        
          title: "Through a neural microscope",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/sae/";
          
        },
      },{id: "post-a-litmus-test-for-features",
        
          title: "A Litmus Test for Features",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/probing/";
          
        },
      },{id: "post-r-cnn",
        
          title: "R-CNN",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/rcnn/";
          
        },
      },{id: "post-devlog-llm-pretraining",
        
          title: "Devlog: LLM Pretraining",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/pretraining/";
          
        },
      },{id: "post-thread-interpretability-with-a-chance-of-interesting-features",
        
          title: "Thread: Interpretability with a chance of interesting features",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/interp/";
          
        },
      },{id: "post-the-self-taught-reasoner",
        
          title: "The Self-Taught Reasoner",
        
        description: "Coming soon",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/star/";
          
        },
      },{id: "post-thread-high-level-computer-vision",
        
          title: "Thread: High Level Computer Vision",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hlcv/";
          
        },
      },{id: "post-scratchpads-and-why-you-and-i-and-language-models-need-them",
        
          title: "Scratchpads and why you and I and language models need them.",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/scratchpads/";
          
        },
      },{id: "post-be-a-better-software-engineer",
        
          title: "Be a better Software Engineer",
        
        description: "On slowly becoming a better software engineer.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/better-swe/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6A.%61%6E%74%68%6F%6E%79%64%73%6F%75%7A%61@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ajdsouz", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ands0", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ajdsouz", "_blank");
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
