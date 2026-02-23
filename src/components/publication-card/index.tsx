import { Fragment } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdPictureAsPdf } from 'react-icons/md';
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
      </div>
    ));
  };

  const renderPublications = () => {
    return publications.map((item, index) => (
      <div className="w-full border-b border-base-300 py-4" key={index}>
        <div className="mb-1">
          <h2 className="font-medium text-left leading-tight text-[1.1rem] opacity-80">
            {item.title}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex align-baseline ml-1"
                aria-label="Open publication link"
                title="Open publication link"
              >
                <MdPictureAsPdf className="text-base opacity-70" />
              </a>
            )}
          </h2>
        </div>

        {item.authors && (
          <p className="text-base-content text-opacity-80 text-sm leading-tight mb-1">
            {item.authors}
          </p>
        )}

        {(item.year || item.conferenceName || item.journalName) && (
          <p className="text-base-content text-opacity-60 text-sm leading-tight mb-1">
            {item.year}
            {(item.conferenceName || item.journalName) && (
              <> — {item.conferenceName || item.journalName}</>
            )}
          </p>
        )}

        {item.codeUrl && (
          <a
            href={item.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm opacity-70 hover:opacity-100 mt-1"
            aria-label="Open GitHub repository"
            title="Open GitHub repository"
          >
            <FaGithub className="text-base" />
            <span>GitHub</span>
          </a>
        )}
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-wrap gap-6">
          <div className="w-full">
           <div className="card compact bg-base-100 shadow">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        Publications
                      </span>
                    )}
                  </h5>
                </div>
                <div className="w-full">
                  {loading ? renderSkeleton() : renderPublications()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PublicationCard;
