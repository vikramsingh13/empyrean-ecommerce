'use client'

import { useNavbarContext } from '@/contexts/NavbarContexts';

const Sidebar = () => {

    const [active, setActive] = useNavbarContext();
  return (
    <div>
        <div>
            {active.sidebar && "Sidebar is active"}
        </div></div>
  )
}

export default Sidebar;