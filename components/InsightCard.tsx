'use client';

import Image from 'next/image';
import Link from 'next/link';

interface InsightCardProps {
  category: string;
  title: string;
  description?: string;
  date: string;
  image: string;
  href: string;
  external?: boolean;
}

export function InsightCard({
  category,
  title,
  description,
  date,
  image,
  href,
  external = false,
}: InsightCardProps) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="insight-card group"
    >
      {/* Image Container */}
      <div className="insight-card__header">
        <Image
          src={image}
          alt=""
          fill
          className="insight-card__image"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        
        {/* Close button - appears on hover */}
        <div className="insight-card__close-btn">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L11 11M1 11L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="insight-card__content-container">
        <div className="insight-card__content">
          <span className="insight-card__category">{category}</span>
          <h3 className="insight-card__title">{title}</h3>
          {description && (
            <p className="insight-card__description">{description}</p>
          )}
          <span className="insight-card__date">{date}</span>
        </div>
      </div>

      {/* External Link Button */}
      <div className="insight-card__link-container">
        <span className="insight-card__link-button">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}
