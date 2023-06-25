import NavLink from "./NavLink"
import scrollIntoView from 'scroll-into-view'

const NavMobile = ( { sectionsRef, navItems, observeSections, disconnectObserver, setCurrentSectionIndex} ) => {
    
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
        <div className="w-screen z[9999] bg-red-500 h-full border-b border-b-solid" >
                <ul className="flex items-center w-full no-scrollbar flex-col gap-1 list-none">
                    { navItems.map(navItem => <li key={navItem.name} onClick={handleClick} className={`p-2 w-fit ${navItem.isActive ? 'text-white' : 'text-gray-400'} cursor-pointer text-center font-PTChaser`}>{navItem.name}</li>)}
                    {/* <li className="p-2 text-white text-center font-PTChaser">Home</li>
                    <li className="p-2 text-white text-center font-PTChaser">About</li>
                    <li className="p-2 text-white text-center font-PTChaser">Speakers & Mentors</li>
                    <li className="p-2 text-white text-center font-PTChaser">Partners</li>
                    <li className="p-2 text-white text-center font-PTChaser">Sponsors</li>
                    <li className="p-2 text-white text-center font-PTChaser">Agenda</li>
                    <li className="p-2 text-white text-center font-PTChaser">FAQ</li>
                    <li className="p-2 text-white text-center font-PTChaser">Contact Us</li> */}
                </ul>
        </div>
    )
}

export default NavMobile