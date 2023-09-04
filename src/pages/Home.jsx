
import Pannel from "../components/Pannel";
import SocialMedia from "../components/SocialMedia";

function Home() {
    return(
        <div className="flex flex-col justify-start gap-y-10 h-screen overflow-x-hidden animate-flip-down animate-once">
            <div >
                <div className="w-full text-center text-3xl my-4" >معرفة •  تقنية • ابداع</div>
            </div>
            <Pannel/>
            <SocialMedia/>
        </div>
    )
}



export default Home