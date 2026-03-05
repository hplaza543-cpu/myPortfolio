import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, Facebook, Instagram, Youtube, ExternalLink, Download, ChevronUp, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from "jspdf";

// --- Animation Variants ---

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Components ---

const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-colors duration-500 ${darkMode ? 'bg-dark-charcoal-green/95 border-b border-steel-blue-gray' : 'bg-aloe-white/95 border-b border-moss-green/10'} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className={`text-xl font-bold font-serif ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>
              imharoldzafra
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    darkMode 
                      ? 'text-fog-blue-gray hover:text-aloe-white hover:bg-steel-blue-gray/50' 
                      : 'text-moss-green/80 hover:text-moss-green hover:bg-cedar-beige/30'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  darkMode ? 'bg-steel-blue-gray text-aloe-white hover:bg-fog-blue-gray' : 'bg-moss-green/10 text-moss-green hover:bg-moss-green/20'
                }`}
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`mr-4 p-2 rounded-full transition-colors duration-200 ${
                darkMode ? 'bg-steel-blue-gray text-aloe-white' : 'bg-moss-green/10 text-moss-green'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                darkMode ? 'text-aloe-white hover:bg-steel-blue-gray/50' : 'text-moss-green hover:bg-cedar-beige/30'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${darkMode ? 'bg-dark-charcoal-green border-b border-steel-blue-gray' : 'bg-aloe-white border-b border-moss-green/10'}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    darkMode 
                      ? 'text-fog-blue-gray hover:text-aloe-white hover:bg-steel-blue-gray/50' 
                      : 'text-moss-green hover:bg-cedar-beige/30'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ darkMode }: { darkMode: boolean }) => {
  const handleDownloadResume = () => {
    const doc = new jsPDF();
    
    // Set font styles
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("John Harold Z. Plaza", 20, 20);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("417D Brgy. San Jose Sitio IV, Mandaluyong City. | 09202245586 • hplaza543@gmail.com", 20, 28);
    
    doc.setLineWidth(0.5);
    doc.line(20, 32, 190, 32);
    
    // Objective
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("OBJECTIVE", 20, 40);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const objective = "A dedicated Computer Engineering student looking for an internship where I can enhance my technical knowledge, gain real-world experience in programming and technical support, and continuously learn new technologies.";
    const splitObjective = doc.splitTextToSize(objective, 170);
    doc.text(splitObjective, 20, 48);
    
    // Education
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("EDUCATION", 20, 65);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Rizal Technological University | Mandaluyong", 20, 73);
    doc.setFont("helvetica", "italic");
    doc.text("Bachelor of Science in Computer Engineering | Expected: 2026", 20, 78);
    
    doc.setFont("helvetica", "bold");
    doc.text("Relevant Coursework:", 20, 86);
    doc.setFont("helvetica", "normal");
    doc.text("• Advanced Programming", 25, 92);
    doc.text("• Computer Organization & Architecture", 25, 97);
    doc.text("• Computer Network & Security", 25, 102);
    doc.text("• Operating Systems", 25, 107);
    
    doc.setFont("helvetica", "bold");
    doc.text("San Felipe Neri Parochial | Mandaluyong", 20, 115);
    doc.setFont("helvetica", "italic");
    doc.text("STEM | 2022", 20, 120);
    
    doc.line(20, 125, 190, 125);

    // Skills
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("SKILLS", 20, 133);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("• Programming Foundations: Python, C++, Java, HTML, CSS (basic)", 25, 141);
    doc.text("• Version Control & Deployment: GitHub, Vercel (basic)", 25, 146);
    doc.text("• Desktop and laptop troubleshooting", 25, 151);
    doc.text("• Adobe Photoshop and After Effects", 25, 156);
    doc.text("• Basic MS Office", 25, 161);
    
    doc.line(20, 166, 190, 166);

    // Projects
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("PROJECTS", 20, 174);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    
    const projects = [
      "• Laboratory Exercises (C++): Completed foundational programming tasks focusing on basic logic and syntax as part of academic coursework.",
      "• Applied basic HTML and CSS concepts in guided coursework exercises",
      "• Managed the end-to-end deployment of a web project using Vercel and GitHub.",
      "• Photo and video editing projects using Adobe Photoshop and After Effects"
    ];
    
    let yPos = 182;
    projects.forEach(project => {
      const splitProject = doc.splitTextToSize(project, 165);
      doc.text(splitProject, 25, yPos);
      yPos += (splitProject.length * 5) + 2;
    });

    // Technical Seminars
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("TECHNICAL SEMINARS AND WEBINARS ATTENDED", 20, yPos + 5);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    yPos += 13;
    doc.text("• Advanced Programming and Web Technology", 25, yPos);
    doc.text("• Next-Gen Learning Trends in IT, AI, and the Evolving Industry Landscape", 25, yPos + 5);
    doc.text("• Exploring The Latest Technology", 25, yPos + 10);
    doc.text("• IoT and Embedded Systems with Applications in Machine Learning", 25, yPos + 15);
    
    doc.save("John_Harold_Plaza_Resume.pdf");
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-16 ${darkMode ? 'bg-near-black-green' : 'bg-aloe-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <div className="relative w-56 h-56">
              {/* Pulse Ring Animation */}
              <motion.div
                className={`absolute inset-0 rounded-full ${darkMode ? 'bg-aloe-white/20' : 'bg-moss-green/20'}`}
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Profile Image */}
              <motion.div 
                className={`relative z-10 w-full h-full rounded-full overflow-hidden border-4 shadow-xl transition-[box-shadow,border-color] duration-500 ${darkMode ? 'border-steel-blue-gray shadow-black/30' : 'border-moss-green/20 shadow-moss-green/20'}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="John Harold Z. Plaza" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-6 font-serif ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>
            John Harold Z. Plaza
          </h1>
          <h2 className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-fog-blue-gray' : 'text-cypress-green'}`}>
            Computer Engineering Student | Aspiring Software Developer
          </h2>
          
          <div className="my-12 relative">
            <div className={`absolute inset-0 flex items-center`} aria-hidden="true">
              <div className={`w-full border-t ${darkMode ? 'border-steel-blue-gray' : 'border-moss-green/10'}`}></div>
            </div>
            <div className="relative flex justify-center">
              <span className={`px-6 italic font-serif text-lg md:text-xl ${darkMode ? 'bg-near-black-green text-fog-blue-gray' : 'bg-aloe-white text-cypress-green'}`}>
                "Whatever you do in this life, it’s not legendary, unless your friends are there to see it."
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href="#projects" className={`px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
              darkMode 
                ? 'bg-steel-blue-gray text-aloe-white hover:bg-fog-blue-gray' 
                : 'bg-moss-green text-aloe-white hover:bg-cypress-green'
            }`}>
              View Projects
            </a>
            <button 
              onClick={handleDownloadResume}
              className={`px-8 py-3 rounded-full font-medium border-2 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 ${
              darkMode 
                ? 'border-steel-blue-gray text-fog-blue-gray hover:bg-steel-blue-gray hover:text-aloe-white' 
                : 'border-moss-green text-moss-green hover:bg-moss-green hover:text-aloe-white'
            }`}>
              <Download size={18} /> Download Resume
            </button>
            <a href="#contact" className={`px-8 py-3 rounded-full font-medium border-2 transition-all duration-300 transform hover:-translate-y-1 ${
              darkMode 
                ? 'border-steel-blue-gray text-fog-blue-gray hover:bg-steel-blue-gray hover:text-aloe-white' 
                : 'border-cypress-green text-cypress-green hover:bg-cypress-green hover:text-aloe-white'
            }`}>
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-deep-forest-teal' : 'bg-aloe-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center font-serif ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>
            About Me
          </h2>
          <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-steel-blue-gray' : 'bg-white/50'}`}>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-aloe-white/90' : 'text-moss-green/90'}`}>
              Hello! I'm a dedicated Computer Engineering student currently studying at Rizal Technological University at Mandaluyong City. 
              I have a passion for building software that solves real-world problems. 
              My journey in tech started with a curiosity about how things work, which has evolved into a 
              career goal of becoming a full-stack software developer.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-aloe-white/90' : 'text-moss-green/90'}`}>
              When I'm not coding, you can find me exploring nature, editing using Adobe Photoshop and After Effects, or 
              collaborating with friends on creative projects. I believe in continuous learning and 
              strive to improve my skills every day.
            </p>
            
            <div className="flex justify-center space-x-6">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/DaDoodsDurogs' },
                { icon: Instagram, href: 'https://www.instagram.com/imharoldzafra/' },
                { icon: Youtube, href: 'https://www.youtube.com/@DaDoodsDurogs' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/plaza-john-harold-z-548b453a7/' },
                { icon: Github, href: 'https://github.com/hplaza543-cpu' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    darkMode 
                      ? 'bg-deep-forest-teal text-fog-blue-gray hover:bg-fog-blue-gray hover:text-aloe-white' 
                      : 'bg-moss-green/10 text-moss-green hover:bg-cypress-green hover:text-aloe-white'
                  }`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = ({ darkMode }: { darkMode: boolean }) => {
  const technicalSkills = ['HTML', 'CSS', 'JavaScript', 'Python', 'Git & GitHub', 'React', 'Node.js', 'SQL'];
  const softSkills = ['Problem Solving', 'Communication', 'Team Collaboration', 'Time Management', 'Adaptability', 'Leadership'];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-near-black-green' : 'bg-aloe-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center font-serif ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-fog-blue-gray' : 'text-cypress-green'}`}>Technical Skills</h3>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-xl text-center font-medium shadow-sm transition-colors ${
                      darkMode 
                        ? 'bg-steel-blue-gray text-aloe-white hover:bg-fog-blue-gray' 
                        : 'bg-white/60 text-moss-green hover:bg-cedar-beige/20'
                    }`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <div>
              <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-fog-blue-gray' : 'text-cypress-green'}`}>Soft Skills</h3>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-xl text-center font-medium shadow-sm transition-colors ${
                      darkMode 
                        ? 'bg-deep-forest-teal text-aloe-white hover:bg-fog-blue-gray' 
                        : 'bg-cedar-beige/20 text-moss-green hover:bg-cedar-beige/40'
                    }`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = ({ darkMode }: { darkMode: boolean }) => {
  const projects = [
    {
      title: 'nastySFX',
      description: 'A business website project where I sell my Adobe After Effects presets and projects.',
      tech: ['React', 'E-commerce', 'Web Design'],
      link: 'https://nasty-sfx.vercel.app/',
      image: 'https://picsum.photos/seed/nastysfx/600/400'
    },
    {
      title: 'Student Portfolio Website',
      description: 'A responsive personal portfolio website designed with a nature-inspired theme.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://picsum.photos/seed/portfolio/600/400'
    },
    {
      title: 'Simple Calculator App',
      description: 'A functional calculator application with basic arithmetic operations and a clean UI.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      image: 'https://picsum.photos/seed/calculator/600/400'
    },
    {
      title: 'Attendance Tracker',
      description: 'A web-based system to track student attendance and generate reports.',
      tech: ['Python', 'Django', 'SQLite'],
      image: 'https://picsum.photos/seed/attendance/600/400'
    },
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-deep-forest-teal' : 'bg-aloe-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center font-serif ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>
            Projects
          </h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className={`rounded-2xl overflow-hidden shadow-lg transition-colors ${
                  darkMode ? 'bg-steel-blue-gray' : 'bg-white/60'
                }`}
              >
                <div className={`h-48 w-full overflow-hidden ${darkMode ? 'bg-near-black-green' : 'bg-moss-green/5'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-aloe-white/70' : 'text-moss-green/70'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className={`text-xs px-2 py-1 rounded-full ${
                        darkMode ? 'bg-deep-forest-teal text-fog-blue-gray' : 'bg-cedar-beige/20 text-cypress-green'
                      }`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.link ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 py-2 rounded-lg font-medium transition-colors text-center ${
                        darkMode 
                          ? 'bg-fog-blue-gray text-aloe-white hover:bg-fog-blue-gray/80' 
                          : 'bg-moss-green text-aloe-white hover:bg-moss-green/90'
                      }`}>
                        Live Demo
                      </a>
                    ) : (
                      <button className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                        darkMode 
                          ? 'bg-fog-blue-gray text-aloe-white hover:bg-fog-blue-gray/80' 
                          : 'bg-moss-green text-aloe-white hover:bg-moss-green/90'
                      }`}>
                        Live Demo
                      </button>
                    )}
                    <button className={`flex-1 py-2 rounded-lg font-medium border transition-colors ${
                      darkMode 
                        ? 'border-fog-blue-gray text-fog-blue-gray hover:bg-fog-blue-gray/10' 
                        : 'border-moss-green/30 text-moss-green hover:bg-moss-green/10'
                    }`}>
                      View Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Education = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section id="education" className={`py-20 ${darkMode ? 'bg-near-black-green' : 'bg-aloe-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center font-serif ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>
            Education
          </h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative border-l-2 border-steel-blue-gray/50 ml-4 md:ml-0 md:pl-8 space-y-12"
          >
            <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0">
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${darkMode ? 'bg-fog-blue-gray' : 'bg-cypress-green'}`}></div>
              <div className={`p-6 rounded-2xl shadow-md transition-all hover:scale-[1.02] duration-300 ${darkMode ? 'bg-steel-blue-gray' : 'bg-white/60'}`}>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>Bachelor of Science in Computer Engineering</h3>
                <p className={`text-lg font-medium mb-2 ${darkMode ? 'text-fog-blue-gray' : 'text-olive-green'}`}>Rizal Technological University</p>
                <p className={`text-sm ${darkMode ? 'text-aloe-white/60' : 'text-moss-green/60'}`}>Expected Graduation: 2026</p>
                <p className={`mt-4 ${darkMode ? 'text-aloe-white/80' : 'text-moss-green/80'}`}>
                  Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Computer Architecture.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0">
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${darkMode ? 'bg-fog-blue-gray' : 'bg-cypress-green'}`}></div>
              <div className={`p-6 rounded-2xl shadow-md transition-all hover:scale-[1.02] duration-300 ${darkMode ? 'bg-steel-blue-gray' : 'bg-white/60'}`}>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>High School Diploma</h3>
                <p className={`text-lg font-medium mb-2 ${darkMode ? 'text-fog-blue-gray' : 'text-olive-green'}`}>San Felipe Neri Parochial School</p>
                <p className={`text-sm ${darkMode ? 'text-aloe-white/60' : 'text-moss-green/60'}`}>Graduated: 2022</p>
                <p className={`mt-4 ${darkMode ? 'text-aloe-white/80' : 'text-moss-green/80'}`}>
                  Focus on Science, Technology, Engineering, and Mathematics (STEM).
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Certifications = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section className={`py-20 ${darkMode ? 'bg-deep-forest-teal' : 'bg-aloe-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center font-serif ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>
            Certifications & Achievements
          </h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl shadow-md text-center transition-all duration-300 ${darkMode ? 'bg-steel-blue-gray hover:bg-steel-blue-gray/80' : 'bg-white/60 hover:bg-white/80'}`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${darkMode ? 'bg-fog-blue-gray/20 text-fog-blue-gray' : 'bg-moss-green/10 text-moss-green'}`}>
                  <ExternalLink size={24} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>Certification Name</h3>
                <p className={`text-sm mb-6 ${darkMode ? 'text-aloe-white/60' : 'text-moss-green/60'}`}>Issuing Organization • Date</p>
                <button className={`text-sm font-medium hover:underline ${darkMode ? 'text-fog-blue-gray' : 'text-cypress-green'}`}>
                  View Certificate
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-near-black-green' : 'bg-aloe-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center font-serif ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>
            Contact Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-fog-blue-gray' : 'text-cypress-green'}`}>Get in Touch</h3>
              <p className={`mb-8 ${darkMode ? 'text-aloe-white/80' : 'text-moss-green/80'}`}>
                I'm currently open to internships and job opportunities. Feel free to reach out if you have any questions or just want to connect!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-fog-blue-gray/20 text-fog-blue-gray' : 'bg-moss-green/10 text-moss-green'}`}>
                    <Mail size={20} />
                  </div>
                  <span className={darkMode ? 'text-aloe-white' : 'text-moss-green'}>hplaza543@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-fog-blue-gray/20 text-fog-blue-gray' : 'bg-moss-green/10 text-moss-green'}`}>
                    <Phone size={20} />
                  </div>
                  <span className={darkMode ? 'text-aloe-white' : 'text-moss-green'}>0920 224 5586</span>
                </div>
                <a 
                  href="https://www.linkedin.com/in/plaza-john-harold-z-548b453a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-fog-blue-gray/20 text-fog-blue-gray' : 'bg-moss-green/10 text-moss-green'}`}>
                    <Linkedin size={20} />
                  </div>
                  <span className={darkMode ? 'text-aloe-white' : 'text-moss-green'}>linkedin.com/in/plaza-john-harold-z</span>
                </a>
              </div>
            </div>
            
            <form className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-steel-blue-gray' : 'bg-white/50'}`}>
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>Name</label>
                <input 
                  type="text" 
                  className={`w-full px-4 py-2 rounded-lg outline-none focus:ring-2 transition-all ${
                    darkMode 
                      ? 'bg-deep-forest-teal border border-fog-blue-gray/20 text-aloe-white focus:ring-fog-blue-gray' 
                      : 'bg-white border border-moss-green/10 text-moss-green focus:ring-cypress-green'
                  }`}
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>Email</label>
                <input 
                  type="email" 
                  className={`w-full px-4 py-2 rounded-lg outline-none focus:ring-2 transition-all ${
                    darkMode 
                      ? 'bg-deep-forest-teal border border-fog-blue-gray/20 text-aloe-white focus:ring-fog-blue-gray' 
                      : 'bg-white border border-moss-green/10 text-moss-green focus:ring-cypress-green'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>Message</label>
                <textarea 
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg outline-none focus:ring-2 transition-all ${
                    darkMode 
                      ? 'bg-deep-forest-teal border border-fog-blue-gray/20 text-aloe-white focus:ring-fog-blue-gray' 
                      : 'bg-white border border-moss-green/10 text-moss-green focus:ring-cypress-green'
                  }`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button 
                type="button"
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  darkMode 
                    ? 'bg-fog-blue-gray text-aloe-white hover:bg-fog-blue-gray/80' 
                    : 'bg-moss-green text-aloe-white hover:bg-moss-green/90'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ darkMode }: { darkMode: boolean }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 ${darkMode ? 'bg-dark-charcoal-green border-t border-steel-blue-gray/10' : 'bg-aloe-white border-t border-moss-green/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className={`text-xl font-bold font-serif mb-2 ${darkMode ? 'text-aloe-white' : 'text-moss-green'}`}>imharoldzafra</h3>
            <p className={`italic text-sm ${darkMode ? 'text-fog-blue-gray' : 'text-olive-green'}`}>
              "Whatever you do in this life, it’s not legendary, unless your friends are there to see it."
            </p>
          </div>
          
          <div className="flex gap-6">
            {[
              { icon: Facebook, href: 'https://www.facebook.com/DaDoodsDurogs' },
              { icon: Instagram, href: 'https://www.instagram.com/imharoldzafra/' },
              { icon: Youtube, href: 'https://www.youtube.com/@DaDoodsDurogs' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/plaza-john-harold-z-548b453a7/' },
              { icon: Github, href: 'https://github.com/hplaza543-cpu' }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${darkMode ? 'text-aloe-white/60 hover:text-aloe-white' : 'text-moss-green/60 hover:text-moss-green'}`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
             <button 
              onClick={scrollToTop}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${darkMode ? 'text-fog-blue-gray hover:text-aloe-white' : 'text-olive-green hover:text-moss-green'}`}
            >
              Back to Top <ChevronUp size={16} />
            </button>
            <div className="flex gap-6 text-sm">
               <a href="#" className={darkMode ? 'text-aloe-white/60 hover:text-aloe-white' : 'text-moss-green/60 hover:text-moss-green'}>Privacy Policy</a>
               <span className={darkMode ? 'text-aloe-white/20' : 'text-moss-green/20'}>|</span>
               <span className={darkMode ? 'text-aloe-white/40' : 'text-moss-green/40'}>© 2025 imharoldzafra</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-near-black-green text-aloe-white' : 'bg-aloe-white text-moss-green'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
