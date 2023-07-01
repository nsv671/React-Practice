import List from './List';

const ListOfConcept = (props) => {
  const concepts = props.concepts;

  return (
    <ul id="concepts">
      <List concept={concepts[0]} />
      <List concept={concepts[1]} />
      <List concept={concepts[2]} />
    </ul>
  );
};

export default ListOfConcept;
