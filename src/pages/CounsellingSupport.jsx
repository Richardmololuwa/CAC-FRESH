import { Link } from "react-router-dom";

export default function CounsellingSupport() {
  return (
    <section className="counselling-section" id="counselling">
      <div className="container counselling-container">

        <div className="counselling-content">
          <span className="eyebrow">
            YOU ARE NOT ALONE
          </span>

          <h2>
            Are You Going Through a Difficult Season?
          </h2>

          <p>
            Are you going through tough spiritual battles,
            health challenges, delays, or marital troubles?
            You can find help.
          </p>

          <p>
            You have tried different approaches, but the
            battle persists, and you are getting tired and
            do not know what to do. <strong>Speak out!
            Silence is dangerous!</strong>
          </p>

          <div className="counselling-highlight">
            <h3>We Are Here to Help</h3>

            <p>
              For free counselling, prophetic guidance,
              and prayers, speak with a Minister of God
              directly, one-on-one, at no cost.
            </p>
          </div>

          <div className="counselling-assurance">
            <p>
              <strong>Your privacy is respected.</strong>
            </p>

            <p>
              You do not have to be a church member
              before you are attended to.
            </p>

            <h3>God will surely help you.</h3>
          </div>

          <Link
            to="/contact"
            className="btn btn--gold counselling-btn"
          >
            Speak With a Minister
          </Link>
        </div>

        <div className="counselling-visual">
          <div className="counselling-visual__inner">
            <span className="counselling-cross">✝</span>

            <h3>
              You don't have to face
              it alone.
            </h3>

            <p>
              There is hope, there is help,
              and there is someone ready
              to listen.
            </p>

            <span className="counselling-verse">
              "God is our refuge and strength,
              a very present help in trouble."
            </span>

            <small>Psalm 46:1</small>
          </div>
        </div>

      </div>
    </section>
  );
}