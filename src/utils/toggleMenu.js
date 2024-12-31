const toggleMenu = (isOpen, setIsOpen) => {
    if (window.innerWidth < 769) setIsOpen(!isOpen);
};

export default toggleMenu