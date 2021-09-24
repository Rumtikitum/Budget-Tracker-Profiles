import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpeg";

function Budget() {

  return (
    <section className="my-5" >
      <h1 id="budget">Create your budget</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
      </div>
      <div>
        <form>
          <label>
            Income
            <input type="text" name="income" />
          </label>
          <br></br>
          <label>
            Rent
            <input type="text" name="rent" />
          </label>
          <br></br>
          <label>
            Car
            <input type="text" name="car" />
          </label>
          <br></br>
          <label>
            Utilities
            <input type="text" name="utilities" />
          </label>
          <br></br>
          
          <label>
            Misc 1
            <input type="text" name="misc1" />
          </label>
          <br></br>
          <label>
            Misc 2
            <input type="text" name="misc2" />
          </label>
          <br></br>
          <label>
            Misc 3
            <input type="text" name="misc3" />
          </label>
          <br></br>
          <label>
            Goal Cost?
            <input type="text" name="goal" />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  )
}

export default Budget