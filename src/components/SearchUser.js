import React , {Component} from 'react';
import axios from 'axios';

class SearchUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchUser : '',
            users : []
        };
    }

    // changeInputField
    changeInputField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    // searchUser
    searchUser = (e) => {
        // stop the page reload
        e.preventDefault();

        axios.get(`https://api.github.com/search/users?q=${this.state.searchUser}`)
            .then( (response) => {
                // handle success
                this.setState({
                    users : response.data.items
                });
            })
            .catch( (error) => {
                // handle error
                console.log(error);
            })
            .finally( ()  => {
                // always executed
            });
    };

    // clearUser
    clearUser = (e) => {
        e.preventDefault();
        this.setState({
            searchUser : '',
            users : []
        });
    };

    render() {
        let userList = this.state.users;
        // if users are not empty
        if(userList.length > 0){
            userList = this.state.users.map((user) => (
                <div className='col-md-3'>
                    <div className="card text-center my-2">
                        <div className="card-header bg-primary text-white">
                            <p className='lead'>{user.login}</p>
                        </div>
                        <div className="card-body bg-light">
                            <img alt='' src={user.avatar_url}  className='img-fluid img-thumbnail'/>
                            <a href={user.html_url} target='_blank' className='my-2 btn btn-dark'>Read More</a>
                        </div>
                    </div>
                </div>
            ));
        }
        return (
            <div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h2>Search a User</h2>
                                </div>
                                <div className="card-body bg-light">
                                    <form className='form-inline'>
                                        <div className="form-group">
                                            <input
                                                type='text'
                                                size='40'
                                                placeholder='github user'
                                                className='form-control'
                                                value={this.state.searchUser}
                                                name = 'searchUser'
                                                onChange={this.changeInputField}/>
                                        </div>
                                        <div>
                                            <button className='btn btn-teal' onClick={this.searchUser}>Search</button>
                                            <button className='btn btn-danger' onClick={this.clearUser}>Clear</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  display Users   */}
                    <div className="row mt-4">
                        {userList}
                    </div>
                </div>
            </div>
        );
    }

}
export default SearchUser;