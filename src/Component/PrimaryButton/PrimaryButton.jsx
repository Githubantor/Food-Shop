import { FaArrowRight } from 'react-icons/fa';
const PrimaryButton = () => {
    return (
        <div className="group">
  <button className="border-blue-400 bg-primary h-[40px] text-white px-3 py-2 flex items-center group-hover:pl-4 transition-all duration-200">
    Choose Your Meal Plan
    <FaArrowRight
      className="inline-block ml-2 transform group-hover:translate-x-2 transition-transform duration-200"
    />
  </button>
</div>

    );
};

export default PrimaryButton;