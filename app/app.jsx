import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, RefreshControl } from 'react-native';

class MainComponent extends React.Component {
  render() {
    const { imgSrc, header, text } = this.props;
    return (
      <View style={styles.view}>
        <Image
          uri={imgSrc}
          source={imgSrc}
          style={styles.logo}
        />
        <Text style={styles.languageHeader}>{header}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  };
};

const DATA = [
  { imgSrc: require('@/assets/images/JAVA.jpg'), header: 'Java', text: 'Прохожу курс по java на Хекслет.' },
  { imgSrc: require('@/assets/images/scale_1200.jpg'), header: 'JavaScript', text: 'Заканчиваю курс по JavaScript на Хекслет.' },
  { imgSrc: require('@/assets/images/wepk.jpeg'), header: 'Python', text: 'Начинал изучение.' },
];

export default () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <FlatList 
      ListHeaderComponent={
        <Text style={styles.header}>Pull down to see RefreshControl indicator.</Text>
      }
      data={DATA}
      renderItem={({item}) => <MainComponent imgSrc={item.imgSrc} header={item.header} text={item.text}/>}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
    </FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  languageHeader: {
    fontSize: 50,
  },
  text: {
    fontSize: 20,
  },
  logo: {
    height: 350,
    width: 500,
    bottom: 0,
    left: 0,
  },
});