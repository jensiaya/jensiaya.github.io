// Reusable component reference.
// The sample implementation is currently colocated in app/page.jsx
// to keep this starter project easy to understand.
export default function HeritageCard({ name, location, description, icon }) {
  return (
    <article className="card">
      <div className="card-icon" aria-hidden="true">{icon}</div>
      <p className="eyebrow">{location}</p>
      <h2>{name}</h2>
      <p>{description}</p>
    </article>
  );
}
