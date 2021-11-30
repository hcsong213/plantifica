/**
 * @param {string} param.title title of the the achievement
 * @param {boolean} props.earned whether the user earned this achievement
 * @returns a badge that is colored differently depending on if the user earned it
 */
export default function Badge(props) {
  return (
    <div
      className={
        "p-4 w-25 m-3 rounded text-center text-white " +
        (props.earned ? "bg-success" : "bg-secondary")
      }
    >
      {props.title}
    </div>
  );
}
