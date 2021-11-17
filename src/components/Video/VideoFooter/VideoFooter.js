import "./VideoFooter.css";
import { Link } from "react-router-dom";

export default function VideoFooter({ name, text, hashtags }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Link to={{ pathname: `user/${name}` }}>
          <h2>@{name}</h2>
        </Link>
        <p>{text}</p>
        {hashtags.map((hash) => {
          return <span key={hash.id}>#{hash.name}</span>;
        })}
      </div>
    </div>
  );
}
