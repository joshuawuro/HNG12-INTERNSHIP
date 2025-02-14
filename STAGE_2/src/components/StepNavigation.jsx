function StepNavigation({ onNext, onCancel }) {
  return (
    <div className="grid md:flex justify-between mt-6">
      <button
        className="px-4 py-2 rounded-lg text-nextblue md:w-1/2 border border-nextblue mr-1 w-60 mb-1"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button
        className="px-4 py-2 ml-1 bg-nextblue rounded-lg md:w-1/2 mt-1 w-60"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
}

export default StepNavigation;
