import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { useFonts } from "expo-font";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import mastercard from "../../assets/mastercard.png";
import barcode from "../../assets/barcode.png";
import pencil from "../../assets/pencil.png";
import arrowFlat from "../../assets/arrowFlat.png";
import creditCard from "../../assets/creditCard.png";
import returnArrow from "../../assets/returnArrow.png";

import { stylesInfo } from "./styles-info";

export function CardInfo() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
  }); //Busca as fontes que estão sendo usadas no projeto

  if (!fontsLoaded) {
    return null;
  } //Não permite que seja carregado o app antes que as fontes sejam carregadas

  return (
    <View style={stylesInfo.container}>
      <View style={stylesInfo.upperView}>
        <View style={stylesInfo.upperViewPadding}>
          <View style={stylesInfo.cardRows}>
            <View style={stylesInfo.card}>
              <View style={stylesInfo.cardHeader}>
                <View />
                <Image source={mastercard} />
              </View>
              <Text style={stylesInfo.cardText}>Crédito</Text>
            </View>
            <Text style={stylesInfo.rowStatic}>.</Text>
          </View>

          <View style={stylesInfo.limit}>
            <Text style={stylesInfo.limitText}>Limite disponível</Text>
            <View style={stylesInfo.limitRead}>
              <Text style={stylesInfo.usedLimit}>R$40</Text>
              <Text style={stylesInfo.hasLimit}>R$60</Text>
            </View>
            <View style={stylesInfo.limitGraphic}>
              <View style={stylesInfo.limitGraphicIntern}></View>
            </View>
          </View>
        </View>

        <View style={stylesInfo.footerUpper}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <TouchableOpacity style={stylesInfo.footerUpperCard}>
              <Image source={barcode} />
              <Text style={stylesInfo.textfooterUpperCard}>Pagar fatura</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesInfo.footerUpperCard}>
              <Image source={pencil} />
              <Text style={stylesInfo.textfooterUpperCard}>Definir limite</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesInfo.footerUpperCard}
            ></TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      <View style={stylesInfo.lowerView}>
        <View style={stylesInfo.itemInfo}>
          <View style={stylesInfo.infoCard}>
            <View style={stylesInfo.buyIconInfo}>
              <Image source={arrowFlat} />
            </View>
            <View style={stylesInfo.textInfo}>
              <Text style={stylesInfo.primaryTextInfo}>Compra</Text>
              <Text style={stylesInfo.secondaryTextInfo}>
                RS 40,00 no estabelecimento X
              </Text>
            </View>
          </View>

          <Image source={returnArrow} />
        </View>

        <View style={stylesInfo.bullet} />
        <View style={stylesInfo.bullet} />

        <View style={stylesInfo.itemInfo}>
          <View style={stylesInfo.infoCard}>
            <View style={stylesInfo.approveIconInfo}>
              <Image source={creditCard} />
            </View>
            <View style={stylesInfo.textInfo}>
              <Text style={stylesInfo.primaryTextInfo}>Parabéns</Text>
              <Text style={stylesInfo.secondaryTextInfo}>
                Seu cartão foi desbloqueado!
              </Text>
            </View>
          </View>

          <Image source={returnArrow} />
        </View>
      </View>
    </View>
  );
}
