import {
  TfiLocationPin,
  TfiInstagram,
  TfiTwitter,
  TfiFacebook,
} from "react-icons/tfi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { BsUiChecksGrid } from "react-icons/bs";
import { BiChat } from "react-icons/bi";
import { BrandFacebook, BrandTwitter, BrandGithub } from "tabler-icons-react";

export const sidebarData = [
  {
    Icon: TfiLocationPin,
    name: "Home",
    delay: "delay-[500ms]",
  },
  {
    Icon: CgMenuLeft,
    name: "Resume",
    delay: "delay-[700ms]",
  },
  {
    Icon: BsUiChecksGrid,
    name: "Portfolio",
    delay: "delay-[800ms]",
  },
  {
    Icon: BiChat,
    name: "Contact",
    delay: "delay-[900ms]",
  },
];

export const socialData = [
  { link: "https://www.instagram.com", Icon: BrandGithub },
  { link: "https://www.twitter.com", Icon: BrandTwitter },
  { link: "https://www.facebook.com", Icon: BrandFacebook },
];
