import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/main.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Carboin 🌳 - Carbon offset your Bitcoins</title>
          <meta property="og:title" content="Carboin 🌳 - Carbon offset your Bitcoins" />
          <meta property="og:url" content="https://carboin.org" />
          <meta property="og:image" content="https://carboin.org/static/cover.png" />
          <meta property="og:description" content="Our goal is to make Bitcoin carbon neutral, we want to carbon offset the blockchain and make it more sustainable in a social way. Join our community and make the difference!" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" />
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.7/lottie.js" integrity="sha256-w69NeYsiLyiplCLrIPWNt+0h0Nzjhlsxy0+tzkQ0pno=" crossorigin="anonymous"></script>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;