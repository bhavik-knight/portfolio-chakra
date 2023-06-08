// skills - technologies
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

// top navbar
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"

// side-navbar
import { FaHome } from "@react-icons/all-files/fa/FaHome"
import { GiFilmProjector } from "@react-icons/all-files/gi/GiFilmProjector"
import { MdSchool } from "@react-icons/all-files/md/MdSchool"
import { MdWork } from "@react-icons/all-files/md/MdWork"
import { FaAward } from "@react-icons/all-files/fa/FaAward"
import { FaCode } from "@react-icons/all-files/fa/FaCode"

import { Container, useMediaQuery } from "@chakra-ui/react"

const size = "16px"

const Numpy = () => <Container bgImage="./logos/numpy.svg" boxSize={size} />

// didnt work
const Pandas = () => <Container bgImage="./logos/pandas.svg" boxSize={size} />
const MatPlotLib = () => <Container bgImage="./logos/matplotlib.svg" boxSize={size} />
const Seaborn = () => <Container bgImage="./logos/seaborn.svg" boxSize={size} />
const Plotly = () => <Container bgImage="./logos/plotly.svg" boxSize={size} />
const ScikitLearn = () => <Container bgImage="./logos/scikitLearn.svg" boxSize={size} />


const icons = {
    "moon": <FaMoon fontSize={size} />,
    "sun": <FaSun fontSize={size} />,
    "home": <FaHome fontSize={size} />,
    "skills": <FaCode fontSize={size} />,
    "projects": <GiFilmProjector fontSize={size} />,
    "education": <MdSchool fontSize={size} />,
    "experiences": <MdWork fontSize={size} />,
    "certificates": <FaAward fontSize={size} />,
    "linkedin": <FaLinkedinIn fontSize={size} />,
    "github": <FaGithub fontSize={size} />,
    "html": <FaHtml5 fontSize={size} />,
    "css": <FaCss3 fontSize={size} />,
    "python": <FaPython fontSize={size} />,
    "java": <FaJava fontSize={size} />,
    "javascript": <SiJavascript fontSize={size} />,
    "jquery": <SiJquery fontSize={size} />,
    "bootstrap": <FaBootstrap fontSize={size} />,
    "php": <FaPhp fontSize={size} />,
    "git": <FaGitAlt fontSize={size} />,
    "aws": <SiAmazonaws fontSize={size} />,
    "heroku": <SiHeroku fontSize={size} />,
    "docker": <FaDocker fontSize={size} />,
    "mysql": <GrMysql fontSize={size} />,
    "apache": <SiApache fontSize={size} />,
    "linux": <FcLinux fontSize={size} />,
    "java": <FaJava fontSize={size} />,
    "cpp": <SiCplusplus fontSize={size} />,
    "sql": <AiOutlineConsoleSql fontSize={size} />,
    "sqlite": <DiSqllite fontSize={size} />,
    "postgre": <SiPostgresql fontSize={size} />,
    "rLanguage": <FaRProject fontSize={size} />,
    "rStudio": <SiRstudio fontSize={size} />,
    "kotlin": <SiKotlin fontSize={size} />,
    "flask": <SiFlask fontSize={size} />,
    "react": <FaReact fontSize={size} />,
    "keras": <SiKeras fontSize={size} />,
    "tensorflow": <SiTensorflow fontSize={size} />,
    "vim": <DiVim fontSize={size} />,
    "powershell": <SiPowershell fontSize={size} />,
    "bash": <SiGnubash fontSize={size} />,
    "vscTerminal": <VscTerminal fontSize={size} />,
    "windowsOS": <SiMicrosoft fontSize={size} />,
    "ubuntu": <FaUbuntu fontSize={size} />,
    "zorinOS": <SiZorin fontSize={size} />,
    "linuxMint": <SiLinuxmint fontSize={size} />,
    "latex": <SiLatex fontSize={size} />,
    "netlify": <SiNetlify fontSize={size} />,
    "zendesk": <SiZendesk fontSize={size} />,
    "teamviewer": <SiTeamviewer fontSize={size} />,
    "advancedExcel": <SiMicrosoftexcel fontSize={size} />,
    "msteams": <SiMicrosoftteams fontSize={size} />,
    "scrum": <DiScrum fontSize={size} />,
    "jira": <FaJira fontSize={size} />,
    "trello": <FaTrello fontSize={size} />,
    "confluence": <FaConfluence fontSize={size} />,
    "numpy": <Numpy />,
}

export { icons }

// reference: convert svg to react components
// https://www.copycat.dev/blog/react-svg/

// reference for icons that are outside of react-icons library
// numpy: https://numpy.org/press-kit/
// pandas: https://pandas.pydata.org/about/citing.html
// matplotlib: https://commons.wikimedia.org/wiki/File:Created_with_Matplotlib-logo.svg
// seaborn: https://seaborn.pydata.org/citing.html
