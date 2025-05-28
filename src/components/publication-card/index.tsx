import { Fragment } from 'react';
import { SanitizedPublication } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const PublicationCard = ({
  publications,
  loading,
}: {
  publications: SanitizedPublication[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    return publications.map((_, index) => (
      <div className="w-full border-b border-base-300 py-4" key={index}>
        {skeleton({ widthCls: 'w-48', heightCls: 'h-6', className: 'mb-2' })}
        {skeleton({ widthCls: 'w-full', heightCls: 'h-4', className: 'mb-1' })}
        {skeleton({ widthCls: 'w-1/2', heightCls: 'h-4', className: 'mb-1' })}
      </div>
    ));
  };

const renderPublications = () => {
  return publications.map((item, index) => (
    <div className="w-full border-b border-base-300 py-4" key={index}>
      <div className="flex items-center flex-wrap gap-2 mb-1">
        <h2 className="font-medium text-left leading-tight text-[1.1rem] opacity-80">
          {item.title}
        </h2>
        {item.link && (item.journalName || item.conferenceName) && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-xs btn-outline rounded-full text-xs"
          >
            {item.journalName || item.conferenceName}
          </a>
        )}
      </div>
      {item.authors && (
        <p className="text-base-content text-opacity-80 text-sm leading-tight mb-1">
          {item.authors}
        </p>
      )}
      {(item.year || item.conferenceName || item.journalName) && (
        <p className="text-base-content text-opacity-60 text-sm leading-tight mb-1">
          {item.year} {item.conferenceName || item.journalName ? `— ${item.conferenceName || item.journalName}` : ''}
        </p>
      )}
      {item.description && (
        <p className="text-base-content text-opacity-50 text-sm leading-tight mb-1">
          {item.description}
        </p>
      )}
      {item.codeUrl && (
        <a
          href={item.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-xs btn-primary rounded-full mt-1"
        >
          Code
        </a>
      )}
    </div>
  ));
};
