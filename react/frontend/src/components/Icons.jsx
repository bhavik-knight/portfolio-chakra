// top navbar
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"

// side-navbar
import { FaHome } from "@react-icons/all-files/fa/FaHome"
import { FaTools } from "@react-icons/all-files/fa/FaTools"
import { GiFilmProjector } from "@react-icons/all-files/gi/GiFilmProjector"
import { MdSchool } from "@react-icons/all-files/md/MdSchool"
import { MdWork } from "@react-icons/all-files/md/MdWork"
import { FaAward } from "@react-icons/all-files/fa/FaAward"
import { GrUserWorker } from "@react-icons/all-files/gr/GrUserWorker"
import { ImLinkedin2 } from "@react-icons/all-files/im/ImLinkedin2"
import { FaCode } from "@react-icons/all-files/fa/FaCode"

// skills - technologies
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

const size = "32px"

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
}

export { icons }
