import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F7F9',
      justifyContent: 'space-around',
    },

    searchbar:{
        paddingVertical: 15,
        paddingHorizontal: 40,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
    },

    ads:{
      paddingVertical: 27,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    containerad:{
        padding: 0,
    },
  
    adimage:{
      width: 410,
      height: 210,
      objectFit: 'cover',
      borderRadius: 10,

    },

    checks:{
        alignItems: 'center',
        flex: 0,
        height: 430,
        marginBottom: 20,
        gap: 20,
      },
      containerbox:{
        backgroundColor:'white',
        flex: 0 ,
        marginLeft:40,
        marginRight:40,
        borderRadius: 10,
        padding:15,
        margin:15,
      },
      containeroptions:{
        backgroundColor: 'white',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      buttonOptions:{
        backgroundColor: 'white',
        height: 100,
        width: 120,
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
      },
      buttonBlue:{
        backgroundColor: '#3563E9',
        height: 80,
        width: 80,
        borderRadius: 10,
        bottom: 275,
        alignItems: 'center',
        justifyContent: 'center',
      },

      carousel:{
        margin:15,
    
      },
    
      div:{
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 48,
        marginBottom: 0,
        marginTop: 10,
      },
  
    title: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
  
    subtitle:{
      color: '#90A3BF',
      fontSize: 14, 
    },
  
    link:{
      color: "blue",
    },
    
    text: {
      color: '#596780',
      fontSize: 16,
      textAlign: 'center',
      marginVertical: 10,
    },

    filterbutton:{
      height: 54,
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#C3D4E9',
      marginLeft: 20,
    },
  
    flexstart:{
        flex:0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 15,
        alignItems: 'center',
        gap: 10,
    },
    center:{
      gap: 20,
      alignItems: 'center',
      padding: 40,
    },

    alignleft:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'

    },

    screen:{
      flex: 1,
      justifyContent: 'space-between'
    },

    screen2:{
      height:400,
      backgroundColor: 'green',
    },

    button:{
      backgroundColor: "#3563E9",
      padding: 10,
      borderRadius: 10,
      width: 300,
  },

  buttontext:{
      color: "white",
  },

  });
  
export default styles;