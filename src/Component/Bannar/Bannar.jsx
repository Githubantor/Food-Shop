import heroImg from '../../assets/png/hero.png';
import bgImg from '../../assets/png/heroBg.png';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Bannar = () => {
    return (
        <div 
            style={{ backgroundImage: `url(${bgImg})` }}
            className="relative bg-cover bg-center bg-no-repeat min-h-[600px] py-16"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                            Fresh and Healthy meal plan delivery in <span className="text-green-400">Narsingdi</span>
                        </h1>
                        <p className="text-lg mb-6">
                            Delicious meals delivered <br /> 
                            to you from $132.54 <br />
                            per week
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <PrimaryButton />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={heroImg} alt="Hero" className="w-full max-w-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;
