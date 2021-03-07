import React, { Component } from 'react'
import { render } from 'react-dom';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements';
export default class HomeScreen extends Component{
  <TextInput
  style={styles.inputBox}
  onChangeText={text => {
    this.setState({
      text: text,
      isSearchPressed: false,
      word: "Loading..",
      lexicalCategory :'',
      examples : [],
      defination : ""
    });
  }}
  value={this.state.text}
/>
<TouchableOpacity
style={styles.searchButton}
onPress={ () => {
  this.setState({ isSearchPressed: true });
  this.getWord(this.state.text)
}}/>
  getWord=(word)=>{
    var searchKeyWord=word.toLowerCase()
    var url ="https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
    const data = await fetch(url);
    if (data.status===200) 
    {
      return data.json();
    }
    else 
    {
      return null;
    }
  })
 .then((response=>{
   var responseObject = response
   
   if(responseObject)
   {
     var wordDatta = responseObject.definitions[0]
     var definition=wordData.description
     var lexicalCategory=wordDatta.wordtype
     
     this.setState({
       "word" : this.state.text,
       "definition" :definition,
       "lexicalCategory":lexicalCategory
     })
   }
   else
   {
     this.setState({
       "word" : this.state.text,
       "definition" :"Not Found",
     })
   }
  })
    <View style={styles.detailsContainer}>
<Text style={styles.detailsTitle}>
Word :{""}
</Text>
<Text style={{fontSize:18}}>
</Text>
</View>
  

  <View style={styles.detailsContainer}>
  <Text style={styles.detailsTitle}>
  Type :{""}
  </Text>
  <Text style={{fontSize:18}}>
    {this.state.lexicalCategory}
  </Text>
  </View>
    
    <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
    <Text style={styles.detailsTitle}>
    Definition :{""}
    </Text>
    <Text style={{fontSize:18}}>
      {this.state.definition}
    </Text>
    </View>
      