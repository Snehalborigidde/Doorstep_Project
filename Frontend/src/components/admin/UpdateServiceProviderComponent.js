import React, { Component } from 'react'
import ServiceProviderSerive from '../service/ServiceProviderSerive';

 class UpdateServiceProviderComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        id: this.props.match.params.id,
         firstName: '',
         lastName: '',
         serviceType: '',
         serviceCost: '',
         email:'',
         contactNo:'',
         experience:'',
         rating:''
        }
 
        this.updateServiceprovider = this.updateServiceprovider.bind(this);
    }
    
    componentDidMount(){
        ServiceProviderSerive.getServiceproviderById(this.state.id).then( (res) =>{
            let serviceprovider =res.data;
            this.setState({firstName:serviceprovider.firstName,
                lastName:serviceprovider.lastName,
                serviceType:serviceprovider.serviceType,
                serviceCost:serviceprovider.serviceCost,
                email:serviceprovider.email,
                contactNo:serviceprovider.contactNo,
                experience:serviceprovider.experience,
                rating:serviceprovider.rating
            
            });
        });
    }

    updateServiceprovider = (e) => {
            e.preventDefault();
            let serviceprovider = {firstName: this.state.firstName, lastName: this.state.lastName, serviceType: this.state.serviceType, serviceCost: this.state.serviceCost, email: this.state.email, contactNo: this.state.contactNo,
             experience: this.state.experience, rating:this.state.rating};
             console.log('serviceprovider => ' + JSON.stringify(serviceprovider));
         
             ServiceProviderSerive.updateServiceProvider(serviceprovider,this.state.id).then( (res) => {
                 this.props.history.push('/list-serviceprovider');
             });
           
 
    }
 
    onChange = (e) =>
         this.setState({ [e.target.name]: e.target.value });
 
         cancel(){
             this.props.history.push('/list-serviceprovider');
         }
    
     render() {
         return (
             <div className="register">
                
                 <div className="container">
                     <div className="row">
                         <div className="card col-md-6 offset-md-3 offset-md-3"  style={{textAlign: 'center', marginLeft: 330, padding:120 ,
         paddingBottom:100 , background:'rgba(255,255,255,.0)' , }}>
                             <h3 className="text-center">Update Service Provider Form </h3>
                             <div className="card-body">
                                 <form>
                 <div className="form-group">
                     <label>First Name:</label>
                     <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                 </div>
 
                 <div className="form-group">
                     <label>Last Name:</label>
                     <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                 </div>
 
                 <div className="form-group">
                     <label>ServiceType:</label>
                     <input type="text" placeholder="service type" name="serviceType" className="form-control" value={this.state.serviceType} onChange={this.onChange}/>
                 </div>
 
                 <div className="form-group">
                     <label>serviceCost:</label>
                     <input type="number" placeholder="service Cost" name="serviceCost" className="form-control" value={this.state.serviceCost} onChange={this.onChange}/>
                 </div>
 
                 <div className="form-group">
                     <label>Email:</label>
                     <input type="email" placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                 </div>
 
                 <div className="form-group">
                     <label>contactNo:</label>
                     <input type="number" placeholder="contactNo" name="contactNo" className="form-control" value={this.state.contactNo} onChange={this.onChange}/>
                 </div>
 
                 <div className="form-group">
                     <label>experience:</label>
                     <input type="number" placeholder="experience" name="experience" className="form-control" value={this.state.experience} onChange={this.onChange}/>
                 </div>
 
                 <div className="form-group">
                     <label>Rating:</label>
                     <input type="number" placeholder="rating" name="rating" className="form-control" value={this.state.rating} onChange={this.onChange}/>
                 </div>
 
                 <button className="btn btn-success" onClick={this.updateServiceprovider}>Save</button>
                 <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>cancel</button>
                                 </form>
                             </div>
                         </div>
                     </div>
                  </div>
             </div>
         )
     }
 }

 export default UpdateServiceProviderComponent
