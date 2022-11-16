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

const CmtTeachers = () => {
    return (
      <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold'}}>
                Computer technology teachers
            </Text>
        <SectionList
          sections={[
            {title: 'Name: Engr. Mohammed Meher Ul Karim', data: ['Title: Instructor & Head of the Dept.', 'Number: 01819945267']},

            {title: 'Name: Abdul Kader Patwary', data: ['Title: Instructor (Tech).', 'Number: 01710090979']},

            {title: 'Name: Muhammad Fazly Alahi', data: ['Title: Junior Instructor (Tech)', 'Number: 01723392472']},

            {title: 'Name: Md. Ali Hossen', data: ['Title: Junior Instructor (Tech).', 'Number: 01920276944']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
         
        />
      </View>
    );
}

export default CmtTeachers;