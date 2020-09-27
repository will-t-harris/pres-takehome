/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
	placeholderBg,
	placeholderTxt,
  border,
  bodyTxt,
  timestampBg,
  timestampTxt
} from "../shared/colors";
import {MOBILE} from '../shared/breakpoints'

const cardContainer = css`
  ${MOBILE} {
    margin: 0 auto 3rem auto;
  }
	font-family: Roboto, sans-serif;
  width: 16.1875rem;
  margin: 0 0.875rem;
  list-style-type: none;
`;

const imagePlaceholder = css`
	display: flex;
	background-color: ${placeholderBg};
	height: 11.25rem;
	justify-content: center;
	align-items: center;
	border-radius: 4px 4px 0 0;
	border: 1px solid ${border};
	border-bottom: none;
`;

const placeholderText = css`
	color: ${placeholderTxt};
`;

const bodyContainer = css`
	height: 243px;
  color: ${bodyTxt};
	border: 1px solid ${border};
	border-bottom: none;
`;

const bodyHeader = css`
	font-size: 19px;
	margin: 0;
	padding: 1.4375rem 1.125rem 1.0625rem 1.125rem;
`;

const bodyTextContent = css`
	margin: 0;
	padding: 0 1.125rem 1.0625rem 1.125rem;
	line-height: 130%;
`;

const timestampContainer = css`
  display: flex;
  align-items: center;
  padding-left: 1.125rem;
	height: 3.125rem;
	border: 1px solid ${border};
	border-radius: 0 0 4px 4px;
	background-color: ${timestampBg};
`;

const timestampText = css`
  font-size: 13px;
  color: ${timestampTxt};
  letter-spacing: 1%;
`

export const Card = ({ bodyText }) => {
	return (
		<li css={cardContainer}>
			<div css={imagePlaceholder}>
				<p css={placeholderText}>259x180</p>
			</div>
			<div css={bodyContainer}>
				<h2 css={bodyHeader}>Card title</h2>
				<p css={bodyTextContent}>{bodyText}</p>
			</div>
			<div css={timestampContainer}>
        <p css={timestampText}>Last updated 3 mins ago</p>
      </div>
		</li>
	);
};
