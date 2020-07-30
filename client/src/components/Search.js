import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import searchAPI from '../api/searchAPI';

const Search = () => {
    const [searchItem, setSearchItem] = useState("");
    const [searchResult, setSearchResults] = useState([]);

    const handleSearchEntry = (e) => {
        setSearchItem(e.currentTarget.value);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchItem) {
            searchAPI(searchItem)
                .then((result) => {
                    console.log(result);
                    setSearchResults(result);
                });
        }
    }

    return (
        <React.Fragment>
            <h2>Home</h2>
            <Form onSubmit={handleSearchSubmit}>
                <Label for="FoodSearch">FoodSearch</Label>
                <FormGroup>
                    <Input type="text" name="search" id="search" placeholder="Search Food" value={searchItem}
                        onChange={handleSearchEntry}
                    />
                    <Button >Search</Button>
                </FormGroup>
            </Form>
        </React.Fragment>

    )
}

export default Search;