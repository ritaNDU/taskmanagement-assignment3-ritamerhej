import Image from "next/image";
import { Roboto } from "next/font/google";
import Typography from "@mui/material/Typography";
import { Provider } from "react-redux";
import { persistor, store } from "store/store";
import TasksManager from "components/templates/TasksManager";
import Head from "next/head";
import { PersistGate } from "redux-persist/integration/react";
import { Metadata } from "next";
import Navbar from "components/molecules/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";

const roboto = Roboto({ subsets: ["greek"], weight: "400" });

const metadata: Metadata = {
  title: "Planify",
  description:
    "Planify is a web app that lets you organize and track your day to day tasks. Start your day the right way with planify.",
};

const theme = createTheme({
  palette: {
    secondary: {
      main: "#D1D1D1",
      contrastText: "#000",
    },
  },
});

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Planify</title>
          </Head>
          <main className={`w-screen ${roboto.className}`}>
            <Navbar />
            <TasksManager />
          </main>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
