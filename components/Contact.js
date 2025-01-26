import { Linkedin, Mail, GitlabIcon as GitlabLogo } from "lucide-react"
import "../styles/Contact.css"

export function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <div className="contact-icons">
          <Linkedin size={22} />
          <Mail size={22} />
          <GitlabLogo size={22} />
        </div>
        <p className="designer-text">Designed by Soufiane Knadry</p>
        <p className="copyright-text">&copy; 2023 All rights reserved</p>
      </div>
    </div>
  )
}

