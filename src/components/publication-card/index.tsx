const renderPublications = () => {
  return publications.map((item, index) => (
    <div className="w-full border-b border-base-300 py-4" key={index}>
      <div className="flex items-center flex-wrap gap-2 mb-1">
        <h2 className="font-medium text-left leading-tight text-[1.1rem] opacity-80">
          {item.title}
        </h2>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-xs btn-outline rounded-full text-xs"
          >
            View
          </a>
        )}
      </div>

      {item.description && (
        <p className="text-base-content text-opacity-70 text-sm leading-tight mb-1">
          {item.description}
        </p>
      )}

      {(item.authors || item.journalName || item.year) && (
        <p className="text-base-content text-opacity-60 text-sm leading-tight mb-1">
          {item.authors}
          {(item.journalName || item.year) && (
            <>
              {item.authors ? ', ' : ''}
              {item.journalName && <span>{item.journalName}</span>}
              {item.journalName && item.year && <span>, </span>}
              {item.year && <span>{item.year}</span>}
            </>
          )}
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
