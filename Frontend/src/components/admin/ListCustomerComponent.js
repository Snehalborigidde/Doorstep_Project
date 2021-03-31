import React, { Component } from 'react'
import ServiceProviderSerive from '../service/ServiceProviderSerive'
import '../../css/home.css'
export class ListCustomerComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customers: [],
    }

    this.deleteCustomer = this.deleteCustomer.bind(this)

  }

  deleteCustomer(id) {
    ServiceProviderSerive.deleteCustomer(id).then((res) => {
      this.setState({
        customers: this.state.customers.filter(
          (customer) => customer.id !== id
        ),
      })
    })
  }
  

  componentDidMount() {
    ServiceProviderSerive.getcustomers().then((res) => {
      this.setState({
        customers: res.data,
      })
    })
  }

 

  render() {
    return (
      <div className="customerlist">
        <h2 className="text-center" id="h2s"> Customer's List</h2>
        <div className="row" style={{padding:40,marginRight:60}}>
          <table className="table table-striped table-bordered">
            <thead >
              <tr>
                {/* <th className="hidden">Id</th> */}
                <th id="labels">First Name</th>
                <th id="labels">Last Name</th>
                <th id="labels">Email</th>
                <th id="labels">Contact</th>
                <th id="labels">House No</th>
                <th id="labels">Street</th>
                <th id="labels">Area</th>
                <th id="labels">Landmark</th>
                <th id="labels">Actions</th>
               
              </tr>
            </thead>

            <tbody>
              {this.state.customers.map((customer) => (
                <tr key={customer.id}>
                  <td id="label"> {customer.firstName}</td>
                  <td id="label"> {customer.lastName}</td>
                  <td id="label"> {customer.email}</td>
                  <td id="label"> {customer.contactNo}</td>
                  <td id="label"> {customer.houseNo}</td>
                  <td id="label"> {customer.street}</td>
                  <td id="label"> {customer.area}</td>
                  <td id="label"> {customer.landmark}</td>

                  <td>
                    <button
                      style={{ marginLeft: '25px' }}
                      onClick={() => this.deleteCustomer(customer.id)}
                      className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListCustomerComponent
