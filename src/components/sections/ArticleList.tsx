import type { CmsAsset, CmsSection } from '../../types/cms'
import { formatDate } from '../../utils/richText'
import { slugifyAnchor } from '../../utils/cta'

interface Article {
  slug: string
  articleTitle: string
  publicationDate?: string
  externalArticleUrl?: string | null
  thumbnail?: CmsAsset | null
  thumbnailVideo?: CmsAsset | null
}

interface ArticleListProps {
  section: CmsSection
}

function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const href = article.externalArticleUrl ?? `/news/${article.slug}`

  const content = (
    <div className="article-list-item">
      <div className="article-list-item__background">
        {article.thumbnailVideo ? (
          <video
            className="article-list-item__thumbnail-video"
            src={article.thumbnailVideo.src}
            muted
            loop
            playsInline
            autoPlay
          />
        ) : article.thumbnail ? (
          <img
            alt=""
            className="article-list-item__thumbnail-image"
            src={article.thumbnail.src}
            loading="lazy"
          />
        ) : null}
      </div>
      <div className="article-list-item__content">
        {article.publicationDate && (
          <time className="article-list-item__publication-date" dateTime={article.publicationDate}>
            {formatDate(article.publicationDate)}
          </time>
        )}
        <h3 className="article-list-item__heading">{article.articleTitle}</h3>
      </div>
    </div>
  )

  if (featured) {
    return (
      <article className="article-list__featured-article">
        <a href={href}>{content}</a>
      </article>
    )
  }

  return (
    <a className="article-list__item" href={href}>
      {content}
    </a>
  )
}

export default function ArticleList({ section }: ArticleListProps) {
  const anchorId = slugifyAnchor(String(section.id ?? 'news'))
  const featured =
    (section.featuredArticleCollection as { items?: Article[] })?.items ?? []
  const articles = (section.articlePageCollection as { items?: Article[] })?.items ?? []

  return (
    <section className="section article-list" data-theme="dark">
      <div id={anchorId} className="section__anchor" />
      <div className="article-list__content">
        {featured.length > 0 && (
          <div className="article-list__featured-articles">
            <ul className="article-list__featured-articles-list">
              {featured.map((article) => (
                <li key={article.slug}>
                  <ArticleCard article={article} featured />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="article-list__main">
          <h1 className="article-list__heading">All News</h1>
          <div className="article-list__list-wrapper">
            <ul className="article-list__list">
              {articles.map((article) => (
                <li key={article.slug}>
                  <ArticleCard article={article} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
