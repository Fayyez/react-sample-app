import "./decor.css"
export default function App() {
  return  <>
  <h1>Job Application Form</h1>
  <h2>Section 1</h2>
  <form>
      <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="fullName" />
      </div>
      <br></br>
      <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
      </div>
      <br></br>
      <div>
          <label htmlFor="jobLocation">job Location</label>
          <select id="jobLocation">
              <option value="">Select a country</option>
              <option value="pak">Pakistan</option>
              <option value="US">USA</option>
              <option value="Dubai">Dubai</option>
          </select>
      </div>
      <br></br>
      <div>
          <label>
              <input type="checkbox" id="terms" />
              I agree to the terms and Conditions
          </label>
      </div>
      <button>Submit</button>
  </form>
</>
}

/* <form className="xyz-form" data-cy="xyz">
    <div className="form-row"  data-cy="row">
      <label htmlFor="">List</label>
      <input type="text"></input>
    </div>
    <button className="Btn-class">ADD</button>
  </form>
  <h1 className=""></h1> */