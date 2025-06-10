import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export const topItemStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  subHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export const selectButtonStyles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    padding: 16,
    borderWidth: 2,
    borderRadius: 4,
  },
  selected: {
    backgroundColor: '#888',
    borderColor: '#000',
  },
  unselected: {
    backgroundColor: '#fff',
    borderColor: '#000',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});