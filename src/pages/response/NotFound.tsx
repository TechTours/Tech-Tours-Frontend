const NotFound = () => {
    return ( 
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl font-semibold text-red-500">404 - Not Found</h1>
            <p className="mt-4 text-gray-600">The page you are looking for could not be found.</p>
            <p className="mt-4"><a href="/" className="text-blue-500 hover:underline">Go back to the homepage</a></p>
        </div>
        </div>
     );
}
 
export default NotFound;