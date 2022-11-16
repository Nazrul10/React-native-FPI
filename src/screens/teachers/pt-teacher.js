import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: '#97D2EC'
  },
  sectionHeader: {
    padding:5,
    textAlign: 'center',
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },
  item: {
    marginHorizontal: 10,
    fontSize: 15,
    padding: 5,
    fontSize: 18,
    backgroundColor:'yellow'
  },
})

const ptTeachers = () => {
    return (
      <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold'}}>
                Power technology teachers
            </Text>
        <SectionList
          sections={[
            {title: 'Name: Engr. Chandan Kanti Das', data: ['Title: Chief Instructor & Head of The Department.', 'Number: 01752422202']},

            {title: 'Name: Nayan Ranjan Bhattacharjee', data: ['Title: 	Instructor.', 'Number: 01712215825']},

            {title: 'Name: Mintu Das', data: ['Title: Junior instructor(Power)', 'Number: 01829249345']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
         
        />
      </View>
    );
}

export default ptTeachers;