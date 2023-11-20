"use client";
const error = ({ error, reset }) => {
  return (
    <div>
      <h2>{error.message}</h2>

      <div onClick={() => reset()} className="button">
        clear
      </div>
    </div>
  );
};

export default error;
