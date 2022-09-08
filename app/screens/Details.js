import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, Actions, Info } from '../components/UserDetails';
import colors from '../config/colors';
class Details extends Component {
  render() {
    const currContact = this.props.route.params.currContact;
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        {/* <Text>Details</Text>
        <Text>{param.currContact.name.first}</Text> */}
        <Header {...currContact} />
        <Actions {...currContact} />
        <Info {...currContact} />

      </ScrollView>
    );
  }
}

export default Details;