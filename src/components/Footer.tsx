import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FOOTER_EXTENSION, FOOTER_EXTENSION_BG, FOOTER_LINKS, FOOTER_LOGO, type HeroSectionData } from '../data/content'
import ContactModal from './ContactModal'
import HeroV3 from './HeroV3'

export interface FooterExtensionConfig extends HeroSectionData {
  backgroundImage?: string
}

interface FooterProps {
  showExtension?: boolean
  extension?: FooterExtensionConfig | null
}

function TwitterIcon() {
  return (
    <svg className="footer__social-link-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.1767 1.4209H14.4034L9.53923 6.9945L15.2622 14.5802H10.7817L7.26996 9.98044L3.25622 14.5802H1.0274L6.22971 8.6166L0.742188 1.42194H5.33673L8.50624 5.62548L12.1767 1.4209ZM11.3936 13.2443H12.6278L4.66259 2.68725H3.33919L11.3936 13.2443Z" fill="currentcolor" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="footer__social-link-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.4415C10.1361 1.4415 10.3891 1.44963 11.2326 1.48806C12.0126 1.52369 12.4362 1.654 12.7182 1.76356C13.0916 1.90869 13.3581 2.08206 13.638 2.362C13.918 2.64194 14.0913 2.90844 14.2364 3.28181C14.346 3.56375 14.4763 3.98738 14.5119 4.76731C14.5504 5.61094 14.5585 5.86394 14.5585 8C14.5585 10.1361 14.5504 10.3891 14.5119 11.2327C14.4763 12.0127 14.346 12.4362 14.2364 12.7182C14.0913 13.0916 13.9179 13.3581 13.638 13.6381C13.3581 13.918 13.0916 14.0914 12.7182 14.2364C12.4362 14.346 12.0126 14.4764 11.2326 14.5119C10.3892 14.5504 10.1362 14.5586 8 14.5586C5.86375 14.5586 5.61075 14.5504 4.76731 14.5119C3.98731 14.4763 3.56375 14.346 3.28181 14.2364C2.90844 14.0914 2.64188 13.918 2.36194 13.6381C2.082 13.3581 1.90862 13.0916 1.76356 12.7182C1.654 12.4363 1.52363 12.0127 1.48806 11.2327C1.44956 10.3891 1.44144 10.1361 1.44144 8C1.44144 5.86394 1.44956 5.61094 1.48806 4.76737C1.52369 3.98738 1.654 3.56375 1.76356 3.28181C1.90862 2.90844 2.082 2.64194 2.36194 2.362C2.64194 2.082 2.90844 1.90869 3.28181 1.76356C3.56369 1.654 3.98731 1.52369 4.76731 1.48806C5.61088 1.44963 5.86387 1.4415 8 1.4415ZM8 0C5.82731 0 5.55487 0.0091875 4.70162 0.048125C3.85006 0.087 3.2685 0.22225 2.75969 0.42C2.23356 0.624437 1.78744 0.898 1.34269 1.34275C0.897937 1.7875 0.624437 2.23362 0.42 2.75969C0.222187 3.26856 0.087 3.85012 0.048125 4.70162C0.0091875 5.55487 0 5.82731 0 8C0 10.1727 0.0091875 10.4451 0.048125 11.2984C0.087 12.1499 0.222187 12.7315 0.42 13.2403C0.624375 13.7664 0.897937 14.2126 1.34269 14.6573C1.78744 15.1021 2.23356 15.3756 2.75969 15.58C3.26856 15.7778 3.85006 15.913 4.70156 15.9519C5.55487 15.9908 5.82731 16 8 16C10.1727 16 10.4451 15.9908 11.2984 15.9519C12.1499 15.913 12.7314 15.7778 13.2402 15.58C13.7664 15.3756 14.2125 15.1021 14.6573 14.6573C15.102 14.2126 15.3756 13.7664 15.58 13.2403C15.7778 12.7314 15.913 12.1499 15.9519 11.2984C15.9908 10.4451 16 10.1727 16 8C16 5.82731 15.9908 5.55487 15.9519 4.70162C15.913 3.85012 15.7778 3.26856 15.58 2.75975C15.3756 2.23362 15.102 1.7875 14.6573 1.34275C14.2125 0.898 13.7664 0.624375 13.2403 0.42C12.7314 0.22225 12.1499 0.087 11.2984 0.048125C10.4451 0.0091875 10.1727 0 8 0ZM8 3.89188C5.73112 3.89188 3.89188 5.73125 3.89188 8C3.89188 10.2689 5.73112 12.1081 8 12.1081C10.2688 12.1081 12.1081 10.2689 12.1081 8C12.1081 5.73119 10.2688 3.89188 8 3.89188ZM8 10.6667C6.52725 10.6667 5.33331 9.47275 5.33331 8C5.33331 6.52725 6.52725 5.33331 8 5.33331C9.47275 5.33331 10.6667 6.52725 10.6667 8C10.6667 9.47275 9.47275 10.6667 8 10.6667ZM13.2304 3.72956C13.2304 4.25981 12.8006 4.68956 12.2704 4.68956C11.7402 4.68956 11.3104 4.25981 11.3104 3.72956C11.3104 3.19938 11.7402 2.76956 12.2704 2.76956C12.8006 2.76956 13.2304 3.19938 13.2304 3.72956Z" fill="currentColor" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="footer__social-link-icon" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.1436 16.001H13.3548V10.3764C13.3548 8.90414 12.7621 7.89909 11.4589 7.89909C10.462 7.89909 9.90765 8.57732 9.64962 9.23097C9.55286 9.46558 9.56798 9.79241 9.56798 10.1192V16.001H5.81445C5.81445 16.001 5.86283 6.03752 5.81445 5.13184H9.56798V6.83768C9.78973 6.09182 10.9892 5.02734 12.9032 5.02734C15.2779 5.02734 17.1436 6.59077 17.1436 9.95736V16.001ZM2.01787 3.77127H1.99368C0.784169 3.77127 0 2.94039 0 1.88717C0 0.813472 0.807351 0 2.04106 0C3.27375 0 4.03172 0.811424 4.05591 1.8841C4.05591 2.93731 3.27375 3.77127 2.01787 3.77127ZM0.431641 5.13184H3.77293V16.001H0.431641V5.13184Z" fill="currentColor" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg className="footer__social-link-icon" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.60711 10.9492L8.60645 4.55762L14.3704 7.76444L8.60711 10.9492ZM21.2636 3.45137C21.2636 3.45137 21.0549 1.88386 20.4156 1.19358C19.6042 0.287199 18.6949 0.282934 18.2782 0.230328C15.2929 0 10.8149 0 10.8149 0H10.8056C10.8056 0 6.32755 0 3.34222 0.230328C2.92489 0.282934 2.01622 0.287199 1.20422 1.19358C0.564888 1.88386 0.356888 3.45137 0.356888 3.45137C0.356888 3.45137 0.143555 5.29258 0.143555 7.13307V8.85911C0.143555 10.7003 0.356888 12.5408 0.356888 12.5408C0.356888 12.5408 0.564888 14.1083 1.20422 14.7986C2.01622 15.705 3.08222 15.6765 3.55689 15.7711C5.26355 15.946 10.8102 16 10.8102 16C10.8102 16 15.2929 15.9929 18.2782 15.7626C18.6949 15.7092 19.6042 15.705 20.4156 14.7986C21.0549 14.1083 21.2636 12.5408 21.2636 12.5408C21.2636 12.5408 21.4769 10.7003 21.4769 8.85911V7.13307C21.4769 5.29258 21.2636 3.45137 21.2636 3.45137Z" fill="currentColor" />
    </svg>
  )
}

