/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { MOBILE } from "../shared/breakpoints";

const containerStyles = css`
	${MOBILE} {
		flex-direction: column;
	}
	display: flex;
	margin: 0 auto;
	padding: 0;
`;

export const CardContainer = ({ children }) => {
	return <ul css={containerStyles}>{children}</ul>;
};
