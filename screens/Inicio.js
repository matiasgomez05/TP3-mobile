import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

function Inicio(){
    return(
        <SafeAreaView style={ styles.container }>
            <ScrollView style={ styles.scrollView }>
                <Text style={ styles.titulo }>
                  ¡Bienvenido a <Text style={ styles.resaltar }> Free-To-Play APP!{"\n"}</Text>
                </Text>
                <Text style={ styles.texto }>
                  {`Esta aplicacion fue desarrollada durante el 4to cuatrimestre en la materia de Aplicaciones Moviles, bajo la supervision del docente Christian Nievas y como muestra de trabajo practico final.
                  `}
                </Text>
                <Text style={ styles.texto }>
                  {
                  `Dentro del menú "Juegos" podras encontrar tu proximo juego gratis de forma aleatoria, simplemente presionando el boton de buscar.
                  `}
                </Text>
            </ScrollView>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#000000',
  },
  scrollView: {
    backgroundColor: '#000011',
    marginHorizontal: 20,
  },
  texto: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF'
  },
  resaltar: {
    color: 'yellow'
  },
});

module.exports = Inicio;