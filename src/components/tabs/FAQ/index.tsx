import { useState, useEffect, type ChangeEvent, type MouseEvent } from "react";
import classNames from "classnames";

import Article from "./Article";
import Category, { type ArticleProps } from "./Category.tsx";
import slugify from "slugify";
import { Transition } from "@tailwindui/react";
import { useHelpDeskContext } from "../../../App.tsx";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

interface FAQProps {
	json: {
		articles?: Array<{ title: string; body: string }>;
		categories?: Array<any>;
	};
	onArticleRating: (rating: number) => void;
	search?: boolean;
	searchLabel?: string;
	noResultsText?: string;
}

const FAQ: React.FC<FAQProps> = ({
	json,
	onArticleRating,
	search = true,
	searchLabel = "Search for articles",
	noResultsText = "No FAQ articles found 🔍😱",
}) => {
	const { activeTab, onSelectTab } = useHelpDeskContext();

	const [searchValue, setSearchValue] = useState("");
	const [showArticle, setShowArticle] = useState(false);
	const [singleArticle, setSingleArticle] = useState<{
		title: string;
		body: string;
	} | null>(null);

	useEffect(() => {
		if (activeTab.indexOf(".") === -1 && showArticle) {
			setShowArticle(false);
		}
	}, [activeTab, showArticle]);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		setShowArticle(false);
	};

	const goToArticle = (
		article: { title: string; body: string },
		e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
	) => {
		e.preventDefault();
		const title = slugify(article.title).toLowerCase();
		onSelectTab(`${activeTab}.${title}`);
		setShowArticle(true);
		setSingleArticle(article);
	};

	const closeArticle = () => {
		let faqTab = activeTab;
		faqTab = faqTab.slice(0, faqTab.indexOf("."));
		onSelectTab(faqTab);
	};

	const handleArticleExit = () => {
		setSingleArticle(null);
	};

	let articles = json.articles || [];
	const categories = json.categories || [];

	if (search) {
		const searchFilter = searchValue.toLowerCase();
		if (searchFilter.length > 0) {
			let allArticles: Array<{ title: string; body: string }> = [];
			const findArticles = (category: {
				articles?: Array<ArticleProps>;
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				categories?: Array<any>;
			}) => {
				if (category.articles) {
					allArticles = allArticles.concat(category.articles);
				}
				if (category.categories) {
					category.categories.forEach(findArticles);
				}
			};
			categories.forEach(findArticles);

			articles = allArticles.filter(
				(a) =>
					a.title.toLowerCase().indexOf(searchFilter) > -1 ||
					a.body.toLowerCase().indexOf(searchFilter) > -1,
			);
		}
	}

	return (
		<div className="help-desk__faq">
			{search && (
				<div className="help-desk__search">
					<label htmlFor="help-desk__faq-search" className="help-desk__label">
						{searchLabel}
					</label>
					<input
						type="text"
						id="help-desk__faq-search"
						onChange={handleSearch}
						className="help-desk__input"
						value={searchValue}
						placeholder={searchLabel}
						aria-describedby="help-desk__faq-search"
					/>
				</div>
			)}
			<div
				className={classNames("help-desk__faq-content", {
					scrollable: !showArticle,
				})}
			>
				{searchValue.length === 0 && categories ? (
					categories.map((category, i) => (
						<Category
							category={category}
							goToArticle={goToArticle}
							key={category.id || `category-${i}`}
						/>
					))
				) : articles.length > 0 ? (
					articles.map((article, i) => (
						<button type="button" className="help-desk__article-title" key={i}>
							{article.title}
						</button>
					))
				) : (
					<p className="help-desk__empty-state">{noResultsText}</p>
				)}
				<Transition show={showArticle}>
					<Transition.Child
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{(ref) => (
							<div ref={ref}>
								{singleArticle && (
									<Article
										article={singleArticle}
										onClose={closeArticle}
										onArticleRating={(_title: string, isUp: boolean) => {
											handleArticleExit;
											onArticleRating(isUp ? 1 : -1);
										}}
									/>
								)}
							</div>
						)}
					</Transition.Child>
				</Transition>
			</div>
		</div>
	);
};

export default FAQ;
