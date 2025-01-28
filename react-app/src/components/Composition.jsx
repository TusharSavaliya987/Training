// Title Component
function CardTitle({ title }) {
  return <h1>{title}</h1>;
}

// Description Component
function CardDescription({ description }) {
  return <p>{description}</p>;
}

// Card Component
export function CardComposition({ title, description }) {
  return (
    <div className="card">
      <CardTitle title={title} />
      <CardDescription description={description} />
    </div>
  );
}



// children prop
export function CardChildren({ children }) {
    return <div className="card">{children}</div>;
}
  
