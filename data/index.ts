import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Securing Systems with Strategic Insight",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Strengthening Security with Sophisticated Strategies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Improving",
    description: "Approches and Expertise constantly ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Enthusiast with good Skills",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently Developing a Security Tools",
    description: "Exploring innovative security solutions.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Net Guard (Ongoing)",
    des: "A open-source next level SIEM Security Solution, that has capabilities to replace Open-Source SIEMS, like Wazuh etc.",
    img: "/netguard.svg",
    iconLists: ["/py.svg", "/c-1.svg", "/asm.svg", "/go.svg", "/shell.svg"],
    link: "github.com/president-xd/Net-Guard",
  },
  {
    id: 2,
    title: "Spmay",
    des: "A master Gmail Filtering tool, that has capabilites to analyze email headers, links, attachments, its sources and may more.",
    img: "/spamy.svg",
    iconLists: ["/py.svg"],
    link: "/github.com/president-xd/Spamy",
  },
  {
    id: 3,
    title: "xNIDDY",
    des: "A python-based Network Intrusion Detection system, specifically focused on capturing and detecting TCP, UDP, and ICMP packets and there respected attacks on deeper level.",
    img: "/xniddyy.svg",
    iconLists: ["/py.svg"],
    link: "github.com/president-xd/xNIDDY",
  },
  {
    id: 4,
    title: "Cryptix",
    des: "A python package/library used for encrypting and decryption a vast level of Cryptographic algorithms",
    img: "/xniddy.svg",
    iconLists: ["/py.svg"],
    link: "github.com/president-xd/Cryptix",
  },
];

export const testimonials = [
  {
    quote:
      "Mohsin's expertise in cyber security is both profound and transformative. His strategic insights and hands-on approach have been critical in advancing our institution's security posture. His ability to navigate complex challenges with precision and foresight is a testament to his exceptional skills. Mohsin's contributions to the field are invaluable, making him a respected figure among his peers.",
    name: "Dr Kashif Khifayat",
    title: "Director of National Center for Cyber Security",
  },
  {
    quote:
      "Mohsin's expertise in cyber security is unmatched. His ability to identify vulnerabilities and implement robust solutions was instrumental in securing our infrastructure. His commitment to staying ahead of emerging threats is truly commendable.",
    name: "Sangeen Khattak",
    title: "Security Researcher at NCCS, Pakistan",
  },
  {
    quote:
      "Mohsin's passion for cyber security shines through in every project he undertakes. His innovative approach and dedication to safeguarding our digital landscape have set new standards in the industry. Mohsin is not just a consultant; he's a guardian of our most valuable data.",
    name: "Hilmand Khan",
    title: "CEO at TechBase",
  },
  {
    quote:
      "Mohsin is a rare talent in the cyber security field. His comprehensive understanding of the latest threats and his ability to design tailored security solutions have been invaluable to our business. His work ethic and unwavering commitment to excellence make him a trusted partner.",
    name: "Abdul Wahab Khan",
    title: "CEO at SecureOUT",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloud",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "app",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Co-founder - SecureOUT",
    desc: "As a Co-founder of a Cyber Security Company, you shape the organization's vision, develop advanced security solutions, and drive strategic growth. You collaborate with stakeholders to design innovative products, oversee R&D, and ensure the deployment of cutting-edge technologies. Additionally, you lead business development, secure funding, and build the company's industry reputation while fostering a culture of security awareness.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Network Security Researcher - NCCS, Pakistan",
    desc: "As a Network Security Researcher specializing in Network Intrusion Detection Systems (NIDS), you focus on developing and refining techniques to detect and prevent unauthorized network access. You work on creating advanced detection methods, analyzing network traffic for potential threats, and ensuring robust defenses against evolving cyber attacks. Your role involves researching emerging technologies, improving existing NIDS frameworks, and contributing to the overall security posture of networks.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Red Teamer - TrilliumInfoSec",
    desc: "As a Red Teamer specializing in web penetration testing, you focus on simulating cyber attacks to identify vulnerabilities in web applications. Your role involves conducting comprehensive security assessments, exploiting weaknesses to test defenses, and providing detailed reports with recommendations for improving security. You stay up-to-date with the latest attack techniques and tools to ensure robust protection against potential threats.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Self Employed",
    desc: "As a self-employed professional, you manage your own business operations, providing specialized services in your field of expertise. You are responsible for client acquisition, project execution, and maintaining high standards of work. You handle all aspects of your business, including marketing, financial management, and client relationships, ensuring that you deliver quality outcomes while navigating the challenges of independent work.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/president-xd/"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/just_mohsin_"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/mohsin-lashari/"
  },
];
