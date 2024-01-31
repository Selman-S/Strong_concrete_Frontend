import { ToggleHamburgerHorizontalIcon } from "@/app/icons"
import { selectThemeConfig, themeConfigSlice } from '@/lib/redux/slices/themeConfigSlice';
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux";

const NavbarLogo = () => {
 const dispatch = useDispatch();
 return (
  <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden">
   <Link href="/" className="main-logo flex shrink-0 items-center">
    <Image width={32} height={28} className="inline w-8 ltr:-ml-1 rtl:-mr-1" src="/assets/images/logo.svg" alt="logo" />
    <span className="hidden align-middle text-2xl  font-semibold  transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline">SC</span>
   </Link>
   <button
    type="button"
    className="collapse-icon  flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
    onClick={() => dispatch(themeConfigSlice.actions.toggleSidebar())}
   >
    <ToggleHamburgerHorizontalIcon />
   </button>
  </div>
 )
}

export default NavbarLogo