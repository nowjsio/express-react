import React from 'react'

class Customer extends React.Component{
    render(){
        return(
          <div>
              <CustomerProfile name={this.props.name} id={this.props.id} image={this.props.image}></CustomerProfile>
              <CustomerInfo birth={this.props.birth} gender={this.props.gender} job={this.props.job}></CustomerInfo>
          </div>
        );
    
    }
}
class CustomerProfile extends React.Component{
    render (){
        return(
            <div>
                <h2>{this.props.name}({this.props.id})</h2>
                <p><img src={this.props.image} alt="profile"></img></p>
            </div>
        );
    }
}
class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birth}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        );
    }
}
export default Customer