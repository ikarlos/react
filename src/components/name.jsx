export default function Name({ func, setclicked }) {
  function handelName(event) {
    const { name, value } = event.target;
    func((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div className="parent">
      <div className="card">
        <label htmlFor="">enter your name</label>
        <input type="text" name="fname" id="" onChange={handelName} />
        <br />
        <label htmlFor="">enter your number</label>
        <input type="number" name="contact" onChange={handelName} />
        <br />
        <button onClick={() => setclicked(true)}> confirm</button>
      </div>
    </div>
  );
}
