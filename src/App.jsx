/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "./normalize.css";

import { CardContainer } from "./components/CardContainer";
import { Card } from "./components/Card";

const container = css`
	display: flex;
`;

function App() {
	return (
		<main css={container}>
			<CardContainer>
				<Card bodyText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
				<Card bodyText="This card has supporting text below as a natural lead-in to additional content." />
				<Card bodyText="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." />
			</CardContainer>
		</main>
	);
}

export default App;
