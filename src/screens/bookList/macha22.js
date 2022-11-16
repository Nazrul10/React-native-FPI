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

const Macha22 = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[

            {title: '1st semester mechanical technology books', data: ['Engineering Drawing (61011)', 'Mechanical Engineering Materials (67013)', 'Electrical Engineering Fundamentals	(66712)', 'Bangla	(65711)', 'Physical Education & Life Skill Developmen (65812)', 'Mathematics‐1 (65911)', 'Chemistry (65913)']},

{title: '2nd Semester', data: ['Advanced Mechanical Engineering Drawing (67021)', 'Machine Shop Practice‐1 (67022)', 'Mechanical Workshop Practice (67023)', 'English (65712)', 'Mathematics‐2 (65921)', 'Physics‐1 (65912)', 'Social Science (65811)']},

{title: '3rd Semester', data: ['Machine Shop Practice‐2 (67031)', 'Electronic Engineering Fundamentals (66822)', 'Communicative Englis (65722)', 'Mathematics‐3 (65931)', 'Physics‐2 (65922)', 'Computer Application (66611)', 'Foundry & Pattern Making (67032)']},

{title: '4th Semester', data: ['Engineering Mechanics (67041)', ' Metallurgy (67042)', 'Machine Shop Practice‐3 (67043)', 'Electrical Circuits & Machines (66743)', 'Environmental Studies (69054)', 'Programming Essentials (66631)', 'Business Organization & Communication (65841)']},

{title: '5th Semester', data: ['Hydraulics & Hydraulic Machineries	(67051)', 'Mechanical Estimating& Costing (67052)', 'Advance Welding‐1 (67053)', 'CAD & CAM (67054)', 'Manufacturing Process (67055)', 'Accounting Theory & Practic (65851)']},

{title: '6th Semester', data: ['Thermodynamics & Heat Engine (67061)', 'Mechanical Measurement & Metrology (67062)', 'Plant Engineering (67063)', 'The strength of Materials (67064)', 'Advance Welding‐2 (67065)', 'Industrial Management (65852)']},

{title: '7th Semester', data: ['Design of Machine Elements	(67071)', 'Tool Design (67072)', 'Heat Treatment of Metal (67073)', 'Mechanical Engineering Project (67074)', 'Production Planning & Control (67075)', 'Mechatronics & PLC (67076)', 'Innovation & Entrepreneurship	(65853)']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          
        />
      </View>
    );
}

export default Macha22;