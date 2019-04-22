import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView  } from 'react-native';

export default class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.getListCall= this.getListCall.bind(this);
    this.state ={ isLoading: true}
  }
  
  componentDidMount(){
    this.getListCall();
  }

  getListCall(){
        return fetch('https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=b96fbe0d0ae829943a353137fd1825624a627d8ddce4ce3572a24ce58ee51d92')
        .then((response) => response.json())
        .then((responseJson) => {  
          responseJson.sort((a, b) => a.overall_league_position - b.overall_league_position); //sort data json fetch
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          });
   
        })
        .catch((error) =>{
          console.error(error);
        });
  }

  render(){ 

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <FlatList
          data={this.state.dataSource} 
          renderItem={({item}) => 
              <View key={item.team_name} style={styles.note}>
                <Text style={styles.noteText}>{item.overall_league_position}.{item.team_name}</Text>
              </View>
            } 
            keyExtractor={({team_name}, index) => team_name} 
          />
        </ScrollView>
      </View>
    );
  }
  
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3366cc',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  textheader: {
    color: 'white',
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
  },
  scrollContainer:{
    flex: 1,
  },
  note:{
      position: 'relative',
      padding: 20,
      paddingRight: 100,
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
  },
  noteText: {
      paddingLeft: 20,
      borderLeftColor: '#3366cc',
  },
  noteDelete: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2980b9',
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10,
  },
  noteDeleteText: {
      color: 'white',
  }
});
