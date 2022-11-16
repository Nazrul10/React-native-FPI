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

const Civil22 = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[

            {title: '1st semester civil technology books', data: ['Engineering Drawing	(21011)', 'Bangla-I	(25711)', 'English-I (25712)', 'Social Science (25811)', 'Mathematics -I (25911)', 'Chemistry (25913)', 'Civil Engineering Materials (26411)', 'Basic Electricity (26711)']},

            {title: '2nd Semester', data: ['Bangla -II (25721)', 'English-II (25722)', 'Physical Education & Life Skills Development (25812)', 'Physics -I (25912)', 'Mathematics-II (25921)', 'Civil Engineering Drawing (26421)', 'Basic Electronics (26811)', 'Basic Workshop Practice (27011)']},

            {title: '3rd Semester', data: ['Business Communication (25831)', 'Physics-II (25922)', 'Mathematics-III	(25931)', 'Structural Mechanics	(26431)', 'Surveying-I (26432)', 'Construction Process-I (26433)', 'Computer Office Application (26611)']},

            {title: '4th Semester', data: ['Accounting (25841)', 'Construction Process-II (26441)', 'Estimating & Costing-I	(26442)', 'Civil CAD-I (26443)', 'Surveying-II (26444)', 'Geotechnical Engineering	(26445)', 'Hydrology (26446)', 'Wood Workshop Practice (26521)']},

            {title: '5th Semester', data: ['Industrial Management (25852)', 'Foundation Engineering	(26451)', 'Civil CAD-II	(26452)', 'Surveying-III (26453)', 'Theory of Structure	(26454)', 'Water Supply Engineering	(26455)', 'Hydraulics (26456)']},

            {title: '6th Semester', data: ['Water Resources Engineering	(26461)', 'Advance Surveying (26462)', 'Transportation Engineering-I (26463)', 'Design of Structure-I (26464)', 'Steel Structures (28863)', 'Advanced Construction (28861)', 'Environmental Studies	(29041)']},

            {title: '7th Semester', data: ['Principle of Marketing (25851)', 'Innovation & Entrepreneurship	(25853)', 'Civil Engineering Project (26471)', 'Sanitary Engineering (26472)', 'Transportation Engineering-II (26473)', 'Design of Structure-II	(26474)', 'Estimating & Costing-II (26475)', 'Construction Management & Documentation (28871)']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          
        />
      </View>
    );
}

export default Civil22;