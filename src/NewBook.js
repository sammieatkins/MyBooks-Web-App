import React from 'react';
import './NewBook.css';

class NewBookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.state.comments = 'Enter other comments here';
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
      }
    
      handleSubmit(event) {
        alert(`A book was entered: \n
        Title - ${this.state.title} \n
        Author - ${this.state.author} \n
        Genre - ${this.state.genre} \n
        Rating - ${this.state.rating} \n
        Other Comments - ${this.state.comments}`);
        event.preventDefault();
      }
    
      render() {
        return (
          <div>
            <h1>Enter a New Book</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title *: 
                    <input
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange} 
                    />
                </label>
                <label>
                    Author *: 
                    <input
                        name="author" 
                        type="text" 
                        value={this.state.author} 
                        onChange={this.handleChange} 
                    />
                </label>
                <label>
                    Genre *:
                        <select name="genre" value={this.state.genre} onChange={this.handleChange}>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Science Fiction">Science Fiction</option>
                            <option value="Dystopian">Dystopian</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Romance">Romance</option>
                            <option value="Horror">Horror</option>
                            <option value="Young Adult (YA)">Young Adult (YA)</option>
                            <option value="Historical Fiction">Historical Fiction</option>
                            <option value="Nonfiction">Nonfiction</option>
                            <option value="Self-help">Self-help</option>
                            <option value="Biography">Biography</option>
                        </select>
                </label>
                <label>
                    Rating:
                        <select name="rating" value={this.state.rating} onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                </label>
                <label>
                    Other comments:
                    <textarea name="comments" value={this.state.comments} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" id="submit" />
            </form>
          </div>
        );
      }  
}

export default NewBookForm