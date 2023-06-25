import NavLink from "./NavLink";
import scrollIntoView from 'scroll-into-view'

const SideNav = ({ sectionsRef, navItems, observeSections, disconnectObserver, setCurrentSectionIndex}) => {

  const handleClick = (e) => {
    
    //get the index of clicked item 
    const sectionIndex = navItems.findIndex(item => item.name === e.target.innerText);
    if(sectionIndex < 0) return;

    disconnectObserver();
    
    scrollIntoView(
      sectionsRef.current[sectionIndex], 
      {align: {
        top: 0,
      }}, 
      () => {
        setCurrentSectionIndex(sectionIndex);
        observeSections();
      }
    )
  }

  return (
    <div className="hidden lg:flex h-full flex-col justify-center z-[9999] ">
      <nav className="flex flex-col items-end mb-10" onClick={handleClick}>
        {/* { navLinks } */}
        { navItems.map( (item, index) => <NavLink key={item.name} index={index} name={item.name} isActive={item.isActive}/> )}
      </nav>
    </div>
  );
};

export default SideNav;
