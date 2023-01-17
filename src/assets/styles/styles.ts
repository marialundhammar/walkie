import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    zIndex: -1,
    flex: 1,
  },

  titleStyle: {
    color: 'white',
    marginBottom: 50,
  },

  containerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 120,
    zIndex: 100,
    marginBottom: 20,
  },

  containerColumn: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  finishedContainer: {
    backgroundColor: '#83F8A4',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    borderRadius: 10,
    backgroundColor: '#83F8A4',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 34,
    paddingVertical: 8,
  },

  textButton: {
    color: 'black',
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    width: 300,
    height: 280,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },

  modalText: {
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },

  barContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    width: 300,
  },

  progressBar: {
    height: 10,
    backgroundColor: '#83F8A4',
    borderRadius: 5,
    width: 180,
  },

  containerMap: {
    flex: 1,
    backgroundColor: 'rgb(30,30,30)',
  },

  containerAudio: {
    flexDirection: 'row',
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
  },

  buttonMap: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  storyContainer: {
    flex: 1,
    backgroundColor: 'rgb(30,30,30)',
  },

  storyContent: {
    flex: 1,
    alignItems: 'flex-start',
  },

  h2: {
    color: 'white',
    fontSize: 32,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    margin: 16,
    marginTop: 64,
  },
  storyText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    margin: 16,
  },

  storyButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  storyBodyText: {
    color: 'white',
    fontSize: 12,
    letterSpacing: 0.25,
    margin: 16,
    marginTop: 8,
  },

  image: {
    margin: 16,
    width: 360,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  icons: {
    color: '#83F8A4',
    fontSize: 86,
    border: 'white',
  },
});
