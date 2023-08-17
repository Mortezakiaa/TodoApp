
function LoginForm() {
  return (
     <section className="flex flex-col items-center h-screen md:flex-row">
        <div className="hidden w-full h-screen bg-indigo-600 lg:block md:w-1/2 xl:w-2/3">
            <img src="https://source.unsplash.com/random" alt="" className="object-cover w-full h-full"/>
        </div>
        <div className="flex items-center justify-center w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
            <div className="w-full h-100">
                <h1 className="mt-12 text-xl font-bold leading-tight md:text-2xl">Log in to your account</h1>
                <form className="mt-6" action="#" method="POST">
                    <div>
                        <label className="block text-gray-700">Email Address</label>
                        <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"/>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"/>
                    </div>
                    <div className="mt-2 text-right">
                        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                    </div>
                    <button type="submit" className="block w-full px-4 py-3 mt-6 font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:bg-indigo-400">Log In</button>
                </form>
                <hr className="w-full my-6 border-gray-300"/>
                <button type="button" className="block w-full px-4 py-3 font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:bg-gray-100">
                    <div className="flex items-center justify-center">
                    <span className="ml-4">
                    Log in
                    with
                    Google</span>
                    </div>
                </button>
                <p className="mt-8">Need an account? <a href="#" className="font-semibold text-blue-500 hover:text-blue-700">Create an account</a></p>
            </div>
        </div>
     </section> 
  )
}

export default LoginForm
