import appleimgsvg from '/assets/images/apple.svg';

import {navLists} from '../constants'

import {bagImg, searchImg} from '../utlis'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleimgsvg}  alt='apple' height={18} width={14}/>

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map(function (nav) {
            return (

              <div key={nav} className='px-5 text-sm cursor-pointer text-grey hover:text-white '>
                {nav}
              </div>
            );
          })}

          
    
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt='search' width={18} height={18}/>
          <img src={bagImg} alt='search' width={18} height={18}/>

        </div>
      </nav>
    </header>
    
  )
}

export default Navbar