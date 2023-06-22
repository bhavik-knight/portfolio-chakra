import "./ResponsiveIcons.css"
import { useMediaQuery } from "@chakra-ui/react"
import { useState, useEffect } from "react"

// skills - technologies
import { PhoneIcon } from "@chakra-ui/icons"
import { SiLinuxmint } from "@react-icons/all-files/si/SiLinuxmint"
import { SiZorin } from "@react-icons/all-files/si/SiZorin"
import { FaConfluence } from "@react-icons/all-files/fa/FaConfluence"
import { FaTrello } from "@react-icons/all-files/fa/FaTrello"
import { FaJira } from "@react-icons/all-files/fa/FaJira"
import { SiMicrosoftteams } from "@react-icons/all-files/si/SiMicrosoftteams"
import { DiScrum } from "@react-icons/all-files/di/DiScrum"
import { SiTeamviewer } from "@react-icons/all-files/si/SiTeamviewer"
import { SiZendesk } from "@react-icons/all-files/si/SiZendesk"
import { SiNetlify } from "@react-icons/all-files/si/SiNetlify"
import { SiLatex } from "@react-icons/all-files/si/SiLatex"
import { FaUbuntu } from "@react-icons/all-files/fa/FaUbuntu"
import { SiMicrosoft } from "@react-icons/all-files/si/SiMicrosoft"
import { SiMicrosoftexcel } from "@react-icons/all-files/si/SiMicrosoftexcel"
import { VscTerminal } from "@react-icons/all-files/vsc/VscTerminal"
import { SiGnubash } from "@react-icons/all-files/si/SiGnubash"
import { SiPowershell } from "@react-icons/all-files/si/SiPowershell"
import { DiVim } from "@react-icons/all-files/di/DiVim"
import { SiKeras } from "@react-icons/all-files/si/SiKeras"
import { SiTensorflow } from "@react-icons/all-files/si/SiTensorflow"
import { FaReact } from "@react-icons/all-files/fa/FaReact"
import { SiFlask } from "@react-icons/all-files/si/SiFlask"
import { SiKotlin } from "@react-icons/all-files/si/SiKotlin"
import { SiRstudio } from "@react-icons/all-files/si/SiRstudio"
import { FaRProject } from "@react-icons/all-files/fa/FaRProject"
import { SiPostgresql } from "@react-icons/all-files/si/SiPostgresql"
import { DiSqllite } from "@react-icons/all-files/di/DiSqllite"
import { AiOutlineConsoleSql } from "@react-icons/all-files/ai/AiOutlineConsoleSql"
import { SiCplusplus } from "@react-icons/all-files/si/SiCplusplus"
import { FaPython } from "@react-icons/all-files/fa/FaPython"
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5"
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3"
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap"
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript"
import { SiJquery } from "@react-icons/all-files/si/SiJquery"
import { FaJava } from "@react-icons/all-files/fa/FaJava"
import { FaPhp } from "@react-icons/all-files/fa/FaPhp"
import { FaGitAlt } from "@react-icons/all-files/fa/FaGitAlt"
import { SiAmazonaws } from "@react-icons/all-files/si/SiAmazonaws"
import { SiHeroku } from "@react-icons/all-files/si/SiHeroku"
import { FaDocker } from "@react-icons/all-files/fa/FaDocker"
import { GrMysql } from "@react-icons/all-files/gr/GrMysql"
import { FaMoon } from "@react-icons/all-files/fa/FaMoon"
import { FaSun } from "@react-icons/all-files/fa/FaSun"
import { SiApache } from "@react-icons/all-files/si/SiApache"
import { FcLinux } from "@react-icons/all-files/fc/FcLinux"
import { FaCode } from "@react-icons/all-files/fa/FaCode"
import { CgTerminal } from "@react-icons/all-files/cg/CgTerminal"
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane"


// top navbar
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"

