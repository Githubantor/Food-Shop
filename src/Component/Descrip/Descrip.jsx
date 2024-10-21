import apple from '../../assets/png/apple.png';
import kiwi from '../../assets/png/kiwi.png';
import lemon from '../../assets/png/lemon.png';
import leaf from '../../assets/png/leaf.png';
import tomato from '../../assets/png/tomato.png';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Descrip = () => {
    return (
        <div className="relative overflow-hidden text-black">
            <div className="container mx-auto px-4 py-8">
                <h1 className='py-8 tracking-wider text-3xl font-semibold text-center'>
                    Taste the healthy difference
                </h1>
                <div className='space-y-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-10'>
                        <div>
                            <p className='font-semibold text-base md:text-lg'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,<br />
                                ut. Aliquam alias adipisci sint fugit earum accusamus,<br />
                                aut ipsam veniam sed at, nihil, vitae ex.
                            </p>
                        </div>
                        <div></div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-10'>
                        <div></div>
                        <div>
                            <p className='font-semibold text-base md:text-lg'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,<br />
                                ut. Aliquam alias adipisci sint fugit earum accusamus,<br />
                                aut ipsam veniam sed at, nihil, vitae ex.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <PrimaryButton />
                </div>
            </div>
            <div className='absolute top-0 left-0 transform -translate-x-1/4 sm:-translate-x-1/2 opacity-30 sm:opacity-100'>
                <img src={leaf} alt="Leaf" className='w-32 md:w-40 lg:w-48' />
            </div>
            <div className='absolute bottom-0 left-0 transform -translate-x-1/4 sm:-translate-x-1/2 opacity-30 sm:opacity-100'>
                <img src={tomato} alt="Tomato" className='w-40 md:w-48 lg:w-56' />
            </div>
            <div className='absolute top-16 right-16 sm:right-20 opacity-30 sm:opacity-100'>
                <img src={lemon} alt="Lemon" className='w-32 md:w-40 lg:w-48' />
            </div>
            <div className='absolute bottom-0 right-0 opacity-30 sm:opacity-100'>
                <img src={apple} alt="Apple" className='w-32 md:w-40 lg:w-48' />
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 sm:opacity-100'>
                <img src={kiwi} alt="Kiwi" className='w-32 md:w-40 lg:w-48' />
            </div>
        </div>
    );
};

export default Descrip;
