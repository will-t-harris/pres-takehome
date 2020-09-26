/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "./normalize.css";

import { CardContainer } from "./components/CardContainer";
import { Card } from "./components/Card";

const appStyles = css`
	@media (max-width: 640px) {
	}
`;

function App() {
	return (
		<main css={appStyles}>
			<CardContainer>
				<Card
					bodyText={
						"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
					}
				/>
			</CardContainer>
		</main>
	);
}

export default App;
