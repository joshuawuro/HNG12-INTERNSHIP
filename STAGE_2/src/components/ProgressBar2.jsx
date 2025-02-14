function ProgressBar2() {
  return (
    <>
      <div className="grid   mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-Jeju font-semibold">Ticket Selection</h2>
          <p className="font-roboto text-sm">Step 2/3</p>
        </div>
        <div className="progress-container my-2">
          <div className="progress-bar2"></div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar2;
