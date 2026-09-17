import './index.css'

export default function Test() {
  return (
    <div>
        <nav className="px-6 py-4 flex sticky top-0 justify-between border-b border-gray-400"> {/* Header */}
            <div className="p-2 bg-gray-300">
                <p>Logo</p>
            </div>
            <div className="p-2 bg-gray-300 hidden md:flex gap-2">
                <h1 className="bg-gray-200">Button</h1>
                <h1 className="bg-gray-200">Button</h1>          
                <h1 className="bg-gray-200">Button</h1>          
            </div>
            <div className="p-2 bg-gray-300">
                <button>Theme Btn</button>
            </div>
        </nav>   
        <section className="px-4 py-20 flex flex-col gap-4 border-b border-gray-400">  {/* Hero */}
            <div className="p-2 bg-gray-300">
                Role
            </div>
            <div className="p-2 bg-gray-300">
                <h1>Title</h1>
            </div>
            <div className="p-2 bg-gray-300 flex gap-4">
                <button className="p-2 bg-gray-200">Btn1</button>
                <button className="p-2 bg-gray-200">Btn2</button>
            </div>
        </section>
        <section className="px-4 py-20 flex flex-col gap-6 border-b border-gray-400">
            <div className="p-2 bg-gray-300 flex gap-2">
                <span>01</span>
                <h1>Selected Projects</h1>
            </div>
            <div className="p-2 bg-gray-300 flex flex-col gap-4">
                <div className="bg-gray-200 flex flex-col md:flex-row gap-2 md:gap-4 border-b border-gray-400">
                    <span>Date</span>
                    <div className="flex flex-col gap-2">
                        <h1>Project Title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="bg-gray-100 flex gap-2">
                            <span className="p-1 bg-blue-500 text-white">Tag1</span>
                            <span className="p-1 bg-blue-500 text-white">Tag2</span>
                            <span className="p-1 bg-blue-500 text-white">Tag3</span>
                        </div>
                    </div>               
                </div>
                <div className="bg-gray-200 flex flex-col md:flex-row gap-2 md:gap-4 border-b border-gray-400">
                    <span>Date</span>
                    <div className="flex flex-col gap-2">
                        <h1>Project Title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="bg-gray-100 flex gap-2">
                            <span className="p-1 bg-blue-500 text-white">Tag1</span>
                            <span className="p-1 bg-blue-500 text-white">Tag2</span>
                            <span className="p-1 bg-blue-500 text-white">Tag3</span>
                        </div>
                    </div>               
                </div>               
            </div>
        </section>
        <section className="px-4 py-20 flex flex-col gap-6 border-b border-gray-400">
            <div className="p-2 bg-gray-300 flex gap-2">
                <span>02</span>
                <h1>About</h1>
            </div>
            <div className="p-2 bg-blue-300 flex flex-col md:flex-row-reverse gap-4">  
                <div className="bg-gray-300 flex flex-col gap-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="bg-gray-300 flex flex-col gap-2">
                        <div className="bg-gray-200 flex gap-2 items-center">
                            <span className="bg-gray-100">Icon</span>
                            <span className="bg-gray-100">contact</span>
                        </div>
                        <div className="bg-gray-200 flex gap-2 items-center">
                            <span className="bg-gray-100">Icon</span>
                            <span className="bg-gray-100">contact</span>
                        </div>
                        <div className="bg-gray-200 flex gap-2 items-center">
                            <span className="bg-gray-100">Icon</span>
                            <span className="bg-gray-100">contact</span>
                        </div>
                        <div className="bg-gray-200 flex gap-2 items-center">
                            <span className="bg-gray-100">Icon</span>
                            <span className="bg-gray-100">contact</span>
                        </div>
                    </div>
                </div>                                              
                <img className="w-100 md:w-75" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Portrait" />
            </div>            
        </section>
        <footer className="px-6 py-4">
            <div className=" bg-gray-300 text-center flex flex-col md:flex-row justify-between">
                <span>© 2026 Giovanni Criscuolo — Italy</span>
                <span>Cover image by John Doe</span>
            </div>     
        </footer>
    </div>
  );
}