import "./ResponsiveIcons.css"
import { useMediaQuery } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/icons"
import { useState, useEffect } from "react"

// skills - technologies
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt"
import { FaConfluence } from "@react-icons/all-files/fa/FaConfluence"
import { FaTrello } from "@react-icons/all-files/fa/FaTrello"
import { FaJira } from "@react-icons/all-files/fa/FaJira"
import { SiMicrosoftteams } from "@react-icons/all-files/si/SiMicrosoftteams"
import { DiScrum } from "@react-icons/all-files/di/DiScrum"
import { SiTeamviewer } from "@react-icons/all-files/si/SiTeamviewer"
import { SiZendesk } from "@react-icons/all-files/si/SiZendesk"
import { SiNetlify } from "@react-icons/all-files/si/SiNetlify"
import { SiLatex } from "@react-icons/all-files/si/SiLatex"
import { SiMicrosoft } from "@react-icons/all-files/si/SiMicrosoft"
import { SiMicrosoftexcel } from "@react-icons/all-files/si/SiMicrosoftexcel"
import { VscTerminal } from "@react-icons/all-files/vsc/VscTerminal"
import { SiGnubash } from "@react-icons/all-files/si/SiGnubash"
import { SiPowershell } from "@react-icons/all-files/si/SiPowershell"
import { DiVim } from "@react-icons/all-files/di/DiVim"
import { SiRstudio } from "@react-icons/all-files/si/SiRstudio"
import { AiOutlineConsoleSql } from "@react-icons/all-files/ai/AiOutlineConsoleSql"
import { FaGitAlt } from "@react-icons/all-files/fa/FaGitAlt"
import { SiHeroku } from "@react-icons/all-files/si/SiHeroku"
import { FaDocker } from "@react-icons/all-files/fa/FaDocker"
import { FaMoon } from "@react-icons/all-files/fa/FaMoon"
import { FaSun } from "@react-icons/all-files/fa/FaSun"
import { SiApache } from "@react-icons/all-files/si/SiApache"
import { FaCode } from "@react-icons/all-files/fa/FaCode"
import { CgTerminal } from "@react-icons/all-files/cg/CgTerminal"
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane"
import { BiMailSend } from "@react-icons/all-files/bi/BiMailSend"
import { SiSlack } from "@react-icons/all-files/si/SiSlack"
import { SiOracle } from "@react-icons/all-files/si/SiOracle"
import { VscRegex } from "@react-icons/all-files/vsc/VscRegex"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { MdClose } from "@react-icons/all-files/md/MdClose"
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt"
import { BiLinkAlt } from "@react-icons/all-files/bi/BiLinkAlt"
import { SiVisualstudio } from "@react-icons/all-files/si/SiVisualstudio"
import { FcViewDetails } from "@react-icons/all-files/fc/FcViewDetails"

// languages
import { FaJava } from "@react-icons/all-files/fa/FaJava"
import { SiPhp } from "@react-icons/all-files/si/SiPhp"
import { FaPhp } from "@react-icons/all-files/fa/FaPhp"
import { SiCplusplus } from "@react-icons/all-files/si/SiCplusplus"
import { FaPython } from "@react-icons/all-files/fa/FaPython"
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5"
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3"
import { FaRProject } from "@react-icons/all-files/fa/FaRProject"
import { SiKotlin } from "@react-icons/all-files/si/SiKotlin"
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript"

// framework
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap"
import { SiKeras } from "@react-icons/all-files/si/SiKeras"
import { SiTensorflow } from "@react-icons/all-files/si/SiTensorflow"
import { FaReact } from "@react-icons/all-files/fa/FaReact"
import { SiFlask } from "@react-icons/all-files/si/SiFlask"
import { SiJquery } from "@react-icons/all-files/si/SiJquery"
import { SiDjango } from "@react-icons/all-files/si/SiDjango"
import { DiDjango } from "@react-icons/all-files/di/DiDjango"

// db
import { SiPostgresql } from "@react-icons/all-files/si/SiPostgresql"
import { DiSqllite } from "@react-icons/all-files/di/DiSqllite"
import { GrMysql } from "@react-icons/all-files/gr/GrMysql"

