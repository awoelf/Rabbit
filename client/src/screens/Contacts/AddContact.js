import React from "react";
import { Container, Header, Icon, Item, Input, Text } from "native-base";



const AddContact = (props) => {
    return (
        <Container>

            <Icon name="ios-search" />
            <Input
                placeholder="Search"
            // onFocus={openList}
            // onChangeText={(text) => searchProduct(text)}
            />
        </Container>

    );
}



export default AddContact;

