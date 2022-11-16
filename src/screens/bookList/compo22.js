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

const Compo22 = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: '1st semester computer technology Books', data: ['Mathematics‐1 (65911)', 'Computer application (66611)', 'Physics‐1 (65912)', 'Electrical engineering fundamentals	(66712)', 'English (65712)', 'Physical education & life skills development 65812', 'Bangla (65711)']},

            {title: '2nd Semester', data: ['Database Application (66621)', 'Mathematics-2 (65921)', 'IT support System-I (66622)', 'Physics-2	(65922)', 'Graphics Design-I (66623)', 'Communicative English	(65722)', 'Analog Electronics	(66823)']},

            {title: '3rd Semester', data: ['Programming Essentials	(66631)', 'Mathematics‐3 (65931)', 'Web Design (66632)', 'Chemistry	(65913)', 'Graphics design‐II	(66633)', 'Social Science	(65811)', 'IT support System‐II	(66634)']},

            {title: '4th Semester', data: ['Object-Oriented Programming	(66641)', 'Web Development	(66643)', 'Data Structure & Algorithm	(66642)', 'Computer Peripherals	(66645)', 'Data Communication System	(66644)', 'Business Organization & Communication	(65841)', 'The principle of Digital Electronics	(66842)']},

            {title: '5th Semester', data: ['Programming in Java	(66651)', 'Surveillance Security System	(66653)', 'Web Development Project (66654)', 'Operating Systems application	(66652)', 'PCB Design and Circuit Making	66656', 'Accounting Theory & Practice	(65851)', 'Sequential Logic System (66655)']},

            {title: '6th Semester', data: ['Principals of Software Engineering (66661)', 'Microcontroller Application (66663)', 'Microprocessor & Interfacing	(66662)', 'Optional Subject	(6666X)', 'Database Management System	(66664)', 'Industrial Management	(65852)', 'Environmental Studies (64054)']},

            {title: '7th Semester', data: ['System Analysis & Design	(66671)', 'E‐Commerce & CMS	(66674)', 'Network Administration & Services (66672)', 'Cyber Security & Ethics	(66675)', 'Innovation & Entrepreneurship (65853)', 'Apps Development Project (66673)', 'Optional Subject‐II (6667X)']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
         
        />
      </View>
    );
}

export default Compo22;