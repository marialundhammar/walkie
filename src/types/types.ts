export type MyStackParamList = {
  HomeView: undefined;
  MapView: undefined;
  StoriesView: undefined;
  EndingView: undefined;
};

export type LocationContextType = {
  updateUserLocation: (lat: number, long: number) => void;
  userLocation: { lat: number; long: number };
  nextMarkerLat: number;
  nextMarkerLong: number;
  nextMarkerTitle: string;
  distance: number;
  showAudioPlayer: boolean;
  showModal: boolean;
  locationLoaded: boolean;
  storyFinished: boolean;
  showFinishedModal: boolean;
  navigateToHome: boolean;
  showFakeButtons: boolean;
  setStoryFinished: (boolean) => void;
  setShowAudioPlayer: (boolean) => void;
  updateMarker: (lat: number, long: number, title: string) => void;
  setShowModal: (boolean) => void;
  setLocationLoaded: (boolean) => void;
  setShowFinishedModal: (boolean) => void;
  setNavigateToHome: (boolean) => void;
  setShowFakeButtons: (boolean) => void;
};
