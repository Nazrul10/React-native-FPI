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

const Electro22 = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: '1st semester electrical technology books', data: ['Basic Electricity (66711)', 'Electrical Engineering Materials (66713)', 'Basic Electronics (66811)', 'Engineering Drawing (61011)', 'Mathematics‐1 (65911)', 'Chemistry (65913)', 'Physical Education & Life Skill Development (65812)']},

            {title: '2nd Semester', data: ['Electrical Circuits‐1 (66721)', 'Electrical Appliances (66722)', 'Computer Application (66611)', 'Mathematics‐2 (65921)', 'Physics‐1 (65912)', 'Bangla (65711)', 'English (65712)']},

            {title: '3rd Semester', data: ['Electrical Circuits ‐2 (66731)', 'Advanced Electricity (66732)', 'Electrical Engineering Drawing (66733)', 'Mathematics ‐3	(65931)', 'Physics ‐2 (65922)', 'Communicative English	(65722)', 'Social Science (65811)']},

            {title: '4th Semester', data: ['Electrical Installation Planning and Estimating	(66741)', 'DC Machines (66742)', 'Industrial Electronics (66845)', 'Applied Mechanics (67045)', 'Programming Essentials	(66631)', 'Business organization & Communication (65841)']},

            {title: '5th Semester', data: ['Electrical & Electronic Measurement‐1 (66751)', 'Generation of Electrical Power	(66752)', 'Renewable Energy	(66753)', 'Digital Electronics & Microprocessor	(66856)', 'Environmental Studies (69054)', 'Accounting Theory & Practice (65851)']},

            {title: '6th Semester', data: ['Alternating Current Machines‐1  (66761)', 'Electrical & Electronic Measurement‐2 (66762)', 'Transmission and Distribution of Electrical Power‐1 (66763)', 'Communication Engineering	(66867)', 'Micro Controller & PLC (66868)', 'Industrial Management (65852)']},

            {title: '7th Semester', data: ['Alternating Current Machines‐2 (66771)', 'Electrical Engineering project (66772)', 'Switch Gear & Protection (66773)', 'Transmission and Distribution of Electrical Power‐2	(66774)', 'Testing and Maintenance of Electrical Equipment (66775)', 'Instrumentation and Process Control (66863)', 'Innovation & Entrepreneurship (65853)']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
         
        />
      </View>
    );
}

export default Electro22;