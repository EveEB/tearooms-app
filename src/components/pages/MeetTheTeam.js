import { Fragment } from "react";
import teamMembers from "../data/teamMembers";
import Layout from "../data/infoLayout";

function Team() {
  return (
    <Fragment>
      <div className="our-team">
        <h1>Meet the team</h1>
        <p>This is our team.</p>
      </div>

      {teamMembers.map((e) => {
        return <Layout name={e.name} role={e.role} quote={e.quote} />;
      })}
    </Fragment>
  );
}

export default Team;
