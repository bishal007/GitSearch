import React , {Component} from 'react';
import axios from 'axios';

class GetPersons extends Component{
    constructor(props){
        super(props);
        this.state = {
            persons : []
        };
    }

    // lifecycle method of react js to make http calls
    componentDidMount() {
        axios.get('https://api.myjson.com/bins/yq521')
            .then( (response) => {
                // handle success
                this.setState({
                    persons : response.data
                });
            })
            .catch( (error)  => {
                // handle error
                console.log(error);
            })
            .finally( () => {
                // always executed
            });

    }

    render() {
        let personList = this.state.persons.map((person) => (
            <tr>
                <td>{person.id}</td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.email}</td>
                <td>{person.gender}</td>
                <td>{person.ip_address}</td>
            </tr>
        ));
        return(
            <div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <table className='table table-hover text-center'>
                                <thead className='bg-primary text-white text-uppercase'>
                                    <tr>
                                        <th>Person Id</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>IP Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {personList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GetPersons;