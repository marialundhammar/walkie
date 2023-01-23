import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  //Map
  map: {
    width: '100%',
    height: '100%',
    zIndex: -1,
    flex: 1,
    fontFamily: 'Futura',
  },

  //Fonts
  h3: {
    fontSize: 46,
    color: 'white',
    letterSpacing: 0.25,
    fontWeight: 'bold',
    margin: 16,
  },

  //Containers
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    margin: 16,
    marginBottom: 8,
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

  fakeButtonContainer: {
    position: 'absolute',
    right: 5,
    top: 160,
    backgroundColor: '#111621',
    borderRadius: 10,
    width: 150,
    borderColor: '#B862B0',
    borderWidth: 3,
  },

  contentColumn: {
    flex: 1,
    flexDirection: 'column',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  introModal: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#111621',
  },

  //Buttons
  button: {
    borderRadius: 14,
    backgroundColor: '#B862B0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 34,
    paddingVertical: 8,
    marginTop: 32,
  },

  buttonBorder: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 34,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#B862B0',
    color: '#B862B0',
    margin: 8,
  },

  buttonFake: {
    position: 'absolute',
    right: 10,
    top: 100,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#B862B0',
    alignItems: 'center',
    color: 'pink',
    justifyContent: 'center',
  },

  fakeButtons: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#B862B0',
    color: '#B862B0',
    margin: 8,
    backgroundColor: '#111621',
  },
  fakeButtonsPressed: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#B862B0',
    margin: 8,
    backgroundColor: '#B862B0',
  },

  //Button Texts
  textButton: {
    color: 'black',
    fontSize: 18,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },

  textButtonBorder: {
    color: '#B862B0',
    fontSize: 12,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  textButtonIsPressed: {
    color: '#111621',
    fontSize: 12,
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
    height: 360,
    backgroundColor: '#111621',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    borderColor: '#B862B0',
  },

  modalText: {
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },

  trackText: {
    color: '#B862B0',
    margin: 8,
    fontSize: 16,

    letterSpacing: 0.25,
    fontWeight: 'bold',
  },

  fakeButtonText: {
    color: '#B862B0',
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
    backgroundColor: '#111621',
  },

  containerAudio: {
    flexDirection: 'row',
    backgroundColor: '#111621',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
  },

  containerAudioPlay: {
    flexDirection: 'row',
    backgroundColor: '#111621',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
  },

  buttonMap: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  storyContainer: {
    flex: 1,
    alignContain: 'center',
    backgroundColor: 'rgb(30,30,30)',
  },

  storyContent: {
    flex: 1,
    alignItems: 'flex-start',
    alignContain: 'center',
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
    marginLeft: 16,
  },

  distanceText: {
    color: 'white',
    fontSize: 24,
    letterSpacing: 0.25,
    margin: 4,
    fontStyle: 'bold',
    fontFamily: 'Futura',
  },

  storyButtonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  endingBodyText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 0.25,
    margin: 16,
  },

  storyBodyText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 0.25,
    margin: 16,
    marginTop: 8,
    marginBottom: 8,
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
    color: '#B862B0',
    fontSize: 86,

    margin: 24,
    fontWeight: 'light',
  },
});
