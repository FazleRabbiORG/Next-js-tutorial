function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  if (getLayout) {
    return getLayout(
      <>
        <Component {...pageProps} />
      </>
    );
  }

  return getLayout(
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
