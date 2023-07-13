import {
  TfiLocationPin,
  TfiInstagram,
  TfiTwitter,
  TfiFacebook,
} from "react-icons/tfi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { BsUiChecksGrid } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";

export const sidebarData = [
  {
    Icon: TfiLocationPin,
    name: "Home",
    delay: "delay-[400ms]",
  },
  {
    Icon: MdOutlinePersonOutline,
    name: "Contact",
    delay: "delay-[500ms]",
  },
  {
    Icon: CgMenuLeft,
    name: "Resume",
    delay: "delay-[600ms]",
  },
  {
    Icon: BsUiChecksGrid,
    name: "Portfolio",
    delay: "delay-[700ms]",
  },
  {
    Icon: TbMessages,
    name: "Contact",
    delay: "delay-[800ms]",
  },
];

export const socialData = [
  { link: "https://www.instagram.com", Icon: TfiInstagram },
  { link: "https://www.twitter.com", Icon: TfiTwitter },
  { link: "https://www.facebook.com", Icon: TfiFacebook },
];
