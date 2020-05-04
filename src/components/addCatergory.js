import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class addCatergory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: "mCatergory",
          countries: [
            { id: "1", country: "Male" },
            { id: "2", country: "Female" },
            { id: "3", country: "Kids" },
            {id : "4", country: "Sports"},
            {id: "5", country: "Special Discount"}
          ]
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        alert("Your favorite flavor is: " + this.state.value);
        event.preventDefault();
      }
    
      handleChange = event => {
        this.setState({ value: event.target.value });
      };
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}> 
          <div className="form-group row"> 
              Select Main Catergory
              <br></br>
              <select className="form-control">
                {this.state.countries.map(item => (
                  <option key={item.id} value={item.country}>
                    {item.country}
                  </option>
                ))}
                {console.log(this.state.countries)}
              </select>
              </div>
            
                  <br></br>
            <div className="form-group">
                <label>Add Subcatergory   </label>
                <input 
                name="subCat"
                className="form-control"
                placeholder="--" 
                value = {this.state.subCat} 
                onChange= {this.onChangesubcat}/>
                </div>

                <input className="btn btn-primary" type="submit" value="ADD" /> 

          </form>

        );
      }
    }
