import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const params=useParams()
  const navigate=useNavigate()
    const formik = useFormik({
      initialValues: {
        Name: "",
        Position: "",
        Office: "",
        Age: "",
        Startdate: "",
        Salary: "",
      },
  
      validate: (values) => {
        let errors = {};
        if (values.Name === "") {
          errors.Name = "Please enter username";
        } 
        if (values.Name.length<5){ 
          errors.Name = "Please enter greater than 5";
        }
  
        if (values.Position === "") {
          errors.Position = "Please enter position";
        }
  
        return errors;
      },
  
      onSubmit: async(values) => {
       await axios.put(`https://624a7fdb852fe6ebf887ce66.mockapi.io/users/${params.id}`,values)
      navigate("/portal/users")
      },
    });

useEffect(()=>{
  loadUser()
},[])

let loadUser=async()=>{
  try {
   let user= await axios.get(`https://624a7fdb852fe6ebf887ce66.mockapi.io/users/${params.id}`)
formik.setValues({
  Name: user.data.Name,
  Position: user.data.position,
  Office:user.data.office,
  Age:user.data.age,
  Startdate:user.data.startdate,
  Salary: user.data.salary,
},

)
  } catch (error) {
    
  }
}


    return (
      <>
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <label>Name</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.Name}
                  onChange={formik.handleChange}
                  name="Name"
                />
                <span style={{ color: "red" }}>{formik.errors.Name}</span>
              </div>
              <div className="col-lg-6">
                <label>Position</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.Position}
                  onChange={formik.handleChange}
                  name="Position"
                />
                <span style={{ color: "red" }}>{formik.errors.Position}</span>
              </div>
              <div className="col-lg-6">
                <label>Office</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.Office}
                  onChange={formik.handleChange}
                  name="Office"
                />
              </div>
              <div className="col-lg-6">
                <label>Age</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.Age}
                  onChange={formik.handleChange}
                  name="Age"
                />
              </div>
              <div className="col-lg-6">
                <label>Start date</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.Startdate}
                  onChange={formik.handleChange}
                  name="Startdate"
                />
              </div>
              <div className="col-lg-6">
                <label>Salary</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.Salary}
                  onChange={formik.handleChange}
                  name="Salary"
                />
              </div>
              <div className="col-lg-6">
                <input
                  className="btn btn-primary mt-2 "
                  type={"Submit"}
                  value="Submit"
                  disabled={!formik.isValid}
                />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }

export default EditUser;

