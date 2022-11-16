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

const Arche22 = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[

            {title: '1st semester Architecture Technology books', data: ['Architectural Drawing & Drafting (66111)', 'Architectural Materials (66112)', 'Electrical Engineering Fundamentals (66712)', 'Social Science (65811)', 'Physical Education and Life-Skill-Development (65812)', 'Mathematics-1 -(65911)', 'Chemistry (65913)']},

            {title: '2nd Semester', data: ['Architectural Design-1 (66121)', 'Creativity & Concept Development (66122)', 'Computer Application (66611)', 'Physics-1 (65912)', 'Mathematics-2 (65921)', 'Bangla (65711)', 'English (65712)']},

            {title: '3rd Semester', data: ['Architectural Design-2 (66131)', 'Computer-Aided Drawing (66132)', 'Architectural Graphics (66133)', 'Fundamental Surveying (66435)', 'Mathematics-3 (65931)', 'Communicative English (65722)', 'Physics-2 (65922)']},

            {title: '4th Semester', data: ['History of Architecture-I (66141)', 'Architectural Design-III (66142)', 'Working Drawing With CAD (66143)', 'Fundamental Construction Process (66446)', 'Model Making (66144)', 'Business Organization & Communication (65841)', 'Basic Estimating and Costing (66447)']},

            {title: '5th Semester', data: ['Architectural Design-4  (66151)', 'History of Architecture-2 (66152)', 'Interior Design (66153)', 'Presentation and Visual Technique (66154)', 'Structural Mechanics (66441)', 'Accounting Theory and Practice (65851)', 'Water Supply and Sanitary Engineering (66457)']},

            {title: '6th Semester', data: ['Architectural Design-5 (66161)', 'Computer Rendering and Animation-1 (66162)', 'Landscape Design-(66163)', 'Contemporary Architecture-(66164)', 'Industrial Management-(65852)', 'Theory of Structure-(66454)', 'Environmental Studies-(69054)']},

            {title: '7th Semester', data: ['Architecture Project (66171)', 'Professional Practice (66172)', 'Interior Design-2 (66173)', 'Urban Planning (66174)', 'Computer rendering & Animation-2 (66175)', 'Design of structure-1 (66463)', 'Innovation Interprenuorship (65853)']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          
        />
      </View>
    );
}

export default Arche22;