/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = css`
  color: blue
`

function App() {
	return (
		<div>
			<p css={style}>Test</p>
		</div>
	);
}

export default App;
