import { FaBus } from "react-icons/fa";


const WhyChooseUs = () => {
    return (
        <>
          <div className="py-14 md:py-28">
            <div className="container">
                <h1 className="py-8 tracking-wider text-3xl font-semibold text-center">why Choose Us</h1>
                <div className="mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
                        {/* first card */}
                        <div className="text-center flex justify-center item-center flex-col gap-1 px-2">
                        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nesciunt</p>
                        <p className="text-5xl rotate-90 text-primary text-center translate-x-5">....</p>
                        <FaBus className="text-5xl text-primary ml-32"></FaBus>
                        </div>
                        <div className="text-center flex justify-center item-center flex-col gap-1 px-2">
                        <FaBus className="text-5xl text-red-500 ml-32"></FaBus>
                        <p className="text-5xl rotate-90 text-red-500 text-center translate-x-5">....</p>
                        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nesciunt</p>
                        </div>
                        <div className="text-center flex justify-center item-center flex-col gap-1 px-2">
                        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nesciunt</p>
                        <p className="text-5xl rotate-90 text-primary text-center translate-x-5">....</p>
                        <FaBus className="text-5xl text-primary ml-32"></FaBus>
                        </div>
                        <div className="text-center flex justify-center item-center flex-col gap-1 px-2">
                        <FaBus className="text-5xl text-red-500 ml-32"></FaBus>
                        <p className="text-5xl rotate-90 text-red-500 text-center translate-x-5">....</p>
                        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nesciunt</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>  
        </>
    );
};

export default WhyChooseUs;