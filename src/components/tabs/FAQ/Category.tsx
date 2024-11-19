import {
	Accordion,
	AccordionBody,
	AccordionHeader,
} from "@material-tailwind/react";
import { useState, type MouseEvent } from "react";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

export interface ArticleProps {
	title: string;
	body: string;
}

export interface CategoryProps {
	category: {
		title: string;
		categories?: CategoryProps["category"][];
		articles?: ArticleProps[];
	};
	goToArticle: (
		article: ArticleProps,
		e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
	) => void;
	expanded?: boolean;
}

const Category: React.FC<CategoryProps> = ({
	category,
	goToArticle,
	expanded = false,
}) => {
	const [isExpanded, setIsExpanded] = useState(expanded);

	// const toggleExpand = (e: MouseEvent<HTMLAnchorElement>) => {
	// 	e.preventDefault();
	// 	setIsExpanded(!isExpanded);
	// };

	return (
		<Accordion
			open={isExpanded}
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
			<AccordionHeader
				onClick={() => setIsExpanded(!isExpanded)}
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				{/* {isExpanded ? (
					<svg viewBox="0 0 5 1">
						<title>a</title>
						<rect x="0" y="0" width="5" height="1" />
					</svg>
				) : (
					<svg viewBox="49 529 5 5">
						<title>b</title>
						<path d="M51,531 L49,531 L49,532 L51,532 L51,534 L52,534 L52,532 L54,532 L54,531 L52,531 L52,529 L51,529 L51,531 Z" />
					</svg>
				)} */}
				{category.title}
			</AccordionHeader>
			<AccordionBody>
				{category.categories?.map((cat, i) => (
					<Category category={cat} key={i} goToArticle={goToArticle} />
				))}
				{category.articles?.map((article) => (
					<button
						type="button"
						onClick={(
							e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
						) => goToArticle(article, e)}
						className="help-desk__article-title"
						key={article.title}
					>
						{article.title}
					</button>
				))}
			</AccordionBody>
		</Accordion>
	);
};

export default Category;
