import React, { Component } from 'react'
import { ScrollView, Text, View,Image ,ListView} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/InstallmentsScreenStyle'
import HeaderPlain from "../Components/HeaderPlain"
import {Container,Content,Icon,SwipeRow,Button,List, ListItem,} from "native-base"
import { Images } from '../Themes';
const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];

class InstallmentsScreen extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render () {
    return (
      <Container style={{flex:1}}>
        <HeaderPlain Title="SAVEDOFFERS"/>
        <View style={styles.main}>
          <Text style={{textAlign:"center",marginTop:"2%",marginBottom:"2%"}}> Swipe left for options </Text>
          <ScrollView style={{height:"30%",width:"100%"}}>
            <View>
            <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <View style={{height:"120%",width:"100%",flexDirection:"row"}}>
                  <View style={{height:"100%",width:"100%",flexDirection:"row"}}>
                    <View style={{height:"100%",width:"20%"}}>
                    <Image 
                    style={{width: 70, height: 90,marginTop:2}}
                    source={{uri:"https://cdn-image.realsimple.com/sites/default/files/styles/portrait_435x518/public/black-coffee.jpg?itok=8Vv0P8GL"}}/>
                    </View>
                    <View style={{height:"100%",width:"60%",flexDirection:"column",marginLeft:"4%"}}>
                      <Text style={{marginBottom:"2%"}}> Tropical pineapple fruit discoun... </Text>
                      <View style={{flexDirection:"row"}}>
                      <Icon name="open-book" type="Entypo" style={{color:"#5e5eac",fontSize:20,marginRight:"2%"}}/>
                        <Text style={{color:"black"}}> Carrefour Market </Text>
                      </View>
                      <View style={{flexDirection:"row"}}>
                        <Icon name="back-in-time" type="Entypo"  style={{color:"#5e5eac",fontSize:20,marginRight:"2%"}}/>
                        <Text style={{color:"black"}}> 10 days left </Text>
                      </View>
                    </View>
                    <View style={{height:"100%",width:"15%"}}><Text style={{color:"#ef4c67",marginTop:"35%",fontSize:15}}> EGP 50 </Text></View>
                  </View>
                </View>
              </ListItem>}
           
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <View style={{flexDirection:"row",height:"150%",margin:"0%"}}>
                <Button  onPress={() => alert('Trash')} style={styles.ButtonRemove}>
                  <Icon active name="checklist"  type="Octicons"/>
                  <Text style={{fontSize:13,color:"white"}}> Purchased </Text>
                </Button>
                <Button  onPress={() => alert('Trash')} style={styles.ButtonPurchased}>
                  <Icon active name="trash" />
                  <Text style={{fontSize:14,color:"white"}}> Remove </Text>
                </Button>
                </View>}
            rightOpenValue={-175}
          />
            </View>
            </ScrollView>
            <View>
            <Button title="CLEAR ALL" style={{justifyContent:"center",marginTop:"2%",height:"25%",width:"40%",borderRadius:20,alignSelf:"center"}}>
              <Text style={{color:"white",alignItems:"center",textAlign:"center",fontSize:24}}>CLEAR ALL</Text>
            </Button>
              </View>
        </View>
           

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstallmentsScreen)
