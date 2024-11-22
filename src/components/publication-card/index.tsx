
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
    const array = [];
    for (let index = 0; index < publications.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100 w-full" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-start flex-col">
              <div className="w-full">
                <div className="mb-4">
                  {skeleton({ widthCls: 'w-48', heightCls: 'h-8', className: 'mb-2' })}
                </div>
                <div className="mb-2">
                  {skeleton({ widthCls: 'w-full', heightCls: 'h-6', className: 'mb-2' })}
                </div>
                <div className="mb-2">
                  {skeleton({ widthCls: 'w-32', heightCls: 'h-4', className: 'mb-2' })}
                </div>
                <div>
                  {skeleton({ widthCls: 'w-48', heightCls: 'h-4', className: 'mb-2' })}
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderPublications = () => {
    return publications.map((item, index) => (
      <div
        className="card shadow-lg compact bg-base-100 w-full"
        key={index}
      >
        <div className="p-8 h-full w-full">
          <div className="flex items-start flex-col">
            <div className="w-full">
              <div className="mb-3">
                <h2 className="font-medium opacity-70 mb-2 text-left leading-tight text-[1.1rem]">
                  {item.title}
                </h2>
              </div>
              {item.description && (
                <p className="mb-3 text-base-content text-opacity-70 text-sm text-left leading-tight">
                  {item.description}
                </p>
              )}
              {item.authors && (
                <p className="mb-3 text-base-content text-opacity-60 text-sm text-left leading-tight">
                  {item.authors}
                </p>
              )}
              {(item.journalName || item.conferenceName) && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm compact bg-base-200 text-base-content text-opacity-70 hover:bg-base-300 mt-2"
                >
                  {item.journalName || item.conferenceName}
                </a>
              )}
              {item.codeUrl && (
                <a
                  href={item.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm rounded-full mt-2"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-wrap gap-6">
          <div className="w-full">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
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
                <div className="w-full flex flex-wrap gap-6">
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
