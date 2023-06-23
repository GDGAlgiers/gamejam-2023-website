import { useEffect } from "react";
import NavLink from "./NavLink";
import scrollIntoView from 'scroll-into-view'

const SideNav = ({ sectionsRef, navItems, setNavItems, observerRef, doNotObserveScroll }) => {

  useEffect( () => {

    //re-render child when parent props change
    console.log('side nav re-rendered');
    // console.log(observerRef);
    // setNavItems( _prev => navItems);

  }, [navItems, setNavItems])


  const handleClick = (e) => {
    
    //get the index of clicked item 
    const sectionIndex = navItems.findIndex(item => item.name === e.target.innerText);
    if(sectionIndex < 0) return;

    observerRef.current?.disconnect();
    doNotObserveScroll();


    // //set the item's activity
    // setNavItems( prev => {
    //   return prev.map( (prevItem, index) => {
    //     return {...prevItem, isActive: index === sectionIndex}
    //   })
    // })

    //scroll to the section having the target index
    // sectionsRef.current[sectionIndex].scrollIntoView({ behavior: "smooth" })
    
    setTimeout( () => {
      sectionsRef.current[sectionIndex].scrollIntoView({ behavior: "smooth" })
      // scrollIntoView(sectionsRef.current[sectionIndex], () => {
      //   console.log('scroll ended')
      //   //set the item's activity
      //   // setNavItems( prev => {
      //   //   console.log('settings nav items')
      //   //   return prev.map( (prevItem, index) => {
      //   //     return {...prevItem, isActive: index === sectionIndex}
      //   //   })
      //   // })
  
      // })

    }, 1000)

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
