
//Footer function
const Footer = () => {
  return (
    <div>
    <div className="mt-8 w-full bg-slate-400 px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
       <div className="flex flex-col text-black">
         <p>Featured Blogs</p>
         <p>Most viewed</p>
         <p>Readers Choice</p>
       </div>

       <div className="flex flex-col text-black">
         <p>Forum</p>
         <p>Support</p>
         <p>Recent Posts</p>
       </div>

       <div className="flex flex-col text-black">
         <p>Privacy Policy</p>
         <p>About Us</p>
         <p>Terms & Conditions</p>
         <p>Terms of Service</p>
       </div>
       
    </div>
    <p className="bg-slate-400 py-2 pb-6 text-center text-black bg-black text-sm">Arush Sacheti @Brighspot Project</p>
   </div>
  )
}

export default Footer