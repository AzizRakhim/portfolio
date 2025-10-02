export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Delivery Web app",
    description: "The Inside Scoop",
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
    title: "Brainwave – Sleek UI/UX Landing Page",
    des: "Experience modern UI/UX design with this interactive web app built using React and Tailwind.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/vite.svg", "/rjp.svg"],
    link: "https://github.com/AzizRakhim/brainwave",
  },
  {
    id: 2,
    title: "Interactive 3D Portfolio Website",
    des: "A dynamic personal portfolio featuring 3D models, transitions, and responsive layouts.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/AzizRakhim/3d-portfolio",
  },
  {
    id: 3,
    title: "Auth App – Secure Dashboard Application",
    des: "A responsive dashboard featuring secure auth, smooth performance, and modern design.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/vite.svg", "/red.svg"],
    link: "https://github.com/AzizRakhim/auth-app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/AzizRakhim/apple-website",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Aziz was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Aziz's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Aziz is the ideal partner.",
    name: "Said Xasanjanov",
    title: "Director of Musait Technologies",
  },
  {
    quote:
      "Working with Aziz was a remarkable experience. His deep knowledge of modern technologies, combined with his clear communication, ensured our project stayed on track from start to finish. Aziz approaches every challenge with creativity and determination, making the final product exceed expectations.",
    name: "Shakhzod Nematullah",
    title: "Product Manager at Ubay Global",
  },
  {
    quote:
      "Aziz is a developer who truly cares about quality and user experience. Throughout our collaboration, he consistently demonstrated reliability, precision, and a passion for delivering results. His ability to transform complex ideas into smooth solutions left a lasting impression on our entire team.",
    name: "Nasriddinov Toxir",
    title: "Founder of Natija",
  },
  {
    quote:
      "Partnering with Aziz brought tremendous value to our project. His problem-solving skills, attention to detail, and proactive mindset made the development process smooth and efficient. Aziz not only delivered exceptional results but also added thoughtful suggestions that elevated the final outcome.",
    name: "Kamoliddin",
    title: "CTO at JPoint",
  },
  {
    quote:
      "Aziz is a true professional whose work ethic and technical expertise are outstanding. From the very beginning, he showed dedication to creating a product that aligned with our vision. His ability to combine technical precision with creative insight makes him a standout collaborator.",
    name: "Jamoliddin",
    title: "CEO of Mediapark",
  },
];

export const companies = [
  {
    id: 1,
    name: "SuvGO",
    img: "/suvGo.svg",
    nameImg: "/suvGoName.svg",
  },
  {
    id: 2,
    name: "Ubay",
    img: "/ubay.svg",
    nameImg: "/ubayName.svg",
  },
  {
    id: 3,
    name: "Mediapark",
    img: "/mp.svg",
    nameImg: "/mpName.svg",
  },
  {
    id: 4,
    name: "JPoint",
    img: "/jp.svg",
    nameImg: "/jPointName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/ss.svg",
    nameImg: "/ssName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "UI Developer - Mediapark",
    desc: "Collaborated with designers to implement pixel-perfect user interfaces using React and TailwindCSS.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Frontend Project",
    desc: "Developed a responsive web interface with modern frameworks, focusing on performance and accessibility.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
