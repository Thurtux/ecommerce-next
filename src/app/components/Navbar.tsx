import Link from "next/link";

function Navbar() {
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-gray-950 text-gray-50"> 
        <Link className="uppercase text-md font-bold flex items-center" href="/">STREET STORE</Link> 
          
        </nav>
    )
}

export default Navbar;