// side-navbar
import { FaHome } from "@react-icons/all-files/fa/FaHome"
import { GiFilmProjector } from "@react-icons/all-files/gi/GiFilmProjector"
import { MdSchool } from "@react-icons/all-files/md/MdSchool"
import { MdWork } from "@react-icons/all-files/md/MdWork"
import { FaAward } from "@react-icons/all-files/fa/FaAward"
import { GoMail } from "@react-icons/all-files/go/GoMail"
import { MdContactMail } from "@react-icons/all-files/md/MdContactMail"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"

const ResponsiveIcons = {
    // light-dark
    "moon": { name: "moon", icon: <FaMoon /> },
    "sun": { name: "sun", icon: <FaSun /> },

    // navbar
    "linkedin": <FaLinkedinIn />,
    "github": <FaGithub />,

    // social
    "fb": { name: "facebook", icon: <FaFacebook size="2em" /> },
    "ig": { name: "instragram", icon: <FaInstagram size="2em" /> },
    "tg": { name: "telegram", icon: <FaTelegram size="2em" /> },
    "twtr": { name: "twitter", icon: <FaTwitter size="2em" /> },

    // sidebar: button icons
    "home": <FaHome />,
    "skills": <FaCode />,
    "projects": <GiFilmProjector />,
    "education": <MdSchool />,
    "experiences": <MdWork />,
    "contact": <MdContactMail />,
    "certificates": <FaAward />,

    // other button icons
    "send": { name: "SEND", icon: <FaPaperPlane /> },
    "phone": { name: "phone", icon: PhoneIcon },

    // languages
    "html": <FaHtml5 className="icons" />,
    "css": <FaCss3 className="icons" />,
    "python": <FaPython className="icons" />,
    "java": <FaJava className="icons" />,
    "javascript": <SiJavascript className="icons" />,
    "php": <FaPhp className="icons" />,
    "java": <FaJava className="icons" />,
    "c++": <SiCplusplus className="icons" />,
    "sql": <AiOutlineConsoleSql className="icons" />,
    "rLanguage": <FaRProject className="icons" />,
    "kotlin": <SiKotlin className="icons" />,

    // framework/libraries
    "react": <FaReact className="icons" />,
    "jquery": <SiJquery className="icons" />,
    "bootstrap": <FaBootstrap className="icons" />,
    "flask": <SiFlask className="icons" />,
    "keras": <SiKeras className="icons" />,
    "tensorflow": <SiTensorflow className="icons" />,

    // db - server - host
    "aws": <SiAmazonaws className="icons" />,
    "netlify": <SiNetlify className="icons" />,
    "heroku": <SiHeroku className="icons" />,
    "postgre": <SiPostgresql className="icons" />,
    "mysql": <GrMysql className="icons" />,
    "sqlite": <DiSqllite className="icons" />,
    "apache": <SiApache className="icons" />,

    // tools / os
    "git": <FaGitAlt className="icons" />,
    "docker": <FaDocker className="icons" />,
    "linux": <FcLinux className="icons" />,
    "rStudio": <SiRstudio className="icons" />,
    "vim": <DiVim className="icons" />,
    "powershell": <SiPowershell className="icons" />,
    "bash": <SiGnubash className="icons" />,
    "vscTerminal": <VscTerminal className="icons" />,
    "windows": <SiMicrosoft className="icons" />,
    "ubuntu": <FaUbuntu className="icons" />,
    "linuxMint": <SiLinuxmint className="icons" />,
    "zorinOS": <SiZorin className="icons" />,
    "terminal": <CgTerminal className="icons" />,

    // project mgmt / apps
    "latex": <SiLatex className="icons" />,
    "zendesk": <SiZendesk className="icons" />,
    "teamviewer": <SiTeamviewer className="icons" />,
    "advancedExcel": <SiMicrosoftexcel className="icons" />,
    "msteams": <SiMicrosoftteams className="icons" />,
    "scrum": <DiScrum className="icons" />,
    "jira": <FaJira className="icons" />,
    "trello": <FaTrello className="icons" />,
    "confluence": <FaConfluence className="icons" />,
}

export { ResponsiveIcons }
