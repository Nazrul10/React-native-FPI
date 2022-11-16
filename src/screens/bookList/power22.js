import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: '#97D2EC'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#99ebff',
  },
  item: {
    marginHorizontal: 10,
    fontSize: 15,
    padding: 2
  },
})

const Power22 = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[

            {title: '1st semester power technology books', data: ['Engineering Drawing	(21011)', 'Bangla-I	(25711)', 'English-I (25712)', 'Social Science (25811)', 'Physical Education & Life Skills Development (25812)', 'Mathematics -I (25911)', 'Physics -I (25912)', 'Power Engineering Fundamental	(27111)']},

            {title: '2nd Semester', data: ['Bangla -II (25721)', 'English-II (25722)', 'Mathematics-II (25921)', 'Physics-II (25922)', 'Computer Office Application	(26611)', 'Basic Electricity (26711)', 'Basic Workshop Practice	(27011)', 'Power Equipment Management & Safety (27121)']},

            {title: '3rd Semester', data: ['Chemistry (25913)', 'Mathematics-III (25931)', 'Basic Electronics (26811)', 'Machine Shop Practice- I (27012)', 'Engineering Thermodynamics	(27131)', 'RAC Cycles & Components (27231)']},

            {title: '4th Semester', data: ['Accounting (25841)', 'Programming in C (26667)', 'Engineering Mechanics (27041)', 'Metallurgy	(27043)', 'IC Engine Details (27141)', 'Fuels & Lubricants (27142)', 'Boiler Operation & Maintenance (27143)']},

            {title: '5th Semester', data: ['Business Communication (25831)', 'Industrial Management	(25852)', 'Automotive Body Building	(26241)', 'Fluid Mechanics & Machineries (27051)', 'Advanced Welding-I (27053)', 'Fundamental of Hybrid & Electric Vehicle	(27151)', 'Power Plant Engineering (27152)']},

            {title: '6th Semester', data: ['Transmission and Distribution of Electrical Power (26764)', 'Strength of Materials (27061)', 'Mechanical Measurement & Metrology (27062)', 'Plant Engineering & Maintenance	(27065)', 'Engine Overhauling, Inspection & Testing	(27161)', 'Environmental Studies (29041)']},

            {title: '7th Semester', data: ['Principles of Marketing	(25851)', 'Innovation & Entrepreneurship (25853)', 'Design of Machine Elements (27071)', 'Heat Treatment of Metal (27073)', 'Service Station Operation & Estimating	(27171)', 'Automotive Electricity,Electronics & Communication System (27172)', 'Power Engineering Project (27173)']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          
        />
      </View>
    );
}

export default Power22;