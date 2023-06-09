import packagejson from "../package.json";

const Footer: React.FC = ({}) => {
  return (
    <footer className="footer footer-center h-[48px] p-2 bg-base-300 text-base-content">
      <div>
        <p>
          Made with 💜{" "}
          <a
            className="link link-primary link-hover"
            href="https://atridad.dev"
            rel="noreferrer"
            target="_blank"
          >
            Atridad Lahiji
          </a>{" "}
          -{" "}
          <a
            className="link link-primary link-hover"
            href={`https://github.com/atridadl/sprintpadawan/releases/tag/${packagejson.version}`}
            rel="noreferrer"
            target="_blank"
          >
            v{packagejson.version}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
