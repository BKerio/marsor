import { useEffect } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  return (
    <div
      className={`contact-modal${isOpen ? ' is-active' : ''}`}
      aria-hidden={isOpen ? 'false' : 'true'}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <article className="contact-modal__content">
        <button
          className="contact-modal__button"
          aria-label="Close contact form"
          type="button"
          onClick={onClose}
        >
          <span className="contact-modal__button-icon" />
        </button>

        <div className="contact-modal__main-wrapper">
          <div className="contact-modal__main">
            <div className="contact-modal__main-inner">
              <div className="contact-modal__text-container">
                <h1 className="contact-modal__heading">What&apos;s on your mind?</h1>
                <div className="contact-modal__description">
                  We&apos;ll get back to you as soon as possible.
                </div>
              </div>

              <form
                noValidate
                className="contact-modal__form"
                aria-label="Send us a message"
                onSubmit={(event) => {
                  event.preventDefault()
                }}
              >
                <div className="contact-modal__fields contact-modal__fields--2-col">
                  <div className="contact-modal__field">
                    <div className="custom-input__field custom-input__field--is-input">
                      <div className="custom-input__label-input-container">
                        <label className="custom-input__label">
                          <span className="custom-input__label-text">First Name*</span>
                          <input
                            className="custom-input__input"
                            name="firstName"
                            type="text"
                            required
                            aria-invalid="false"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="contact-modal__field">
                    <div className="custom-input__field custom-input__field--is-input">
                      <div className="custom-input__label-input-container">
                        <label className="custom-input__label">
                          <span className="custom-input__label-text">Last Name*</span>
                          <input
                            className="custom-input__input"
                            name="lastName"
                            type="text"
                            required
                            aria-invalid="false"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-modal__fields">
                  <div className="contact-modal__field">
                    <div className="custom-input__field custom-input__field--is-input">
                      <div className="custom-input__label-input-container">
                        <label className="custom-input__label">
                          <span className="custom-input__label-text">Email*</span>
                          <input
                            className="custom-input__input"
                            name="email"
                            type="email"
                            required
                            aria-invalid="false"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-modal__fields">
                  <div className="contact-modal__field">
                    <div className="custom-input__field custom-input__field--is-input">
                      <div className="custom-input__label-input-container">
                        <label className="custom-input__label">
                          <span className="custom-input__label-text">Subject*</span>
                          <input
                            className="custom-input__input"
                            name="subject"
                            type="text"
                            required
                            aria-invalid="false"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-modal__fields">
                  <div className="contact-modal__field">
                    <div className="custom-input__field custom-input__field--is-textarea">
                      <div className="custom-input__label-input-container">
                        <label className="custom-input__label">
                          <span className="custom-input__label-text">Message*</span>
                          <textarea
                            className="custom-input__input"
                            name="message"
                            required
                            aria-invalid="false"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="button button--with-loader contact-modal__submit"
                >
                  Submit
                  <span className="button__loader">
                    <span className="loader" />
                  </span>
                </button>

                <p className="contact-modal__state-text" aria-live="polite" />

                <p className="contact-modal__recaptcha-text">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a target="_blank" rel="noreferrer" href="https://policies.google.com/privacy">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a target="_blank" rel="noreferrer" href="https://policies.google.com/terms">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
              </form>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
