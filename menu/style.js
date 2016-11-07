module.exports = (React, Components) => {
  const { StyleSheet } = Components

  return StyleSheet.create({
    options: {
      position:'absolute',
      borderRadius: 2,
      backgroundColor: 'white',
      width: 200,
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowOffset: { width: 3, height: 3 },
      shadowRadius: 4,
      // This will elevate the view on Android, causing shadow to be drawn.
      elevation: 5
    },
    option: {
      padding: 10,
      backgroundColor: 'transparent',
      flex: 1
    }
  })
}