function ContactArrowIcon() {
  return (
    <span className="icon arrow-button__icon icon--arrow">
      <span className="icon__solid">
        <svg className="icon__solid-icon" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 15.4907L14.9814 1.50928M14.9814 1.50928H1M14.9814 1.50928V15.4907" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
    </span>
  )
}

const SOCIAL_LINKS = [
  { label: 'Twitter', href: 'https://twitter.com/figure_robot', className: 'footer__social-link--twitter', icon: <TwitterIcon /> },
  { label: 'Instagram', href: 'https://www.instagram.com/figure_robot/', className: 'footer__social-link--instagram', icon: <InstagramIcon /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/figure-ai/', className: 'footer__social-link--linked-in', icon: <LinkedInIcon /> },
  { label: 'Youtube', href: 'https://www.youtube.com/@figureai', className: 'footer__social-link--youtube', icon: <YoutubeIcon /> },
] as const

export default function Footer({ showExtension = true, extension }: FooterProps) {
  const [email, setEmail] = useState('')
  const [contactOpen, setContactOpen] = useState(false)

  const extensionSection = extension ?? FOOTER_EXTENSION
  const extensionBackground = extension?.backgroundImage ?? FOOTER_EXTENSION_BG

  return (
    <>
      <footer id="footer" className="footer">
        {showExtension && (
          <>
            <div className="footer__extension">
              <HeroV3 section={extensionSection} />
            </div>

            <div className="footer__extension-background">
              <img
                alt=""
                src={extensionBackground}
                width={2880}
                height={4526}
                decoding="async"
                className="footer__extension-background-image"
                loading="lazy"
              />
            </div>
          </>
        )}

        <div className="footer__content-wrapper">
          <div className="footer__content">
            <div className="footer__top">
              <div className="footer__left">
                <div className="footer__left-inner">
                  <Link to="/">
                    <img
                      alt=""
                      src={FOOTER_LOGO}
                      width={461}
                      height={69}
                      decoding="async"
                      className="footer__logo"
                      loading="lazy"
                    />
                  </Link>

                  <section className="footer__newsletter-container">
                    <h1 className="footer__newsletter-heading">Keep up with us</h1>
                    <p className="footer__newsletter-description">
                      Get news, photos, events, and business updates.
                    </p>

                    <form
                      className="newsletter-form footer__newsletter-component"
                      aria-label="Subscribe to newsletter"
                      onSubmit={(event) => {
                        event.preventDefault()
                        setEmail('')
                      }}
                    >
                      <div className="custom-input__field custom-input__field--is-input">
                        <div className="custom-input__label-input-container">
                          <label className="custom-input__label">
                            <span className="custom-input__label-text">Email Address*</span>
                            <input
                              className="custom-input__input"
                              name="email"
                              type="email"
                              required
                              aria-invalid="false"
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                            />
                          </label>
                          <button
                            type="submit"
                            className="button button--with-loader newsletter-form__button"
                          >
                            Sign Up
                            <span className="button__loader">
                              <span className="loader" />
                            </span>
                          </button>
                        </div>
                      </div>
                      <p
                        id="footernewsletter-newsletter-form"
                        className="newsletter-form__description"
                        aria-live="polite"
                      />
                    </form>
                  </section>

                  <nav className="footer__social-links" aria-label="Social media links">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.label}
                        className={`footer__social-link ${social.className}`}
                        title={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={social.href}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </nav>

                  <button
                    type="button"
                    className="arrow-button footer__contact-button"
                    aria-label="Open contact form"
                    onClick={() => setContactOpen(true)}
                  >
                    Contact Us
                    <ContactArrowIcon />
                  </button>
                </div>
              </div>

              <nav className="footer__primary-links" aria-label="Site links">
                {FOOTER_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    className="footer__primary-link"
                    title={link.label}
                    to={link.href}
                  >
                    <span className="footer__primary-link-label">{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="footer__bottom">
              <nav className="footer__secondary-links" aria-label="Legal Site links">
                <p className="footer__copyright">© Figure AI 2026.</p>
                <Link className="footer__secondary-link" to="/terms-and-conditions">
                  Terms &amp; Conditions
                </Link>
                <Link className="footer__secondary-link" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="footer__secondary-link" to="/accessibility-statement">
                  Accessibility Statement
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
