import { Fragment } from 'react';
import { SanitizedAbout } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const AboutCard = ({
  about,
  loading,
}: {
  about: SanitizedAbout;
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    return (
      <div className="w-full py-4">
        {skeleton({ widthCls: 'w-48', heightCls: 'h-6', className: 'mb-2' })}
        {skeleton({ widthCls: 'w-full', heightCls: 'h-4', className: 'mb-1' })}
        {skeleton({ widthCls: 'w-1/2', heightCls: 'h-4', className: 'mb-1' })}
      </div>
    );
  };

  const renderAbout = () => {
    return (
      <div className="w-full py-4">
        {about.descriptionHtml ? (
          <p
            className="text-base-content text-opacity-70 text-sm leading-relaxed mb-3"
            dangerouslySetInnerHTML={{ __html: about.descriptionHtml }}
          />
        ) : (
          about.description && (
            <p className="text-base-content text-opacity-70 text-sm leading-relaxed whitespace-pre-line mb-3">
              {about.description}
            </p>
          )
        )}
        {about.bullets.length !== 0 && (
          <ul className="list-disc pl-5 text-sm text-base-content text-opacity-70 space-y-1">
            {about.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    );
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
                      skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {about.title || 'About me'}
                      </span>
                    )}
                  </h5>
                </div>
                <div className="w-full">
                  {loading ? renderSkeleton() : renderAbout()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutCard;
