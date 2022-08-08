import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Layout(props) {
  const element = <FontAwesomeIcon icon={faCircleUser} size="8x" />;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignText: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          backgroundColor: "whiteSmoke",
          borderRadius: "20px",
          margin: "10px",
          width: "15rem",
          height: "20rem",
          padding: "1rem",
        }}
      >
        <div>{element}</div>
        <h3> {props.name} </h3>

        <p style={{ fontStyle: "italic" }}> {props.role}</p>

        <p>{props.quote}</p>
      </div>
    </div>
  );
}
export default Layout;
