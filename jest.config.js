module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['node_modules', '.idea'],
  transformIgnorePatterns: [ 
    'node_modules/(?!(@react-native|react-native|@react-native-community|rect-native-vector-icons|react-native-iphone-x-helper|expo-status-bar|react-native-swipe-gestures))'
  ]
}