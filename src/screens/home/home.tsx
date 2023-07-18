//Componentes do React Native
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

//Folha de estilos
import { stylesHome } from "./styles-home";

//Fontes
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

//Assets
import logo from "../../assets/logo.png";
import setting from "../../assets/setting.png";
import mastercard from "../../assets/mastercard.png";
import wallet from "../../assets/wallet.png";
import pix from "../../assets/pix.png";
import barcode from "../../assets/barcode.png";
import money from "../../assets/money.png";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
  }); //Busca as fontes que estão sendo usadas no projeto

  if (!fontsLoaded) {
    return null;
  } //Não permite que seja carregado o app antes que as fontes sejam carregadas
  

  function goToCardInfo() {
    navigation.navigate("cardInfo");
  }

  return (
    /* Container onde estão todos os componentes da tela */
    <View style={stylesHome.container}>
      {/* Componentes que recebem o mesmo padding de todos os lados da tela */}
      <View style={stylesHome.content}>
        {/* Header  => Logo e ícone de configuração */}
        <View style={stylesHome.header}>
          <Image source={logo} />
          <TouchableOpacity>
            <Image source={setting} />
          </TouchableOpacity>
        </View>

        {/* Miniatura do cartão */}
        <TouchableOpacity onPress={goToCardInfo} style={stylesHome.card}>
          <View style={stylesHome.cardHeader}>
            <View />
            <Image source={mastercard} />
          </View>
          <Text style={stylesHome.cardText}>Leonardo</Text>
        </TouchableOpacity>

        {/* Box de saldo disponível */}
        <View style={stylesHome.cardDetails}>
          <View style={stylesHome.cardHeader}>
            <Text style={stylesHome.textWallet}>Saldo disponível</Text>
            <TouchableOpacity>
              <Image source={wallet} />
            </TouchableOpacity>
          </View>
          <Text style={stylesHome.valueWallet}>R$14.500,76</Text>
        </View>
      </View>

      {/* Box onde se encontra o carousel */}
      <View style={stylesHome.footer}>
        <Text style={stylesHome.footerText}>Do que precisa?</Text>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <TouchableOpacity style={stylesHome.footerCard}>
            <Image source={pix} />
            <Text style={stylesHome.textFooterCard}>Fazer um pix</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesHome.footerCard}>
            <Image source={barcode} />
            <Text style={stylesHome.textFooterCard}>Pagar boleto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesHome.footerCard}>
            <Image source={money} />
            <Text style={stylesHome.textFooterCard}>Fazer um depósito</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesHome.footerCard}></TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
