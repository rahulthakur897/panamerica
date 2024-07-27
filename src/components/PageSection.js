export function PageSection(props) {
  return (
    <section id={props.id} className={`page-section ${props.bgColor}`}>
      {props.halfBg && <div class="half-grad-bg"></div>}
      <h1>{props.heading}</h1>
      <div className="page-section-container">{props.children}</div>
    </section>
  );
}
