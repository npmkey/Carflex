import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../componentes/header';

const VehicleRegister = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Header/>
            <View style={styles.formwrap}>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.titlebig}>Cadastro de Veículos</Text>
                        <Text style={styles.subtitle}>Preencha as informações do seu veículo</Text>
                    </View>
                    <View style={styles.formelement}>
                        <Text style={styles.title}>Título</Text>
                        <TextInput 
                        style={styles.inputstyle}
                        placeholder='Coloque um título ao anuncio'
                        placeholderTextcolor="#90A3BF"
                        ></TextInput>
                    </View>

                    <View style={styles.formelement}>
                        <Text style={styles.title}>Ano de Fabricação</Text>
                        <TextInput 
                        style={styles.inputstyle}
                        placeholder='Ano do Veículo'
                        placeholderTextcolor="#90A3BF"
                        ></TextInput>
                    </View>

                    <View style={styles.formelement}>
                        <Text style={styles.title}>Categoria</Text>
                        <TextInput 
                        style={styles.inputstyle}
                        placeholder='Qual a categoria do veículo'
                        placeholderTextcolor="#90A3BF"
                        ></TextInput>
                    </View>

                    <View style={styles.formelement}>
                        <Text style={styles.title}>Placa</Text>
                        <TextInput 
                        style={styles.inputstyle}
                        placeholder='Qual a placa do veículo'
                        placeholderTextcolor="#90A3BF"
                        ></TextInput>
                    </View>

                    <View style={styles.formelement}>
                        <Text style={styles.title}>Quilometragem</Text>
                        <TextInput 
                        style={styles.inputstyle}
                        placeholder='Quantos km rodados o veiculo tem'
                        placeholderTextcolor="#90A3BF"
                        ></TextInput>
                    </View>

                    <View style={styles.formelement}>
                        <Text style={styles.title}>Localização</Text>
                        <TouchableOpacity
                        style={styles.dropdown}>
                            <Text style={styles.subtitle2}> Selecione a cidade </Text>
                            <Image source={require('../assets/arrow-down.png')}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formelement}>
                        <Text style={styles.title}>Telefone</Text>
                        <TextInput 
                        style={styles.inputstyle}
                        placeholder='número de contato'
                        placeholderTextcolor='#90A3BF'
                        ></TextInput>
                    </View>
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.titlebig}>Especificações</Text>
                        <Text style={styles.subtitle}>Preencha as especificações do seu veículo</Text>
                    </View>
                    <View style={styles.formelement}>
                        <Text style={styles.title}>Tipo de combustivel</Text>
                        <TouchableOpacity
                        style={styles.dropdown}>
                            <Text style={styles.subtitle2}> Selecione o tipo de combustivel </Text>
                            <Image source={require('../assets/arrow-down.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formelement}>
                        <Text style={styles.title}>Transmissão</Text>
                        <TouchableOpacity
                        style={styles.dropdown}>
                            <Text style={styles.subtitle2}> Qual o tipo de transmissão do carro </Text>
                            <Image source={require('../assets/arrow-down.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formelement}>
                        <Text style={styles.title}>Capacidade</Text>
                        <TextInput 
                        style={styles.inputstyle}
                        placeholder='número de contato'
                        placeholderTextcolor='#90A3BF'
                        ></TextInput>
                    </View>
                    <View style={styles.formelement}>
                        <Text style={styles.title}>Localidade</Text>
                        <TouchableOpacity
                        style={styles.dropdown}>
                            <Text style={styles.subtitle2}> Selecione a localidade de disposição do vículo </Text>
                            <Image source={require('../assets/arrow-down.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formelement}>
                        <Text style={styles.title}>Telefone</Text>
                        <TextInput 
                        style={styles.inputstyle}
                        placeholder='número de contato'
                        placeholderTextcolor='#90A3BF'
                        ></TextInput>
                    </View>
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.titlebig}>Extras</Text>
                        <Text style={styles.subtitle}>Preencha as informações do seu veículo</Text>
                    </View>
                    <View style={styles.formelement}>
                        <Text style={styles.title}>Cor</Text>
                        <TextInput 
                        style={styles.inputstyle}
                        placeholder='Qual a cor do veículo'
                        placeholderTextcolor='#90A3BF'
                        ></TextInput>
                    </View>
                    <View style={styles.formelement}>
                        <Text style={styles.title}>Políticas de uso</Text>
                        <TouchableOpacity
                        style={styles.dropdown}>
                            <Text style={styles.subtitle2}> Quais as políticas de uso </Text>
                            <Image source={require('../assets/arrow-down.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formelement}>
                        <Text style={styles.title}>Características extras</Text>
                        <TextInput 
                        style={styles.inputstyle}
                        placeholder='Quantas pessoas o seu carro suporta'
                        placeholderTextcolor='#90A3BF'
                        ></TextInput>
                    </View>
                    <View style={styles.formelement}>
                        <Text style={styles.title}>Diária</Text>
                        <TouchableOpacity
                        style={styles.dropdown}>
                            <Text style={styles.subtitle2}> Informe a diária do veiculo </Text>
                            <Image source={require('../assets/arrow-down.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.titlebig}>Confirmação</Text>
                        <Text style={styles.subtitle}>Estamos chegando ao fim. Apenas alguns
                        cliques e seu aluguel está pronto!</Text>
                    </View>
                    <View style={styles.formelement}>
                        <TouchableOpacity
                        style={styles.dropdown}>
                            <TouchableOpacity style={styles.checkbutton}></TouchableOpacity>
                            <Text style={styles.subtitle3}>Permito que o veiculo tenha opção de entrega personaliada </Text> 
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formelement}>
                        <TouchableOpacity
                        style={styles.dropdown}>
                            <TouchableOpacity style={styles.checkbutton}></TouchableOpacity>
                            <Text style={styles.subtitle3}>Concordo com nossos termos e condições e política de privacidade! </Text> 
                        </TouchableOpacity>
                    </View>
                    <View style={styles.center}>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>Postar Veículo</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({


    container: {
      flex: 1,
      backgroundColor: '#F6F7F9',
      justifyContent: 'space-between',
    },

    formwrap:{
        padding:40,
        gap: 20,
    },

    button:{
        backgroundColor: "#3563E9",
        padding: 15,
        borderRadius: 10,
        width: 130,
        alignItems: 'center',
    },

    buttontext:{
        color: "white",
    },
    
    form:{
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 15,
        flex:1,
        gap: 20,
    },
    
    checkbutton:{
        height: 15,
        width: 15,
        marginLeft: 15,
        borderRadius: 3,
        borderWidth:1,
        borderColor: '#90A3BF'
    },

    formelement:{
        gap: 15,
    },

    titlebig: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',

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

      subtitle2:{
    
        fontSize: 14, 
      },

      subtitle3:{
        margin:15,
        fontSize: 14, 
      },

      inputstyle:{
        backgroundColor: '#F6F7F9',
        padding: 15,
        borderRadius: 10,
      },

      dropdown:{
        backgroundColor: '#F6F7F9',
        padding: 15,
        borderRadius: 10,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      center:{
        alignItems: 'center',
      },
});
export default VehicleRegister;