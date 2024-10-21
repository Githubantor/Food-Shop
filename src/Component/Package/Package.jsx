import { useState } from "react";

const Price = () => {
    const [isYears, setYears] = useState(false);
    const price = [
        { name: "Start", monthlyPrice: 19, yearlyPrice: 199, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.' },
        { name: "Advance", monthlyPrice: 39, yearlyPrice: 399, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.' },
        { name: "Premium", monthlyPrice: 59, yearlyPrice: 599, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.' }
    ];

    return (
        <div className="mb-9 mt-3 px-4 md:px-8 lg:px-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-primary">Here are all our plans</h2>
                <p className="text-lg mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.</p>
            </div>

            <div className="flex justify-center items-center mb-8">
                <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                    <span className="mr-4 text-lg md:text-xl font-semibold">Yearly</span>
                    <div className="relative w-14 h-6 bg-gray-400 rounded-full transition-all duration-200 ease-in-out">
                        <div
                            className={`absolute w-6 h-6 rounded-full transition-all duration-300 ease-in-out transform ${isYears ? "translate-x-8 bg-primary" : "translate-x-0 bg-black"
                                }`}
                        ></div>
                    </div>
                    <span className="ml-4 text-lg md:text-xl font-semibold">Monthly</span>
                </label>
                <input
                    type="checkbox"
                    id="toggle"
                    className="hidden"
                    checked={isYears}
                    onChange={() => setYears(!isYears)}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {price.map((plan, index) => (
                    <div key={index} className="bg-gradient-to-b from-rose-500 to-rose-700 text-white rounded-lg shadow-xl overflow-hidden">
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="mb-4">{plan.description}</p>
                            <p className="text-xl text-purple-400">
                                ${isYears ? plan.yearlyPrice : plan.monthlyPrice}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Price;
