import { Linkedin, Mail, GithubIcon } from "lucide-react";
import "../styles/Contact.css";

export function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/soufiane-knadry-08a830321/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:soufianeknad@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/SoufianeKnadry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab"
          >
            <GithubIcon size={22} />
          </a>
        </div>
        <p className="designer-text">Designed by Soufiane Knadry</p>
        <p className="copyright-text">&copy; 2023 All rights reserved</p>
      </div>
    </div>
  );
}
