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
    margin: 0 auto 48px auto;
  }
	font-family: Roboto, sans-serif;
  width: 259px;
  margin: 0 14px;
`;

const imagePlaceholder = css`
	display: flex;
	background-color: ${placeholderBg};
	height: 180px;
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
	padding: 23px 18px 17px 18px;
`;

const bodyTextContent = css`
  font-size: 16px;
	margin: 0;
	padding: 0 41px 17px 18px;
	line-height: 130%;
`;

const timestampContainer = css`
  display: flex;
  align-items: center;
  padding-left: 18px;
	height: 50px;
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
		<div css={cardContainer}>
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
		</div>
	);
};
