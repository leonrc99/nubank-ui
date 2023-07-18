import { StyleSheet } from "react-native";

export const stylesInfo = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  upperView: {
    backgroundColor: "#fff",
    height: "64%",
    elevation: 1,
    paddingVertical: 20,
  },

  upperViewPadding: {
    paddingHorizontal: 40,
  },

  cardRows: {
    width: "100%",
    height: 245,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  rowStatic: {
    color: "#9500F6",
    fontSize: 24,
    fontFamily: `Poppins_600SemiBold`,
  },

  card: {
    justifyContent: "space-between",
    width: "100%",
    height: 190,
    backgroundColor: "#9500F6",
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 60,
    padding: 20,
    elevation: 5,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardText: {
    color: "#fff",
    fontSize: 24,
    fontFamily: `Poppins_600SemiBold`,
    lineHeight: 36,
  },

  limit: {
    marginTop: 60,
  },

  limitText: {
    fontSize: 14,
    fontFamily: `Poppins_600SemiBold`,
    paddingHorizontal: 20,
  },

  limitRead: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 10,
  },

  usedLimit: {
    fontSize: 16,
    fontFamily: `Poppins_600SemiBold`,
    color: "#820AD1",
    paddingHorizontal: 10,
  },

  hasLimit: {
    fontSize: 16,
    fontFamily: `Poppins_600SemiBold`,
    color: "#50E3C2",
    paddingHorizontal: 60,
  },

  limitGraphic: {
    width: "100%",
    height: 24,
    borderRadius: 100,
    backgroundColor: "#50E3C2",
  },

  limitGraphicIntern: {
    width: "40%",
    height: 24,
    borderRadius: 100,
    backgroundColor: "#820AD1",
  },

  footerUpper: {
    paddingLeft: 40,
    paddingTop: 25,
  },

  footerUpperText: {
    color: "#fff",
    fontFamily: `Poppins_500Medium`,
    fontSize: 14,
    marginHorizontal: 20,
    paddingBottom: 30,
  },

  footerUpperCard: {
    width: 152,
    height: 48,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#9500F6",
    borderRadius: 20,
    elevation: 5,
    marginHorizontal: 5,
    marginBottom: 10,
  },

  textfooterUpperCard: {
    color: "#fff",
    fontFamily: `Poppins_500Medium`,
    fontSize: 13,
  },

  lowerView: {
    padding: 40,
    backgroundColor: "#F1F0F5",
  },

  itemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },

  infoCard: {
    flexDirection: 'row'
  },

  buyIconInfo: {
    width: 55,
    height: 55,
    borderRadius: 100,
    backgroundColor: '#F4BDC1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  approveIconInfo: {
    width: 55,
    height: 55,
    borderRadius: 100,
    backgroundColor: '#D4A3F5',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textInfo: {
    justifyContent: 'center',
    paddingHorizontal: 10
  },

  primaryTextInfo: {
    color: "#000",
    fontFamily: `Poppins_500Medium`,
    fontSize: 13,
  },

  secondaryTextInfo: {
    color: "#717171",
    fontFamily: `Poppins_500Medium`,
    fontSize: 13,
  },

  bullet: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#9500F6',
    marginHorizontal: 25,
    marginBottom: 20
  },
});