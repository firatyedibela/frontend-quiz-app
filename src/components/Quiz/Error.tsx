function Error() {
  return (
    <div className="quiz__error">
      <img
        className="quiz__error-icon"
        src="/assets/images/icon-error.svg"
        alt="Error icon"
      />
      <p className="quiz__error-text">Please select an answer</p>
    </div>
  );
}

export default Error;
