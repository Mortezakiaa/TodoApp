import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";
function MainContainer({children}) {
  return (
    <>
        <main>
            <div className="flex flex-col md:flex-row">
                <nav aria-label="alternative nav">
                    <div className="fixed bottom-0 z-10 content-center w-full h-20 mt-12 bg-gray-800 shadow-xl md:relative md:h-screen md:w-48">
                        <div className="content-center justify-between text-left md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 md:content-start">
                            <ul className="flex flex-row px-1 pt-3 text-center list-reset md:flex-col md:py-3 md:px-2 md:text-left">
                                <li className="flex-1 mr-3">
                                    <Link href="/Todos" className="flex items-center gap-2 py-1 pl-1 text-white no-underline align-middle border-b-2 border-gray-800 md:py-3 hover:text-white hover:border-pink-500">
                                        <VscListSelection /><span className="text-gray-400 ext-xs md:pb-0 md:text-base md:text-gray-200 md:inline-block">Todos</span>
                                    </Link>
                                </li>
                                <li className="flex-1 mr-3">
                                    <Link href="/addTodo" className="flex items-center gap-2 py-1 pl-1 text-white no-underline align-middle border-b-2 border-gray-800 md:py-3 hover:text-white hover:border-purple-500">
                                        <BiMessageSquareAdd /><span className="text-xs text-gray-400 md:pb-0 md:text-base md:text-gray-200 md:inline-block">Add Todo</span>
                                    </Link>
                                </li>
                                <li className="flex-1 mr-3">
                                    <Link href="#" className="flex items-center gap-2 py-1 pl-1 text-white no-underline align-middle border-b-2 border-blue-600 md:py-3 hover:text-white">
                                        <RxDashboard /><span className="text-xs text-white md:pb-0 md:text-base md:text-white md:inline-block">Profile</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section className="mt-[37px] w-[100%] h-screen">
                    <div id="main" className="flex-1 pb-24 mt-12 bg-gray-100 main-content md:mt-2 md:pb-5 h-[100%]">
                        {children}
                    </div>
                </section>
            </div>
        </main> 
    </>
  )
}

export default MainContainer
