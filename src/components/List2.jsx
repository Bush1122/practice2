function Car(props) {
  return (
    <>
      <li>This is car of {props.brand}</li>
    </>
  );
}

export default function Garbage() {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <ul>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
    </>
  );
}
