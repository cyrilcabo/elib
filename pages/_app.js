import App from 'next/app';
import wrapper from '../redux/reducers/reducers';


const ELib = ({Component, pageProps, custom}) => {
	return (
		<Component {...pageProps} />
	);
}

ELib.getInitialProps = async ({Component, ctx}) => {
	const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
	return {pageProps: pageProps};
}

export default wrapper.withRedux(ELib);