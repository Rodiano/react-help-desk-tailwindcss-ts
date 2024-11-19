import { useState, useEffect } from "react";
import classNames from "classnames";
import ThumbRating from "./ThumbRating";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

interface ArticleProps {
	article: {
		title: string;
		body: string;
	};
	className?: string;
	onArticleRating: (title: string, isUp: boolean) => void;
	onClose: () => void;
}

const Article: React.FC<ArticleProps> = ({
	article,
	className,
	onArticleRating,
	onClose,
}) => {
	const [selected, setSelected] = useState<string | null>(null);
	let closeTask: number | undefined;

	useEffect(() => {
		return () => {
			if (closeTask) {
				window.clearTimeout(closeTask);
			}
		};
	}, [closeTask]);

	const handleRating = (rating: string) => {
		onArticleRating(article.title, rating === "up");
		setSelected(rating);
		closeTask = window.setTimeout(() => {
			onClose();
		}, 800);
	};

	return (
		<div className={classNames("help-desk__article", className)}>
			<h4>{article.title}</h4>
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<p dangerouslySetInnerHTML={{ __html: article.body }} />
			{typeof onArticleRating === "function" && (
				<div
					className={classNames("help-desk__thumb-ratings", {
						selected: !!selected,
					})}
				>
					{selected && <p className="help-desk__thanks">Thanks!</p>}
					<ThumbRating type="up" onClick={() => handleRating("up")} />
					<ThumbRating type="down" onClick={() => handleRating("down")} />
				</div>
			)}
		</div>
	);
};

export default Article;
