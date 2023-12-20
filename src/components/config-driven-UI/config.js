const config = {
  title: "Example of Config-driven UI",
  sections: [
    {
      title: "section 1",
      components: [
        {
          type: "text",
          content: "This is simple paragraph tag content",
          style: "bg-green-200 p-2 m-2 text-center w-1/3",
        },
        {
          type: "button",
          style: "bg-red-500 p-2 m-2 text-center w-1/3 border",
          label: "Click me",
          onClick: () => alert("Button Clicked "),
        },
      ],
    },
    {
      title: "section 2",
      components: [
        {
          type: "image",
          style: "m-5 p-5 h-30 w-30",
          src: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51dD6lc73sL._AC_UF1000,1000_QL80_.jpg",
          alt: "An example image",
        },
      ],
    },
  ],
};

export default config;
