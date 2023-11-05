type StackItem = {
  name: string;
  img: string;
  link: string;
};

const stack: Array<StackItem> = [
  {
    name: "Visual Studio Code",
    img: "/images/stack/avif/visual-studio-code.avif",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Bitwarden",
    img: "/images/stack/avif/bitwarden.avif",
    link: "https://bitwarden.com/",
  },
  {
    name: "Notion",
    img: "/images/stack/avif/notion.avif",
    link: "https://www.notion.so/",
  },
  {
    name: "Microsoft Authenticator",
    img: "/images/stack/avif/microsoft-authenticator.avif",
    link: "https://bitwarden.com/",
  },
  {
    name: "Figma",
    img: "/images/stack/avif/figma.avif",
    link: "https://www.figma.com/",
  },
  {
    name: "Github",
    img: "/images/stack/avif/github.avif",
    link: "https://www.github.com/",
  },
  {
    name: "Arch Linux",
    img: "/images/stack/avif/arch-linux.avif",
    link: "https://archlinux.org/",
  },
  {
    name: "Gmail",
    img: "/images/stack/avif/gmail.avif",
    link: "https://gmail.com/",
  },
  {
    name: "Outlook",
    img: "/images/stack/avif/outlook.avif",
    link: "https://outlook.com/",
  },
  {
    name: "Twitter",
    img: "/images/stack/avif/twitter.avif",
    link: "https://twitter.com/",
  },
  {
    name: "Youtube",
    img: "/images/stack/avif/youtube.avif",
    link: "https://youtube.com/",
  },
  {
    name: "Hacker News",
    img: "/images/stack/avif/hacker-news.avif",
    link: "https://darkhn.com/",
  },
];

export default stack;
export type { StackItem };
