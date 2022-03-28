import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between  max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/" >
                <img src="/images/logo.png" alt="Logo"  className="object-contain cursor-pointer w-36  "/>
            </Link>
            <div className="hidden md:inline-flex space-x-5 items-center">
                <h3>
                    About
                </h3>

                <h3>
                    Contact
                </h3>
                <h3 className="text-white bg-green-600 rounded-full px-4 py-1 text-x">
                    Follow
                </h3>
            </div>
        </div>
        
        <div className="flex items-center space-x-5">
            <h3 className="text-green-600">Sign In</h3>
            <h3 className="text-green-600 rounded-full border px-4 py-1 border-green-600">Get started</h3>
        </div>
    </header>
  )
}

export default Header