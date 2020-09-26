/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import './normalize.css';

import { CardContainer } from "./components/CardContainer";
import {Card} from './components/Card'

const appStyles = css`
	@media (max-width: 640px) {
	}
`;

function App() {
	return (
		<main css={appStyles}>
			<CardContainer >
				<Card />
			</CardContainer>
		</main>
	);
}

export default App;
