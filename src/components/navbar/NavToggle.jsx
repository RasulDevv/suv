import toggleMenu from '../../utils/toggleMenu'

export default function NavToggle({isOpen, setIsOpen}) {
  return (
    <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={() => toggleMenu(isOpen, setIsOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
  )
}
