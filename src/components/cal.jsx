import { useState } from "react";
import travel from "./travel";
import hotels from "./hotel";

export default function CAL() {
  const [overAll, setoverAll] = useState({
    contact: " ",
    number_of_people: 0,
    hotels: 0,
    travel: 0,
    shikara: 0,
    gardenfee: 0,
    lunch: 0,
    dinner: 0,
    breakfast: 0,
    guide: 0,
    gondolaphase1: 0,
    gondolaphase2: 0,
    total_without_gst_commision: 0,
    gst: 0,
    commision: 0,
    total: 0
  });
  const [isSubmitted, setIssubmitted] = useState(false);
  const [numberOfpeo, setnumberOfpeo] = useState(0);
  const [child, setchild] = useState(0);
  const [adult, setadult] = useState(0);
  const [cost, setCost] = useState(0);
  const [isExpand1, setExpand1] = useState(false);
  const [isExpand2, setisExpand2] = useState(false);
  const [isExpand3, setisExpand3] = useState(false);
  const [isExpand4, setisExpand4] = useState(false);
  const [isExpand5, setisExpand5] = useState(false);
  const [isExpand6, setisExpand6] = useState(false);
  const [isExpand7, setisExpand7] = useState(false);
  const [isExpand8, setisExpand8] = useState(false);
  const [isExpand9, setisExpand9] = useState(false);
  const [isExpand10, setisExpand10] = useState(false);
  const [isExpand11, setisExpand11] = useState(false);
  const [isExpand12, setisExpand12] = useState(false);
  const [isExpand13, setisExpand13] = useState(false);

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [sTravel, setStravel] = useState("");

  const [selectedHotel, setselctedHotel] = useState(null);
  const [noOfrooms, setnoOfrooms] = useState(0);
  const [costomernumber, setCostomerno] = useState("");

  const calculateOverall = () => {
    let sum = 0;
    Object.keys(overAll).map((key) => {
      if (key !== "number" && key !== "contact") {
        console.log(key);
        console.log(overAll[key]);

        sum += overAll[key];
      }
      setCost(overAll["number"] * sum);
    });
  };

  const han = (event) => {
    event.preventDefault();
    isExpand1 ? setExpand1(false) : setExpand1(true);
  };
  // calculating number of people
  const calculateNUMberofpeople = (event) => {
    event.preventDefault();
    setCost(0);
    setnumberOfpeo(child + adult);
    // calculateOverall();
    setoverAll((prev) => {
      return {
        ...prev,
        number_of_people: child + adult,
        total: 0
      };
    });
    console.log(overAll.number_of_people);
  };
  const han2 = (event) => {
    event.preventDefault();
    isExpand2 ? setisExpand2(false) : setisExpand2(true);
  };
  const han4 = (event) => {
    event.preventDefault();

    setnoOfrooms(Math.floor((child + adult) / 2));

    isExpand4 ? setisExpand4(false) : setisExpand4(true);
  };

  const han5 = (event) => {
    event.preventDefault();

    isExpand5 ? setisExpand5(false) : setisExpand5(true);
  };

  const han6 = (event) => {
    event.preventDefault();

    isExpand6 ? setisExpand6(false) : setisExpand6(true);
  };

  const han7 = (event) => {
    event.preventDefault();

    isExpand7 ? setisExpand7(false) : setisExpand7(true);
  };

  const han8 = (event) => {
    event.preventDefault();

    isExpand8 ? setisExpand8(false) : setisExpand8(true);
  };

  const han9 = (event) => {
    event.preventDefault();

    isExpand9 ? setisExpand9(false) : setisExpand9(true);
  };
  const han10 = (event) => {
    event.preventDefault();

    isExpand10 ? setisExpand10(false) : setisExpand10(true);
  };
  const han11 = (event) => {
    event.preventDefault();

    isExpand11 ? setisExpand11(false) : setisExpand11(true);
  };

  const han12 = (event) => {
    event.preventDefault();

    isExpand12 ? setisExpand12(false) : setisExpand12(true);
  };

  const han13 = (event) => {
    event.preventDefault();

    isExpand13 ? setisExpand13(false) : setisExpand13(true);
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    let opt = travel.find((t) => t.title === event.target.value);
    // console.log(opt.option);
    setOptions(opt.option);
  };
  const setStravelValue = (event) => {
    const { name, value } = event.target;
    console.log(value);

    setStravel(value);
    const priceOPtion = options.find((t) => t.name === value);

    setCost((prev) => prev + priceOPtion.price * numberOfpeo);
    setoverAll((prev) => {
      return {
        ...prev,
        travel: priceOPtion.price * numberOfpeo,
        total: cost
      };
    });
    console.log(cost);
  };
  // shikara handel
  const addShikara = (event) => {
    event.preventDefault();

    setCost((prev) => prev + 500 * numberOfpeo);
    setoverAll((prev) => {
      return {
        ...prev,
        shikara: 500 * numberOfpeo,
        total: cost
      };
    });
  };

  // garden
  const han3 = (event) => {
    event.preventDefault();
    isExpand3 ? setisExpand3(false) : setisExpand3(true);
  };
  function handelchild(event) {
    setchild(Number(event.target.value));
  }
  function handelAdult(event) {
    setadult(Number(event.target.value));
  }
  const calculateGardenfee = (event) => {
    event.preventDefault();

    setCost((prev) => prev + child * 12 + adult * 24);
    setoverAll((prev) => {
      return {
        ...prev,
        gardenfee: child * 12 + adult * 24
      };
    });
    setoverAll((prev) => {
      return {
        ...prev,
        total: cost
      };
    });
  };

  // addluch
  const addLunch = (event) => {
    event.preventDefault();

    setCost((prev) => prev + 350);
    setoverAll((prev) => {
      return {
        ...prev,
        lunch: overAll.lunch + 350,
        total: cost
      };
    });
  };
  // dinner
  const addDinner = (event) => {
    event.preventDefault();

    setCost((prev) => prev + 800);
    setoverAll((prev) => {
      return {
        ...prev,
        dinner: overAll.dinner + 800,
        total: cost
      };
    });
  };
  // breackfast
  const addBreackfast = (event) => {
    event.preventDefault();

    setCost((prev) => prev + 600);

    setoverAll((prev) => {
      return {
        ...prev,
        breackfast: overAll.breackfast + 600,
        total: cost
      };
    });
  };

  // guid
  const addGuide = (event) => {
    event.preventDefault();

    setCost((prev) => prev + 1000);
    setoverAll((prev) => {
      return {
        ...prev,
        guid: 1000,
        total: cost
      };
    });

    console.log(overAll);
  };
  // gondola
  const addGondola1 = (event) => {
    event.preventDefault();

    setCost((prev) => prev + 740);
    setoverAll((prev) => {
      return {
        ...prev,
        gondolaphase1: overAll.gondolaphase1 + 740,
        total: cost
      };
    });
  };
  const addGondola2 = (event) => {
    event.preventDefault();

    setCost((prev) => prev + 2950);
    setoverAll((prev) => {
      return {
        ...prev,
        gondolaphase2: overAll.gondolaphase2 + 2950,
        total: cost
      };
    });
  };
  const handleSelectHotel = (event) => {
    const { name, value } = event.target;
    setselctedHotel(value);
  };
  const roomChange = (event) => {
    const { name, value } = event.target;
    setnoOfrooms(value);
  };
  const submitHotel = (event) => {
    event.preventDefault();
    if (Math.floor((child + adult) / 2) <= noOfrooms) {
      if (selectedHotel !== null) {
        const selected = hotels.find((t) => {
          return t.stars == selectedHotel;
        });
        setoverAll((prev) => {
          return {
            ...prev,
            hotels: selected.price * noOfrooms,
            total: cost
          };
        });
        setCost((prev) => prev + selected.price * noOfrooms);
      }
    } else {
      alert("a room can only accomdate maximum 2 adult and 1 child");
    }
  };

  //add gst

  const addgst = () => {
    setoverAll((prev) => {
      return {
        ...prev,
        gst: 0.18 * cost
      };
    });
    setCost((prev) => prev + 0.18 * prev);
    setoverAll((prev) => {
      return {
        ...prev,
        total: cost
      };
    });
  };
  // addcommision
  const addCommision = (event) => {
    const { name, value } = event.target;
    setoverAll((prev) => {
      return {
        ...prev,
        commision: ((parseInt(value) / 100) * cost).toFixed(2)
      };
    });
    setCost((prev) => (prev + (parseInt(value) / 100) * prev).toFixed(2));
  };
  const handelCosno = (event) => {
    setCostomerno(event.target.value);
    setoverAll((prev) => {
      return {
        ...prev,
        contact: costomernumber
      };
    });
  };
  // reset
  const reset = () => {
    setCost(0);
    Object.keys(overAll).map((keys) => {
      overAll[keys] = 0;
    });
  };
  async function postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return response.json(); // Return the response data parsed as JSON
  }
  const handleSubmit = async () => {
    // e.preventDefault();

    try {
      const response = await postData(
        "https://email-send.117fahad.repl.co",
        overAll
      );
      console.log(response); // Handle the response data
    } catch (error) {
      console.error(error);
    }
  };

  const submit = (event) => {
    setoverAll((prev) => {
      return {
        ...prev,
        total: cost
      };
    });

    setoverAll((prev) => {
      return {
        ...prev,
        total_without_gst_commision: cost - overAll.commision - overAll.gst
      };
    });
    // console.log(overAll);
    // sendMail();
    event.preventDefault();
    setIssubmitted(true);
    handleSubmit();
  };
  // back
  const backButton = (event) => {
    event.preventDefault();
    setIssubmitted(false);
  };

  return (
    <div>
      {!isSubmitted && (
        <div className="container">
          <h1>Tourist Calculator</h1>
          <form>
            <button className="option" onClick={han}>
              Number of persons
            </button>
            {isExpand1 && (
              <div className="garden">
                <label htmlFor=""> number of adult: </label>
                <input
                  className="numb"
                  type="number"
                  value={adult}
                  onChange={handelAdult}
                />
                <br />
                <label htmlFor=""> number of children: </label>
                <input
                  className="numb"
                  type="number"
                  onClick={() => {
                    alert(
                      "age of child must be below 6 \n you must bring the age proof with your self"
                    );
                  }}
                  onChange={handelchild}
                  value={child}
                />
                <br />
                <input
                  type="checkbox"
                  name=""
                  onChange={calculateNUMberofpeople}
                  id=""
                />
                <label htmlFor="">confirm</label>
              </div>
            )}
            <button onClick={han4} className="option">
              Hotels
            </button>
            {isExpand4 && (
              <div className="garden">
                <label htmlFor="cars">Choose hotel : </label>
                <select
                  id="cars"
                  value={selectedHotel}
                  onChange={handleSelectHotel}
                >
                  <option>None</option>
                  {hotels.map((t, index) => (
                    <option key={index} value={t.title}>
                      {t.stars}
                    </option>
                  ))}
                </select>
                <br />
                <label htmlFor="rooms"> enter number of rooms: </label>

                <input
                  className="numb"
                  type="number"
                  name="roomno"
                  id="rooms"
                  value={noOfrooms}
                  onChange={roomChange}
                />
                <br />
                <input type="checkbox" name="" onChange={submitHotel} id="" />

                <label htmlFor="">confirm</label>
              </div>
            )}

            <button className="option" onClick={han2}>
              Travel
            </button>
            {isExpand2 && (
              <div>
                <label htmlFor="cars">Choose Car : </label>
                <select
                  id="cars"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option>None</option>
                  {travel.map((t, index) => (
                    <option key={index} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                </select>
                <select
                  name=""
                  id=""
                  value={sTravel}
                  onChange={setStravelValue}
                >
                  <option value="none">none</option>
                  {options.map((op, index) => {
                    if (numberOfpeo <= op.capacity) {
                      return <option key={index}>{op.name}</option>;
                    } else {
                      return null;
                    }
                  })}
                </select>
                <br />
                <input type="checkbox" name="" id="" />
                <label htmlFor="">confirm</label>
              </div>
            )}
            <button onClick={han3} className="option">
              Shikara Ride
            </button>
            {isExpand3 && (
              <div className="">
                <input type="checkbox" name="" onChange={addShikara} id="" />
                <label htmlFor=""> confirm</label>
              </div>
            )}
            <button onClick={han5} className="option">
              garden fees
            </button>
            {isExpand5 && (
              <div>
                <input
                  type="checkbox"
                  name=""
                  onChange={calculateGardenfee}
                  id=""
                />
                <label htmlFor="">confirm</label>
              </div>
            )}
            <button onClick={han6} className="option">
              {" "}
              Lunch per thali
            </button>
            {isExpand6 && (
              <div>
                <input type="checkbox" name="" onChange={addLunch} id="" />
                <label htmlFor="">confirm</label>
              </div>
            )}

            <button onClick={han7} className="option">
              {" "}
              dinner/buffet{" "}
            </button>
            {isExpand7 && (
              <div>
                <input type="checkbox" name="" onChange={addDinner} id="" />
                <label htmlFor="">confirm</label>
              </div>
            )}
            <button onClick={han8} className="option">
              breakfast /buffet
            </button>
            {isExpand8 && (
              <div>
                <input type="checkbox" name="" id="" onChange={addBreackfast} />
                <label htmlFor="">confirm</label>
              </div>
            )}
            <button onClick={han9} className="option">
              add guide
            </button>
            {isExpand9 && (
              <div>
                <input type="checkbox" name="" onChange={addGuide} id="" />
                <label htmlFor="">confirm</label>
              </div>
            )}
            <button onClick={han10} className="option">
              {" "}
              Gondola phase 1
            </button>
            {isExpand10 && (
              <div>
                <input type="checkbox" name="" onChange={addGondola1} id="" />
                <label htmlFor="">confirm</label>
              </div>
            )}
            <button onClick={han11} className="option">
              {" "}
              Gondola phase 2
            </button>
            {isExpand11 && (
              <div>
                <input type="checkbox" name="" onChange={addGondola2} id="" />
                <label htmlFor="">confirm</label>
              </div>
            )}

            <button className="option" onClick={han12}>
              {" "}
              add gst
            </button>
            {isExpand12 && (
              <div>
                <input type="checkbox" name="" onChange={addgst} id="" />
                <label htmlFor=""> confirm</label>
              </div>
            )}

            <button className="option" onClick={han13}>
              {" "}
              add commission
            </button>
            {isExpand13 && (
              <div className="commsion">
                <input
                  type="checkbox"
                  onChange={addCommision}
                  name="10%"
                  value="10"
                  id="10%"
                />
                <label htmlFor="10%">add 10% comission</label>
                <br />
                <input
                  type="checkbox"
                  onChange={addCommision}
                  name="20%"
                  id="20%"
                  value="20"
                />
                <label htmlFor="20%">add 20% comission</label>
                <br />
                <input
                  type="checkbox"
                  onChange={addCommision}
                  name="30%"
                  id="30%"
                  value="30"
                />
                <label htmlFor="30%">add 30% comission </label>
              </div>
            )}
            <div className="contact">
              <label htmlFor="">optional</label>
              <br />
              <input
                type="text"
                onChange={handelCosno}
                placeholder="enter your number"
              />
            </div>
            <button onClick={submit} id="submit">
              submit
            </button>
            <input onClick={reset} id="reset" type="reset" value="Start Over" />
          </form>

          <h2>Total cost: {cost}</h2>
        </div>
      )}
      {isSubmitted && (
        <div>
          <table>
            <thead>
              {Object.keys(overAll).map((keys) => (
                <tr>
                  {" "}
                  <th>{keys}</th>
                  <tbody>{overAll[keys]}</tbody>
                </tr>
              ))}
            </thead>
          </table>
          <button className="back" onClick={backButton}>
            back
          </button>
        </div>
      )}
    </div>
  );
}
