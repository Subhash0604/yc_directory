import { auth } from "@/auth"
import StartupForm from "@/components/StartupForm"
import { redirect } from "next/navigation";

const page =  async() => {
  const session = await auth();
  
  if(!session) redirect('/')
  return (
    <>
    <section className="pink_container !min-h-[230px]">
        <h1 className="headings">
            Submit your Startup
        </h1>
   <p>
     Pitch to your startups
   </p>
    </section>

    <StartupForm/>
    </>
  )
}

export default page
