function ProgressBar() {
  return (
    <>
      <div className="grid   mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-Jeju font-semibold">Ticket Selection</h2>
          <p className="font-roboto text-sm">Step 1/3</p>
        </div>
        <div className="progress-container my-2">
          <div className="progress-bar1"></div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
