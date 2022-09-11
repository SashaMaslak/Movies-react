const CastList = ({ cast }) => {
  return (
    <>
      <div>CastList</div>
      <ul>
        {cast.map(actor => {
          return <li key={actor.id}>{actor.name}</li>;
        })}
      </ul>
    </>
  );
};

export default CastList;
