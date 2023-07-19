import {
  TfiLocationPin,
  TfiInstagram,
  TfiTwitter,
  TfiFacebook,
} from "react-icons/tfi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { BsUiChecksGrid, BsInfoCircle } from "react-icons/bs";
import { BiChat } from "react-icons/bi";
import { BrandFacebook, BrandTwitter, BrandGithub } from "tabler-icons-react";
import { GoBook, GoStack, GoTools } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi2";

export const sidebarData = [
  {
    Icon: TfiLocationPin,
    name: "Home",
    delay: "delay-[500ms]",
  },
  {
    Icon: BsInfoCircle,
    name: "About",
    delay: "delay-[700ms]",
  },
  {
    Icon: GoBook,
    name: "Education",
    delay: "delay-[800ms]",
  },
  {
    Icon: BsUiChecksGrid,
    name: "Portfolio",
    delay: "delay-[800ms]",
  },
  {
    Icon: HiOutlineLightBulb,
    name: "Skills",
    delay: "delay-[800ms]",
  },
  {
    Icon: GoStack,
    name: "Other Knowledges",
    delay: "delay-[800ms]",
  },
  {
    Icon: GoTools,
    name: "Services",
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
