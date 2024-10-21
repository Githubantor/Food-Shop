import { FaUser } from 'react-icons/fa';
import poli from '../../assets/png/polygon.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div 
            style={{ backgroundImage: `url(${poli})` }}
            className="relative bg-cover bg-center py-14 text-white rounded-t-3xl"
        >
            <div className="container mx-auto px-4 min-h-[400px]">
                <h1 className="py-8 text-3xl font-semibold text-center tracking-wider">
                    About Us
                </h1>
                <div className="bg-white/80 text-black font-semibold p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, veniam adipisci cumque quo repudiandae voluptatem quod molestiae explicabo commodi? Quia obcaecati, ratione consequuntur adipisci repudiandae voluptatem culpa alias id dignissimos tempore iure harum reiciendis omnis beatae quam dolorum vero possimus nobis, amet quos est asperiores? Nemo sed, nostrum accusantium facere, reiciendis quibusdam esse perspiciatis ex tempore exercitationem voluptatibus, aliquam corrupti omnis tenetur. Sunt fuga magnam provident velit ex voluptatibus, sequi quaerat assumenda libero porro.
                    </p>
                    <div className="flex justify-center">
                        <Link to='/login'>
                            <button className="flex items-center bg-orange-500 border border-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
                                <FaUser className="mr-2" />
                                My Account
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
