import App from 'next/app';
import wrapper from '../redux/reducers/reducers';

import ScrollToTop from '../utils/scrolltotop';


const ELib = ({Component, pageProps, custom}) => {
	return (
		<ScrollToTop>
			<Component {...pageProps} />
		</ScrollToTop>
	);
}

ELib.getInitialProps = async ({Component, ctx}) => {
	const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
	return {pageProps: pageProps};
}

export default wrapper.withRedux(ELib);