// cloud
import { SiAmazonaws } from "@react-icons/all-files/si/SiAmazonaws"
import { SiFirebase } from "@react-icons/all-files/si/SiFirebase"
import { SiGooglecloud } from "@react-icons/all-files/si/SiGooglecloud"

// os
import { FcLinux } from "@react-icons/all-files/fc/FcLinux"
import { FaUbuntu } from "@react-icons/all-files/fa/FaUbuntu"
import { SiLinuxmint } from "@react-icons/all-files/si/SiLinuxmint"
import { SiZorin } from "@react-icons/all-files/si/SiZorin"

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

// social
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"


const ResponsiveIcons = {
    // light-dark
    "moon": { name: "moon", icon: <FaMoon /> },
    "sun": { name: "sun", icon: <FaSun /> },

    // navbar
    "linkedin": { name: "LinkedIn", icon: <FaLinkedinIn className="icons" /> },
    "github": { name: "GitHub", icon: <FaGithub className="icons" /> },

    // social
    "facebook": { name: "Facebook", icon: <FaFacebook className="icons" /> },
    "instagram": { name: "Instragram", icon: <FaInstagram className="icons" /> },
    "telegram": { name: "Telegram", icon: <FaTelegram className="icons" /> },
    "twitter": { name: "Twitter", icon: <FaTwitter className="icons" /> },

    // sidebar: button icons
    "home": { name: "Home", icon: <FaHome className="icons" /> },
    "skills": { name: "Skills", icon: <FaCode className="icons" /> },
    "projects": { name: "Projects", icon: <GiFilmProjector className="icons" /> },
    "education": { name: "Education", icon: <MdSchool className="icons" /> },
    "experiences": { name: "Experiences", icon: <MdWork className="icons" /> },
    "contact": { name: "Contact", icon: <MdContactMail className="icons" /> },
    "certificates": { name: "Certificates", icon: <FaAward className="icons" /> },

    // other button icons
    "send": { name: "SEND", icon: <BiMailSend className="icons" /> },
    "phone": { name: "Phone", icon: <FaPhoneAlt className="icons" /> },
    "email": { name: "Email ID", icon: <GoMail className="icons" /> },
    "link": { name: "Link", icon: <BiLinkAlt className="icons" /> },
    "close": { name: "Close", icon: <MdClose className="icons" /> },
    "details": { name: "Details", icon: <FcViewDetails className="icons" /> },

    // languages
    "html": { name: "HTML5", icon: <FaHtml5 className="icons" /> },
    "css": { name: "CSS3", icon: <FaCss3 className="icons" /> },
    "python": { name: "Python", icon: <FaPython className="icons" /> },
    "java": { name: "Java", icon: <FaJava className="icons" /> },
    "javascript": { name: "JavaScript", icon: <SiJavascript className="icons" /> },
    "php": { name: "PHP", icon: <SiPhp className="icons" /> },
    "c++": { name: "C++", icon: <SiCplusplus className="icons" /> },
    "sql": { name: "SQL", icon: <AiOutlineConsoleSql className="icons" /> },
    "r": { name: "R", icon: <FaRProject className="icons" /> },
    "kotlin": { name: "Kotlin", icon: <SiKotlin className="icons" /> },
    "scratch": { name: "Scratch" },

    // framework/libraries
    "react": { name: "ReactJS", icon: <FaReact className="icons" /> },
    "jquery": { name: "jQuery", icon: <SiJquery className="icons" /> },
    "bootstrap": { name: "Bootstrap", icon: <FaBootstrap className="icons" /> },
    "flask": { name: "Flask", icon: <SiFlask className="icons" /> },
    "keras": { name: "Keras", icon: <SiKeras className="icons" /> },
    "tensorflow": { name: "TensorFlow", icon: <SiTensorflow className="icons" /> },
    "django": { name: "Django", icon: <SiDjango className="icons" /> },
    "numpy": { name: "Numpy" },
    "chakraui": { name: "ChakraUI" },
    "materialui": { name: "MaterialUI" },
    "tidyverse": { name: "Tidyverse" },
    "ggplot": { name: "ggplot2" },
    "nltk": { name: "NLTK", fullName: "Natual Language Toolkit" },
    "sklearn": { name: "scikit-learn" },
    "wordcloud": { name: "Wordcloud" },
    "textblob": { name: "TextBlob" },
    "matplotlib": { name: "Matplotlib" },
    "pandas": { name: "Pandas" },
    "scipy": { name: "SciPy" },
    "pygad": { name: "PyGAD" },
    "gari": { name: "GARI", fullName: "Genetic Algorithm for Reproducing Images" },
    "imageio": { name: "Imageio" },
    "pyswarms": { name: "Pyswarms" },
    "pygame": { name: "Pygame" },

    // db - server - host
    "aws": { name: "AWS", icon: <SiAmazonaws className="icons" /> },
    "awsec2": { name: "AWS_EC2" },
    "awsrds": { name: "AWS_RDS" },
    "awss3": { name: "AWS_S3" },
    "gcp": { name: "GCP", icon: <SiGooglecloud className="icons" />, fullName: "Google Cloud Platform" },
    "firebase": { name: "Firebase", icon: <SiFirebase className="icons" /> },
    "netlify": { name: "Netlify", icon: <SiNetlify className="icons" /> },
    "heroku": { name: "Heroku", icon: <SiHeroku className="icons" /> },
    "postgre": { name: "PostgreSQL", icon: <SiPostgresql className="icons" /> },
    "mysql": { name: "MySQL", icon: <GrMysql className="icons" /> },
    "sqlite": { name: "SQLite", icon: <DiSqllite className="icons" /> },
    "apache": { name: "Apache", icon: <SiApache className="icons" /> },

    // tools / os / apps/ tech
    "git": { name: "Git", icon: <FaGitAlt className="icons" /> },
    "docker": { name: "Docker", icon: <FaDocker className="icons" /> },
    "linux": { name: "Linux", icon: <FcLinux className="icons" /> },
    "rstudio": { name: "RStudio", icon: <SiRstudio className="icons" /> },
    "vim": { name: "Vim", icon: <DiVim className="icons" /> },
    "powershell": { name: "PowerShell", icon: <SiPowershell className="icons" /> },
    "bash": { name: "Bash", icon: <SiGnubash className="icons" /> },
    "vscterminal": { name: "VSC Terminal", icon: <VscTerminal className="icons" /> },
    "windows": { name: "Windows", icon: <SiMicrosoft className="icons" /> },
    "ubuntu": { name: "Ubuntu", icon: <FaUbuntu className="icons" /> },
    "linuxMint": { name: "Linux Mint", icon: <SiLinuxmint className="icons" /> },
    "zorinOS": { name: "Zorin OS", icon: <SiZorin className="icons" /> },
    "terminal": { name: "Terminal", icon: <CgTerminal className="icons" /> },
    "slack": { name: "Slack", icon: <SiSlack className="icons" /> },
    "oracle": { name: "Oracle", icon: <SiOracle className="icons" /> },
    "latex": { name: "LaTeX", icon: <SiLatex className="icons" /> },
    "teamviewer": { name: "TeamViewer", icon: <SiTeamviewer className="icons" /> },
    "advancedExcel": { name: "Advanced Excel", icon: <SiMicrosoftexcel className="icons" /> },
    "msteams": { name: "MS Teams", icon: <SiMicrosoftteams className="icons" /> },
    "erd+": { name: "ERD+", fullName: "Entity Relationship Diagram" },
    "3nf": { name: "3NF", fullName: "Third Normal Form" },
    "rmarkdown": { name: "R Markdown" },
    "regex": { name: "RegEx", icon: <VscRegex className="icons" />, fullName: "Regular Expression" },
    "colab": { name: "Colab", fullName: "Google Colaboratory" },
    "wsl": { name: "WSL", icon: <CgTerminal className="icons" />, fullName: "Windows Subsystem for Linux" },
    "youtube": { name: "YouTube", icon: <FaYoutube className="icons" color="red" /> },
    "source": { name: "Source", icon: <SiVisualstudio className="icons" /> },

    // project mgmt / apps
    "zendesk": { name: "Zendesk", icon: <SiZendesk className="icons" /> },
    "scrum": { name: "Scrum", icon: <DiScrum className="icons" /> },
    "jira": { name: "Jira", icon: <FaJira className="icons" /> },
    "trello": { name: "Trello", icon: <FaTrello className="icons" /> },
    "confluence": { name: "Confluence", icon: <FaConfluence className="icons" /> },
}

export { ResponsiveIcons }
