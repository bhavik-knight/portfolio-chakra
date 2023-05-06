import { Image } from "@chakra-ui/react"
import { FaHome } from "@react-icons/all-files/fa/FaHome"
import { FaTools } from "@react-icons/all-files/fa/FaTools"
import { GiFilmProjector } from "@react-icons/all-files/gi/GiFilmProjector"
import { MdSchool } from "@react-icons/all-files/md/MdSchool"
import { GrUserWorker } from "@react-icons/all-files/gr/GrUserWorker"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { MdWork } from "@react-icons/all-files/md/MdWork"
import { FaAward } from "@react-icons/all-files/fa/FaAward"
import { ImLinkedin2 } from "@react-icons/all-files/im/ImLinkedin2"


// skills - technologies
import { FaPython } from "@react-icons/all-files/fa/FaPython"
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5"
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3"
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap"
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript"
import { FaJava } from "@react-icons/all-files/fa/FaJava"
import { FaPhp } from "@react-icons/all-files/fa/FaPhp"

const size = "64px"

const icons = {
    "home": <FaHome fontSize={size} />,
    "skills": <FaTools fontSize={size} />,
    "projects": <GiFilmProjector fontSize={size} />,
    "education": <MdSchool fontSize={size} />,
    "experience": <MdWork fontSize={size} />,
    "certificates": <FaAward fontSize={size} />,
    "linkedin": <FaLinkedinIn fontSize={size} />,
    "github": <FaGithub fontSize={size} />,
    "html": <FaHtml5 fontSize={size} />,
    "css": <FaCss3 fontSize={size} />,
    "python": <FaPython fontSize={size} />,
    "java": <FaJava fontSize={size} />,
    "javascript": <SiJavascript fontSize={size} />,
    "bootstrap": <FaBootstrap fontSize={size} />,
    "php": <FaPhp fontSize={size} />
}

export {
    FaHome,
    FaTools,
    GiFilmProjector,
    MdSchool,
    GrUserWorker,
    FaLinkedinIn,
    FaGithub,
    MdWork,
    FaAward,
    ImLinkedin2,
    FaPython,
    FaJava,
    FaHtml5,
    FaCss3,
}

export { icons }
