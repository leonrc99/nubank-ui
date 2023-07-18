import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
  },

  content: {
    paddingHorizontal: 35,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 40,
  },

  card: {
    justifyContent: "space-between",
    width: "100%",
    height: 190,
    backgroundColor: "#9500F6",
    borderRadius: 20,
    marginVertical: 20,
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
    fontWeight: "600",
  },

  cardDetails: {
    justifyContent: "space-between",
    width: "100%",
    height: 120,
    backgroundColor: "#9500F6",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },

  textWallet: {
    color: "#fff",
    fontFamily: `Poppins_500Medium`,
    fontSize: 14,
  },

  valueWallet: {
    color: "#fff",
    fontFamily: `Poppins_600SemiBold`,
    fontSize: 36,
    fontWeight: "600",
  },

  footer: {
    paddingTop: 30,
    paddingLeft: 35,
  },

  footerText: {
    color: "#fff",
    fontFamily: `Poppins_500Medium`,
    fontSize: 14,
    marginHorizontal: 20,
    paddingBottom: 30,
  },

  footerCard: {
    width: 100,
    height: 127,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "#9500F6",
    borderRadius: 20,
    elevation: 5,
    marginHorizontal: 5,
    marginBottom: 10
  },

  textFooterCard: {
    color: "#fff",
    fontFamily: `Poppins_500Medium`,
    fontSize: 13,
  },
});
