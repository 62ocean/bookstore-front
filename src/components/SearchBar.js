import React from "react";
import "../css/bootstrap.css"
import "../css/search.css"
import "../css/styles.css"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        return (
            <section id="hero-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h2>输入书名……</h2>
                            <form>
                                <input
                                    type="text"
                                    name="input-box"
                                    placeholder="Search..."
                                    // value={filterText}
                                    onChange={this.handleFilterTextChange}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SearchBar;
